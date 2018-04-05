package com.jgs.Dao;

import com.jgs.entity.Type;
import com.jgs.support.CustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Administrator on 2017/1/7 0007.
 */
public interface TypeDao extends JpaRepository<Type,Long> {
    Type findByTypeName(String bookTypesout);
//    Type findbyidorderbyallvisitdesc(Long id);

}
