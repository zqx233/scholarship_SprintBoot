package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.*;
import java.lang.*;
import java.math.*;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.cl.utils.*;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;
import com.cl.annotation.SysLog;

import com.cl.entity.LeixingEntity;
import com.cl.entity.view.LeixingView;

import com.cl.service.LeixingService;
import com.cl.service.TokenService;

/**
 * 类型
 * 后端接口
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
@RestController
@RequestMapping("/leixing")
public class LeixingController {
    @Autowired
    private LeixingService leixingService;









    /**
     * 后台列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,LeixingEntity leixing,
                                            HttpServletRequest request){
                                    EntityWrapper<LeixingEntity> ew = new EntityWrapper<LeixingEntity>();
                                                        
        
        
        PageUtils page = leixingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, leixing), params), params));
        Map<String, String> deSens = new HashMap<>();
                                    //给需要脱敏的字段脱敏
        DeSensUtil.desensitize(page,deSens);
        return R.ok().put("data", page);
    }







    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,LeixingEntity leixing,
		HttpServletRequest request){
        EntityWrapper<LeixingEntity> ew = new EntityWrapper<LeixingEntity>();

		PageUtils page = leixingService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, leixing), params), params));
        Map<String, String> deSens = new HashMap<>();
        //给需要脱敏的字段脱敏
        DeSensUtil.desensitize(page,deSens);
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( LeixingEntity leixing){
       	EntityWrapper<LeixingEntity> ew = new EntityWrapper<LeixingEntity>();
      	ew.allEq(MPUtil.allEQMapPre( leixing, MPUtil.camelToSnake("leixing")));
        return R.ok().put("data", leixingService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(LeixingEntity leixing){
        EntityWrapper< LeixingEntity> ew = new EntityWrapper< LeixingEntity>();
 		ew.allEq(MPUtil.allEQMapPre( leixing, MPUtil.camelToSnake("leixing")));
		LeixingView leixingView =  leixingService.selectView(ew);
		return R.ok("查询类型成功").put("data", leixingView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        LeixingEntity leixing = leixingService.selectById(id);
		leixing = leixingService.selectView(new EntityWrapper<LeixingEntity>().eq("id", id));
        Map<String, String> deSens = new HashMap<>();
        //给需要脱敏的字段脱敏
        DeSensUtil.desensitize(leixing,deSens);
        return R.ok().put("data", leixing);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        LeixingEntity leixing = leixingService.selectById(id);
		leixing = leixingService.selectView(new EntityWrapper<LeixingEntity>().eq("id", id));
        Map<String, String> deSens = new HashMap<>();
        //给需要脱敏的字段脱敏
        DeSensUtil.desensitize(leixing,deSens);
        return R.ok().put("data", leixing);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    @SysLog("新增类型")
    public R save(@RequestBody LeixingEntity leixing, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(leixing);
        leixingService.insert(leixing);
        return R.ok().put("data",leixing.getId());
    }
    
    /**
     * 前端保存
     */
    @SysLog("新增类型")
    @RequestMapping("/add")
    public R add(@RequestBody LeixingEntity leixing, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(leixing);
        leixingService.insert(leixing);
        return R.ok();
    }


    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    @SysLog("修改类型")
    public R update(@RequestBody LeixingEntity leixing, HttpServletRequest request){
        //ValidatorUtils.validateEntity(leixing);
        leixingService.updateById(leixing);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @SysLog("删除类型")
    public R delete(@RequestBody Long[] ids){
        leixingService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }

    	








}
