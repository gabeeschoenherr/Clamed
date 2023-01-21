package semana10.devinhouse.semana10.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import semana10.devinhouse.semana10.entity.PerguntasEntity;

@Repository
public interface PerguntasRepository extends JpaRepository <PerguntasEntity, Long> {
}
