package com.contact.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contact.manager.entity.Dates;

@Repository
public interface DatesRepository extends JpaRepository<Dates, Integer> {


}
