package com.jgs.ServiceImpl;

import com.jgs.Dao.ArticleDao;
import com.jgs.Dao.CollectRuleDao;
import com.jgs.Dao.TypeDao;
import com.jgs.Service.AdminService;
import com.jgs.entity.Article;
import com.jgs.entity.Chapter;
import com.jgs.entity.CollectRule;
import com.jgs.entity.Type;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/1/16 0016.
 */
@Service("adminService")
public class AdminServiceImpl implements AdminService {
    @Autowired
    private ArticleDao articleDao;
    @Autowired
    private TypeDao typeDao;
    @Autowired
    private FreeMarkerConfigurer freeMarkerConfigurer;
    @Autowired
    private CollectRuleDao collectRuleDao;
    @Override
    public void process(String templateName, Map<String, Chapter> rootMap,String fileName)
            throws Exception {
        boolean isWindow=System.getProperty("os.name").contains("Window");
        Configuration configuration = freeMarkerConfigurer.getConfiguration();
        Template template = configuration.getTemplate(templateName);
        File file = new File((isWindow?"c:":"")+"/myxiaoshuo/chapterstatic/"+fileName+".html");

        Writer out = new OutputStreamWriter(new FileOutputStream(file), "UTF-8");
        template.process(rootMap, out);
        IOUtils.closeQuietly(out);

    }

    @Override
    public List<CollectRule> getAllCollectRule() {
        return collectRuleDao.findAll();
    }

    @Override
    public CollectRule save(CollectRule collectRule) {
        return collectRuleDao.save(collectRule);
    }

    @Override
    public CollectRule getCollectRuleById(Long id) {
        return collectRuleDao.findOne(id);
    }

    @Override
    public void deleteCollectRuleByids(Long[] ids) {
        List<CollectRule> collectRuleList=new ArrayList<>();
        for(Long id:ids)
        {
            CollectRule collectRule=new CollectRule();
            collectRule.setId(id);
            collectRuleList.add(collectRule);
        }
        collectRuleDao.delete(collectRuleList);
    }

    @Override
    public Type getTypeByName(String typeName) {
        return typeDao.findByTypeName(typeName);
    }

    @Override
    public Type save(Type type) {
        return typeDao.save(type);
    }

    @Override
    public Article getArticleByName(String bookName) {
        return articleDao.findByName(bookName);
    }

    @Override
    public List<Article> getAllArticle() {
        return articleDao.findAll();
    }

    @Override
    public void deleteBook(Long[] ids) {
        ArrayList<Article> articleArrayList=new ArrayList<Article>();
        for(Long id:ids)
        {
            Article article=new Article();
            article.setId(id);
            articleArrayList.add(article);
        }
         articleDao.delete(articleArrayList);
    }

    @Override
    public void save(Article article) {
        articleDao.save(article);
    }

    @Override
    public Type getTypeById(Long id) {
        return typeDao.findOne(id);
    }
}
