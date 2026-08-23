package com.cs.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cs.demo.Entity.Rduser;

public interface Rdrepo  extends JpaRepository<Rduser, Long>{

}
