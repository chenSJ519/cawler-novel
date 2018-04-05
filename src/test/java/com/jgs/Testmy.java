package com.jgs;

import org.junit.Test;

/**
 * Created by Administrator on 2017/1/23 0023.
 */
public class Testmy {
    @Test
    public void testa()
    {
        System.out.println("哈哈\\".replaceAll("\\?|\\\\|:|\\*|\"|<|>|\\||/",""));
        System.out.println("tt\\".replaceAll("\\\\",""));

        System.out.println("http://www.17k.com/book/2264063.html".substring(24,31));
        System.out.println(System.getProperty("os.name").contains("Window"));
    }
}
