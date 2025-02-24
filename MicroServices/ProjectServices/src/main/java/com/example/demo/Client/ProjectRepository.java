package com.example.demo.Client;

import com.example.demo.Models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project,Integer> {
    @Query(value = "select * from projects where user_id=?1", nativeQuery = true)
    List<Project> findByUserId(Integer id);

    @Query(value = "select * from projects where user_id=?1 and status_id=5", nativeQuery = true)
    List<Project> findActiveProjectByUserId(Integer id);

    @Query(value = "update projects set status_id=5 where project_id=?1",nativeQuery = true)
    void updateStatusTOActive(Integer id);

}
