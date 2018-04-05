package com.jgs.Dao;

import com.jgs.entity.Article;
import com.jgs.entity.Type;
import com.jgs.support.CustomRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by Administrator on 2017/1/5 0005.
 */
public interface ArticleDao extends CustomRepository<Article,Long>{
    Article findById(Long id);
    List<Article> findAll();
    List<Article> findTop17ByOrderByAllVisitDesc();
    List<Article> findTop17ByOrderByMonthVisitDesc();
    List<Article> findTop17ByOrderByWeekVisitDesc();
    List<Article> findTop7ByOrderByDayVisitDesc();
    List<Article> findTop17ByOrderByAllVoteDesc();
    List<Article> findTop17ByOrderByMonthVoteDesc();
    List<Article> findTop17ByOrderByWeekVoteDesc();
    List<Article> findTop17ByOrderByDayVoteDesc();
    List<Article> findTop11ByOrderByLastUpdateDesc();
    List<Article> findTop10ByOrderByPostDateDesc();
    List<Article> findTop10ByOrderBySizeDesc();
    List<Article> findTop5ByTypeOrderByAllVisitDesc(Type type);



    List<Article> findByAuthorAndNameNot(String author,String bookName);
    List<Article> findByAuthorAndName(String author,String bookName);


    Article findByName(String bookName);

    List<Article> findByIdIn(Long ids);


    Page<Article> findByNameContainingOrAuthorContaining(String keyWord, String keyWord2, Pageable pageRequest);

    List<Article> findTop10ByOrderByAllVisitDesc();

    List<Article> findTop10ByOrderByAllVoteDesc();
}
