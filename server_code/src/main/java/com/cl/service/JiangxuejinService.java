package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.JiangxuejinEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.JiangxuejinView;


/**
 * 奖学金
 *
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
public interface JiangxuejinService extends IService<JiangxuejinEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<JiangxuejinView> selectListView(Wrapper<JiangxuejinEntity> wrapper);
   	
   	JiangxuejinView selectView(@Param("ew") Wrapper<JiangxuejinEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<JiangxuejinEntity> wrapper);
   	
   
    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<JiangxuejinEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<JiangxuejinEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<JiangxuejinEntity> wrapper);



}

