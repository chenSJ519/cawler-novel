package com.jgs.utils;

import com.jgs.Service.AdminService;
import com.jgs.entity.Article;
import com.jgs.entity.Chapter;
import com.jgs.entity.Type;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2017/1/21 0021.
 */

public class PaChong {
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
    private String bookStatus="";
    private Integer bookStatusNum=0;
    private Long start;
    private Long end;
    private AdminService adminService;
    private HttpServletResponse response;
    private List<Article> articleList=new ArrayList<>();
    private Long collectRuleId=0L;



    public PaChong(Long collectRuleId, AdminService adminService, HttpServletResponse response, String bookInfoUrl, String bookName, int bookNameNum, String bookType, int bookTypeNum, String bookIntro, int bookIntroNum, String bookMuluUrl, String bookChapterUrl, String bookText, int bookTextNum, String bookImage, Integer bookImageNum, String bookAuthor, Integer bookAuthorNum,String bookStatus,Integer bookStatusNum ,Long start, Long end) {
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
        this.bookStatus=bookStatus;
        this.bookStatusNum=bookStatusNum;
        this.start = start;
        this.end = end;
        this.collectRuleId=collectRuleId;
    }



    public void start() {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        int countBook=0;
        response.setContentType("text/html;charset=utf-8");
        CloseableHttpClient httpClient=null;
        PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();
        cm.setMaxTotal(2);
        cm.setDefaultMaxPerRoute(50);
        cm.setDefaultMaxPerRoute(50);
        httpClient = HttpClients.custom().setConnectionManager(cm).build();
        HttpGet httpGet=null;
        RequestConfig requestConfig = null;
        CloseableHttpResponse myrResponse=null;
        InputStream inputStream=null;

        for(Long i=start;i<=end;i++)
        {
            countBook++;
//           String myUrl= elementsAll.get(pp).attr("abs:href");
//           Long i=Long.parseLong(myUrl.substring(24,31));
            try{
                Article article=new Article();
                article.setCollectNum(i);
            boolean flag=true;

            try {
                //得到小说的名字
                mybookInfoUrl=bookInfoUrl.replaceAll("\\$\\{bookNum\\}",i+"");
                httpGet=new HttpGet(mybookInfoUrl);
                httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
                httpGet.setHeader("Accept-Encoding", "gzip, deflate, sdch");
                httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.8,en;q=0.6");
                httpGet.setHeader("Cache-Control", "max-age=0");
                httpGet.setHeader("Connection", "keep-alive");
//                httpGet.setHeader("Host", "www.17k.com");
                httpGet.setHeader("Upgrade-Insecure-Requests", "1");
                httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36");
                requestConfig = RequestConfig.custom().setSocketTimeout(2000).setConnectTimeout(2000).build();//设置请求和传输超时时间
                httpGet.setConfig(requestConfig);
                myrResponse=httpClient.execute(httpGet);
                inputStream=myrResponse.getEntity().getContent();
                Document doc = Jsoup.parse(inputStream,"utf-8",mybookInfoUrl);
                System.out.println(doc.text());
                myrResponse.close();
                Elements elements = doc.select(bookName);
                String bookName = elements.get(bookNameNum).text();
                String mybookStatus=doc.select(bookStatus).get(bookStatusNum).text();
                System.out.println("小说的名字是："+bookName+"</br>");
                response.getWriter().write(i+":"+bookName+countBook+"</br>");

                Article articleDababase=adminService.getArticleByName(bookName);
                String lastChapterName="";
                if(articleDababase!=null)
                {
                    lastChapterName=articleDababase.getLastChapter().getChapterName();
                    flag=false;
                    article=articleDababase;
                    if(article.getIsStatic()==1)
                    {
                        try {
                            response.getWriter().write("已经静态化无法更新</br>");
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                        continue;
                    }
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
                   article.setImageUrl( elementsImg.get(bookImageNum).attr("abs:src"));
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
                httpGet=new HttpGet(mybookMuluUrl);
                httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
                httpGet.setHeader("Accept-Encoding", "gzip, deflate, sdch");
                httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.8,en;q=0.6");
                httpGet.setHeader("Cache-Control", "max-age=0");
                httpGet.setHeader("Connection", "keep-alive");
//                httpGet.setHeader("Host", "www.17k.com");
                httpGet.setHeader("Upgrade-Insecure-Requests", "1");
                httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36");
                requestConfig = RequestConfig.custom().setSocketTimeout(2000).setConnectTimeout(2000).build();//设置请求和传输超时时间
                httpGet.setConfig(requestConfig);
                myrResponse=httpClient.execute(httpGet);
                inputStream=myrResponse.getEntity().getContent();
                Document muluDoc = Jsoup.parse(inputStream,"utf-8",mybookMuluUrl);
                myrResponse.close();
//                Document muluDoc = Jsoup.connect(mybookMuluUrl).get();
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


                        httpGet=new HttpGet(chapterUrl);


                        httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
                        httpGet.setHeader("Accept-Encoding", "gzip, deflate, sdch");
                        httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.8,en;q=0.6");
                        httpGet.setHeader("Cache-Control", "max-age=0");
                        httpGet.setHeader("Connection", "keep-alive");
//                        httpGet.setHeader("Host", "www.17k.com");
                        httpGet.setHeader("Upgrade-Insecure-Requests", "1");
                        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36");
                        requestConfig = RequestConfig.custom().setSocketTimeout(2000).setConnectTimeout(2000).build();//设置请求和传输超时时间
                        httpGet.setConfig(requestConfig);
                        myrResponse=httpClient.execute(httpGet);
                        inputStream=myrResponse.getEntity().getContent();
                        Document chapterDoc = Jsoup.parse(inputStream,"utf-8",chapterUrl);
                        myrResponse.close();
//                        Document chapterDoc = Jsoup.connect(chapterUrl).get();
                        String chapterText = chapterDoc.select(bookText).get(bookTextNum).html();
                        chapterText=chapterText.replaceAll("<br>|</br>","mybr");
                        chapterText=Jsoup.parse(chapterText).text();
                        chapterText=chapterText.replaceAll("mybr","<br>");
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
            //后面的处理
                article.setPostDate(new Date());
                Type type=adminService.getTypeByName( article.getType().getTypeName());
                if(type==null)
                {
                    Type type1=adminService.save(article.getType());
                }else
                {
                    article.setType(type);
                }
                adminService.save(article);
                List<Chapter> chapters=article.getChapters();
                int chapterSize=chapters.size();
                article.setLastChapter(chapters.get(chapterSize-1));
                article.setChaptersize(chapterSize);
                article.setCollectRuleId(collectRuleId);
                adminService.save(article);
                httpGet=new HttpGet(article.getImageUrl());
                httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
                httpGet.setHeader("Accept-Encoding", "gzip, deflate, sdch");
                httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.8,en;q=0.6");
                httpGet.setHeader("Cache-Control", "max-age=0");
                httpGet.setHeader("Connection", "keep-alive");
//           httpGet.setHeader("Host", "www.17k.com");
                httpGet.setHeader("Upgrade-Insecure-Requests", "1");
                httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36");
                requestConfig = RequestConfig.custom().setSocketTimeout(2000).setConnectTimeout(2000).build();//设置请求和传输超时时间
                httpGet.setConfig(requestConfig);
                int statusCode=0;
                int tryCount=0;
                while(statusCode!=200&&tryCount<3)
                {

                    tryCount++;
                    try {
                        myrResponse=httpClient.execute(httpGet);
                        statusCode=myrResponse.getStatusLine().getStatusCode();

                        inputStream=myrResponse.getEntity().getContent();
                        File file=new File((isWindow?"c:":"")+"/bookimage/");
                        if (!file.exists())
                        {
                            file.mkdirs();
                        }
                        FileOutputStream outputStream=new FileOutputStream((isWindow?"c:":"")+"/bookimage/"+article.getId()+".jpg");
                        int len=0;
                        byte[] bytes=new byte[1024];
                        while((len=inputStream.read(bytes))!=-1)
                        {
                            outputStream.write(bytes,0,len);
                        }
                        outputStream.close();
                        myrResponse.close();
                        response.getWriter().write("成功入库该小说,该小说是第"+countBook+"本</br>");
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
        } catch (Exception e) {
                e.printStackTrace();
                try {

                    response.getWriter().write(i+":错误</br>"+e);
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
