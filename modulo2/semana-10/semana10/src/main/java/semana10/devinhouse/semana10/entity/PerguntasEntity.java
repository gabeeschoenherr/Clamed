package semana10.devinhouse.semana10.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

@Entity
@Table(name="perguntas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PerguntasEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="titulo")
    @NotNull
    private String titulo;

    @Column(name="texto")
    @NotNull
    private String texto;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_assunto")
    private AssuntoEntity assuntoEntity;
}
