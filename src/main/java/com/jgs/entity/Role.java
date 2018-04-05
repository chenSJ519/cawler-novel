package com.jgs.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Administrator on 2017/1/29 0029.
 */
@Entity
public class Role implements Serializable{
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String roleName;

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                ", user=" + user +
                '}';
    }

    @ManyToOne
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
