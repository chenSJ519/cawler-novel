package com.jgs.utils;

/**
 * Created by Administrator on 2017/2/7 0007.
 */
public class HistoryBean {
    private String bookName="";
    private Long bookId=0L;

    @Override
    public String toString() {
        return "HistoryBean{" +
                "bookName='" + bookName + '\'' +
                ", bookId=" + bookId +
                ", ChapterID=" + chapterId +
                '}';
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    private Long chapterId=0L;

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }


    public Long getChapterId() {
        return chapterId;
    }

    public void setChapterId(Long chapterId) {
        this.chapterId = chapterId;
    }
}
