package semana10.devinhouse.semana10.service;

import org.springframework.stereotype.Service;
import semana10.devinhouse.semana10.entity.AssuntoEntity;
import semana10.devinhouse.semana10.repository.AssuntoRepository;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class AssuntoService {

    private AssuntoRepository repoAssunto;

    public List<AssuntoEntity> getAssunto(){
        return repoAssunto.findAll();
    }
    public List<AssuntoEntity> getAssuntoId(Long id){
        return repoAssunto.findAllById(Collections.singleton(id));
    }
    public void insertAssunto(AssuntoEntity assunto){
        repoAssunto.save(assunto);
    }

    public void deleteAssunto(Long id){
        this.repoAssunto.deleteById(id);
    }

}
