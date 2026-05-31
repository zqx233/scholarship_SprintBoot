<template>
	<div class="login_view">
<div class="backgif">
 <div class="form" style="z-index: 1;">
    <div class="logo"></div>
    <div class="projectName">{{projectName}}</div>
    <div class="tip">请登录以继续</div>
     
				<div class="form-item roles" v-if="userList.length>1">
					<div class="role" :style="{'width':'calc(100% / '+userList.length+')'}"
						:class="loginForm.role==item.roleName?'tabActive':''" v-for="(item,index) in userList"
						:key="index" @click="tabClick(item.roleName)">{{item.roleName}}</div>
				</div>

 
				<div class="form-item userName" v-if="loginType==1">
					<div class="label">
						账号：
					</div>
					<el-input class="item-input" v-model="loginForm.username" placeholder="请输入账号" name="username" />
				</div>

   
				<div class="form-item password" v-if="loginType==1">
					<div class="label">
						密码：
					</div>
					<el-input class="item-input" v-model="loginForm.password" type="password" show-password placeholder="请输入密码" @keydown.enter.native="handleLogin"  />
				</div>



        <div class="forget-row">
        <div class="register-row">
                    <el-button class="register" @click="handleRegister('fudaoyuan')">注册辅导员</el-button>

        </div>

    </div>
				<el-button class="login" v-if="loginType==1" @click="handleLogin">登录</el-button>



    <div class="form-circle1"></div>
    <div class="form-circle2"></div>
</div>
<div class="circle1"></div>
<div class="circle2"></div>   
</div>

	</div>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		nextTick,
		onMounted,
		onUnmounted,
	} from "vue";
	import { useStore } from 'vuex'
	const store = useStore()
	const projectName = ref(`基于SpringBoot的高校奖学金在线申请与公示系统`)
	const userList = ref([])
	const menus = ref([])
	const loginForm = ref({
		role: '',
		username: '',
		password: ''
	})
	const tableName = ref('')
	const loginType = ref(1)
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	//注册
    const handleRegister = (tableName) => {
    	context?.$router.push(`/${tableName}Register`)
    }
	//登录用户tab切换
	const tabClick = (role) => {
		loginForm.value.role = role
		
	}
	const handleLogin = () => {
		if (!loginForm.value.username) {
			context?.$toolUtil.message('请输入用户名', 'error')
			
			return;
		}
		if (!loginForm.value.password) {
			context?.$toolUtil.message('请输入密码', 'error')
			return;
		}
		if (userList.value.length > 1) {
			if (!loginForm.value.role) {
				context?.$toolUtil.message('请选择角色', 'error')
				verifySlider.value.reset()
				return;
			}
			for (let i = 0; i < menus.value.length; i++) {
				if (menus.value[i].roleName == loginForm.value.role) {
					tableName.value = menus.value[i].pathName||menus.value[i].tableName;
				}
			}
		} else {
			tableName.value = userList.value[0].pathName||userList.value[0].tableName;
			loginForm.value.role = userList.value[0].roleName;
		}
		login()
	}
	const login = () => {
		context?.$http({
			url: `${tableName.value}/login?username=${loginForm.value.username}&password=${loginForm.value.password}`,
			method: 'post'
		}).then(res => {
			context?.$toolUtil.storageSet("Token", res.data.token);
			context?.$toolUtil.storageSet("role", loginForm.value.role);
			context?.$toolUtil.storageSet("sessionTable", tableName.value);
			context?.$toolUtil.storageSet("adminName", loginForm.value.username);
            //vuex中获取用户信息并保存
			store.dispatch('user/getSession').then(res=>{
                context?.$router.push('/')
            })
		}, err => {
		})
	}
	//获取菜单
	const getMenu=()=> {
      let params = {
        page: 1,
        limit: 1,
        sort: 'id',
      }

      context?.$http({
        url: "menu/list",
        method: "get",
        params: params
      }).then(res => {
          menus.value = JSON.parse(res.data.data.list[0].menujson)
          for (let i = 0; i < menus.value.length; i++) {
            if (menus.value[i].hasBackLogin=='是') {
              userList.value.push(menus.value[i])
            }
          }
			loginForm.value.role = userList.value[0].roleName
          context?.$toolUtil.storageSet("menus", JSON.stringify(menus.value));
      })
    }
	//初始化
	const init = () => {
		getMenu();
	}
	onMounted(()=>{
		init()


	})
</script>

<style lang="scss">
	.login_view {
        background-image: url("")!important;
	}
.login_view {
    background-color:none;
    /* min-height: 1080px; */
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

.login_view .form {

    box-shadow: none;
    padding: 0px;
 
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
}

.login_view .projectName {
    font-size: 24px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-top: 20px;
}

.login_view .tip {
    font-size: 14px;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    color: #666;
}

.login_view .form-item {
   
    display: flex;
    align-items: center;
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 0px;
    border-radius: 6px;
    line-height: 40px;
}

.login_view .el-input__wrapper {
    border: none;
    outline: none;
    box-shadow: none!important;
}

.login_view .label {
    background: #eaf7f3;
    color: #7ab8a3;
    padding: 0px;
    
}

.login_view .code-info {
    width: 120px;
    background-image: linear-gradient(135deg, #98D7C2 0%, #E8C7C7 100%);
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    position: absolute;
    right: -140px;
    border-radius: 10px;
}

.login_view .form-item.code {
    margin-right: 140px;
    position: relative;
}

.login_view .form-item.roles {
    position: relative;
    background: none;
    border: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin-top: 50px;
}

.login_view .el-radio.role {
    background: #fff;
    border: 1px solid #eee;
    padding: 10px;
    flex: 1;
    margin-right: 0;
    border-radius: 8px;
}

.login_view .form-item.roles:before {
    content: '选择角色';
    position: absolute;
    top: -40px;
    left: 0;
}

.login_view .login {
    width: 100%;
    margin-top: 20px;
    height: 50px;
    background: var(--theme);
    border: none;
    color: #fff;
    font-size: 18px;
}
.login_view .el-button.face{
    width: 100%;
    margin-top: 20px;
    height: 50px;
    background: var(--theme);
    border: none;
    color: #fff;
    font-size: 18px;
    margin-left: 0;
}

.login_view .forget-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.login_view .register {
    background: none;
    border: none;
}

.login_view .forget {
    background: none;
    border: 0;
}

.login_view .form-circle1 {
    position: absolute;
    right: -34px;
    top: -32px;
    background: #dff6e9;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    z-index: -1;
}

.login_view .form-circle2 {
    position: absolute;
    left: -34px;
    bottom: -32px;
    background: #f7efeb;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    z-index: -1;
}

.login_view .logo {
    background: url(http://clfile.zggen.cn/20250725/889d208e5ddd4107bce6600713cdf6d1.webp);
    background-size: 100% 100%;
    width: 80px;
    height: 80px;
    animation: float 3s ease-in-out infinite;
}

.login_view .circle1 {
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

.login_view .circle2 {
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

@keyframes float{
    0%,100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
 }


.circle1 {
    display:none;
}

.circle2 {
    display:none;
}


.login_view .form {
 width: 500px!important;
height: 920px!important;
    margin-top:10px!important;
    margin-left:auto!important;
    background:#FFFFFF!important;
       overflow-y: auto; /* 当home子盒子内容超出时出现垂直滚动条 */
  /* 新增 - 隐藏所有滚动条 */
  scrollbar-width: none; /* Firefox 隐藏滚动条 */
  -ms-overflow-style: none; /* IE/Edge 隐藏滚动条 */
}
.login_view .logo {
    display:none;
}


.form-circle1 {
        display:none;
}

.form-circle2 {
        display:none;
}

.form-circle2 {
            display:none;
}

.login_view .projectName {
     width: 100%;
height: 25px;
font-family: Source Han Sans, Source Han Sans!important;
font-weight: 500!important;
font-size: 28px;
color: #000000;
line-height: 20px;
text-align: center;
font-style: normal;
text-transform: none;

}

.login_view .tip {
        display:none
}

.login_view .form-item{
    width:400px!important;
    height:40px;
    margin-left:120px;
    align-items: flex-start!important;   
    background: #fff;
    border: 1px solid #eee!important;
}

.login_view .label {
        height:40px!important;
}

.login_view svg {
        width:20px!important;
        
}

.login_view .el-input.item-input {
        height:40px!important;
}

.login_view button.el-button.login {
    width: 400px;
height: 60px;
background: #0949F7;
border-radius: 5px 5px 5px 5px;
margin-left:auto!important;
margin-right: auto!important;
    display: block!important;
}

.login_view button.el-button.face {
        width: 400px!important;
height: 60px!important;
background: #0949F7;
border-radius: 5px 5px 5px 5px!important;
    margin-left:auto !important;
    margin-right:auto !important;
    display: block!important;
}
.login_view .form {
    display: block; /* 覆盖 flex 布局 */
    overflow: auto; /* 创建新的 BFC */
    position: relative; /* 保留定位 */
    /* 其他原有属性保持不变 */
}

.login_view .form-item.userName {
    margin:40px auto;
}



.login_view .code-info {
    width: 120px;
    background-image: linear-gradient(135deg, #98D7C2 0%, #E8C7C7 100%);
    flex-shrink: 0;
    display: flex
;
    justify-content: space-around;
    font-size: 20px;
    position: absolute;
    right: -0px!important;
    border-radius:0px!important;
    height:40px!important;
}
.login_view button.el-button.login {
    margin-top:40px;
    
}

.login_view button.el-button.face {
    margin-top:40px!important;
    
}
.login_view .form-item{
    margin:0px auto!important;
}

.login_view .projectName {
    margin:50px auto 40px auto!important;
}
.login_view .forget-row {
    width:400px!important;
    margin-left:auto;
    margin-right:auto
}



.login_view button.el-button.register {
    padding:0px;
}
.login_view .label {
    background:none!important;
    border: 1px solid #9CA3AF;
    border-right:none!important;
    background: #FFFFFF;
    border-radius: 5px 0 0 5px;
}

.login_view .el-input.item-input {
    height:40px!important;
   border: 1px solid #9CA3AF;
       border-left:none!important;
      border-radius: 0 5px 5px 0;
}

.login_view .code-info {
      border-radius: 5px 0 0 5px!important;
}
.login_view .wenzi {
    margin:40px auto 5px auto;
   width: 400px;
height: 13px;
font-family: Source Han Sans, Source Han Sans;
font-weight: 400;
font-size: 14px;
color: #9CA3AF;
line-height: 12px;
text-align: left;
font-style: normal;
text-transform: none;
}


.login_view ::before {
 display:none;
}


.login_view .form-item.roles {
 background: #FFFFFF;
border-radius: 5px 5px 5px 5px;
border: 1px solid #9CA3AF!important;
 width:400px!important;
 height:40px !important;
}

.login_view .form-item.roles .label{
 
border:none!important;
}

.login_view .el-select {
 border:none!important;
 margin-top:auto;
 margin-bottom:auto;
}

.login_view .el-select__selection {
  border:none!important;
 margin-top:auto!important;
 margin-bottom:auto
}
.login_view i.el-icon {
color:#0949f7;
}

.login_view .backgif {
   
   /* 增大容器尺寸（按比例） */
  width: 1410px!important;  /* 原1250 → 增加30px */
  height: 920px!important;   /* 原612 → 增加15px，保持比例 */
  
  /* 核心背景设置 */
  background: 
    url('http://clfile.zggen.cn/20250820/d9c666b725954eb1820f72fc384a8ae4.png') 
    center / contain /* 关键：contain 确保完整展示 */
    no-repeat !important;


  
  border-radius: 0px;
  margin: 100px auto;
  box-sizing: border-box; /* 确保 padding 不影响整体尺寸 */
    overflow: hidden;
}
.login_view .label {
    width:150px;
    position: relative !important;
  z-index: 1;
color: #274960!important;
font-weight: 400;
font-size: 16px;
}


.login_view .form-item.roles {
margin-top:20px!important;
}

.login_view .form-item.userName {
    margin-top:20px!important;
}

.login_view .form-item.password {
    margin-top:20px!important;
}

.login_view .form-item.code {
    margin-top:20px!important;
}





.login_view button.el-button.login {
background: #64B0E5!important;
border-radius: 5px 5px 5px 5px;
}

.login_view button.el-button.face {
background: #64B0E5!important;
border-radius: 5px 5px 5px 5px;
}
.login_view button.el-button.login span {
font-family: Source Han Sans, Source Han Sans;
font-weight: 700;
font-size: 20px;
color: #fff;
line-height: 20px;
text-align: left;
font-style: normal;
text-transform: none;
}

.login_view button.el-button.face span{
font-family: Source Han Sans, Source Han Sans;
font-weight: 700;
font-size: 20px;
color: #FFF;
line-height: 20px;
text-align: left;
font-style: normal;
text-transform: none;
}
.login_view .projectName {
    font-size: 20px!important;
    font-weight: 700!important;
}
.login_view  .projectName {
    margin-top:200px!important;
}





.login_view .role {
  text-align:center;
  background: #EBEBEB;
border-radius: 5px 5px 5px 5px!important;
font-weight: 400;
font-size: 16px;
color: #274960;
}

.login_view  .form-item.roles {
  background: #EBEBEB!important;
border-radius: 5px 5px 5px 5px!important;
border:0px!important;
box-shadow:none!important;
}

.login_view .role.tabActive {
  text-align:center;
  background: #64B0E5;
border-radius: 5px 5px 5px 5px!important;
font-weight: 400;
font-size: 16px;
color: #ffffff;
}
.login_view .label {
    position:relative!important;
    z-index:1;
    
    text-align:center!important;
    padding:0px!important;
    color: #274960;
}
.login_view .label:before {
    display:block!important;
   content: '' !important;
    position: absolute !important;
    width: 80px !important;
    height: 32px !important;
    background: url('http://clfile.zggen.cn/20250820/5e7f2f25882e4a62833f425f5793f957.png') !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    border-radius: 6px 6px 6px 6px !important;
    top: 50% !important;
    left: 40% !important;
    transform: translate(-50%, -50%) !important;
    z-index:-1;
}
.login_view button.el-button.login {
     background: url(http://clfile.zggen.cn/20250821/50982152ebdf45a886c1816860f0ddfd.png) no-repeat !important;
     background-size:contain!important;
}

.login_view  button.el-button.face {
  background: url(http://clfile.zggen.cn/20250821/50982152ebdf45a886c1816860f0ddfd.png) no-repeat !important;
     background-size:contain!important;
}
</style>