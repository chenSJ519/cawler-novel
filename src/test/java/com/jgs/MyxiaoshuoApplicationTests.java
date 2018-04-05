package com.jgs;

import com.jgs.Dao.ArticleDao;
import com.jgs.Dao.UserArticlePKDao;
import com.jgs.Dao.UserDao;
import com.jgs.entity.Article;
import com.jgs.entity.Type;
import com.jgs.entity.User;
import com.jgs.entity.UserArticlePk;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MyxiaoshuoApplicationTests {
@Autowired
private ArticleDao articleDao;
@Autowired
private UserArticlePKDao userArticlePKDao;
@Autowired
private UserDao userDao;
@Test
public void testc()
{
	Page<Article> articleList=articleDao.findByNameContainingOrAuthorContaining("帝仙","dk",new PageRequest(0,15));
	int i=9;

}
	@Test
	public void contextLoads() {
		Long[] ids={109L,110L};
		Article article=new Article();
		article.setId(7L);
		Article article2=new Article();
		article2.setId(114L);
		ArrayList<Article> articles=new ArrayList<Article>();
		articles.add(article);
//		articles.add(article2);

//		articleDao.withDeleteByIdIn(109L);
//		articleDao.delete(articles);
//		articleDao.deleteByIdIn(ids);
//		User user=new User();
//		user.setId(1L);
//		List<Integer> list=new ArrayList<Integer>();
////		list.add(0);
//		list.add(2);
//		Integer[] list2=new Integer[2];
//		list2[0]=0;
//		list2[1]=1;
//		List<UserArticlePk> userArticlePkList=userArticlePKDao.findByUserAndBookCaseNumIn(user,list2);
//		article.setName("刚刚");
//		user.getArticleList().add(article);
//		userDao.save(user);
//		Article article=new Article();
//		article.setName("绝品医神");
//		Page<Article> articleList=  articleDao.findByAuto(article,new PageRequest(0,5));
//		List<Article> articleList1=articleList.getContent();
////		Article article1=0articleList1.get(0);
//		articleDao.findByAuthorAndName(null,"绝品医神");
		int i=1;
	}
	@Test
	public void texta()
	{
		Type type=new Type();
		type.setId(1L);
		List<Article> articleList=articleDao.findTop5ByTypeOrderByAllVisitDesc(type);
		int i=1;

	}
	@Test
	public void textb()
	{
		Connection conn=null;
		PreparedStatement ps=null;
		try {
			conn=getConnection();
			String sql="UPDATE article SET last_chapter_id=? where id=?";
			ps=conn.prepareStatement(sql);
			int k=390;
			for(int i=5;i<117;i++)
			{
				ps.setInt(1,k);
				ps.setInt(2,i);
				ps.executeUpdate();
				k++;
			}



		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				ps.close();
				conn.close();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

//	@Test
	public  void dotxt(int u)
	{
		Connection conn=null;
		PreparedStatement ps=null;
		BufferedReader bur=null;
		try {
			conn=getConnection();
			String sql="INSERT INTO chapter(chapter_name,txt,article_id) VALUES(?,?,?)";
			ps=conn.prepareStatement(sql);

			bur=new BufferedReader(new InputStreamReader(new FileInputStream("e:\\"+"abc.txt"),"gbk"));
//					InputStreamReader ir=new InputStreamReader(new FileInputStream(""));
			String s="";
			boolean flag=false;
			StringBuilder sb=new StringBuilder();
			String last="前言";
			int count=0;

			while((s=bur.readLine())!=null)
			{
				if(s.startsWith("第"))//s.matches(".*\u7B2C.{1,7}\u7AE0.*")
				{
					count++;
//					ps.setObject(1, count);
					ps.setObject(1, last);
					last=s;
					ps.setObject(2, sb.toString());
					ps.setObject(3, u);
					ps.executeUpdate();
					sb=new StringBuilder();
				}

				sb.append(s);

			}
			ps.setObject(1, last);
			ps.setObject(2, sb.toString());
			ps.setObject(3, u);
			ps.executeUpdate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				ps.close();
				conn.close();
				bur.close();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	private static Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/myxiaoshuo?useUnicode=true&characterEncoding=utf-8", "root", "123");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}

}
