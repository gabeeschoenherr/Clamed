package org.example.service;

import org.example.model.Usuario;
import org.example.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UsuarioService implements UserDetailsService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario){

        usuario.setSenha(new BCryptPasswordEncoder().encode(usuario.getSenha()));
        return usuarioRepository.save(usuario);
    }
    @Transactional
    public void delete(Long idUsuario){
        usuarioRepository.deleteById(idUsuario);
    }

    public Usuario getUserById(Long idUsuario){
        Usuario usuario = usuarioRepository.findById(idUsuario).get();
        return usuario;
    }

    public List<Usuario> getUsersByName(String nome){
        return usuarioRepository.findUsersyName(nome);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findUserByLogin(username);
        if(usuario==null){
            throw new UsernameNotFoundException("Usuário não encontrado");
        }
        return new User(usuario.getLogin(), usuario.getPassword(), usuario.getAuthorities());
    }

    @org.springframework.transaction.annotation.Transactional(readOnly = true)
    public List<Usuario> getUsers(){
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios;
    }
}
