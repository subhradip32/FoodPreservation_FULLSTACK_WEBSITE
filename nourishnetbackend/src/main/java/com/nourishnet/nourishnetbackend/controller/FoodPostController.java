package com.nourishnet.nourishnetbackend.controller;

import java.util.*;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.nourishnet.nourishnetbackend.model.foodpost;
import com.nourishnet.nourishnetbackend.repository.FoodpostRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/food_post")
@CrossOrigin(origins = "http://localhost:5173")
public class FoodPostController {
    private final FoodpostRepository foodpostrepo; 
    public FoodPostController(FoodpostRepository foodpostRepository) {
        this.foodpostrepo = foodpostRepository; 
    }


    @PostMapping
    public boolean getMethodName(@RequestBody Map<String, String> body) {
        String name = body.getOrDefault("name", "");
        String description = body.getOrDefault("description", "");
        String imageUrl = body.getOrDefault("imageUrl", "");

        
        foodpost fp = new foodpost(name, description, imageUrl);
        foodpostrepo.save(fp);

        return true;
    }

    @GetMapping
    public List<foodpost> getMethodName() {
        return foodpostrepo.findAll();
    }
    
    
}
