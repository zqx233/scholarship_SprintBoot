<template>
	<div class="register_view">
<div class="backgif">
<div class="form" style="z-index: 1;">
    <div class="logo"></div>
    <div class="projectName">{{projectName}}注册</div>
			<div class="register_form">
				<div class="list_item">
					<div class="list_label">辅导员账号：</div>
					<el-input class="list_inp"
						 v-model="registerForm.fudaoyuanzhanghao"
						 placeholder="请输入辅导员账号"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">密码：</div>
					<el-input class="list_inp"
						 v-model="registerForm.mima"
						 placeholder="请输入密码"
						 type="password"
					     show-password
						 />
				</div>
				<div class="list_item">
					<div class="list_label">确认密码：</div>
					<el-input class="list_inp" v-model="registerForm.mima2" type="password" placeholder="请输入确认密码" show-password />
				</div>
				<div class="list_item">
					<div class="list_label">辅导员姓名：</div>
					<el-input class="list_inp"
						 v-model="registerForm.fudaoyuanxingming"
						 placeholder="请输入辅导员姓名"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">头像：</div>
					<div class="list_file_list">
						<uploads
							action="file/upload"
							tip="请上传头像"
							:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
							@change="touxiangUploadSuccess">
						</uploads>
					</div>
				</div>
				<div class="list_item">
					<div class="list_label">联系方式：</div>
					<el-input class="list_inp"
						 v-model="registerForm.lianxifangshi"
						 placeholder="请输入联系方式"
						 type="text"
						/>
				</div>
			</div>

    <el-button class="register" @click="handleRegister">注册</el-button>
    <div class="back" @click="close">已有账号，直接登录</div>
    <div class="form-circle1"></div>
    <div class="form-circle2"></div>
</div>
    </div>
<div class="circle1"></div>
<div class="circle2"></div>

	</div>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		nextTick,
		onMounted,
	} from 'vue';
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context.$project.projectName
	//获取注册类型
	import { useRoute } from 'vue-router';
	const route = useRoute()
	const tableName = ref('fudaoyuan')
	
	//公共方法
	const getUUID=()=> {
		return new Date().getTime();
	}
	const registerForm = ref({
	})
	const init=()=>{
	}
    const touxiangUploadSuccess=(fileUrls)=> {
        registerForm.value.touxiang = fileUrls;
    }

	//注册按钮
	const handleRegister = () => {
		let url = tableName.value +"/register";
		if((!registerForm.value.fudaoyuanzhanghao)){
			context?.$toolUtil.message(`辅导员账号不能为空`,'error')
			return false
		}
		if((!registerForm.value.mima)){
			context?.$toolUtil.message(`密码不能为空`,'error')
			return false
		}
		if(registerForm.value.mima!=registerForm.value.mima2){
			context?.$toolUtil.message('两次密码输入不一致','error')
			return false
		}
		if(registerForm.value.touxiang!=null){
			registerForm.value.touxiang = registerForm.value.touxiang.replace(new RegExp(context?.$config.url,"g"),"");
		}
		context?.$http({
			url:url,
			method:'post',
			data:registerForm.value
		}).then(res=>{
			context?.$toolUtil.message('注册成功','success', obj=>{
				context?.$router.push({
					path: "/login"
				});
			})
		})
	}
	//返回登录
	const close = () => {
		context?.$router.push({
			path: "/login"
		});
	}
	init()
	onMounted(()=>{

	})
</script>
<style lang="scss">
	.register_view {
        background-image: url("http://clfile.zggen.cn/20250725/fb77905eda474cf29de2854b7bbfed30.webp")!important;
	}
.register_view {
   
  background-color:none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
     
background:#D6E1E7;
      background-size: cover;
  background-position: center;
  background-attachment: fixed;
    min-height:100vh ;
}

.register_view .form {
    background: #fcfcf4;
    width: 700px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
    border-radius: 0px;
    position: relative;
    overflow: hidden;
    text-align: center;
}

.register_view .projectName {
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-top: 20px;
}
.register_view .logo {
    background: url(http://clfile.zggen.cn/20250725/889d208e5ddd4107bce6600713cdf6d1.webp);
    background-size: 100% 100%;
    width: 80px;
    height: 80px;
    animation: float 3s ease-in-out infinite;
    margin: 0 auto;
}
@keyframes float{
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.register_view .circle1 {
    position: absolute;
    left: 100px;
    top: 100px;
    background: #daf4dc;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 1;
    animation: float 4s ease-in-out infinite;
}

.register_view .circle2 {
    position: absolute;
    right: 100px;
    bottom: 100px;
    background: #EBEFD9;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    z-index: 0;
    animation: float 5s ease-in-out infinite;
}
.register_view .form-circle1 {
    position: absolute;
    right: -34px;
    top: -32px;
    background: #dff6e9;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    z-index: -1;
}

.register_view .form-circle2 {
    position: absolute;
    left: -34px;
    bottom: -32px;
    background: #f7efeb;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    z-index: -1;
}


.register_view .register_form {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    padding: 0 50px;
}

.register_view .list_item {
    display: flex;
    align-items: center;
}

.register_view .list_label {
    width: 100%;
    text-align: right;
}

.register_view .list_code {
    display: flex;
}

.register_view .list_code_item {display: flex;gap: 20px;}

.register_view .register {
    background: var(--theme);
    border: none;
    color: #fff;
    width: 60%;
    margin-top: 30px;
    height: 40px;
    font-size: 18px;
}

.register_view .back {
    width: 50%;
    margin: 20px auto;
}
.register_view .backgif {
   width: 1107px;
  height: 1080px;
  background-image: url('http://clfile.zggen.cn/20250805/40ac7c5f1da54ac09a77ac5707af19a8.gif');
  background-size: cover;  
  background-position: top center;  
  background-repeat: no-repeat;
}
.register_view  .form {
   width:813px!important;
    height: 1080px;
  
    background:#FFFFFF!important;
}
.circle1 {
    display:none;
}

.circle2 {
    display:none;
    
}

.register_view .logo {
    display:none;
    
}

.form-circle1 {
    display:none;
    
}

.form-circle2 {
    display:none;
    
}
.register_view .register_form {
    display:block!important;
}

.register_view .list_item {
    width:100%!important;
    display: flex; 
    flex-direction: column; 
    margin-top:40px;
}

.register_view .list_label {
    width:100%!important;
    text-align: left!important;
}

.register_view .el-input.list_inp {
    width:100% !important;
}
.register_view .el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.list_date.el-tooltip__trigger.el-tooltip__trigger {
}

.register_view .el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.list_date.el-tooltip__trigger.el-tooltip__trigger {
    width:100%!important;
}

.register_view .el-select.list_sel {
    width:100% !important;
 
}

.register_view .list_file_list {
    width:100%;
}

.register_view .upload-demo {
    margin-right:auto!important;
}



.register_view .list_label {
    font-family: Source Han Sans, Source Han Sans;
font-weight: 400;
font-size: 14px;
color: #9CA3AF;
line-height: 12px;
text-align: left;
font-style: normal;
text-transform: none;
}

.register_view .register_form {
  overflow-y: auto!important;  
}

.register_view .list_item {

    
    align-items:flex-start!important;
}

.register_view .form {

    overflow-y: auto !important;
    display: block !important;
    z-index: 1000;
    
}
.register_view .form {
    overflow-x: hidden !important; 
    overflow-y: auto !important;
    display: block !important;
    z-index: 1000;
    
    background:#FFFFFF!important;
    width:813px!important;
    height: 1080px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    border-radius: 0px;
    position: relative;
    text-align: center;
}
.register_view .form {
  width: 500px!important;
height: 920px!important;

    margin-left:auto!important;
   
    background:#FFFFFF!important;
       overflow-y: auto; 
  
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}
.register_view .backgif {
    
  width: 1410px!important;  
  height: 920px!important;   
  
  
  background: 
    url('http://clfile.zggen.cn/20250820/8a2b2fea74b64473bb64a7cb4b086fad.png') 
    center / contain 
    no-repeat !important;


  
  border-radius: 0px;
  margin: 100px auto;
  box-sizing: border-box; 
}

.register_view .list_item {
  margin:20px auto!important;
  width:100%!important;
  padding:1px;
  padding-left:1px;
}
.register_view .list_item {
  display: flex;
  flex-direction: row; 
   align-items: center!important; 
  margin-top: 40px;
background: #FFFFFF!important;
border-radius: 5px 5px 5px 5px!important;
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
}



.register_view .list_label {
    width:auto!important;
    padding: 10px;
  height:100%!important;
 color: #FEB955;
}

.register_view .el-input__wrapper {
  border:0px!important;
  box-shadow:none;
}

.register_view .el-input.list_inp {
    flex: 1;
}



.register_view .el-select__wrapper.el-tooltip__trigger.el-tooltip__trigger {
  border:0px!important;
  box-shadow:none;
}
.register_view .list_label {
  position: relative !important;
  z-index: 1;
color: #274960;
font-weight: 400;
font-size: 16px;
  
}



.register_view button.el-button.register {
    width: 400px;
    height: 60px;
     background: url(http://clfile.zggen.cn/20250821/50982152ebdf45a886c1816860f0ddfd.png) no-repeat !important;
     background-size:contain!important;



}
.register_view button.el-button.register span{
    font-family: Source Han Sans, Source Han Sans;
    font-weight: 700!important;
    font-size: 20px!important;
    color: #FFF;
 
}

.register_view .list_label {
  display: inline-flex; 
  white-space: nowrap; 
  flex-shrink: 0; 
  flex-grow: 0; 
  flex-basis: auto; 
    background: url('http://clfile.zggen.cn/20250820/5e7f2f25882e4a62833f425f5793f957.png')no-repeat center !important; 
  background-size: contain !important;  


}

</style>