package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.FudaoyuanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.FudaoyuanView;


/**
 * 辅导员
 *
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
public interface FudaoyuanService extends IService<FudaoyuanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<FudaoyuanView> selectListView(Wrapper<FudaoyuanEntity> wrapper);
   	
   	FudaoyuanView selectView(@Param("ew") Wrapper<FudaoyuanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<FudaoyuanEntity> wrapper);
   	
   
}

