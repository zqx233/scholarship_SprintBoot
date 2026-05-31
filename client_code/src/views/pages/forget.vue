<template>
    <div class="forget_view">
<div class="form" style="z-index: 1;">
    <div class="pageTitle">{{pageTitle}}</div>
				<div class="tab_view">
					<div class="tab" :class="pageType==1?'tab_active':''">输入账号</div>
					<div class="tab" :class="pageType==2?'tab_active tab_active1':''"> 输入密保</div>
					<div class="tab" :class="pageType==3?'tab_active tab_active1 tab_active2':''">重置密码</div>
				</div>

            <div class="form-box">
            </div>

     <div class="back" @click="close">已有账号，直接登录</div>
					<el-button v-if="pageType==1" class="get_btn" @click="getSecurity">获取密保</el-button>
					<el-button v-if="pageType==2" class="valid_btn" @click="validateSecurity">确认密保</el-button>
					<el-button v-if="pageType==3" class="update_btn" @click="updatePassword">重置密码</el-button>

   
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
		computed,
	} from 'vue';
    import { useRoute } from 'vue-router'
    const route = useRoute()
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context.$project.projectName
    onMounted(()=>{
	})
	const pageType = ref(1)
	const pageTitle = computed(()=>{
		return pageType.value==1?'输入账号':pageType.value==2?'输入密保':'重置密码'
	})
	const forgetForm = ref({})
	const userForm = ref({})
	//返回登录
	const close = () => {
		context?.$router.push({
			path: "/login"
		});
	}
</script>

<style lang="scss">
	.forget_view {
        background-image: url("http://clfile.zggen.cn/20250930/f6544fae4c6044d884c1df42f522e0ef.jpg")!important;
	}
.forget_view {
 
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

.forget_view .form {

    width: 600px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 50px 60px 30px 30px;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
border: 4px solid #FFFFFF;
}

.forget_view .projectName {
    font-size: 24px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-top: 20px;
}
.forget_view .logo {
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

.forget_view .circle1 {
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

.forget_view .circle2 {
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
.forget_view .form-circle1 {
    position: absolute;
    right: -34px;
    top: -32px;
    background: #dff6e9;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    z-index: -1;
}

.forget_view .form-circle2 {
    position: absolute;
    left: -34px;
    bottom: -32px;
    background: #f7efeb;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    z-index: -1;
}


.forget_view .register_form {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    padding: 0 50px;
}

.forget_view .list_item {
    display: flex;
    align-items: center;
    padding: 10px;
}

.forget_view .item_label {
    min-width: 100px;
    text-align: right;
}

.forget_view .register {
    background: var(--theme);
    border: none;
    color: #fff;
    width: 60%;
    margin-top: 30px;
    height: 40px;
    font-size: 18px;
}

.forget_view .back {
    width: 50%;
    margin: 20px auto;
}

.forget_view .tab {
    width: calc(33.3333%);
    padding: 16px 0px;
    box-sizing: border-box;
    text-align: center;
}

.forget_view .tab_view {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px 0px;
    font-size: 16px;
}

.forget_view .pageTitle {
    font-size: 24px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-top: 20px;
}

.forget_view .el-input.list_inp {
    height: 40px;
}

.forget_view .el-select__wrapper {
    height: 40px;
}

.forget_view button.el-button {
    background: var(--theme);
    color: #fff;
    width: 50%;
    border: none;
    height: 40px;
    margin-top: 30px;
}
.form-circle1 {
    display:none;
}

.circle1 {    display:none;
         
         }

.form-circle2 {    display:none;
              }

.circle2 {    display:none;
         }

.forget_view .tab {
    clip-path: none !important;
 background: #FFFFFF;
box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.3);
border-radius: 0px 5px 5px 0px!important;
}




.forget_view .tab_view .tab {
width: 120px!important;
height: 30px;
background: linear-gradient( 180deg, #FFFFFF 0%, #E1E6ED 100%);
box-shadow: inset 1px 1px 2px 0px #A6BDE4;
border-radius: 5px 5px 5px 5px!important;
 display: flex;
  align-items: center; 
  justify-content: center; 
 box-shadow:none;
font-family: Roboto, Roboto;
font-weight: 400;
font-size: 20px;
color: #828FA5;
line-height: 24px;
text-align: left;
font-style: normal;
text-transform: none;
}
.forget_view .tab_view {
    width: 430px;;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0px;
    font-size: 16px;
   margin-left:70px;;
}
.forget_view .tab.tab_active {
    width: calc(33.3333%);
    padding: 16px 0px;
    box-sizing: border-box;
    text-align: center;
    clip-path: polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0px 100%, 8% 50%);
  background: linear-gradient( 180deg, #FFFFFF 0%, #D0E2FF 100%);
   font-family: Roboto, Roboto;
font-weight: 400;
font-size: 20px;
color: #9C8CFD;
line-height: 24px;
text-align: left;
font-style: normal;
text-transform: none;
  width: 120px!important;
height: 30px;
}
.forget_view .list_item {
width: 450px;
height: 50px;
background: linear-gradient( 180deg, #FFFFFF 0%, #D0E2FF 100%);
border-radius: 5px 5px 5px 5px;
margin:20px auto;
}

.forget_view .item_label {
    min-width:80px!important;
    display:flex;
    margin-left:5px;
    font-weight: 400;
font-size: 16px;
color: #828FA5;
line-height: 14px;
text-align: left;
font-style: normal;
text-transform: none;
}

.forget_view .el-input__wrapper {
    background:none;
    box-shadow:none;
}


.forget_view .el-select__wrapper.el-tooltip__trigger.el-tooltip__trigger {
    background:none;
    box-shadow:none;
    
}

.forget_view .form {
    padding:0px!important;
}

.forget_view .tab_view {
    width:450px;
    margin:2px auto!important;
}

.forget_view .pageTitle {
    margin-top:112px!important;
}

.forget_view button.el-button.update_btn {
width: 450px !important;
    height: 60px !important;
    margin-top:15px!important;
    margin:auto;
    background: linear-gradient( 180deg, #E5ACFD 0%, #4F66C4 100%) !important;
    border-radius: 5px 5px 5px 5px !important;
    color: #FFFFFF !important;
    font-weight: 700 !important;
    font-size: 24px !important;
    line-height: 60px !important;
    font-style: normal;
    text-transform: none;
    margin-bottom: 60px;
}

.forget_view button.el-button.valid_btn {
width: 450px !important;
    height: 60px !important;
    margin-top:15px!important;
    margin:auto;
    background: linear-gradient( 180deg, #E5ACFD 0%, #4F66C4 100%) !important;
    border-radius: 5px 5px 5px 5px !important;
    color: #FFFFFF !important;
    font-weight: 700 !important;
    font-size: 24px !important;

    line-height: 60px !important;
    font-style: normal;
    text-transform: none;
    margin-bottom: 60px;
}

.forget_view button.el-button.get_btn {
width: 450px !important;
    height: 60px !important;
    margin-top:15px!important;
    margin:auto;
    background:linear-gradient( 180deg, #E5ACFD 0%, #4F66C4 100%) !important;
    border-radius: 5px 5px 5px 5px !important;
    color: #FFFFFF !important;
    font-weight: 700 !important;
    font-size: 24px !important;

    line-height: 60px !important;
    font-style: normal;
    text-transform: none;
    margin-bottom: 60px;
    
}
.forget_view .form {
background: linear-gradient( 180deg, rgba(255,255,255,0.5) 0%, #FFFFFF 100%);
margin-right:auto;
    margin-left:15%;
}

</style>