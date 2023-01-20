package semana9.devinhouse.semana9.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import semana9.devinhouse.semana9.entity.PessoaEntity;
import semana9.devinhouse.semana9.repository.PessoaRepository;
import semana9.devinhouse.semana9.service.PessoaService;

import java.util.List;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    private PessoaRepository repo;
    private PessoaService service;

    public PessoaController(PessoaService service){
        this.service=service;
    }

    @PostMapping
    public void save(@RequestBody PessoaEntity pessoa){
        service.insert(pessoa);

    }
    @GetMapping
    public List<PessoaEntity> getPessoas(){
        return service.getPessoas();

    }

    @GetMapping("/{id}")
    public List<PessoaEntity> getPessoaById(@PathVariable("id") Long id){
        return service.getPessoaById(id);
    }

    @GetMapping("/status")
    public List<PessoaEntity> getPessoaByStatusTrue(){
   return service.getPessoaByStatus();
    }

    @PutMapping
    public void updatePessoa(@RequestBody PessoaEntity pessoa){
        service.insert(pessoa);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePessoaPorId(@PathVariable("id") Long id){
        service.deleteId(id);

    }
    @GetMapping("/filter")
    public List<PessoaEntity> buscaPorFiltro(@RequestParam("q") String filter){
        return service.filtraPessoas(filter);
    }


}
