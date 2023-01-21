package semana10.devinhouse.semana10.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import semana10.devinhouse.semana10.entity.RespostaEntity;

@Repository
public interface RespostaRepository extends JpaRepository <RespostaEntity, Long> {
}
