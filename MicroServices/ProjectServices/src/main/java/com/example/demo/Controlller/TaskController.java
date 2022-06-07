package com.example.demo.Controlller;

import com.example.demo.Models.Task;
import com.example.demo.Services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    @Autowired
    public TaskServices taskServices;

    @PostMapping("/add")
    public Task add(@RequestBody Task task)
    {
        return  taskServices.insertData(task);
    }

    @GetMapping("/all")
    public List<Task> all(){ return taskServices.all();}

    @GetMapping("/{id}")
    public Task getDataById(@PathVariable Integer id){ return taskServices.getDataById(id).get(); }

    @DeleteMapping("/{id}")
    public Boolean deleteTask(@PathVariable Integer id)
    {
        return taskServices.DeleteTask(id);
    }

    @PutMapping("/update/{id}")
    public Task updateTask(@RequestBody Task task,@PathVariable Integer id)
    {
        //return taskServices.update(task,id);
        return task;
    }

    @GetMapping("/project/{id}")
    public List<Task> getDataByProject(@PathVariable  Integer id){
        return taskServices.DisplayByProjectID(id);
    }
}
