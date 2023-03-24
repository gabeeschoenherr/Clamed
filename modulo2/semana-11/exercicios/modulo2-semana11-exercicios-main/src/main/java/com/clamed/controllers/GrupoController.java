package com.clamed.controllers;

import com.clamed.dto.GrupoInput;
import com.clamed.dto.GrupoOutput;
import com.clamed.model.Grupo;
import com.clamed.service.CadastroGrupoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(value = "/grupos")
    public class GrupoController {

        @Autowired
        private CadastroGrupoService cadastroGrupoService;



    public ResponseEntity<GrupoOutput> cadastrar(@RequestBody GrupoInput grupoInput){
        // cria um objeto do tipo Entity
        Grupo grupo = new Grupo();

        // Faz a conversão do DTO de entrada para Entity
        BeanUtils.copyProperties(grupoInput, grupo);

        Grupo g = cadastroGrupoService.salvar(grupo);

        // Cria um objeto DTO de saída
        GrupoOutput gru = new GrupoOutput();

        //Faz a conversão da Entity para DTO de saída
        BeanUtils.copyProperties(g, gru);

        // Montamos a resposta da requisição
        return new ResponseEntity<GrupoOutput>(gru, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<GrupoOutput> atualizar(@RequestBody GrupoInput grupoInput){
        // cria um objeto Entity
        Grupo grupo = new Grupo();

        // Faz a conversão do DTO de entrada para Entity
        BeanUtils.copyProperties(grupoInput, grupo);
        Grupo g = cadastroGrupoService.salvar(grupo);

        // Cria um objeto DTO de saída
        GrupoOutput gru = new GrupoOutput();

        //Faz a conversão de Entity para DTO de saída
        BeanUtils.copyProperties(g, gru);

        // Montamos a resposta da requisição
        return new ResponseEntity<GrupoOutput>(gru, HttpStatus.OK);
    }
    @DeleteMapping
    @ResponseBody
    public ResponseEntity<String> delete(@RequestParam Long idGrupo){
        cadastroGrupoService.deleteById(idGrupo);
        return new ResponseEntity<String>("Contato ID: "+idGrupo+" deletado com sucesso", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Grupo>> getGrupoById(@RequestParam(name = "id") Long id){
        List<Grupo> grupo = (List<Grupo>) cadastroGrupoService.getGrupoById(id);
        return new ResponseEntity<List<Grupo>>(grupo, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Grupo>> getGrupo() {
        List<Grupo> grupo = (List<Grupo>) cadastroGrupoService.getGrupos();
        return new ResponseEntity<List<Grupo>>(grupo, HttpStatus.OK);
    }
    }




