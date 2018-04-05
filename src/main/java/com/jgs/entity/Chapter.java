package com.jgs.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by Administrator on 2017/1/5 0005.
 */
@Entity
public class Chapter implements Serializable{
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String chapterName;
    @Column
    private Date postDate;
    @Column
    private Date lastUpdate;
    @Column
    private Integer size;

    @Column(columnDefinition = "text")
    private String txt;

    @ManyToOne
    private Article article;
    @OneToOne(mappedBy = "lastChapter")
    private Article lastArticle;

    @Override
    public String toString() {
        return "Chapter{" +
                "id=" + id +
                ", chapterName='" + chapterName + '\'' +
                ", postDate=" + postDate +
                ", lastUpdate=" + lastUpdate +
                ", size=" + size +
                ", txt='" + txt + '\'' +
                ", article=" + article +
                ", lastArticle=" + lastArticle +
                '}';
    }

    public Article getLastArticle() {
        return lastArticle;
    }

    public void setLastArticle(Article lastArticle) {
        this.lastArticle = lastArticle;
    }

    public Long getId() {
        return id;
    }

    public String getTxt() {
        return txt;
    }

    public void setTxt(String txt) {
        this.txt = txt;
    }






    public String getChapterName() {
        return chapterName;
    }

    public void setChapterName(String chapterName) {
        this.chapterName = chapterName;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

}
