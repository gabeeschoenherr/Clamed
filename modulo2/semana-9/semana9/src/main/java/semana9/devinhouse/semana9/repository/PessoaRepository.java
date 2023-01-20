package semana9.devinhouse.semana9.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import semana9.devinhouse.semana9.entity.PessoaEntity;

import java.util.List;

@Repository
public interface PessoaRepository extends JpaRepository <PessoaEntity, Long> {

    List<PessoaEntity> findByStatus(Boolean status);

    @Query(value = "select * from pessoas\n"+
    "where name like %:filter%\n"+
    "or email like %:filter%", nativeQuery = true)
    List <PessoaEntity> buscaNomeEmail(String filter);
}
