package com.sitchat.server.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("users")
public class User {
    @Id
    private int id;

    @Field(name = "masterId")
    @Indexed(unique = true)
    private int masterId;

    @Field(name = "studentId")
    private String studentId;
    @Field(name = "firstName")
    private String firstName;
    @Field(name = "lastName")
    private String lastName;

    public User(int masterId, String studentId, String firstName, String lastName) {
        this.masterId = masterId;
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getId() {
        return id;
    }

    public int getMasterId() {
        return masterId;
    }

    public void setMasterId(int masterId) {
        this.masterId = masterId;
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
