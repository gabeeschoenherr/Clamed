package semana8.devinhouse.exe.controller;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import semana8.devinhouse.exe.modal.PessoaModel;
import semana8.devinhouse.exe.service.PessoaService;

import java.util.List;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {
    private PessoaService service;

    public PessoaController(PessoaService service){
        this.service=service;
    }




    @GetMapping("/todaspessoas")
    public List<PessoaModel> getPessoas(){
        return service.getPessoas();
    }


    @GetMapping("/{id}")
    public PessoaModel getPessoaById(@PathVariable("id") Long id){
        return service.getPessoa(id);

    }

    @PostMapping()
    public void postPesoa(@RequestBody PessoaModel pessoaModel){
        service.postPessoa(pessoaModel);

    }
    @PatchMapping("/edit")
    public void updatePessoa(@RequestBody PessoaModel pessoaModel){
        service.updatePessoa(pessoaModel);

    }
    @DeleteMapping("/delete/{id}")
    public void deletePessoa(@PathVariable("id") Long id){
        service.deletePessoa(id);

    }
}
