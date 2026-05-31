package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.JiangxuejinDao;
import com.cl.entity.JiangxuejinEntity;
import com.cl.service.JiangxuejinService;
import com.cl.entity.view.JiangxuejinView;

@Service("jiangxuejinService")
public class JiangxuejinServiceImpl extends ServiceImpl<JiangxuejinDao, JiangxuejinEntity> implements JiangxuejinService {

    	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<JiangxuejinEntity> page = this.selectPage(
                new Query<JiangxuejinEntity>(params).getPage(),
                new EntityWrapper<JiangxuejinEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<JiangxuejinEntity> wrapper) {
		  Page<JiangxuejinView> page =new Query<JiangxuejinView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<JiangxuejinView> selectListView(Wrapper<JiangxuejinEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public JiangxuejinView selectView(Wrapper<JiangxuejinEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}
	
	

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<JiangxuejinEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<JiangxuejinEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<JiangxuejinEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }




}
