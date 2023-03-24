package com.clamed.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter

@Entity
@Table(name="usuario")
public class Usuario implements Serializable {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 60, nullable = false)
    private String nome;


    @Column(length = 120, nullable = false)
    private String email;

    @Column(length = 20)
    private String telefone;


    @Column(length = 50, nullable = false)
    private String login;

    @Column(length = 20, nullable = false)
    private String senha;

    @Column(nullable = false)
    private Long status;

    @OneToOne
    @JoinColumn(name = "idGrupo", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_grupo"))
    private Grupo grupo;




}
