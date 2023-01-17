package com.bossapp.backend.accounts.springdatajpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bossapp.backend.accounts.Account;

import java.util.List;

public interface AccountsJpaRepository extends JpaRepository<Account, Long>{
    List<Account>findByUsername(String username);
    List<Account>findByEmail(String email);
    List<Account>findByPassword(String password);
}
