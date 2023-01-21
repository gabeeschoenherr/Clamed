package semana10.devinhouse.semana10.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import semana10.devinhouse.semana10.entity.AssuntoEntity;

@Repository
public interface AssuntoRepository extends JpaRepository <AssuntoEntity, Long> {
}
