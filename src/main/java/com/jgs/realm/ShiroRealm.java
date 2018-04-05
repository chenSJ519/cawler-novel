package com.jgs.realm;


import com.jgs.Dao.UserDao;
import com.jgs.Service.ReadBookService;
import com.jgs.Service.UserService;
import com.jgs.utils.HistoryBean;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import  com.jgs.entity.User;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>User: Zhang Kaitao
 * <p>Date: 14-1-28
 * <p>Version: 1.0
 */
public class ShiroRealm extends AuthorizingRealm {

    @Autowired
    private UserService userService;
    @Autowired
    private ReadBookService readBookService;


    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String username = (String)principals.getPrimaryPrincipal();

        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        authorizationInfo.setRoles(userService.findRoles(username));
        authorizationInfo.setStringPermissions(userService.findPermissions(username));

        return authorizationInfo;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username = (String)token.getPrincipal();

        User user = userService.findByUsername(username);

        if(user == null) {
            throw new UnknownAccountException();//没找到帐号
        }

//        if(Boolean.TRUE.equals(user.getLocked())) {
//            throw new LockedAccountException(); //帐号锁定
//        }

        //交给AuthenticatingRealm使用CredentialsMatcher进行密码匹配，如果觉得人家的不好可以自定义实现
        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
                user.getName(), //用户名
                user.getPassword(), //密码
                ByteSource.Util.bytes(user.getSalt()),
               //salt=username+salt
               "xx"  //realm name
        );
        User userInfo=new User();
        userInfo.setName(user.getName());
        userInfo.setId(user.getId());
        String[] historys=user.getHistory().split(",");
        List<HistoryBean> historyBeanList=new ArrayList<>();
        if(!historys[0].equals(""))
        {
            for(String h:historys)
            {
                String[] hs=h.split(":");
                HistoryBean historyBean=new HistoryBean();
                historyBean.setBookName(readBookService.getArticleById(Long.parseLong(hs[0])).getName());
                historyBean.setChapterId(Long.parseLong(hs[1]));
                historyBean.setBookId(Long.parseLong(hs[0]));

                historyBeanList.add(historyBean);
            }
        }

        Session httpSession=SecurityUtils.getSubject().getSession();
        httpSession.setAttribute("userInfo",userInfo);
        httpSession.setAttribute("historyList",historyBeanList);
        return authenticationInfo;
    }

    @Override
    public void clearCachedAuthorizationInfo(PrincipalCollection principals) {
        super.clearCachedAuthorizationInfo(principals);
    }

    @Override
    public void clearCachedAuthenticationInfo(PrincipalCollection principals) {
        super.clearCachedAuthenticationInfo(principals);
    }

    @Override
    public void clearCache(PrincipalCollection principals) {
        super.clearCache(principals);
    }

    public void clearAllCachedAuthorizationInfo() {
        getAuthorizationCache().clear();
    }

    public void clearAllCachedAuthenticationInfo() {
        getAuthenticationCache().clear();
    }

    public void clearAllCache() {
        clearAllCachedAuthenticationInfo();
        clearAllCachedAuthorizationInfo();
    }

}
