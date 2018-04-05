package com.jgs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by Administrator on 2017/1/4 0004.
 */
@Controller
public class PublicController {
    private final ResourceLoader resourceLoader;
    @Autowired
    public PublicController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }
    @RequestMapping(value = "/{url}")
    public String Dispath(@PathVariable("url") String url) {
        return url;
    }

    @RequestMapping("/admin/{url}")
    public String toTeacher(@PathVariable("url") String view) {
        return "admin/" + view;
    }
    @RequestMapping(method = RequestMethod.GET, value = "/bookimage/{filename:.+}")
    @ResponseBody
    public ResponseEntity<?> getFile(@PathVariable String filename) {
            boolean isWindow=System.getProperty("os.name").contains("Window");
        try {
            return ResponseEntity.ok(resourceLoader.getResource("file:" + (isWindow?"c:":"")+"/bookimage/"+filename));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    @RequestMapping(method = RequestMethod.GET, value = "/bookdownload/{filename:.+}")
    @ResponseBody
    public ResponseEntity<?> bookdownload(@PathVariable String filename, HttpServletResponse response) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        try {
            return ResponseEntity.ok(resourceLoader.getResource("file:" + (isWindow?"c:":"")+"/bookdownload/"+filename));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    @RequestMapping(method = RequestMethod.GET, value = "/chapterstatic/{filename:.+}")
    @ResponseBody
    public ResponseEntity<?> getChapter(@PathVariable String filename) {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        try {
            return ResponseEntity.ok(resourceLoader.getResource("file:" + (isWindow?"c:":"")+"/myxiaoshuo/chapterstatic/"+filename));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }


}
