package com.cs.demo.Repo;

import java.util.List;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cs.demo.DTO.passbookDTO;
import com.cs.demo.DTO.passbookcontDTO;
import com.cs.demo.Entity.Passbook;

public interface passbookrepo extends JpaRepository<Passbook, Long>{
	
	@Query(value = "select name, passbook.rdamt, passbook.rddate, lday, fmt,pid from rduser inner join passbook on rduser.rid = passbook.rid", nativeQuery = true)
	List<passbookDTO> getpassbookdata();
	
	
	
	@Query(value = "SELECT name, passbook.rdamt, passbook.rddate, lday, fmt, pid " +
            "FROM rduser " +
            "INNER JOIN passbook ON rduser.rid = passbook.rid " +
            "WHERE passbook.rid = :rid",
    nativeQuery = true)
List<passbookDTO> getPassbookByPid(@Param("rid") Long rid);
	
	
@Query(value = "select count(*) from passbook "+
        "WHERE passbook.rid = :rid",
nativeQuery = true)
Long getPassbookByRid(@Param("rid") Long rid);


@Query(value = "select sum(rdamt) from passbook "+
        "WHERE passbook.rid = :rid",
nativeQuery = true)
Long getpassbookAmt(@Param("rid") Long rid);

@Modifying
@Transactional
@Query(value = "UPDATE passbook SET flg = 1 WHERE rid = :rid", nativeQuery = true)
void closeRD(@Param("rid") Long rid);







	
}
