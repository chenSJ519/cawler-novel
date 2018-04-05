package com.jgs.controller;

import com.jgs.Dao.UserArticlePKDao;
import com.jgs.Service.ReadBookService;
import com.jgs.Service.UserService;
import com.jgs.entity.Article;
import com.jgs.entity.Chapter;
import com.jgs.entity.User;
import com.jgs.entity.UserArticlePk;
import com.octo.captcha.service.image.ImageCaptchaService;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

/**
 * Created by Administrator on 2017/1/15 0015.
 */
@Controller
public class UserController {
    @Autowired
    private ReadBookService readBookService;
    @Autowired
    private UserService userService;
    @Resource(name = "imageCaptchaService")
    private ImageCaptchaService imageCaptchaService;
    @RequestMapping("/addVote")
    @ResponseBody
    public String addVote(Long id,HttpServletRequest request)
    {
        String info="success";
        Object obj=request.getSession().getAttribute("bookVoteId");
        if(obj!=null)
        {
            List<Long> list= (List<Long>) obj;
            if(list.contains(id))
            {
                info="fail";
            }else
            {
                Article article=readBookService.getArticleById(id);
                article.setAllVote(article.getAllVote()+1);
            }
        }else
        {
            Article article=readBookService.getArticleById(id);
            article.setAllVote(article.getAllVote()+1);
        }
       return info;


    }
    @RequestMapping("/download")
    public void download(Long id, HttpServletRequest request,HttpServletResponse response) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        Article article=readBookService.getArticleById(id);
        response.setCharacterEncoding("utf-8");
        response.setContentType("multipart/form-data");
        try {
            response.setHeader("Content-Disposition", "attachment;fileName="
                    + new String((article.getName()+".txt").getBytes("utf-8"),"iso-8859-1"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        OutputStream out = null;
        if(article.getIsStatic()==0)
        {
            List<Chapter> chapters=article.getChapters();

            try {
                out = response.getOutputStream();
                for(Chapter chapter:chapters)
                {


                    out.write(chapter.getTxt().replaceAll("<br>","\n").getBytes("utf-8"));

                }
            } catch (Exception e) {
                e.printStackTrace();
            }finally {
                try {
                    out.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

        }else
        {
            FileInputStream inputStream=null;

            try {
                out = response.getOutputStream();
                inputStream = new FileInputStream((isWindow?"c:":"")+"/bookdownload/" + article.getName() + ".txt");
                int len = 0;
                byte[] buf =new byte[1024];
                while ((len = inputStream.read(buf)) != -1) {
                    out.write(buf, 0, len);
                }
            }catch (Exception e)
            {
                e.printStackTrace();
            }finally {
                try {
                    inputStream.close();
                    out.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
        }



    }
    @RequestMapping("/addLabel")
    @ResponseBody
    public String addLabel(Long id,HttpServletRequest request)
    {
        String info="success";
        Chapter chapter=readBookService.getChapterById(id);
        Long articleId=chapter.getArticle().getId();
        User userSession=(User)request.getSession().getAttribute("userInfo");
        User user=userService.getUserById(userSession.getId());
        List<UserArticlePk> userArticlePks=user.getUserArticlePks();
        boolean add=true;
        UserArticlePk myuserArticlePk=null;
        for(UserArticlePk userArticlePk:userArticlePks)
        {
          if(userArticlePk.getArticle().getId().equals(articleId))
          {
              userArticlePk.setBookLabel(id);
              userArticlePk.setLabelName(chapter.getChapterName());
              myuserArticlePk=userArticlePk;
              add=false;
          }
        }
        if(add)
        {
            myuserArticlePk=new UserArticlePk();
            myuserArticlePk.setLabelName(chapter.getChapterName());
            myuserArticlePk.setBookLabel(id);
            myuserArticlePk.setBookCaseNum(0);
            myuserArticlePk.setUser(user);
            myuserArticlePk.setArticle(chapter.getArticle());

        }
        userService.save(myuserArticlePk);
        return info;
    }
    @RequestMapping("/addBook")
    @ResponseBody
    public String addBook(Long id,HttpServletRequest request)
    {
        String info="success";

        User userSession=(User)request.getSession().getAttribute("userInfo");
        User user2=(User) SecurityUtils.getSubject().getSession().getAttribute("userInfo");
        User user=userService.getUserById(userSession.getId());
        List<UserArticlePk> userArticlePks=user.getUserArticlePks();
        boolean enable=true;
        for(UserArticlePk userArticlePk:userArticlePks)
        {
            if(userArticlePk.getArticle().getId().equals(id))
            {
                info="fail";
                enable=false;
                break;
            }
        }
        if(enable)
        {
            UserArticlePk userArticlePk=new UserArticlePk();
            userArticlePk.setArticle(readBookService.getArticleById(id));
            userArticlePk.setUser(user);
            userArticlePk.setBookCaseNum(0);
            userService.save(userArticlePk);
        }
        return info;
    }
    @RequestMapping("/bookcase")
    public String bookCase(HttpServletRequest request,Integer bookCaseNum,Model model)
    {
        User userInfo=(User)request.getSession().getAttribute("userInfo");
//        User user=userService.getUserById(userInfo.getId());
        if(bookCaseNum==null)
        {

            List<UserArticlePk> userArticlePks=userService.getUserArticlePKByUserAndBookCaseNum(userInfo,0);
            model.addAttribute("userArticlePks",userArticlePks);
        }else
        {
            List<UserArticlePk> userArticlePks=userService.getUserArticlePKByUserAndBookCaseNum(userInfo,bookCaseNum);
            model.addAttribute("userArticlePks",userArticlePks);
        }

        return "bookcase";
    }
    @RequestMapping("/movebook")
    @ResponseBody
    public String movebook(Long[] ids,Integer des,HttpServletRequest request )
    {
        User userInfo=(User)request.getSession().getAttribute("userInfo");
        ArrayList<Article> articleList=new ArrayList<Article>();

        for(Long l:ids)
        {
            Article article=new Article();
            article.setId(l);
            articleList.add(article);
        }
        List<UserArticlePk>  userArticlePks=userService.getUserArticlePKByUserAndArticleIn(userInfo,articleList);
        int i=1;
        for(UserArticlePk userArticlePk:userArticlePks)
        {
            userArticlePk.setBookCaseNum(des);
        }
        List<UserArticlePk> it=userService.save(userArticlePks);

        return "success";
    }
    @RequestMapping("/deletebook")
    @ResponseBody
    public String deletebook(Long[] id,HttpServletRequest request)
    {
        User userInfo=(User)request.getSession().getAttribute("userInfo");
        List<Article> articleList=new ArrayList<Article>();
        for(Long l:id)
        {
            Article article=new Article();
            article.setId(l);
            articleList.add(article);
        }
       List<UserArticlePk>  userArticlePks=userService.getUserArticlePKByUserAndArticleIn(userInfo,articleList);
       userService.delete(userArticlePks);
       return "success";
    }
    @RequestMapping("/logout")
    public String  logout(HttpServletRequest request)
    {
        request.getSession().invalidate();
        return "redirect:/login";
    }


}
