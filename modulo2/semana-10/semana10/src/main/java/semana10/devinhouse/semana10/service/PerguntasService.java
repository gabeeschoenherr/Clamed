package semana10.devinhouse.semana10.service;

import org.springframework.stereotype.Service;
import semana10.devinhouse.semana10.entity.AssuntoEntity;
import semana10.devinhouse.semana10.entity.PerguntasEntity;
import semana10.devinhouse.semana10.repository.AssuntoRepository;
import semana10.devinhouse.semana10.repository.PerguntasRepository;

import java.util.Collections;
import java.util.List;

@Service
public class PerguntasService {

    private PerguntasRepository repoPerguntas;

    public List<PerguntasEntity> getPerguntas(){
        return repoPerguntas.findAll();
    }
    public List<PerguntasEntity> getPerguntasId(Long id){
        return repoPerguntas.findAllById(Collections.singleton(id));
    }
    public void insertPerguntas(PerguntasEntity perguntas){
        repoPerguntas.save(perguntas);
    }
    public void deletePerguntas(Long id){
        this.repoPerguntas.deleteById(id);
    }
}
