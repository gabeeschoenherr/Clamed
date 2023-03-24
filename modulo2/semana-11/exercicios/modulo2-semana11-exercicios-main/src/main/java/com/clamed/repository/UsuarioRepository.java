package com.clamed.repository;

import com.clamed.model.Grupo;
import com.clamed.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


}
