package com.cl.dao;

import com.cl.entity.JiangxuejinEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.JiangxuejinView;


/**
 * 奖学金
 * 
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
public interface JiangxuejinDao extends BaseMapper<JiangxuejinEntity> {
	
	List<JiangxuejinView> selectListView(@Param("ew") Wrapper<JiangxuejinEntity> wrapper);

	List<JiangxuejinView> selectListView(Pagination page,@Param("ew") Wrapper<JiangxuejinEntity> wrapper);
	
	JiangxuejinView selectView(@Param("ew") Wrapper<JiangxuejinEntity> wrapper);


    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<JiangxuejinEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<JiangxuejinEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<JiangxuejinEntity> wrapper);



}
