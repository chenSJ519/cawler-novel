package com.jgs.utils;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.sql.*;

public class TxtUtils {
	private String fileName="";
	private Long bookId;
	public TxtUtils(String fileName,Long bookId) {
		// TODO Auto-generated constructor stub
		this.fileName=fileName;
		this.bookId=bookId;
	}
	public  Long dotxt()
	{
		Long bookid=1L;
		Connection conn=null;
		PreparedStatement ps=null;
		BufferedReader bur=null;
		try {
			conn=getConnection();
			String sql="INSERT INTO chapter(chapter_name,txt,article_id) VALUES(?,?,?)";
			ps=conn.prepareStatement(sql);

			bur=new BufferedReader(new InputStreamReader(new FileInputStream(fileName),"gbk"));
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
					ps.setObject(3, bookId);
					ps.executeUpdate();
					sb=new StringBuilder();
				}

				sb.append(s);

			}
			ps.setObject(1, last);
			ps.setObject(2, sb.toString());
			ps.setObject(3, bookId);
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





		try {
			conn=getConnection();

			//查询最后一章
			String sql2="SELECT MAX(id) bookid FROM chapter WHERE article_id="+bookId;
			ps=conn.prepareStatement(sql2);
			ResultSet rs=ps.executeQuery();
			while(rs.next())
			{
				bookid=rs.getLong("bookid");
			}
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


		return  bookid;
	}
	private static Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://192.168.181.130:3306/myxiaoshuo?useUnicode=true&characterEncoding=utf-8", "root", "123");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}
