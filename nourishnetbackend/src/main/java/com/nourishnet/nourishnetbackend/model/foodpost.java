package com.nourishnet.nourishnetbackend.model;

import jakarta.persistence.*;

@Entity
public class foodpost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; 

    @Column(nullable =false)
    private String name;

    @Column(nullable =false)
    private String description; 
 
    @Column(nullable =false)
    private String imageUrl;

    private Integer quantity; 
    private Integer cost; 
    
    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public foodpost() {
    }

    public foodpost(String name, String description, String imageUrl, String quantity, String cost) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.quantity =Integer.parseInt(quantity);
        this.cost =Integer.parseInt(cost);
    }

    // Getters and Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
