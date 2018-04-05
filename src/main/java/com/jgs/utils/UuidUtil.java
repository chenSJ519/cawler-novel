package com.jgs.utils;
import java.util.UUID;

/**
 * ����UUID��ɹ�����
  * @desc: TODO
  * @author songzhantao
  * @date 2016��9��2�� ����3:04:29
 */
public class UuidUtil {
	/**
	 * ���һ��32λ��UUID
	 * @return
	 */
	public  static String getId(){
	/*	Date date=new Date();
		double d =Math.random()*10000000;
		String strDate=String.valueOf(date.getTime()+Math.floor(d));*/
		return UUID.randomUUID().toString().replaceAll("-", "");
	}
	
	
}
