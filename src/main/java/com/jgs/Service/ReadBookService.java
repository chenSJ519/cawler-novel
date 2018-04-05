package com.jgs.Service;

import com.jgs.entity.Article;
import com.jgs.entity.Block;
import com.jgs.entity.Chapter;
import com.jgs.entity.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

/**
 * Created by Administrator on 2017/1/5 0005.
 */
public interface ReadBookService {
    Article getArticleById(Long id);

    Chapter getChapterById(Long id);

    List<Article> getAllBook();

    Block getBlockByName(String str);

    List<Article> getBookListByBlockVars(String vars);

    List<Article> getTop17ByOrderByAllVisitDesc();
    List<Article> getTop17ByOrderByMonthVisitDesc();
    List<Article> getTop17ByOrderByWeekVisitDesc();
    List<Article> getTop7ByOrderByDayVisitDesc();
    List<Article> getTop17ByOrderByAllVoteDesc();
    List<Article> getTop17ByOrderByMonthVoteDesc();
    List<Article> getTop17ByOrderByWeekVoteDesc();
    List<Article> getTop17ByOrderByDayVoteDesc();
    List<Article> getTop11ByOrderByLastUpdateDesc();
    List<Article> getTop10ByOrderByPostDateDesc();
    List<Article> getTop10ByOrderBySizeDesc();

    List<List<Article>> getFourType(String vars);

    List<Article> getByAuthorAndNameNot(String author,String bookName);

    Page<Article> getBookTypeByCondition(Specification<Article> specification,PageRequest pageRequest);

    List<Type> getAllType();

    List<Article> getArticleByIds(Long ids);

    Page<Article> getArticleByNameLikeOrAuthorLike(String keyWord, PageRequest pageRequest);

    List<Article> getTop10ByOrderByAllVisitDesc();

    List<Article> getTop10ByOrderByAllVoteDesc();
}
