package com.bossapp.backend.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.bossapp.backend.accounts.springdatajpa.AccountsJpaRepository;

@Component
public class UserCommandLineRunner implements CommandLineRunner {

    @Autowired
    private AccountsJpaRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(new Account(1, "Nick", "nick@gmail.com", "12345"));
        repository.save(new Account(2, "Waylen", "waylen@gmail.com", "12345"));
        repository.save(new Account(3, "Muhammad", "muhammad@gmail.com", "12345"));

        System.out.println(repository.findAll());
    }

}
