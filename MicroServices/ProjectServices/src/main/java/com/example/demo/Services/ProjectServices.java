package com.example.demo.Services;

import com.example.demo.Client.ProjectRepository;
import com.example.demo.Models.Project;
import com.example.demo.Models.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ProjectServices {

    @Autowired
    public ProjectRepository projectRepository;

    @Autowired
    TaskServices taskServices;

    public int insert(Project project)
    {
        Project project1= projectRepository.save(project);
        return project1.getId();
    }

    public List<Project> all(){ return projectRepository.findAll();}

    public Optional<Project> getDataById(Integer id){ return projectRepository.findById(id);}

    public Boolean DeleteProject(Integer id){
         projectRepository.deleteById(id);
         if(projectRepository.findById(id).isPresent()){
             return false;
         }
         return true;
    }

    public  Project update(Project project,Integer id)
    {
        project.setId(id);
        return  projectRepository.save(project);
    }

    public List<Project> displayByUser(Integer id)
    {
        return projectRepository.findByUserId(id);
    }
}
