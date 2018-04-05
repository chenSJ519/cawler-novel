package com.jgs.ServiceImpl;

import com.jgs.Dao.ArticleDao;
import com.jgs.Dao.BlockDao;
import com.jgs.Dao.ChapterDao;
import com.jgs.Dao.TypeDao;
import com.jgs.Service.ReadBookService;
import com.jgs.entity.Article;
import com.jgs.entity.Block;
import com.jgs.entity.Chapter;
import com.jgs.entity.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/1/5 0005.
 */
@Service("readBookService")
public class ReadBookServiceImpl implements ReadBookService{
    @Autowired
    private ArticleDao articleDao;
    @Autowired
    private ChapterDao chapterDao;
    @Autowired
    private BlockDao blockDao;
    @Autowired
    private TypeDao typeDao;

    @Override
    public Article getArticleById(Long id) {
        return articleDao.findById(id);
    }

    @Override
    public Chapter getChapterById(Long id) {
        return chapterDao.findById(id);
    }

    @Override
    public List<Article> getAllBook() {
        return articleDao.findAll();
    }

    @Override
    public Block getBlockByName(String str) {
        return blockDao.findByBlockName(str);
    }
//通过字符串来得到小说集合
    @Override
    public List<Article> getBookListByBlockVars(String vars) {
        String[] strs= vars.split(",");
        List<Article> articleList=new ArrayList<Article>();
        for(String s:strs)
        {
            articleList.add(articleDao.findById(Long.parseLong(s)));
        }
        return articleList;
    }


    @Override
    public List<Article> getTop17ByOrderByAllVisitDesc() {
        return articleDao.findTop17ByOrderByAllVisitDesc();
    }

    @Override
    public List<Article> getTop17ByOrderByMonthVisitDesc() {
        return articleDao.findTop17ByOrderByMonthVisitDesc();
    }

    @Override
    public List<Article> getTop17ByOrderByWeekVisitDesc() {
        return articleDao.findTop17ByOrderByWeekVisitDesc();
    }

    @Override
    public List<Article> getTop7ByOrderByDayVisitDesc() {
        return articleDao.findTop7ByOrderByDayVisitDesc();
    }

    @Override
    public List<Article> getTop17ByOrderByAllVoteDesc() {
        return articleDao.findTop17ByOrderByAllVoteDesc();
    }

    @Override
    public List<Article> getTop17ByOrderByMonthVoteDesc() {
        return articleDao.findTop17ByOrderByMonthVoteDesc();
    }

    @Override
    public List<Article> getTop17ByOrderByWeekVoteDesc() {
        return articleDao.findTop17ByOrderByWeekVoteDesc();
    }

    @Override
    public List<Article> getTop17ByOrderByDayVoteDesc() {
        return articleDao.findTop17ByOrderByDayVoteDesc();
    }

    @Override
    public List<Article> getTop11ByOrderByLastUpdateDesc() {
        return articleDao.findTop11ByOrderByLastUpdateDesc();
    }

    @Override
    public List<Article> getTop10ByOrderByPostDateDesc() {
        return articleDao.findTop10ByOrderByPostDateDesc();
    }

    @Override
    public List<Article> getTop10ByOrderBySizeDesc() {
        return articleDao.findTop10ByOrderBySizeDesc();
    }

    @Override
    public List<List<Article>> getFourType(String vars) {
        String[] strs=vars.split(",");
        List<List<Article>> list=new ArrayList<List<Article>>();
        for(String s:strs)
        {
            Type type=new Type();
            type.setId(Long.parseLong(s));
            list.add( articleDao.findTop5ByTypeOrderByAllVisitDesc(type));
        }
        return list;
    }

    @Override
    public List<Article> getByAuthorAndNameNot(String author,String bookName) {
        return articleDao.findByAuthorAndNameNot(author,bookName);
    }

    @Override
    public Page<Article> getBookTypeByCondition(Specification<Article> specification, PageRequest pageRequest) {
        return articleDao.findAll(specification,pageRequest);
    }

    @Override
    public List<Type> getAllType() {
        return typeDao.findAll();
    }

    @Override
    public List<Article> getArticleByIds(Long ids) {
        return articleDao.findByIdIn(ids);
    }

    @Override
    public Page<Article> getArticleByNameLikeOrAuthorLike(String keyWord, PageRequest pageRequest) {

        return articleDao.findByNameContainingOrAuthorContaining( keyWord,keyWord, pageRequest);
    }

    @Override
    public List<Article> getTop10ByOrderByAllVisitDesc() {
        return articleDao.findTop10ByOrderByAllVisitDesc();
    }

    @Override
    public List<Article> getTop10ByOrderByAllVoteDesc() {
        return articleDao.findTop10ByOrderByAllVoteDesc();
    }


}
