package semana10.devinhouse.semana10.service;

import org.springframework.stereotype.Service;
import semana10.devinhouse.semana10.entity.PerguntasEntity;
import semana10.devinhouse.semana10.entity.RespostaEntity;
import semana10.devinhouse.semana10.repository.PerguntasRepository;
import semana10.devinhouse.semana10.repository.RespostaRepository;

import java.util.Collections;
import java.util.List;

@Service
public class RespostaService {

    private RespostaRepository repoResposta;

    public List<RespostaEntity> getPerguntas(){
        return repoResposta.findAll();
    }
    public List<RespostaEntity> getPerguntasId(Long id){
        return repoResposta.findAllById(Collections.singleton(id));
    }
    public void insertResposta(RespostaEntity resposta){
        repoResposta.save(resposta);
    }

    public void deleteResposta(Long id){
        this.repoResposta.deleteById(id);
    }
}
