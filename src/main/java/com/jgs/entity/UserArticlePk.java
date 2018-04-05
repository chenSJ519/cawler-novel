package com.jgs.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Administrator on 2017/1/15 0015.
 */
@Entity
public class UserArticlePk implements Serializable{
   @Id
   @GeneratedValue
   private Long id;

    public Long getId() {
        return id;
    }


    @Column
    private Long bookLabel;
    @Column
    private Integer bookCaseNum;
    @Column
    private String labelName;

    @Override
    public String toString() {
        return "UserArticlePk{" +
                "id=" + id +
                ", bookLabel=" + bookLabel +
                ", bookCaseNum=" + bookCaseNum +
                ", labelName='" + labelName + '\'' +
                ", article=" + article +
                ", user=" + user +
                '}';
    }

    public String getLabelName() {
        return labelName;
    }

    public void setLabelName(String labelName) {
        this.labelName = labelName;
    }

    @ManyToOne
    @JoinColumn(name="article_id")
    private Article article;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public Long getBookLabel() {
        return bookLabel;
    }

    public void setBookLabel(Long bookLabel) {
        this.bookLabel = bookLabel;
    }

    public Integer getBookCaseNum() {
        return bookCaseNum;
    }

    public void setBookCaseNum(Integer bookCaseNum) {
        this.bookCaseNum = bookCaseNum;
    }


}
