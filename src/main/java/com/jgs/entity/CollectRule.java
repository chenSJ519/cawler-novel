package com.jgs.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by Administrator on 2017/1/22 0022.
 */
@Entity
public class CollectRule implements Serializable{
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String siteName="";

    public String getSiteUrl() {
        return siteUrl;
    }

    public void setSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
    }

    @Column
    private String siteUrl="";
    @Column
    private String bookInfoUrl="";
    @Column
    private String bookName="";
    @Column
    private Integer bookNameNum=0;
    @Column
    private String bookType="";
    @Column
    private Integer bookTypeNum=0;
    @Column
    private String bookIntro="";
    @Column
    private Integer bookIntroNum=0;
    @Column
    private String bookMuluUrl="";
    @Column
    private String bookChapterUrl="";
    @Column
    private String bookText="";
    @Column
    private Integer bookTextNum=0;
    @Column
    private String bookImage="";
    @Column
    private String bookAuthor="";

    public String getBookAuthor() {
        return bookAuthor;
    }

    public void setBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
    }

    public Integer getBookAuthorNum() {
        return bookAuthorNum;
    }

    public void setBookAuthorNum(Integer bookAuthorNum) {
        this.bookAuthorNum = bookAuthorNum;
    }

    @Column

    private Integer bookAuthorNum=0;

    @Column
    private Integer bookImageNum=0;
    @Column
    private String bookStatus="";
    @Column
    private Integer bookStatusNum=0;

    @Override
    public String toString() {
        return "CollectRule{" +
                "id=" + id +
                ", siteName='" + siteName + '\'' +
                ", siteUrl='" + siteUrl + '\'' +
                ", bookInfoUrl='" + bookInfoUrl + '\'' +
                ", bookName='" + bookName + '\'' +
                ", bookNameNum=" + bookNameNum +
                ", bookType='" + bookType + '\'' +
                ", bookTypeNum=" + bookTypeNum +
                ", bookIntro='" + bookIntro + '\'' +
                ", bookIntroNum=" + bookIntroNum +
                ", bookMuluUrl='" + bookMuluUrl + '\'' +
                ", bookChapterUrl='" + bookChapterUrl + '\'' +
                ", bookText='" + bookText + '\'' +
                ", bookTextNum=" + bookTextNum +
                ", bookImage='" + bookImage + '\'' +
                ", bookAuthor='" + bookAuthor + '\'' +
                ", bookAuthorNum=" + bookAuthorNum +
                ", bookImageNum=" + bookImageNum +
                ", bookStatus='" + bookStatus + '\'' +
                ", bookStatusNum=" + bookStatusNum +
                '}';
    }

    public String getBookStatus() {
        return bookStatus;
    }

    public void setBookStatus(String bookStatus) {
        this.bookStatus = bookStatus;
    }

    public Integer getBookStatusNum() {
        return bookStatusNum;
    }

    public void setBookStatusNum(Integer bookStatusNum) {
        this.bookStatusNum = bookStatusNum;
    }

    public String getBookImage() {
        return bookImage;
    }

    public void setBookImage(String bookImage) {
        this.bookImage = bookImage;
    }

    public Integer getBookImageNum() {
        return bookImageNum;
    }

    public void setBookImageNum(Integer bookImageNum) {
        this.bookImageNum = bookImageNum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSiteName() {
        return siteName;
    }

    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }

    public String getBookInfoUrl() {
        return bookInfoUrl;
    }

    public void setBookInfoUrl(String bookInfoUrl) {
        this.bookInfoUrl = bookInfoUrl;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public Integer getBookNameNum() {
        return bookNameNum;
    }

    public void setBookNameNum(Integer bookNameNum) {
        this.bookNameNum = bookNameNum;
    }

    public String getBookType() {
        return bookType;
    }

    public void setBookType(String bookType) {
        this.bookType = bookType;
    }

    public Integer getBookTypeNum() {
        return bookTypeNum;
    }

    public void setBookTypeNum(Integer bookTypeNum) {
        this.bookTypeNum = bookTypeNum;
    }

    public String getBookIntro() {
        return bookIntro;
    }

    public void setBookIntro(String bookIntro) {
        this.bookIntro = bookIntro;
    }

    public Integer getBookIntroNum() {
        return bookIntroNum;
    }

    public void setBookIntroNum(Integer bookIntroNum) {
        this.bookIntroNum = bookIntroNum;
    }

    public String getBookMuluUrl() {
        return bookMuluUrl;
    }

    public void setBookMuluUrl(String bookMuluUrl) {
        this.bookMuluUrl = bookMuluUrl;
    }

    public String getBookChapterUrl() {
        return bookChapterUrl;
    }

    public void setBookChapterUrl(String bookChapterUrl) {
        this.bookChapterUrl = bookChapterUrl;
    }

    public String getBookText() {
        return bookText;
    }

    public void setBookText(String bookText) {
        this.bookText = bookText;
    }

    public int getBookTextNum() {
        return bookTextNum;
    }

    public void setBookTextNum(Integer bookTextNum) {
        this.bookTextNum = bookTextNum;
    }


}
