package semana10.devinhouse.semana10.controller;

import org.springframework.web.bind.annotation.*;
import semana10.devinhouse.semana10.entity.PerguntasEntity;
import semana10.devinhouse.semana10.entity.RespostaEntity;
import semana10.devinhouse.semana10.service.PerguntasService;
import semana10.devinhouse.semana10.service.RespostaService;

import java.util.List;

@RestController
@RequestMapping("/resposta")
public class RespostaController {
    private RespostaService serviceResposta;

    public RespostaController(RespostaService serviceResposta){
        this.serviceResposta=serviceResposta;
    }
    @GetMapping
    public List<RespostaEntity> getResposta(){
        return serviceResposta.getPerguntas();
    }
    @GetMapping("/{id}")
    public List<RespostaEntity> getRespostaId(@PathVariable("id") Long id){
        return serviceResposta.getPerguntasId(id);
    }
    @PostMapping
    public void insertResposta(@RequestBody RespostaEntity resposta){
        serviceResposta.insertResposta(resposta);
    }
    @PutMapping
    public void updateRespostas(@RequestBody RespostaEntity resposta){
        serviceResposta.insertResposta(resposta);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteResposta(@PathVariable("id") Long id){
        serviceResposta.deleteResposta(id);
    }
}
