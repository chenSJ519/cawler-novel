package com.jgs.controller;

import com.google.gson.Gson;
import com.jgs.Service.AdminService;
import com.jgs.Service.ReadBookService;
import com.jgs.Service.UserService;
import com.jgs.entity.*;
import com.jgs.realm.ShiroRealm;
import com.jgs.utils.HistoryBean;
import com.octo.captcha.service.CaptchaServiceException;
import com.octo.captcha.service.image.ImageCaptchaService;
import com.sun.image.codec.jpeg.ImageFormatException;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.*;

/**
 * Created by Administrator on 2017/1/5 0005.
 */
@Controller
public class ReadBookController {

    @Autowired
    private AdminService adminService;
    @Autowired
    private ReadBookService readBookService;
    @Autowired
    private UserService userService;
    @Resource(name = "imageCaptchaService")
    private ImageCaptchaService imageCaptchaService;

    @RequestMapping("/login.do")
    @ResponseBody
    public Object login(String username, String password,HttpServletRequest request) {

        String info = "success";
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        token.setRememberMe(true);
        try {
            subject.login(token);
        } catch (UnknownAccountException e) {
            info = "fail";
        } catch (IncorrectCredentialsException e) {
            info = "fail";
        } catch (AuthenticationException e) {
            //其他错误，比如锁定，如果想单独处理请单独catch处理
            info = "fail";
        }
        String url="";
        try {
           url = WebUtils.getSavedRequest(request).getRequestUrl();
        }catch (Exception e)
        {
            System.out.println(e);
            url="/index";
        }
        Map map=new HashMap<>();
        map.put("info",info);
        map.put("url",url);
        int i=3;

        return map;
    }

    @RequestMapping("/index")
    public String index(Model model) {
        System.out.println("陈圣驹");
        System.out.println("陈小狗");
        List<Article> articleList = readBookService.getAllBook();
        model.addAttribute("articleList", articleList);

        //得到编辑推荐
        Block block = readBookService.getBlockByName("编辑推荐");
        List<Article> articleRecommend = readBookService.getBookListByBlockVars(block.getVars());
        model.addAttribute("articleRecommend", articleRecommend);
        //得到总点击
        List<Article> articleAllVisit = readBookService.getTop17ByOrderByAllVisitDesc();
        model.addAttribute("articleAllVisit", articleAllVisit);
        //得到月点击
        List<Article> articleMonthVisit = readBookService.getTop17ByOrderByMonthVisitDesc();
        model.addAttribute("articleMonthVisit", articleMonthVisit);
        //得到周点击
        List<Article> articleWeekVisit = readBookService.getTop17ByOrderByWeekVisitDesc();
        model.addAttribute("articleWeekVisit", articleWeekVisit);
        //得到到日点击
        List<Article> articleDayVisit = readBookService.getTop7ByOrderByDayVisitDesc();
        model.addAttribute("articleDayVisit", articleDayVisit);
        //得到总推荐
        List<Article> articleAllVote = readBookService.getTop17ByOrderByAllVoteDesc();
        model.addAttribute("articleAllVote", articleAllVote);
        //得到月推荐
        List<Article> articleMonthVote = readBookService.getTop17ByOrderByMonthVoteDesc();
        model.addAttribute("articleMonthVote", articleMonthVote);
        //得到到周推荐
        List<Article> articleWeekVote = readBookService.getTop17ByOrderByWeekVoteDesc();
        model.addAttribute("articleWeekVote", articleWeekVote);
//        //得到日推荐
//        List<Article> articleDayVote=readBookService.getTop17ByOrderByDayVoteDesc();
//        model.addAttribute("articleDayVote",articleDayVote);
        //得到字数榜
        List<Article> articleSize = readBookService.getTop10ByOrderBySizeDesc();
        model.addAttribute("articleSize", articleSize);
        //得到最近更新
        List<Article> articleLastUpdate = readBookService.getTop11ByOrderByLastUpdateDesc();
        model.addAttribute("articleLastUpdate", articleLastUpdate);
        //得到最新入库
        List<Article> articlePostDate = readBookService.getTop10ByOrderByPostDateDesc();
        model.addAttribute("articlePostDate", articlePostDate);
        //得到四大分类块
        Block blockType = readBookService.getBlockByName("四大分类块");
        List<List<Article>> articleFourType = readBookService.getFourType(blockType.getVars());
        model.addAttribute("articleFourType", articleFourType);


        return "index";
    }

    @RequestMapping("/bookinfo")
    public String bookinfo(Long id, Model model) {
        //得到编辑推荐
        Block block = readBookService.getBlockByName("编辑推荐");
        List<Article> articleRecommend = readBookService.getBookListByBlockVars(block.getVars());
        model.addAttribute("articleRecommend", articleRecommend);
        //得到总点击
        List<Article> articleAllVisit = readBookService.getTop10ByOrderByAllVisitDesc();
        model.addAttribute("articleAllVisit", articleAllVisit);
        //得到总推荐
        List<Article> articleAllVote = readBookService.getTop10ByOrderByAllVoteDesc();
        model.addAttribute("articleAllVote", articleAllVote);
        Article article = readBookService.getArticleById(id);
        article.setAllVisit(article.getAllVisit() + 1);
        article.setWeekVisit(article.getWeekVisit() + 1);
        article.setMonthVisit(article.getMonthVisit() + 1);
        adminService.save(article);
        model.addAttribute("book", article);
        List<Article> articleAuthorList = readBookService.getByAuthorAndNameNot(article.getAuthor(), article.getName());
        model.addAttribute("articleAuthorList", articleAuthorList);

        return "bookinfo";
    }

    @RequestMapping("/mulu")
    public String mulu(Long id, Model model) {
        Article article = readBookService.getArticleById(id);
        model.addAttribute("book", article);
        return "mulu";
    }

    @RequestMapping("/read")
    public String read(Long id, Model model,HttpServletRequest request) {
        Chapter chapter = readBookService.getChapterById(id);
        Article article=chapter.getArticle();
        Object objUser=request.getSession().getAttribute("userInfo");
        if(objUser!=null)
        {
            String bookName=chapter.getArticle().getName();
            Long bookId=chapter.getArticle().getId();
            Object obj=request.getSession().getAttribute("historyList");


            List<HistoryBean> historyBeanList= (List<HistoryBean>) obj;
            HistoryBean historyBeanTemp=null;
            for(HistoryBean h:historyBeanList)
            {
                if(h.getBookName().equals(bookName))
                {
                   historyBeanTemp=h;
                }
            }
            historyBeanList.remove(historyBeanTemp);
            HistoryBean historyBean=new HistoryBean();
            historyBean.setBookName(bookName);
            historyBean.setChapterId(id);
            historyBean.setBookId(bookId);
            historyBeanList.add(historyBean);
            if(historyBeanList.size()>5)
            {
                historyBeanList.remove(0);
            }


            StringBuffer history=new StringBuffer();
            int size=historyBeanList.size();
            for(int i=0;i<size-1;i++)
            {

                history.append(historyBeanList.get(i).getBookId()+":"+historyBeanList.get(i).getChapterId()+",");
            }
            history.append(historyBeanList.get(size-1).getBookId()+":"+historyBeanList.get(size-1).getChapterId());
            User user=userService.getUserById(((User)objUser).getId());
            user.setHistory(history.toString());
            userService.save(user);

        }


        model.addAttribute("chapter", chapter);
        if(article.getIsStatic().equals(1))
            return "redirect:/chapterstatic/"+id+".html";
        else
            return "read";

    }

    @RequestMapping("/booktype")
    public String booktype(Long category, Integer action, Integer vip, Integer size, Integer update, Integer tag, Integer orderId, Integer page, Model model) {


        if (category == null || action == null || vip == null || size == null || update == null || tag == null || orderId == null) {
            category = -1L;
            action = -1;
            vip = -1;
            size = -1;
            update = -1;
            tag = -1;
            orderId = -1;
        }
        model.addAttribute("orderId", orderId);
        Specification<Article> specification = getBookType(category, action, vip, size, update, tag, orderId);

        Page<Article> articlePage = readBookService.getBookTypeByCondition(specification, new PageRequest((page == null ? 1 : page) - 1, 20));
        List<Type> typeList = readBookService.getAllType();
        model.addAttribute("typeList", typeList);
        model.addAttribute("articlePage", articlePage);

        return "booktype";
    }

    @RequestMapping("/bookrank")
    public String bookrank(Long category, Integer orderId, Integer page, Model model) {


        Integer action;
        Integer vip;
        Integer size;
        Integer update;
        Integer tag;
        if (category == null || orderId == null) {
            category = -1L;
            action = -1;
            vip = -1;
            size = -1;
            update = -1;
            tag = -1;
            orderId = -1;
        }
        action = -1;
        vip = -1;
        size = -1;
        update = -1;
        tag = -1;

        model.addAttribute("orderId", orderId);
        Specification<Article> specification = getBookType(category, action, vip, size, update, tag, orderId);

        Page<Article> articlePage = readBookService.getBookTypeByCondition(specification, new PageRequest((page == null ? 1 : page) - 1, 15));
        model.addAttribute("articlePage", articlePage);

        return "bookrank";
    }

    private Specification<Article> getBookType(final Long category, final Integer action, final Integer vip, final Integer size, final Integer update, final Integer tag, final Integer orderId) {
        return new Specification<Article>() {
            @Override
            public Predicate toPredicate(Root<Article> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
                List<Predicate> predicate = new ArrayList<>();
                if (category != -1) {
                    Type type = new Type();
                    type.setId(category);
                    predicate.add(cb.equal(root.get("type"), type));
                }
                if (action != -1) {
                    predicate.add(cb.equal(root.get("state"), action));
                }
                if (size != -1) {
                    switch (size) {
                        case 1:
                            predicate.add(cb.lt(root.get("size").as(Long.class), 300000L));
                            break;
                        case 2:
                            predicate.add(cb.between(root.get("size").as(Long.class), 300000L, 499999L));
                            break;
                        case 3:
                            predicate.add(cb.between(root.get("size").as(Long.class), 300000L, 499999L));
                            break;
                        case 4:
                            predicate.add(cb.between(root.get("size").as(Long.class), 300000L, 499999L));
                            break;
                        case 5:
                            predicate.add(cb.between(root.get("size").as(Long.class), 300000L, 499999L));
                            break;
                        default:
                            break;
                    }

                }
                if (update != -1) {
                    Calendar calendar = new GregorianCalendar();
                    switch (update) {

                        case 1:
                            calendar.add(Calendar.DATE, -3);
                            predicate.add(cb.greaterThan(root.get("lastUpdate").as(Date.class), calendar.getTime()));
                            break;
                        case 2:
                            calendar.add(Calendar.DATE, -7);
                            predicate.add(cb.greaterThan(root.get("lastUpdate").as(Date.class), calendar.getTime()));
                            break;
                        case 3:
                            calendar.add(Calendar.DATE, -15);
                            predicate.add(cb.greaterThan(root.get("lastUpdate").as(Date.class), calendar.getTime()));
                            break;
                        case 4:
                            calendar.add(Calendar.MONTH, -1);
                            predicate.add(cb.greaterThan(root.get("lastUpdate").as(Date.class), calendar.getTime()));
                            break;
                        default:
                            break;
                    }
                }
                if (orderId != -1) {
                    switch (orderId) {
                        case 1:
                            query.orderBy(cb.desc(root.get("lastUpdate").as(Date.class)));
                            break;
                        case 2:
                            query.orderBy(cb.desc(root.get("collect").as(Date.class)));
                            break;
                        case 3:
                            query.orderBy(cb.desc(root.get("size").as(Long.class)));
                            break;
                        case 4:
                            query.orderBy(cb.desc(root.get("allVisit").as(Long.class)));
                            break;
                        case 5:
                            query.orderBy(cb.desc(root.get("allVote").as(Long.class)));
                            break;
                        default:
                            break;
                    }
                }


                Predicate[] pre = new Predicate[predicate.size()];
                return query.where(predicate.toArray(pre)).getRestriction();
            }
        };
    }

    @RequestMapping(value = "/validImage.jpg")
    public void ImageCaptcha(HttpServletRequest request, HttpServletResponse response, Model model)
            throws ServletException, IOException {

        byte[] captchaChallengeAsJpeg = null;
        // the output stream to render the captcha image as jpeg into
        ByteArrayOutputStream jpegOutputStream = new ByteArrayOutputStream();
        try {
            // get the session id that will identify the generated captcha.
            // the same id must be used to validate the response, the session id
            // is a good candidate!
            String captchaId = request.getSession().getId();
//            boolean isResponseCorrect = imageCaptchaService.validateResponseForID(captchaId, "jmmse");
            // call the ImageCaptchaService getChallenge method
            BufferedImage challenge = imageCaptchaService
                    .getImageChallengeForID(captchaId, request
                            .getLocale());

            // a jpeg encoder
            JPEGImageEncoder jpegEncoder = JPEGCodec
                    .createJPEGEncoder(jpegOutputStream);
            jpegEncoder.encode(challenge);
        } catch (IllegalArgumentException e) {
        } catch (CaptchaServiceException e) {
        } catch (ImageFormatException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();

        }

        captchaChallengeAsJpeg = jpegOutputStream.toByteArray();
        // flush it in the response
        response.setHeader("Cache-Control", "no-store");
        response.setHeader("Pragma", "no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentType("image/jpeg");
        ServletOutputStream responseOutputStream = response
                .getOutputStream();
        responseOutputStream.write(captchaChallengeAsJpeg);
        responseOutputStream.flush();
        responseOutputStream.close();
    }

    @RequestMapping("/enableName")
    @ResponseBody
    public Object enableName(String param) {
        String username = param;
        String info = "{\"info\":\"这个名字可以用！\",\"status\":\"y\"}";
        User user = userService.findByUsername(username);
        if (user != null) {
            info = "{\"info\":\"重名了，请取过名字！\",\"status\":\"n\"}";
        }
        return info;
    }

    @RequestMapping("/enableEmail")
    @ResponseBody
    public Object enableEmail(String param) {
        String email = param;
        String info = "{\"info\":\"这个邮箱可以用！\",\"status\":\"y\"}";
        User user = userService.findByEmail(email);
        if (user != null) {
            info = "{\"info\":\"该邮箱已经注册！\",\"status\":\"n\"}";
        }
        return info;
    }

    @RequestMapping("/validCode")
    @ResponseBody
    public String validCode(String param, HttpServletRequest request) {
        String info = "{\"info\":\"验证码正确！\",\"status\":\"y\"}";
        String validCode = param;
        boolean isResponseCorrect = imageCaptchaService.validateResponseForID(request.getSession().getId(), validCode);
        if (!isResponseCorrect) {
            request.getSession().setAttribute("validStatus", false);
            info = "{\"info\":\"验证码错误！\",\"status\":\"n\"}";
        } else {
            request.getSession().setAttribute("validStatus", true);
        }


        return info;
    }

    @RequestMapping("/reg.do")
    public String reg(User user, String validCode, HttpServletRequest request) {

        String url = "login";
//    boolean isResponseCorrect = imageCaptchaService.validateResponseForID(request.getSession().getId(), validCode);
        boolean validStatus = (boolean) request.getSession().getAttribute("validStatus");
        if (userService.findByUsername(user.getName()) == null && userService.findByEmail(user.getEmail()) == null && validStatus) {
            user.setRegDate(new Date());
            String salt = new SecureRandomNumberGenerator().nextBytes().toHex();
            user.setSalt(salt);
            user.setPassword(new Md5Hash(user.getPassword(), salt, 2).toString());
            User regedUser = userService.save(user);
            url = "redirect:/index";
        }
        return url;
    }

    @RequestMapping("/booksearch")
    public String booksearch(String keyWord,Model model,Integer page)
    {

       Page<Article> articlePage= readBookService.getArticleByNameLikeOrAuthorLike(keyWord,new PageRequest((page == null ? 1 : page) - 1, 15));
       model.addAttribute("articlePage",articlePage);
       return "booksearch";
    }


}
