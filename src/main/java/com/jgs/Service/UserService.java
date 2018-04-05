package com.jgs.Service;

import com.jgs.entity.Article;
import com.jgs.entity.User;
import com.jgs.entity.UserArticlePk;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * Created by Administrator on 2017/1/14 0014.
 */
public interface UserService {
    Set<String> findRoles(String username);

    Set<String> findPermissions(String username);

    User findByUsername(String username);

    User findByEmail(String email);

    User save(User user);

    User getUserById(Long id);

    UserArticlePk save(UserArticlePk userArticlePk);

    List<UserArticlePk> getUserArticlePKByUserAndBookCaseNum(User user, Integer bookCaseNum);

    List<UserArticlePk> save(List<UserArticlePk> list);


    List<UserArticlePk> getUserArticlePKByUserAndArticleIn(User userInfo, List<Article> list);

    void delete(List<UserArticlePk> userArticlePks);
}
