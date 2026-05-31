package com.cl.dao;

import com.cl.entity.FudaoyuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.FudaoyuanView;


/**
 * 辅导员
 * 
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
public interface FudaoyuanDao extends BaseMapper<FudaoyuanEntity> {
	
	List<FudaoyuanView> selectListView(@Param("ew") Wrapper<FudaoyuanEntity> wrapper);

	List<FudaoyuanView> selectListView(Pagination page,@Param("ew") Wrapper<FudaoyuanEntity> wrapper);
	
	FudaoyuanView selectView(@Param("ew") Wrapper<FudaoyuanEntity> wrapper);


}
