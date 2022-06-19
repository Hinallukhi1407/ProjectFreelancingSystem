package com.example.demo.Controlller;

import com.example.demo.Models.Project;
import com.example.demo.Models.Projectskill;
import com.example.demo.Services.ProjectServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/project")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    public ProjectServices projectServices;

    @PostMapping("/add")
    public int add(@RequestBody Project project)
    {
        return  projectServices.insert(project);
    }

    @GetMapping("/all")
    public List<Project> all(){ return projectServices.all();}

    @GetMapping("/{id}")
    public Project getDataById(@PathVariable Integer id){ return projectServices.getDataById(id).get(); }

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

    @GetMapping("/activeprojects/{id}")
    public List<Project> getActiveproject(@PathVariable Integer id){
        return projectServices.displayActiveProject(id);
    }

    @PostMapping("/addSkills")
    public List<Projectskill> addSkills(@RequestBody List<Projectskill> projectskill)
    {
        List<Projectskill> projectskillList= new ArrayList<>();
        for (Projectskill skill:projectskill) {
            projectskillList.add(projectServices.addSkills(skill));
        }
        return projectskillList;

    }

    @GetMapping("/skill/{id}")
    public List<Projectskill> getSkill(@PathVariable Integer id)
    {
        return projectServices.displayBidProjectId(id);
    }
}
