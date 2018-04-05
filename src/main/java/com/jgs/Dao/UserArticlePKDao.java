package com.jgs.Dao;

import com.jgs.entity.Article;
import com.jgs.entity.User;
import com.jgs.entity.UserArticlePk;
import com.jgs.support.CustomRepository;

import java.util.List;

/**
 * Created by Administrator on 2017/1/15 0015.
 */
public interface UserArticlePKDao  extends CustomRepository<UserArticlePk,Long>{
    List<UserArticlePk> findByUserAndBookCaseNum(User user, Integer bookCaseNum);

    List<UserArticlePk> findByUserAndBookCaseNumIn(User user, Integer[] list);
    List<UserArticlePk> findByUserAndArticleIn(User userInfo, List<Article> list);
}
