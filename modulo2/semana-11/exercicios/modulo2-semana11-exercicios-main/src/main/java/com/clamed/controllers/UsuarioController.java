package com.clamed.controllers;

import com.clamed.dto.GrupoInput;
import com.clamed.dto.GrupoOutput;
import com.clamed.dto.UsuarioInput;
import com.clamed.dto.UsuarioOutput;
import com.clamed.model.Grupo;
import com.clamed.model.Usuario;
import com.clamed.service.CadastroGrupoService;
import com.clamed.service.CadastroUsuarioService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/usuarios")

public class UsuarioController {

    @Autowired
    private CadastroUsuarioService cadastroUsuarioService;

    public ResponseEntity<UsuarioOutput> cadastrar(@RequestBody UsuarioInput usuarioInput){
        // cria um objeto do tipo Entity
        Usuario usuario = new Usuario();

        // Faz a conversão do DTO de entrada para Entity
        BeanUtils.copyProperties(usuarioInput, usuario);

        Usuario u = cadastroUsuarioService.salvar(usuario);

        // Cria um objeto DTO de saída
        UsuarioOutput usu = new UsuarioOutput();

        //Faz a conversão da Entity para DTO de saída
        BeanUtils.copyProperties(u, usu);

        // Montamos a resposta da requisição
        return new ResponseEntity<UsuarioOutput>(usu, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<UsuarioOutput> atualizar(@RequestBody UsuarioInput usuarioInput){
        // cria um objeto Entity
        Usuario usuario = new Usuario();

        // Faz a conversão do DTO de entrada para Entity
        BeanUtils.copyProperties(usuarioInput, usuario);
        Usuario u = cadastroUsuarioService.salvar(usuario);

        // Cria um objeto DTO de saída
        UsuarioOutput usu = new UsuarioOutput();

        //Faz a conversão de Entity para DTO de saída
        BeanUtils.copyProperties(u, usu);

        // Montamos a resposta da requisição
        return new ResponseEntity<UsuarioOutput>(usu, HttpStatus.OK);
    }
    @DeleteMapping
    @ResponseBody
    public ResponseEntity<String> delete(@RequestParam Long idUsuario){
        cadastroUsuarioService.deleteById(idUsuario);
        return new ResponseEntity<String>("Contato ID: "+idUsuario+" deletado com sucesso", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getUsuarioById(@RequestParam(name = "id") Long id){
        List<Usuario> usuario = (List<Usuario>) cadastroUsuarioService.getUsuarioById(id);
        return new ResponseEntity<List<Usuario>>(usuario, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getUsuario() {
        List<Usuario> usuario = (List<Usuario>) cadastroUsuarioService.getUsuarios();
        return new ResponseEntity<List<Usuario>>(usuario, HttpStatus.OK);
    }
}



