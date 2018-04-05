package com.jgs.Service;

import com.jgs.entity.Article;
import com.jgs.entity.Chapter;
import com.jgs.entity.CollectRule;
import com.jgs.entity.Type;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/1/16 0016.
 */
public interface AdminService {
    List<Article> getAllArticle();

    void deleteBook(Long[] ids);

    void save(Article article);

    Type getTypeById(Long id);
    public void process(String templateName, Map<String, Chapter> rootMap,String fileName)throws Exception;

    List<CollectRule> getAllCollectRule();

    CollectRule save(CollectRule collectRule);

    CollectRule getCollectRuleById(Long id);

    void deleteCollectRuleByids(Long[] ids);

    Type getTypeByName(String typeName);

    Type save(Type type);

    Article getArticleByName(String bookName);
}
