package com.jgs;

import org.apache.http.HttpEntity;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/1/21 0021.
 */
public class PaChong {
    private String bookInfoUrl;
    private String bookName;
    private int bookNameNum;
    private String bookType;
    private int bookTypeNum;
    private String bookIntro;
    private int bookIntroNum;
    private String bookMuluUrl;
    private String bookChapterUrl;
    private String bookText;
    private int bookTextNum;
    private Long start;
    private Long end;

    public PaChong(String bookInfoUrl, String bookName, int bookNameNum, String bookType, int bookTypeNum, String bookIntro, int bookIntroNum, String bookMuluUrl, String bookChapterUrl, String bookText,int bookTextNum,Long start, Long end) {
        this.bookInfoUrl = bookInfoUrl;
        this.bookName = bookName;
        this.bookNameNum = bookNameNum;
        this.bookType = bookType;
        this.bookTypeNum = bookTypeNum;
        this.bookIntro = bookIntro;
        this.bookIntroNum = bookIntroNum;
        this.bookMuluUrl = bookMuluUrl;
        this.bookChapterUrl = bookChapterUrl;
        this.bookText=bookText;
        this.bookTextNum=bookTextNum;
        this.start = start;
        this.end = end;
    }


    @Test
    public void testa() {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        for(Long i=start;i<=end;i++)
        {

            try {
                //得到小说的名字
                bookInfoUrl=bookInfoUrl.replaceAll("\\$\\{bookNum\\}",i+"");
                Document doc = Jsoup.connect(bookInfoUrl).get();
                Elements elements = doc.select(bookName);
                String bookName = elements.get(bookNameNum).text();
                System.out.println("小说的名字是：bookName");
                //得到小说的类型
                String  bookTypesout = doc.select(bookType).get(bookTypeNum).text();
                System.out.println("类型是"+bookTypesout);
                //得到小说的简介
                String bookIntrosout=doc.select(bookIntro).get(bookIntroNum).text();
                System.out.println(bookIntrosout);
                //得到 小说的目录
                bookMuluUrl=bookMuluUrl.replaceAll("\\$\\{bookNum\\}",i+"");
                Document muluDoc = Jsoup.connect(bookMuluUrl).get();
                Elements eleChapterHref = muluDoc.select(bookChapterUrl);
                List<String> chapterList = new ArrayList<>();
                //得到小说的章节内容
                for (Element e : eleChapterHref) {
                    System.out.println(e.text());
                    String chapterUrl = e.attr("abs:href");


                Document chapterDoc = Jsoup.connect(chapterUrl).get();
                String chapterText = chapterDoc.select(bookText).get(bookTextNum).text();
                chapterList.add(chapterText);
                }
                int t = 1;


            } catch (IOException e) {
                e.printStackTrace();
            }

        }

    }
    public static void main(String[] args)
    {
        PaChong pc=new PaChong("http://www.17k.com/book/${bookNum}.html",".info h1 a",0,".infoPath div a",2,".cont a",0,"http://www.17k.com/list/${bookNum}.html",".Volume dd a","#chapterContentWapper",0,2264063L,2264063L);
                pc.testa();
//        System.out.println("${bookNum}".replaceAll("\\$\\{bookNum\\}","3"));

    }

}
