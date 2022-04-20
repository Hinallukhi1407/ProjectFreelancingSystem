package com.example.demo.Controlller;

import com.example.demo.Models.Project;
import com.example.demo.Services.ProjectServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    public ProjectServices projectServices;

    @PostMapping("/add")
    public Project add(@RequestBody Project project)
    {
        return  projectServices.insert(project);
    }

    @GetMapping("/all")
    public List<Project> all(){ return projectServices.all();}

    @GetMapping("/{id}")
    public Optional<Project> getDataById(@PathVariable Integer id){ return projectServices.getDataById(id); }

    @DeleteMapping("/{id}")
    public Boolean deleteProject(@PathVariable Integer id)
    {
        return projectServices.DeleteProject(id);
    }

    @PutMapping("/update/{id}")
    public Project updateProject(@RequestBody Project project,@PathVariable Integer id)
    {
        return projectServices.update(project,id);
    }

    @GetMapping("/user/{id}")
    public List<Project> getDataByUser(@PathVariable  Integer id){
        return projectServices.displayByUser(id);
    }
}
