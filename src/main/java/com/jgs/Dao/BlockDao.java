package com.jgs.Dao;

import com.jgs.entity.Block;
import com.jgs.support.CustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Administrator on 2017/1/7 0007.
 */
public interface BlockDao  extends JpaRepository<Block,Long> {

    Block findByBlockName(String str);
}
