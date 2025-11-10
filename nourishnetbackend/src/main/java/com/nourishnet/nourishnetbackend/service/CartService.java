package com.nourishnet.nourishnetbackend.service;

import com.nourishnet.nourishnetbackend.model.cart;
import com.nourishnet.nourishnetbackend.model.foodpost;
import com.nourishnet.nourishnetbackend.repository.CartRepository;
import com.nourishnet.nourishnetbackend.repository.FoodpostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private FoodpostRepository foodpostRepository;

    public cart getCartByUserId(Long userId) {
        return cartRepository.findByUserid(userId).orElseGet(() -> {
            cart newCart = new cart(userId);
            return cartRepository.save(newCart);
        });
    }

    public cart addItemToCart(Long userId, Long foodpostId) {
        cart userCart = getCartByUserId(userId);
    if (foodpostId == null) return userCart;
    Optional<foodpost> itemOpt = foodpostRepository.findById(foodpostId);
        if (itemOpt.isPresent()) {
            userCart.addItem(itemOpt.get());
            cartRepository.save(userCart);
        }
        return userCart;
    }

    public cart removeItemFromCart(Long userId, Long foodpostId) {
        cart userCart = getCartByUserId(userId);
    if (foodpostId == null) return userCart;
    Optional<foodpost> itemOpt = foodpostRepository.findById(foodpostId);
        if (itemOpt.isPresent()) {
            userCart.removeItem(itemOpt.get());
            cartRepository.save(userCart);
        }
        return userCart;
    }

    public List<foodpost> getCartItems(Long userId) {
        cart userCart = getCartByUserId(userId);
        return userCart.getItems();
    }

    public void clearCart(Long userId) {
        cart userCart = getCartByUserId(userId);
        userCart.getItems().clear();
        cartRepository.save(userCart);
    }
}
