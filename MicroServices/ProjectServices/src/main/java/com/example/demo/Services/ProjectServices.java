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

    public Project insert(Project project)
    {
        Project project1= projectRepository.save(project);
        taskServices.insertData(new Task(project1,project1.getProjectName(),project1.getProjectDescription(),project1.getPostDate(),project1.getCompletionDate(),project1.getAttachment(),project1.getPostDate(),project1.getStatus(),0.0,0.0,project1.getStatus()));
        return project1;
    }

    public List<Project> all(){ return projectRepository.findAll();}

    public Optional<Project> getDataById(Integer id){ return projectRepository.findById(id);}

    public Boolean DeleteProject(Integer id){
         projectRepository.deleteById(id);
         if(projectRepository.findById(id)!=null){
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
