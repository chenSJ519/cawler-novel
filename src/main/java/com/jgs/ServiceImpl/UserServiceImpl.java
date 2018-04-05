package com.jgs.ServiceImpl;

import com.jgs.Dao.UserDao;
import com.jgs.Service.UserService;
import com.jgs.entity.Article;
import com.jgs.entity.Role;
import com.jgs.entity.User;
import com.jgs.entity.UserArticlePk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jgs.Dao.UserArticlePKDao;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * Created by Administrator on 2017/1/14 0014.
 */
@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private UserArticlePKDao userArticlePKDao;
    @Override
    public Set<String> findRoles(String username) {
        Set<String > set=new HashSet<>();
        User user=userDao.findByName(username);
        List<Role> roles=userDao.findByName(username).getRoles();
        for(Role r:roles)
        {
            set.add(r.getRoleName());
        }
        return set;
    }

    @Override
    public Set<String> findPermissions(String username) {
        return null;
    }

    @Override
    public User findByUsername(String username) {
        return userDao.findByName(username);
    }

    @Override
    public User findByEmail(String email) {
        return userDao.findByEmail(email);
    }

    @Override
    public User save(User user) {
        return userDao.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userDao.findById(id);
    }

    @Override
    public UserArticlePk save(UserArticlePk userArticlePk) {
        return userArticlePKDao.save(userArticlePk);
    }

    @Override
    public List<UserArticlePk> getUserArticlePKByUserAndBookCaseNum(User user, Integer bookCaseNum) {
        return userArticlePKDao.findByUserAndBookCaseNum(user,bookCaseNum);
    }




    @Override
    public List<UserArticlePk> save(List<UserArticlePk> list) {
        return userArticlePKDao.save(list);
    }



    @Override
    public List<UserArticlePk> getUserArticlePKByUserAndArticleIn(User userInfo, List<Article> list) {
        return userArticlePKDao.findByUserAndArticleIn(userInfo,list);
    }

    @Override
    public void delete(List<UserArticlePk> userArticlePks) {
        userArticlePKDao.delete(userArticlePks);
    }


}
