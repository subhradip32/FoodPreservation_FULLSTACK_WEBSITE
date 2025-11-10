package com.nourishnet.nourishnetbackend.controller;

import com.nourishnet.nourishnetbackend.model.cart;
import com.nourishnet.nourishnetbackend.model.foodpost;
import com.nourishnet.nourishnetbackend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public List<foodpost> getCartItems(@PathVariable Long userId) {
        return cartService.getCartItems(userId);
    }

    @PostMapping("/{userId}/add/{foodpostId}")
    public cart addItem(@PathVariable Long userId, @PathVariable Long foodpostId) {
        return cartService.addItemToCart(userId, foodpostId);
    }

    @DeleteMapping("/{userId}/remove/{foodpostId}")
    public cart removeItem(@PathVariable Long userId, @PathVariable Long foodpostId) {
        return cartService.removeItemFromCart(userId, foodpostId);
    }

    @DeleteMapping("/{userId}/clear")
    public void clearCart(@PathVariable Long userId) {
        cartService.clearCart(userId);
    }
}
