package com.jgs.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by Administrator on 2017/1/7 0007.
 */
@Entity
public class Block implements Serializable{
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String blockName;
    @Column
    private String description;
    @Column
    private String vars;

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Block{" +
                "id=" + id +
                ", blockName='" + blockName + '\'' +
                ", description='" + description + '\'' +
                ", vars='" + vars + '\'' +
                '}';
    }

    public String getBlockName() {
        return blockName;
    }

    public void setBlockName(String blockName) {
        this.blockName = blockName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVars() {
        return vars;
    }

    public void setVars(String vars) {
        this.vars = vars;
    }
}
