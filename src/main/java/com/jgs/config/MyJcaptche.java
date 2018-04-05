package com.jgs.config;


import com.jgs.utils.CaptchaEngineEx;
import com.octo.captcha.service.captchastore.CaptchaStore;
import com.octo.captcha.service.captchastore.FastHashMapCaptchaStore;
import com.octo.captcha.service.image.DefaultManageableImageCaptchaService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Administrator on 2017/1/14 0014.
 */
@Configuration
public class MyJcaptche {
    @Bean
    public DefaultManageableImageCaptchaService imageCaptchaService()
    {
        DefaultManageableImageCaptchaService imageCaptchaService=new DefaultManageableImageCaptchaService(new FastHashMapCaptchaStore(),new CaptchaEngineEx(),180,100000,75000);
        return imageCaptchaService;
    }
}
