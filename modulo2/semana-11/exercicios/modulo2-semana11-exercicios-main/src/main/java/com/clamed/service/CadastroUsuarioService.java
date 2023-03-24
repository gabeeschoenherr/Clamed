package com.clamed.service;

import com.clamed.model.Grupo;
import com.clamed.model.Usuario;
import com.clamed.repository.GrupoRepository;
import com.clamed.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CadastroUsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public Usuario getUsuarioById(Long idUsuario){
        return  usuarioRepository.findById(idUsuario).get();
    }

    public void deleteById(Long idUsuario){
        usuarioRepository.deleteById(idUsuario);
    }

    public List<Usuario> getUsuarios(){
        return usuarioRepository.findAll();
    }

}
