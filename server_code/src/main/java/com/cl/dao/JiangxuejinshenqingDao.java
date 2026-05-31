package com.cl.dao;

import com.cl.entity.JiangxuejinshenqingEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.JiangxuejinshenqingView;


/**
 * 奖学金申请
 * 
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
public interface JiangxuejinshenqingDao extends BaseMapper<JiangxuejinshenqingEntity> {
	
	List<JiangxuejinshenqingView> selectListView(@Param("ew") Wrapper<JiangxuejinshenqingEntity> wrapper);

	List<JiangxuejinshenqingView> selectListView(Pagination page,@Param("ew") Wrapper<JiangxuejinshenqingEntity> wrapper);
	
	JiangxuejinshenqingView selectView(@Param("ew") Wrapper<JiangxuejinshenqingEntity> wrapper);


    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<JiangxuejinshenqingEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<JiangxuejinshenqingEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<JiangxuejinshenqingEntity> wrapper);



}
