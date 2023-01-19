package com.bossapp.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bossapp.backend.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findByUsername(String username);
    List<Account> findByEmail(String email);
}
