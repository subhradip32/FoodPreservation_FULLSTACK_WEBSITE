package com.nourishnet.nourishnetbackend.model;

import jakarta.persistence.*;
import java.util.List;
import java.util.ArrayList;
import com.nourishnet.nourishnetbackend.model.foodpost;


@Entity
public class cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Long userid;

    @ManyToMany
    @JoinTable(
        name = "cart_items",
        joinColumns = @JoinColumn(name = "cart_id"),
        inverseJoinColumns = @JoinColumn(name = "foodpost_id")
    )
    private List<foodpost> items = new ArrayList<>();

    public cart() {}

    public cart(Long userid) {
        this.userid = userid;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public List<foodpost> getItems() {
        return items;
    }

    public void setItems(List<foodpost> items) {
        this.items = items;
    }

    public void addItem(foodpost item) {
        this.items.add(item);
    }

    public void removeItem(foodpost item) {
        this.items.remove(item);
    }
}
