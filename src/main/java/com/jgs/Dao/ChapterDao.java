package com.jgs.Dao;

import com.jgs.entity.Chapter;
import com.jgs.support.CustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Administrator on 2017/1/5 0005.
 */
public interface ChapterDao extends JpaRepository<Chapter,Long> {
    public Chapter findById(Long id);
}
