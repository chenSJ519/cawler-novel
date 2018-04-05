package com.jgs.utils;

import com.jgs.Service.AdminService;
import com.jgs.entity.Article;
import com.jgs.entity.Chapter;
import com.jgs.entity.Type;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/1/21 0021.
 */

public class PaChongsrc {
    private String mybookInfoUrl="";
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
    private Integer bookImageNum=0;
    private String bookImage="";
    private String bookAuthor="";
    private Integer bookAuthorNum=0;
    private Long start;
    private Long end;
    private AdminService adminService;
    private HttpServletResponse response;
    private List<Article> articleList=new ArrayList<>();


    public PaChongsrc(AdminService adminService, HttpServletResponse response, String bookInfoUrl, String bookName, int bookNameNum, String bookType, int bookTypeNum, String bookIntro, int bookIntroNum, String bookMuluUrl, String bookChapterUrl, String bookText, int bookTextNum, String bookImage, Integer bookImageNum, String bookAuthor, Integer bookAuthorNum, Long start, Long end) {
        this.adminService=adminService;
        this.response=response;
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
        this.bookImage=bookImage;
        this.bookImageNum=bookImageNum;
        this.bookAuthor=bookAuthor;
        this.bookAuthorNum=bookAuthorNum;
        this.start = start;
        this.end = end;
    }



    public void start() {
        response.setContentType("text/html;charset=utf-8");

        for(Long i=start;i<=end;i++)
        {
            try{
                Article article=new Article();
                article.setCollectNum(i);
            boolean flag=true;

            try {
                //得到小说的名字
                mybookInfoUrl=bookInfoUrl.replaceAll("\\$\\{bookNum\\}",i+"");
                Document doc = Jsoup.connect(mybookInfoUrl).get();
                Elements elements = doc.select(bookName);
                String bookName = elements.get(bookNameNum).text();
                System.out.println("小说的名字是："+bookName+"</br>");
                response.getWriter().write(i+":"+bookName+"</br>");

                Article articleDababase=adminService.getArticleByName(bookName);
                String lastChapterName="";
                if(articleDababase!=null)
                {
                    lastChapterName=articleDababase.getLastChapter().getChapterName();
                    flag=false;
                    article=articleDababase;
                    response.getWriter().write("书库已有，执行更新</br>");
                }
               if(flag)
               {
                   //得到小说的作者
                   Elements elementsAuthor = doc.select(bookAuthor);
                   String mybookAuthor = elementsAuthor.get(bookAuthorNum).text();

                   article.setAuthor(mybookAuthor);
                   //小说的图片
                   Elements elementsImg = doc.select(bookImage);
                   article.setImageUrl(elementsImg.get(bookImageNum).attr("abs:src")); ;
                   article.setName(bookName);
                   //得到小说的类型
                   String  bookTypesout = doc.select(bookType).get(bookTypeNum).text();
                   System.out.println("类型是"+bookTypesout);
                   Type type=new Type();

                   type.setTypeName(bookTypesout);

                   article.setType(type);
                   //得到小说的简介
                   String bookIntrosout=doc.select(bookIntro).get(bookIntroNum).text();
                   System.out.println(bookIntrosout);
                   article.setIntro(bookIntrosout);
               }

                //得到 小说的目录
                String mybookMuluUrl=bookMuluUrl.replaceAll("\\$\\{bookNum\\}",i+"");
                Document muluDoc = Jsoup.connect(mybookMuluUrl).get();
                Elements eleChapterHref = muluDoc.select(bookChapterUrl);
                //得到小说的章节内容
                List<Chapter> chapters=article.getChapters();
                int articleSize=0;
                boolean isGetChapter=true;
                for (Element e : eleChapterHref) {
                    if(!flag)
                    {
                        isGetChapter=false;
                        if(e.text().equals(lastChapterName))
                        {
                            isGetChapter=true;
                            flag=true;
                            continue;
                        }
                    }

                    if(isGetChapter)
                    {
                        Chapter chapter=new Chapter();
                        System.out.println(e.text());
                        chapter.setChapterName(e.text());

                        response.getWriter().write(e.text());
                        response.getWriter().flush();
                        String chapterUrl = e.attr("abs:href");



                        Document chapterDoc = Jsoup.connect(chapterUrl).get();
                        String chapterText = chapterDoc.select(bookText).get(bookTextNum).text();
                        chapter.setTxt(chapterText);
                        articleSize+= chapterText.length();
                        chapters.add(chapter);
                    }

                }
                article.setSize(article.getSize()+Long.parseLong(articleSize+""));
                int t = 1;


            } catch (IOException e) {
                e.printStackTrace();
            }
            articleList.add(article);
        } catch (Exception e) {
                e.printStackTrace();
                try {

                    response.getWriter().write(i+":错误</br>"+e.getMessage());
                } catch (IOException e1) {
                    e1.printStackTrace();
                }
            }

        }

    }

    public List<Article> getArticleList() {
        return articleList;
    }



}
