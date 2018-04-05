package com.jgs.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/1/12 0012.
 */
@Entity
public class User {
    @Id
    @GeneratedValue
    private  Long id;
    @Column
    private String name;
    @Column
    private String password;
    @Column
    private Date regDate;
    @Column(columnDefinition = "tinyint")
    private Integer sex;
    @Column
    private String email;
    @Column
    private String qq;
    @Column
    private String salt;
    @Column
    private String history="";

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", regDate=" + regDate +
                ", sex=" + sex +
                ", email='" + email + '\'' +
                ", qq='" + qq + '\'' +
                ", salt='" + salt + '\'' +
                ", history='" + history + '\'' +
                ", roles=" + roles +
                ", userArticlePks=" + userArticlePks +
                '}';
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }

    @OneToMany(mappedBy = "user",fetch = FetchType.EAGER)
    private List<Role> roles;

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }


    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public void setId(Long id) {
        this.id = id;
    }

    //    @ManyToMany
//    @JoinTable(name="user_article", joinColumns={ @JoinColumn(name="userId")},inverseJoinColumns={ @JoinColumn(name = "articleId") })
    @OneToMany(mappedBy = "user")
    private List<UserArticlePk> userArticlePks=new ArrayList<UserArticlePk>();

    public List<UserArticlePk> getUserArticlePks() {
        return userArticlePks;
    }

    public void setUserArticlePks(List<UserArticlePk> userArticlePks) {
        this.userArticlePks = userArticlePks;
    }

    public Long getId() {
        return id;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

}
