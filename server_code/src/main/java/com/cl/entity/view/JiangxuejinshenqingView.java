package com.cl.entity.view;

import com.cl.entity.JiangxuejinshenqingEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.math.BigDecimal;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeansException;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 奖学金申请
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
@TableName("jiangxuejinshenqing")
public class JiangxuejinshenqingView  extends JiangxuejinshenqingEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public JiangxuejinshenqingView(){
	}
 
 	public JiangxuejinshenqingView(JiangxuejinshenqingEntity jiangxuejinshenqingEntity){
 	try {
			BeanUtils.copyProperties(this, jiangxuejinshenqingEntity);
		} catch (BeansException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}



}
