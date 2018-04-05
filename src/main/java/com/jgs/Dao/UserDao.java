package com.jgs.Dao;

import com.jgs.entity.User;
import com.jgs.support.CustomRepository;

/**
 * Created by Administrator on 2017/1/14 0014.
 */

public interface UserDao extends CustomRepository<User,Long>{
    User findByName(String name);

    User findByEmail(String email);

    User findById(Long id);
    void deleteByIdIn(Long[] ids);
}
