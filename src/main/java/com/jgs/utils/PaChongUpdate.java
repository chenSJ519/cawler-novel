package com.jgs.utils;

import com.jgs.Service.AdminService;
import com.jgs.entity.Article;
import com.jgs.entity.Chapter;
import com.jgs.entity.CollectRule;
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
import java.util.*;

/**
 * Created by Administrator on 2017/1/21 0021.
 */

public class PaChongUpdate {
    private String mybookInfoUrl="";

    private AdminService adminService;
    private HttpServletResponse response;
    private List<Article> articleList=new ArrayList<>();
    private Map<Article,CollectRule> map;



    public PaChongUpdate(AdminService adminService, HttpServletResponse response, Map<Article,CollectRule> map) {
        this.adminService=adminService;
        this.response=response;
        this.map=map;
    }



    public void start() {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        response.setContentType("text/html;charset=utf-8");
        CloseableHttpClient httpClient;
        PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager();
        cm.setMaxTotal(2);
        cm.setDefaultMaxPerRoute(50);
        cm.setDefaultMaxPerRoute(50);
        httpClient = HttpClients.custom().setConnectionManager(cm).build();
        HttpGet httpGet=null;
//        HttpGet httpGet=new HttpGet("http://top.17k.com/top/top100/06_vipclick/06_vipclick_new_top_100_pc.html");
//        httpGet.setHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
//        httpGet.setHeader("Accept-Encoding", "gzip, deflate, sdch");
//        httpGet.setHeader("Accept-Language", "zh-CN,zh;q=0.8,en;q=0.6");
//        httpGet.setHeader("Cache-Control", "max-age=0");
//        httpGet.setHeader("Connection", "keep-alive");
        RequestConfig requestConfig=null;
//        httpGet.setConfig(requestConfig);
//        httpGet.setHeader("Host", "www.17k.com");
//        httpGet.setHeader("Upgrade-Insecure-Requests", "1");
//        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36");
        CloseableHttpResponse myrResponse=null;
        InputStream inputStream=null;

//        Elements elementsAll=docall.select(".red");
//        for(Long i=start;i<=end;i++)
//        for(Element eAll:elementsAll)
        Set<Map.Entry<Article,CollectRule>> set=map.entrySet();
        Iterator<Map.Entry<Article,CollectRule>> it=set.iterator();
        while(it.hasNext())
        {
            Map.Entry<Article,CollectRule> entry=it.next();
            if(entry.getKey().getIsStatic()==1)
            {
                try {
                    response.getWriter().write("已经静态化无法更新</br>");
                } catch (IOException e) {
                    e.printStackTrace();
                }
                continue;
            }
            CollectRule cr=entry.getValue();

           Long i=entry.getKey().getCollectNum();
            try{
                Article article=new Article();
                article.setCollectNum(i);
            boolean flag=true;

            try {
                //得到小说的名字
                mybookInfoUrl=cr.getBookInfoUrl().replaceAll("\\$\\{bookNum\\}",i+"");
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
                Elements elements = doc.select(cr.getBookName());
                String bookName = elements.get(cr.getBookNameNum()).text();
                Elements eleTest=doc.select(cr.getBookStatus());
                String mybookStatus=doc.select(cr.getBookStatus()).get(cr.getBookStatusNum()).text();

                System.out.println("小说的名字是："+bookName+"</br>");
                response.getWriter().write(i+":"+bookName+i+"</br>");

                Article articleDababase=entry.getKey();
                String lastChapterName="";
                if(articleDababase!=null)
                {
                    lastChapterName=articleDababase.getLastChapter().getChapterName();
                    flag=false;
                    article=articleDababase;
                    response.getWriter().write("书库已有，执行更新</br>");
                }
                Integer StatusbookCode=0;
                if(mybookStatus.contains("本"))
                    StatusbookCode=1;
                article.setState(StatusbookCode);
               if(flag)
               {
                   //得到小说的作者
                   Elements elementsAuthor = doc.select(cr.getBookAuthor());
                   String mybookAuthor = elementsAuthor.get(cr.getBookAuthorNum()).text();

                   article.setAuthor(mybookAuthor);
                   //小说的图片
                   Elements elementsImg = doc.select(cr.getBookImage());
                   article.setImageUrl( elementsImg.get(cr.getBookImageNum()).attr("abs:src"));
                   article.setName(bookName);
                   //得到小说的类型
                   String  bookTypesout = doc.select(cr.getBookType()).get(cr.getBookTextNum()).text();
                   System.out.println("类型是"+bookTypesout);
                   Type type=new Type();

                   type.setTypeName(bookTypesout);

                   article.setType(type);
                   //得到小说的简介
                   String bookIntrosout=doc.select(cr.getBookIntro()).get(cr.getBookIntroNum()).text();
                   System.out.println(bookIntrosout);
                   article.setIntro(bookIntrosout);
               }

                //得到 小说的目录
                String mybookMuluUrl=cr.getBookMuluUrl().replaceAll("\\$\\{bookNum\\}",i+"");
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
                Elements eleChapterHref = muluDoc.select(cr.getBookChapterUrl());
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
                        String chapterText = chapterDoc.select(cr.getBookText()).get(cr.getBookTextNum()).html();
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
                article.setCollectRuleId(cr.getId());
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
                        response.getWriter().write("成功入库该小说</br>");
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
