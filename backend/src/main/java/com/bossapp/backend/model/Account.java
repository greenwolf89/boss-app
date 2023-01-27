package com.bossapp.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "username", nullable = false, length=255)
    private String username;

    @Column(name = "email", nullable = false, length=255)
    private String email;

    @Column(name = "password", nullable = false, length=65)
    private String password;

    @Column(name = "accessToken", nullable = false, length=65)
    private String accessToken;

    public Account() {

	}

    public Account(long id, String username, String email, String password, String accessToken) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.accessToken = accessToken;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    @Override
    public String toString() {
        return "Account [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password
                + ", accessToken=" + accessToken + "]";
    }

}
