package com.jgs.entity;

import sun.security.util.Length;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/1/5 0005.
 */
@Entity
public class Article implements Serializable{
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String name="";
    @Column
    private Date postDate=new Date();
    @Column
    private Date lastUpdate=new Date();
    @Column
    private String author="";
    @ManyToOne
    private Type type;

    @Column
    private Integer chaptersize;
    @Column
    private Long size=0L;
    @Column
    private Integer dayVisit=0;
    @Column
    private Integer weekVisit=0;
    @Column
    private Integer monthVisit=0;
    @Column
    private Integer allVisit=0;
    @Column
    private Integer dayVote=0;
    @Column
    private Integer weekVote=0;
    @Column
    private Integer monthVote=0;
    @Column
    private Integer allVote=0;
    @Column
    private Integer isStatic=0;
    @Column
    private Integer imgFlag=0;
    @Column(columnDefinition = "text")
    private String intro="";
    @Column(columnDefinition = "tinyint")
    private Integer state=0;
    @Column
    private Long collect=0L;

    public void setId(Long id) {
        this.id = id;
    }

    @OneToMany(mappedBy = "article",cascade = CascadeType.REMOVE)
    private List<UserArticlePk> userArticlePks=new ArrayList<UserArticlePk>();


    public List<UserArticlePk> getUserArticlePks() {
        return userArticlePks;
    }

    public void setUserArticlePks(List<UserArticlePk> userArticlePks) {
        this.userArticlePks = userArticlePks;
    }

    public Long getCollect() {
        return collect;
    }

    public void setCollect(Long collect) {
        this.collect = collect;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="article_id")
    private List<Chapter> chapters=new ArrayList<>();
    @Column
    private Long collectRuleId=0L;
    private String imageUrl="";

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", postDate=" + postDate +
                ", lastUpdate=" + lastUpdate +
                ", author='" + author + '\'' +
                ", type=" + type +
                ", chaptersize=" + chaptersize +
                ", size=" + size +
                ", dayVisit=" + dayVisit +
                ", weekVisit=" + weekVisit +
                ", monthVisit=" + monthVisit +
                ", allVisit=" + allVisit +
                ", dayVote=" + dayVote +
                ", weekVote=" + weekVote +
                ", monthVote=" + monthVote +
                ", allVote=" + allVote +
                ", isStatic=" + isStatic +
                ", imgFlag=" + imgFlag +
                ", intro='" + intro + '\'' +
                ", state=" + state +
                ", collect=" + collect +
                ", userArticlePks=" + userArticlePks +
                ", chapters=" + chapters +
                ", collectRuleId=" + collectRuleId +
                ", imageUrl='" + imageUrl + '\'' +
                ", collectNum=" + collectNum +
                ", lastChapter=" + lastChapter +
                '}';
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Long getCollectRuleId() {
        return collectRuleId;
    }

    public void setCollectRuleId(Long collectRuleId) {
        this.collectRuleId = collectRuleId;
    }

    public Long getCollectNum() {
        return collectNum;
    }

    public void setCollectNum(Long collectNum) {
        this.collectNum = collectNum;
    }

    @Column
    private Long collectNum=0L;

    @OneToOne(cascade = CascadeType.PERSIST)
    private Chapter lastChapter;

    public Long getId() {
        return id;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }



    public Integer getChaptersize() {
        return chaptersize;
    }

    public void setChaptersize(Integer chaptersize) {
        this.chaptersize = chaptersize;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }

    public Integer getDayVisit() {
        return dayVisit;
    }

    public void setDayVisit(Integer dayVisit) {
        this.dayVisit = dayVisit;
    }

    public Integer getWeekVisit() {
        return weekVisit;
    }

    public void setWeekVisit(Integer weekVisit) {
        this.weekVisit = weekVisit;
    }

    public Integer getMonthVisit() {
        return monthVisit;
    }

    public void setMonthVisit(Integer monthVisit) {
        this.monthVisit = monthVisit;
    }

    public Integer getAllVisit() {
        return allVisit;
    }

    public void setAllVisit(Integer allVisit) {
        this.allVisit = allVisit;
    }

    public Integer getDayVote() {
        return dayVote;
    }

    public void setDayVote(Integer dayVote) {
        this.dayVote = dayVote;
    }

    public Integer getWeekVote() {
        return weekVote;
    }

    public void setWeekVote(Integer weekVote) {
        this.weekVote = weekVote;
    }

    public Integer getMonthVote() {
        return monthVote;
    }

    public void setMonthVote(Integer monthVote) {
        this.monthVote = monthVote;
    }

    public Integer getAllVote() {
        return allVote;
    }

    public void setAllVote(Integer allVote) {
        this.allVote = allVote;
    }

    public Integer getIsStatic() {
        return isStatic;
    }

    public void setIsStatic(Integer isStatic) {
        this.isStatic = isStatic;
    }

    public Integer getImgFlag() {
        return imgFlag;
    }

    public void setImgFlag(Integer imgFlag) {
        this.imgFlag = imgFlag;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public List<Chapter> getChapters() {
        return chapters;
    }

    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }

    public Chapter getLastChapter() {

        //return this.chapters.get(this.chapters.size()-1);
        return  this.lastChapter;
    }

    public void setLastChapter(Chapter lastChapter) {
        this.lastChapter = lastChapter;
    }

}
