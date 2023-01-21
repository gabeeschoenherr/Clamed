package semana10.devinhouse.semana10.controller;

import org.springframework.web.bind.annotation.*;
import semana10.devinhouse.semana10.entity.AssuntoEntity;
import semana10.devinhouse.semana10.service.AssuntoService;

import java.util.List;

@RestController
@RequestMapping("/assunto")
public class AssuntoController {
    private AssuntoService serviceAssunto;

    public AssuntoController(AssuntoService serviceAssunto){
        this.serviceAssunto=serviceAssunto;
    }
    @GetMapping
    public List<AssuntoEntity> getAssunto(){
        return serviceAssunto.getAssunto();
    }
    @GetMapping("/{id}")
    public List<AssuntoEntity> getAssuntoId(@PathVariable("id") Long id){
        return serviceAssunto.getAssuntoId(id);
    }
    @PostMapping
    public void insertAssunto(@RequestBody AssuntoEntity assunto){
        serviceAssunto.insertAssunto(assunto);
    }
    @PutMapping
    public void updateAssunto(@RequestBody AssuntoEntity assunto){
        serviceAssunto.insertAssunto(assunto);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteAssunto(@PathVariable("id") Long id){
        serviceAssunto.deleteAssunto(id);
    }

}
