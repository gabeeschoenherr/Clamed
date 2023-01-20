package semana9.devinhouse.semana9.service;

import org.springframework.stereotype.Service;
import semana9.devinhouse.semana9.entity.PessoaEntity;
import semana9.devinhouse.semana9.repository.PessoaRepository;

import java.util.Collections;
import java.util.List;

@Service
public class PessoaService {

    private PessoaRepository repository;

    public PessoaService(PessoaRepository repository){
        this.repository = repository;
    }

    public void insert(PessoaEntity pessoa){
        repository.save(pessoa);


    }

    public List<PessoaEntity> getPessoas(){
        return repository.findAll();
    }

    public List<PessoaEntity> getPessoaById(Long id){
        return repository.findAllById(Collections.singleton(id));
    }
public List<PessoaEntity> getPessoaByStatus(){
        return this.repository.findByStatus(true);
}

public void deleteId(Long id){
        this.repository.deleteById(id);
}

public List<PessoaEntity> filtraPessoas(String filter){
        return this.repository.buscaNomeEmail(filter);
}
}
