package com.nourishnet.nourishnetbackend.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.*;
import com.nourishnet.nourishnetbackend.model.foodpost; 

@Repository
public interface FoodpostRepository extends JpaRepository<foodpost, Long> {
}
