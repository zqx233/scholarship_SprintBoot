package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeansException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 奖学金
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
@TableName("jiangxuejin")
public class JiangxuejinEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public JiangxuejinEntity() {
		
	}
	
	public JiangxuejinEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (BeansException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId(type = IdType.AUTO)
	private Long id;
	/**
	 * 名称
	 */
					
	private String mingcheng;
	
	/**
	 * 类型
	 */
					
	private String leixing;
	
	/**
	 * 详情
	 */
					
	private String xiangqing;
	
	/**
	 * 金额
	 */
					
	private Double jine;
	
	/**
	 * 申请对象
	 */
					
	private String shenqingduixiang;
	
	/**
	 * 专业限制
	 */
					
	private String zhuanyexianzhi;
	
	/**
	 * GPA要求
	 */
					
	private String gpayaoqiu;
	
	/**
	 * 语言要求
	 */
					
	private String yuyanyaoqiu;
	
	/**
	 * 封面
	 */
					
	private String fengmian;
	
	/**
	 * 辅导员账号
	 */
					
	private String fudaoyuanzhanghao;
	
	/**
	 * 辅导员姓名
	 */
					
	private String fudaoyuanxingming;
	

	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：名称
	 */
	public void setMingcheng(String mingcheng) {
		this.mingcheng = mingcheng;
	}
	/**
	 * 获取：名称
	 */
	public String getMingcheng() {
		return mingcheng;
	}
	/**
	 * 设置：类型
	 */
	public void setLeixing(String leixing) {
		this.leixing = leixing;
	}
	/**
	 * 获取：类型
	 */
	public String getLeixing() {
		return leixing;
	}
	/**
	 * 设置：详情
	 */
	public void setXiangqing(String xiangqing) {
		this.xiangqing = xiangqing;
	}
	/**
	 * 获取：详情
	 */
	public String getXiangqing() {
		return xiangqing;
	}
	/**
	 * 设置：金额
	 */
	public void setJine(Double jine) {
		this.jine = jine;
	}
	/**
	 * 获取：金额
	 */
	public Double getJine() {
		return jine;
	}
	/**
	 * 设置：申请对象
	 */
	public void setShenqingduixiang(String shenqingduixiang) {
		this.shenqingduixiang = shenqingduixiang;
	}
	/**
	 * 获取：申请对象
	 */
	public String getShenqingduixiang() {
		return shenqingduixiang;
	}
	/**
	 * 设置：专业限制
	 */
	public void setZhuanyexianzhi(String zhuanyexianzhi) {
		this.zhuanyexianzhi = zhuanyexianzhi;
	}
	/**
	 * 获取：专业限制
	 */
	public String getZhuanyexianzhi() {
		return zhuanyexianzhi;
	}
	/**
	 * 设置：GPA要求
	 */
	public void setGpayaoqiu(String gpayaoqiu) {
		this.gpayaoqiu = gpayaoqiu;
	}
	/**
	 * 获取：GPA要求
	 */
	public String getGpayaoqiu() {
		return gpayaoqiu;
	}
	/**
	 * 设置：语言要求
	 */
	public void setYuyanyaoqiu(String yuyanyaoqiu) {
		this.yuyanyaoqiu = yuyanyaoqiu;
	}
	/**
	 * 获取：语言要求
	 */
	public String getYuyanyaoqiu() {
		return yuyanyaoqiu;
	}
	/**
	 * 设置：封面
	 */
	public void setFengmian(String fengmian) {
		this.fengmian = fengmian;
	}
	/**
	 * 获取：封面
	 */
	public String getFengmian() {
		return fengmian;
	}
	/**
	 * 设置：辅导员账号
	 */
	public void setFudaoyuanzhanghao(String fudaoyuanzhanghao) {
		this.fudaoyuanzhanghao = fudaoyuanzhanghao;
	}
	/**
	 * 获取：辅导员账号
	 */
	public String getFudaoyuanzhanghao() {
		return fudaoyuanzhanghao;
	}
	/**
	 * 设置：辅导员姓名
	 */
	public void setFudaoyuanxingming(String fudaoyuanxingming) {
		this.fudaoyuanxingming = fudaoyuanxingming;
	}
	/**
	 * 获取：辅导员姓名
	 */
	public String getFudaoyuanxingming() {
		return fudaoyuanxingming;
	}

}
