package org.example.controllers;

import org.example.model.Usuario;
import org.example.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario){


        return new ResponseEntity<Usuario>(usuarioService.salvar(usuario), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Usuario> atualizar(@RequestBody Usuario usuario){
        return new ResponseEntity<Usuario>(usuarioService.salvar(usuario), HttpStatus.OK);
    }
}
