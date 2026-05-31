<template>
    <div class="register_view">
<div class="form" style="z-index: 1;">
    <div class="logo"></div>
    <div class="projectName">{{projectName}}注册</div>
			<div class="register_form">
				<div class="list_item">
					<div class="list_label">学号：</div>
					<el-input class="list_inp"
						 v-model="registerForm.xuehao"
						 placeholder="请输入学号"
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
					<div class="list_label">学生姓名：</div>
					<el-input class="list_inp"
						 v-model="registerForm.xueshengxingming"
						 placeholder="请输入学生姓名"
						 type="text"
						/>
				</div>
				<div class="list_item">
					<div class="list_label">联系方式：</div>
					<el-input class="list_inp"
						 v-model="registerForm.lianxifangshi"
						 placeholder="请输入联系方式"
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
			</div>

      <div class="back" @click="close">已有账号，直接登录</div>
    <el-button class="register" @click="handleRegister">注册</el-button>
  
    <div class="form-circle1"></div>
    <div class="form-circle2"></div>
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
	const tableName = ref('xuesheng')

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
		if((!registerForm.value.xuehao)){
			context?.$toolUtil.message(`学号不能为空`,'error')
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
		if(registerForm.value.lianxifangshi&&(!context?.$toolUtil.isMobile(registerForm.value.lianxifangshi))){
			context?.$toolUtil.message(`联系方式应输入手机格式`,'error')
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
        background-image: url("http://clfile.zggen.cn/20250930/f6544fae4c6044d884c1df42f522e0ef.jpg")!important;
	}
.register_view {
 
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    margin-left:auto;
    margin-right: auto;
    background:url()no-repeat;
    background-size:100% 100%;
    min-height:100vh ;
}

.register_view .form {

     margin-top:60px;
    margin-bottom: 30px;
    padding: 50px 30px 30px 30px;  
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 600px;
background: linear-gradient( 180deg, rgba(255,255,255,0.5) 0%, #FFFFFF 100%);
border-radius: 30px 30px 30px 30px;
border: 4px solid #FFFFFF;
   overflow-y: auto; 
  
  scrollbar-width: none; 
  -ms-overflow-style: none; 
    margin-right:auto;
    margin-left:15%;
}

.register_view .projectName {
    font-size: 24px;
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
    min-width: 100px;
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
.circle1 {
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

.circle2 {
    display:none;
    
}
.register_view .list_item {
width: 450px;
background: linear-gradient( 180deg, #FFFFFF 0%, #E1E6ED 100%);
border-radius: 5px 5px 5px 5px; 
margin:auto;
}

.register_view .el-input.list_inp {
    height:50px;
    background:none!important;
    border:none!important;
    
}

.register_view .el-input__wrapper {
    background:none;
    border:none!important;
     box-shadow: none;
}

.register_view .list_label {
    border:none!important;    
}

.register_view .el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.list_date.el-tooltip__trigger.el-tooltip__trigger {
  height:50px;
    background:none!important;
    border:none!important;
}

.register_view .el-select.list_sel {
      height:50px;
    background:none!important;
    border:none!important;
}

.register_view .el-select__wrapper.el-tooltip__trigger.el-tooltip__trigger {
  height:50px;
    background:none!important;
    border:none!important;
box-shadow: none;
}

div#el-id-3802-1680 {
   
  height:50px;
    background:none!important;
    border:none!important;
box-shadow: none;
}

div#el-id-3802-1681 {
  height:50px;
    background:none!important;
    border:none!important;
box-shadow: none;
}

div#el-id-3802-1681 label{
  height:50px;
}

.register_view .list_code_item {
  height:50px;
  width:400px;
}

.register_view button.el-button.el-button--primary.list_code_btn {
  height:50px;
  margin-left:auto!important;
}
.register_view button.el-button.register {
 width:450px!important;
    height:60px!important;
    
     background:linear-gradient( 180deg, #E5ACFD 0%, #4F66C4 100%)!important;
    border-radius: 5px 5px 5px 5px!important;
    color:#FFFFFF!important;
font-weight: 700!important;
font-size: 24px!important;

line-height: 60px!important;
font-style: normal;
text-transform: none;

}
.register_view .list_label {
margin-left:10px;
text-align:left!important;
}
.register_view li.el-upload-list__item.is-success {
    background:none!important;    
}

.register_view .el-upload.el-upload--picture-card {
   background:none!important;    
}

.register_view ul.el-upload-list.el-upload-list--picture-card {
   margin-top:20px;
}

.register_view .el-upload.el-upload--text.is-drag {
         margin-top:20px;
}

.register_view .el-upload-dragger {
   background:none!important;    
}
.register_view .list_item {
    margin-top:15px!important;
}
</style>