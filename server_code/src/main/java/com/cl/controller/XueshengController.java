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

import com.cl.entity.TokenEntity;
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

import com.cl.entity.XueshengEntity;
import com.cl.entity.view.XueshengView;

import com.cl.service.XueshengService;
import com.cl.service.TokenService;

/**
 * 学生
 * 后端接口
 * @author 
 * @email 
 * @date 2026-01-25 17:42:37
 */
@RestController
@RequestMapping("/xuesheng")
public class XueshengController {
    @Autowired
    private XueshengService xueshengService;



	@Autowired
	private TokenService tokenService;

	
	/**
	 * 登录
	 */
	@IgnoreAuth
	@RequestMapping(value = "/login")
	public R login(String username, String password, String captcha, HttpServletRequest request) {
		XueshengEntity u = xueshengService.selectOne(new EntityWrapper<XueshengEntity>().eq("xuehao", username));
        if(u==null || !u.getMima().equals(password)) {
            return R.error("账号或密码不正确");
        }
    		String token = tokenService.generateToken(u.getId(), username,"xuesheng",  "学生" );
		return R.ok().put("token", token);
	}


	
	/**
     * 注册
     */
	@IgnoreAuth
    @RequestMapping("/register")
    public R register(@RequestBody XueshengEntity xuesheng){
    	//ValidatorUtils.validateEntity(xuesheng);
                            XueshengEntity u = xueshengService.selectOne(new EntityWrapper<XueshengEntity>().eq("xuehao", xuesheng.getXuehao()));
                                                            		if(u!=null) {
			return R.error("注册用户已存在");
		}
		Long uId = new Date().getTime();
		xuesheng.setId(uId);
        xueshengService.insert(xuesheng);
        return R.ok();
    }

	
	/**
	 * 退出
	 */
	@RequestMapping("/logout")
	public R logout(HttpServletRequest request) {
		request.getSession().invalidate();
		return R.ok("退出成功");
	}
	
	/**
     * 获取用户的session用户信息
     */
    @RequestMapping("/session")
    public R getCurrUser(HttpServletRequest request){
    	Long id = (Long)request.getSession().getAttribute("userId");
        return R.ok().put("data", xueshengService.selectView(new EntityWrapper<XueshengEntity>().eq("id", id)));
    }
    
    /**
     * 密码重置
     */
    @IgnoreAuth
	@RequestMapping(value = "/resetPass")
    public R resetPass(String username, HttpServletRequest request){
    	XueshengEntity u = xueshengService.selectOne(new EntityWrapper<XueshengEntity>().eq("xuehao", username));
    	if(u==null) {
    		return R.error("账号不存在");
    	}
        u.setMima("123456");
        xueshengService.updateById(u);
        return R.ok("密码已重置为：123456");
    }






    /**
     * 后台列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,XueshengEntity xuesheng,
                                                                                            HttpServletRequest request){
                                    EntityWrapper<XueshengEntity> ew = new EntityWrapper<XueshengEntity>();
                                                                                                                                        
        
        
        PageUtils page = xueshengService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, xuesheng), params), params));
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
    public R list(@RequestParam Map<String, Object> params,XueshengEntity xuesheng,
		HttpServletRequest request){
        EntityWrapper<XueshengEntity> ew = new EntityWrapper<XueshengEntity>();

		PageUtils page = xueshengService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, xuesheng), params), params));
        Map<String, String> deSens = new HashMap<>();
        //给需要脱敏的字段脱敏
        DeSensUtil.desensitize(page,deSens);
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( XueshengEntity xuesheng){
       	EntityWrapper<XueshengEntity> ew = new EntityWrapper<XueshengEntity>();
      	ew.allEq(MPUtil.allEQMapPre( xuesheng, MPUtil.camelToSnake("xuesheng")));
        return R.ok().put("data", xueshengService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(XueshengEntity xuesheng){
        EntityWrapper< XueshengEntity> ew = new EntityWrapper< XueshengEntity>();
 		ew.allEq(MPUtil.allEQMapPre( xuesheng, MPUtil.camelToSnake("xuesheng")));
		XueshengView xueshengView =  xueshengService.selectView(ew);
		return R.ok("查询学生成功").put("data", xueshengView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        XueshengEntity xuesheng = xueshengService.selectById(id);
		xuesheng = xueshengService.selectView(new EntityWrapper<XueshengEntity>().eq("id", id));
        Map<String, String> deSens = new HashMap<>();
        //给需要脱敏的字段脱敏
        DeSensUtil.desensitize(xuesheng,deSens);
        return R.ok().put("data", xuesheng);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        XueshengEntity xuesheng = xueshengService.selectById(id);
		xuesheng = xueshengService.selectView(new EntityWrapper<XueshengEntity>().eq("id", id));
        Map<String, String> deSens = new HashMap<>();
        //给需要脱敏的字段脱敏
        DeSensUtil.desensitize(xuesheng,deSens);
        return R.ok().put("data", xuesheng);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    @SysLog("新增学生")
    public R save(@RequestBody XueshengEntity xuesheng, HttpServletRequest request){
        if(xueshengService.selectCount(new EntityWrapper<XueshengEntity>().eq("xuehao", xuesheng.getXuehao()))>0) {
            return R.error("学号已存在");
        }
    	xuesheng.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(xuesheng);
        XueshengEntity u = xueshengService.selectOne(new EntityWrapper<XueshengEntity>().eq("xuehao", xuesheng.getXuehao()));
		if(u!=null) {
			return R.error("用户已存在");
		}
		xuesheng.setId(new Date().getTime());
        xueshengService.insert(xuesheng);
        return R.ok().put("data",xuesheng.getId());
    }
    
    /**
     * 前端保存
     */
    @SysLog("新增学生")
    @RequestMapping("/add")
    public R add(@RequestBody XueshengEntity xuesheng, HttpServletRequest request){
        if(xueshengService.selectCount(new EntityWrapper<XueshengEntity>().eq("xuehao", xuesheng.getXuehao()))>0) {
            return R.error("学号已存在");
        }
    	xuesheng.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(xuesheng);
        XueshengEntity u = xueshengService.selectOne(new EntityWrapper<XueshengEntity>().eq("xuehao", xuesheng.getXuehao()));
		if(u!=null) {
			return R.error("用户已存在");
		}
		xuesheng.setId(new Date().getTime());
        xueshengService.insert(xuesheng);
        return R.ok();
    }


    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    @SysLog("修改学生")
    public R update(@RequestBody XueshengEntity xuesheng, HttpServletRequest request){
        //ValidatorUtils.validateEntity(xuesheng);
        xueshengService.updateById(xuesheng);//全部更新
        if(null!=xuesheng.getXuehao())
        {
            // 修改token
            TokenEntity tokenEntity = new TokenEntity();
            tokenEntity.setUsername(xuesheng.getXuehao());
                            tokenEntity.setUsername(xuesheng.getXuehao());
                        tokenService.update(tokenEntity, new EntityWrapper<TokenEntity>().eq("userid", xuesheng.getId()));
        }
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @SysLog("删除学生")
    public R delete(@RequestBody Long[] ids){
        xueshengService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }

    	








}
