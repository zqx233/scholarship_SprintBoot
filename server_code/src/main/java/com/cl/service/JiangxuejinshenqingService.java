package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.JiangxuejinshenqingEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.JiangxuejinshenqingView;


/**
 * 奖学金申请
 *
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
public interface JiangxuejinshenqingService extends IService<JiangxuejinshenqingEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<JiangxuejinshenqingView> selectListView(Wrapper<JiangxuejinshenqingEntity> wrapper);
   	
   	JiangxuejinshenqingView selectView(@Param("ew") Wrapper<JiangxuejinshenqingEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<JiangxuejinshenqingEntity> wrapper);
   	
   
    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<JiangxuejinshenqingEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<JiangxuejinshenqingEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<JiangxuejinshenqingEntity> wrapper);



}

