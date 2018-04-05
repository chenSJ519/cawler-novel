package com.jgs.controller;

import com.jgs.Service.AdminService;
import com.jgs.Service.ReadBookService;
import com.jgs.entity.Article;
import com.jgs.entity.Chapter;
import com.jgs.entity.CollectRule;
import com.jgs.entity.Type;
import com.jgs.utils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.util.*;


/**
 * Created by Administrator on 2017/1/16 0016.
 */
@Controller
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private ReadBookService readBookService;

    @RequestMapping("/admin/article-list")
    public String articleList(Model model) {
        List<Article> articleList = adminService.getAllArticle();
        model.addAttribute("articleList", articleList);
        model.addAttribute("count",articleList.size());
        return "admin/article-list";
    }

    @RequestMapping("/admin/deletebook")
    @ResponseBody
    public String deletebook(Long[] ids) {
        String info = "success";
        adminService.deleteBook(ids);
        return "success";
    }

    @RequestMapping("/admin/updatebook")
    public String updatebook(Article articleInfo, HttpServletRequest request) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        Article article = readBookService.getArticleById(articleInfo.getId());
        article.setName(articleInfo.getName());
        article.setType(articleInfo.getType());
        article.setIntro(articleInfo.getIntro());
        article.setAuthor(articleInfo.getAuthor());
        article.setChaptersize(articleInfo.getChaptersize());
        adminService.save(article);
        Object object = request.getSession().getAttribute("imageFilePath");
        if (object != null) {
            File file = new File((isWindow?"c:":"")+"/bookimage/" + article.getId() + ".jpg");
            if (file.exists()) {
                file.delete();
                File file2 = new File((String) object);
                file2.renameTo(new File((isWindow?"c:":"")+"/bookimage/" + article.getId() + ".jpg"));
            }
        }

        return "redirect:/admin/article-list";
    }

    @RequestMapping("/admin/article-update")
    public String articleUpdate(Long id, Model model) {
        Article article = readBookService.getArticleById(id);
        model.addAttribute("book", article);
        List<Type> types = readBookService.getAllType();
        model.addAttribute("types", types);
        return "admin/article-update";
    }

    @RequestMapping("/admin/article-add")
    public String articleaddUI(Model model) {
        List<Type> types = readBookService.getAllType();
        model.addAttribute("types", types);
        return "admin/article-add";
    }

    @RequestMapping("/admin/articleadd")
    @ResponseBody
    public String articleAdd(Article articleInfo, HttpServletRequest request) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        String info = "success";
        Object object = request.getSession().getAttribute("bookFilePath");
        ;
        if (object == null) {
            info = "fail";


        } else {


            Object bookNameObj = request.getSession().getAttribute("bookName");
            if ("".equals(articleInfo.getName()) || articleInfo.getName() == null) {
                articleInfo.setName((String) bookNameObj);

            }

//           Type type=adminService.getTypeById(articleInfo.getType().getId());

            adminService.save(articleInfo);
            String bookFilePath = (String) object;
            TxtUtils txtUtils = new TxtUtils(bookFilePath, articleInfo.getId());
            Long chapterId = txtUtils.dotxt();
            Chapter chapter = readBookService.getChapterById(chapterId);
            articleInfo.setLastChapter(chapter);
            adminService.save(articleInfo);
            File file = new File((String) object);
            file.delete();
            String imageFilePath = (String) request.getSession().getAttribute("imageFilePath");
            File fileimage = new File(imageFilePath);
            fileimage.renameTo(new File((isWindow?"c:":"")+"/bookimage/" + articleInfo.getId() + ".jpg"));
            request.getSession().removeAttribute("imageFilePath");
            request.getSession().removeAttribute("bookName");
            request.getSession().removeAttribute("bookFilePath");
        }
        return info;
    }

    @RequestMapping("/admin/uploadbook")
    @ResponseBody
    public String upload(@RequestParam MultipartFile[] file, HttpServletRequest request, HttpServletResponse response) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        String filename = "";
        String info = "success";
        String bookName = "";
        if (file != null) {
            //获取容器所在的绝对路径


            //设置一个数组装  图片

            for (int i = 0; i < file.length; i++) {
                filename = file[i].getOriginalFilename();
                bookName = file[i].getOriginalFilename();


                filename = UuidUtil.getId() + filename.substring(filename.lastIndexOf(".")).toLowerCase();
                //更换名称  时间字符串  作为  新的文件名字
                File imagefile = new File((isWindow?"c:":"")+"/uploadtemp/" + filename);//
                System.out.println(imagefile.getAbsolutePath() + "哈哈");

                try {
                    file[i].transferTo(imagefile);
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }
            // 把文件的名称或者是新名称  插入到数据库
        }
        HttpSession session = request.getSession();
        session.setAttribute("bookFilePath", (isWindow?"c:":"")+"/uploadtemp/" + filename);
        session.setAttribute("bookName", bookName);

        return info;
    }

    @RequestMapping("/admin/uploadimage")
    @ResponseBody
    public String uploadimage(@RequestParam MultipartFile[] fileimage, HttpServletRequest request, HttpServletResponse response) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        String filename = "";
        String info = "success";
        String bookName = "";
        if (fileimage != null) {
            //获取容器所在的绝对路径


            //设置一个数组装  图片

            for (int i = 0; i < fileimage.length; i++) {
                filename = fileimage[i].getOriginalFilename();
                bookName = fileimage[i].getOriginalFilename();


                filename = UuidUtil.getId() + filename.substring(filename.lastIndexOf(".")).toLowerCase();
                //更换名称  时间字符串  作为  新的文件名字
                File imagefile = new File((isWindow?"c:":"")+"/bookimage/" + filename);//

                try {
                    fileimage[i].transferTo(imagefile);
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }
            // 把文件的名称或者是新名称  插入到数据库
        }
        HttpSession session = request.getSession();
        session.setAttribute("imageFilePath", (isWindow?"c:":"")+"/bookimage/" + filename);

        return "/bookimage/" + filename;
    }

    @RequestMapping("/admin/staticed")
    @ResponseBody
    public String staticed(Long[] ids) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        for (Long id : ids) {
            Article article = readBookService.getArticleById(id);
            article.setIsStatic(1);

            List<Chapter> chapters = article.getChapters();
            File file=new File((isWindow?"c:":"")+"/bookdownload");
            if(!file.exists())
                file.mkdirs();
            OutputStream out = null;
            try {
                out = new FileOutputStream((isWindow?"c:":"")+"/bookdownload/"+article.getName()+".txt");
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            for (Chapter chapter : chapters) {
                Map<String, Chapter> map = new HashMap<String, Chapter>();
                map.put("chapter", chapter);
                try {
                    out.write(chapter.getTxt().replaceAll("<br>","\n").getBytes());
                    adminService.process("read.html", map, chapter.getId() + "");
                } catch (Exception e) {
                    e.printStackTrace();
                }
                chapter.setTxt(null);
            }
            try {
                out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            adminService.save(article);
        }


        return "success";
    }

    @RequestMapping("/admin/collectRuleList")
    public String collectRuleList(Model model)
    {
        List<CollectRule> collectRuleList=adminService.getAllCollectRule();
        model.addAttribute("collectRuleList",collectRuleList);
        return "admin/collectRuleList";

    }
    @RequestMapping("/admin/addCollectRule")
    public String addCollectRule(CollectRule collectRule)
    {
        String info="success";
        CollectRule collectRule1=adminService.save(collectRule);
        return "redirect:/admin/collectRuleList";
    }
    @RequestMapping("/admin/updateCollectRuleUI")
    public String updateCollectRuleUI(Model model,Long id)
    {
        CollectRule collectRule=adminService.getCollectRuleById(id);
        model.addAttribute("collectRule",collectRule);
        return "admin/updateCollectRuleUI";
    }
    @RequestMapping("/admin/collecNewBookUI")
    public String collecNewBookUI(Model model)
    {
        List<CollectRule> collectRuleList=adminService.getAllCollectRule();
        model.addAttribute("collectRuleList",collectRuleList);
        return "admin/collecNewBookUI";
    }
    @RequestMapping("/admin/updateCollectRule")
    public String updateCollectRule(CollectRule collectRule)
    {
        String info="success";
        adminService.save(collectRule);
        return "redirect:/admin/collectRuleList";
    }
    @RequestMapping("/admin/deleteCollectRule")
    @ResponseBody
    public String deleteCollectRule(Long[] ids)
    {
        String info="success";
        adminService.deleteCollectRuleByids(ids);
        return info;
    }
    @RequestMapping("/admin/collectOneBook")
    public String collectOneBook(Model model)
    {
        List<CollectRule> collectRuleList=adminService.getAllCollectRule();
        model.addAttribute("collectRuleList",collectRuleList);
        return "admin/collectOneBook";
    }
    @RequestMapping("/admin/collectMultiBook")
    public String collectMultiBook(Model model)
    {
        List<CollectRule> collectRuleList=adminService.getAllCollectRule();
        model.addAttribute("collectRuleList",collectRuleList);
        return "admin/collectMultiBook";
    }
    @RequestMapping("/admin/collectBookStart")
    public void collectBookStart(Long id,Long start,Long end,HttpServletResponse response)
    {
        CollectRule collectRule=adminService.getCollectRuleById(id);
        if(end==null)
            end=start;

        PaChong paChong=new PaChong(collectRule.getId(),adminService,response,collectRule.getBookInfoUrl(),collectRule.getBookName(),collectRule.getBookNameNum(),collectRule.getBookType(),collectRule.getBookTypeNum(),collectRule.getBookIntro(),collectRule.getBookIntroNum(),collectRule.getBookMuluUrl(),collectRule.getBookChapterUrl(),collectRule.getBookText(),collectRule.getBookTextNum(),collectRule.getBookImage(),collectRule.getBookImageNum(),collectRule.getBookAuthor(),collectRule.getBookAuthorNum(),collectRule.getBookStatus(),collectRule.getBookStatusNum(),start,end);
        paChong.start();

//       List<Article> articleList=paChong.getArticleList();




    }
    @RequestMapping("/admin/bookUpdate")
    public void  bookUpdate(Long ids,HttpServletResponse response)
    {
        List<Article> articleList=readBookService.getArticleByIds(ids);
        Map<Article,CollectRule> map=new HashMap<>();
        for(Article article:articleList)
        {
           CollectRule collectRule= adminService.getCollectRuleById(article.getCollectRuleId());
           map.put(article,collectRule);
        }
        PaChongUpdate pau=new PaChongUpdate(adminService, response, map);
        pau.start();
    }
@RequestMapping("/admin/collectnewbook")
    public void collectnewbook(HttpServletResponse response,Long collectRuleId,String url,String collectRuleStr,Integer start,Integer end,Integer sstart,Integer send)
{
    CollectRule collectRule= adminService.getCollectRuleById(collectRuleId);
    PaChongNewBook pcnb=new PaChongNewBook(adminService, response,collectRule,url,collectRuleStr,start,end,sstart,send);
    pcnb.start();
}
    @RequestMapping("/admin/bookwanbeng")
    @ResponseBody
    public String bookwanbeng(Long id)
    {
        String info="success";
        Article article=readBookService.getArticleById(id);
        article.setState(1);
        adminService.save(article);
        return info;
    }
    @RequestMapping("/admin/booklianzhai")
    @ResponseBody
    public String booklianzhai(Long id)
    {
        String info="success";
        Article article=readBookService.getArticleById(id);
        article.setState(0);
        adminService.save(article);
        return info;
    }

}
