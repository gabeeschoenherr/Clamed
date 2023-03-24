package com.clamed.model;

import javax.persistence.*;

@Entity
@Table(name ="usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String login;

    private String senha;

    private String nome;
}
