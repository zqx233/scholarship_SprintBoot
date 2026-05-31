package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.LeixingEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.LeixingView;


/**
 * 类型
 *
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
public interface LeixingService extends IService<LeixingEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<LeixingView> selectListView(Wrapper<LeixingEntity> wrapper);
   	
   	LeixingView selectView(@Param("ew") Wrapper<LeixingEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<LeixingEntity> wrapper);
   	
   
}

