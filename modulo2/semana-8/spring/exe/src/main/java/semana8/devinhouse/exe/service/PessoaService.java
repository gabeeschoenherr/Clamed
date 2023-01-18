package semana8.devinhouse.exe.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import semana8.devinhouse.exe.modal.PessoaModel;

import java.util.ArrayList;
import java.util.List;

@Service
public class PessoaService {

    private static List<PessoaModel> pessoas = new ArrayList<PessoaModel>();

    public PessoaService() {
        PessoaModel pessoa = new PessoaModel(1L, "Luna");
        PessoaModel pessoa2 = new PessoaModel(2L, "Magali");
        PessoaModel pessoa3 = new PessoaModel(3L, "Mônica");
        pessoas.add(pessoa);
        pessoas.add(pessoa2);
        pessoas.add(pessoa3);
    }

    public List<PessoaModel> getPessoas() {
        if (pessoas.isEmpty()) {
            return (List<PessoaModel>) new ResponseEntity<PessoaModel>(HttpStatus.NO_CONTENT);
        }
        return pessoas;
    }

    public PessoaModel getPessoa(Long id) {
        if (this.pessoas.isEmpty()) {
            return new ResponseEntity<PessoaModel>(HttpStatus.NO_CONTENT).getBody();
        }
        for (PessoaModel p : this.pessoas) {
            if (p.getId().equals(id)) {
                return p;
            }
        }
        return new ResponseEntity<PessoaModel>(HttpStatus.NO_CONTENT).getBody();

    }

    public void postPessoa(PessoaModel pessoaModel) {
        pessoas.add(pessoaModel);
    }

    public void updatePessoa(PessoaModel pessoaModel) {
        for (PessoaModel p : this.pessoas) {
            if (p.getId().equals(pessoaModel.getId())) {
                p.setNome(pessoaModel.getNome());
            }
        }
    }

    public void deletePessoa(Long id){
        pessoas.removeIf(p -> p.getId().equals(id));
    }
}

