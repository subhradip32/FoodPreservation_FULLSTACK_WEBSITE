package com.nourishnet.nourishnetbackend.repository;

import com.nourishnet.nourishnetbackend.model.cart;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CartRepository extends JpaRepository<cart, Integer> {
    Optional<cart> findByUserid(Long userid);
}
