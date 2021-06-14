package com.sitchat.server.models.dto.user;

import com.sitchat.server.models.User;

public class UserDto {
    private String username;
    private String email;
    private String studentId;
    private String firstName;
    private String lastName;

    public UserDto(User user) {
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.studentId = user.getStudentId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
    }

    public UserDto(String username, String email, String studentId, String firstName, String lastName) {
        this.username = username;
        this.email = email;
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
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

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
