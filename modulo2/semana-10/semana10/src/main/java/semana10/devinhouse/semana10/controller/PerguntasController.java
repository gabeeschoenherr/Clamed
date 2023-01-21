package semana10.devinhouse.semana10.controller;

import org.springframework.web.bind.annotation.*;
import semana10.devinhouse.semana10.entity.AssuntoEntity;
import semana10.devinhouse.semana10.entity.PerguntasEntity;
import semana10.devinhouse.semana10.service.AssuntoService;
import semana10.devinhouse.semana10.service.PerguntasService;

import java.util.List;

@RestController
@RequestMapping("/perguntas")
public class PerguntasController {
    private PerguntasService servicePergunta;

    public PerguntasController(PerguntasService servicePergunta){
        this.servicePergunta=servicePergunta;
    }
    @GetMapping
    public List<PerguntasEntity> getPerguntas(){
        return servicePergunta.getPerguntas();
    }
    @GetMapping("/{id}")
    public List<PerguntasEntity> getPerguntasId(@PathVariable("id") Long id){
        return servicePergunta.getPerguntasId(id);
}
@PostMapping
    public void insertPerguntas(@RequestBody PerguntasEntity perguntas){
        servicePergunta.insertPerguntas(perguntas);
}
@PutMapping
    public void updatePerguntas(@RequestBody PerguntasEntity perguntas){
        servicePergunta.insertPerguntas(perguntas);
}
@DeleteMapping("/delete/{id}")
    public void deletePerguntas(@PathVariable("id") Long id){
        servicePergunta.deletePerguntas(id);
}

    }
