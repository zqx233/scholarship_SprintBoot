<template>
	<div class="center_view">
		<div class="section_title">
			<span>{{formName}}</span>
		</div>
		<div class="usersView">
			<div class="usersTabView">
				<div class="usersTab" :class="tabIndex=='center'?'usersTabActive':''" @click="tabClick({tableName:'center'})">个人中心</div>
				<div class="usersTab " :class="tabIndex=='updatePassword'?'usersTabActive':''" @click="tabClick({tableName:'updatePassword'})">修改密码</div>
				<template v-for="(item,index) in menuList">
					<div v-if="item.child.length>1" class="usersTab" @mouseenter="usersTabHover(index)"
						 @mouseleave="usersTabLeave">
						{{item.menu}}
						<el-collapse-transition>
							<div class="usersTabHoverView" v-if="usersTabIndex==index">
								<div class="usersTabHoverTab" v-for="(items,indexs) in item.child" @click="tabClick(items)">
									{{items.menu}}
                                </div>
							</div>
						</el-collapse-transition>
					</div>
					<div v-else-if="hasBack(item.child[0]) " class="usersTab" @click="tabClick(item.child[0])">
						{{item.child[0].menu}}
					</div>
				</template>
			</div>
			<div class="usersBox updateInfo" v-if="tabIndex=='center'">
				<el-form class="usersForm" ref="userFormRef" :model="userForm" label-width="120px" :rules="rules">
					<el-row>
						<el-col :span="12">
							<el-form-item prop="xuehao" label="学号">
								<el-input class="list_inp" v-model="userForm.xuehao" placeholder="学号" readonly></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item prop="xueshengxingming" label="学生姓名">
								<el-input class="list_inp" v-model="userForm.xueshengxingming" placeholder="学生姓名" ></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item prop="lianxifangshi" label="联系方式">
								<el-input class="list_inp" v-model="userForm.lianxifangshi" placeholder="联系方式" ></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item prop="touxiang" label="头像">
								<uploads
									action="file/upload" 
									tip="请上传头像"
									style="width: 100%;text-align: left;"
									:fileUrls="userForm.touxiang?userForm.touxiang:''" 
									@change="touxiangUploadSuccess">
								</uploads>
							</el-form-item>
						</el-col>
					</el-row>
					<div class="formModel_btn_box">
						<el-button class="formModel_confirm" @click="updateSession">更新信息</el-button>
						<el-button class="formModel_cancel" @click="loginout" type="danger">退出登录</el-button>
					</div>
				</el-form>
			</div>
			<div class="usersBox updatePassword" v-if="tabIndex=='updatePassword'">
				<el-form class="usersForm" ref="passwordFormRef" :model="passwordForm" label-width="120px"
					:rules="passwordRules">
					<el-row>
						<el-col :span="12">
							<el-form-item label="原密码" prop="mima">
								<el-input class="list_inp" v-model="passwordForm.mima" placeholder="原密码"
									type="password"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="新密码" prop="newmima">
								<el-input class="list_inp" v-model="passwordForm.newmima" placeholder="新密码"
									type="password"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="确认密码" prop="newmima2">
								<el-input class="list_inp" v-model="passwordForm.newmima2" placeholder="确认密码"
									type="password"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<div class="formModel_btn_box">
						<el-button class="formModel_confirm" @click="updatePassword">修改密码</el-button>
					</div>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script setup>
    const moment = window.moment
	import {
		ref,
		getCurrentInstance,
		watch,
		onUnmounted,
		onMounted,
	} from 'vue';
	import {
		useRoute,
		useRouter
	} from 'vue-router';
	import { useStore } from 'vuex'
	const store = useStore()
	import menu from '@/utils/menu'
	const context = getCurrentInstance()?.appContext.config.globalProperties;
    const baseUrl = ref(context.$config.url)
	const route = useRoute()
	const router = useRouter()
	//基础信息
	const tableName = 'xuesheng'
	const formName = '个人中心'
	//基础信息
	const uploadUrl = context.$config.url + 'file/upload'
	//个人信息
	const userFormRef = ref(null)
	const userForm = ref({})
    //权限验证
    const btnAuth = (e, a) => {
        return context?.$toolUtil.isBackAuth(e, a)
    }
	//修改密码
	const passwordFormRef = ref(null)
	const passwordForm = ref({
		mima: '',
		newmima: '',
		newmima2: ''
	})
	const passwordRules = ref({
		mima: [{
			required: true,
			message: '请输入',
			trigger: 'blur'
		}, ],
		newmima: [{
			required: true,
			message: '请输入',
			trigger: 'blur'
		}, ],
		newmima2: [{
			required: true,
			message: '请输入',
			trigger: 'blur'
		}, ],
	})
	//验证规则
	const rules = ref({
		xuehao: [
			{required: true,message: '请输入',trigger: 'blur'},
		],
		mima: [
			{required: true,message: '请输入',trigger: 'blur'},
		],
		xueshengxingming: [
		],
		lianxifangshi: [
			{ validator: context.$toolUtil.validator.mobile, trigger: 'blur' },
		],
		touxiang: [
		],
	})
	const getSession = () =>{
		context?.$http({
			url: `${context?.$toolUtil.storageGet('frontSessionTable')}/session`,
			method:'get'
		}).then(res=>{
			context?.$toolUtil.storageSet('userid',res.data.data.id)
			context?.$toolUtil.storageSet("frontName", res.data.data.xuehao)
			context?.$toolUtil.storageSet('headportrait',res.data.data.touxiang||'')
			userForm.value = res.data.data
		})
	}
	//菜单跳转
	const tabIndex = ref('center')
	const tabClick = (item) => {
		if (item.tableName == 'center') {
			tabIndex.value = 'center'
			return
		}
		if (item.tableName == 'updatePassword') {
			passwordForm.value = {
				mima: '',
				newmima: '',
				newmima2: ''
			}
			tabIndex.value = 'updatePassword'
			return
		}
		if(item.tableName=='examrecord'&&item.menuJump=='22'){
			router.push(`/index/examfailrecord?centerType=1`)
			return
		}
		if(item.tableName=='forum'&&item.menuJump=='14'){
			router.push(`/index/forumList?centerType=1&myType=1`)
			return
		}
        router.push(`/index/${item.classname||item.tableName}List?centerType=1${item.menuJump?'&menuJump='+item.menuJump:''}`)
	}
    const hasBack = (menu)=>{
        return true
    }
	// 修改密码
	const updatePassword = async ()=>{
		passwordFormRef.value.validate(async (valid) => {
			if (valid) {
				if(passwordForm.value.mima != userForm.value.mima){
					context?.$toolUtil.message('原密码不正确', 'error')
					return false
				}
				if(passwordForm.value.newmima != passwordForm.value.newmima2){
					context?.$toolUtil.message('两次输入密码不一致', 'error')
					return false
				}
                if(passwordForm.value.mima==passwordForm.value.newmima){
                    context?.$toolUtil.message('新密码不能与原密码相同', 'error')
                    return false
                }
				userForm.value.mima = passwordForm.value.newmima
				store.dispatch('user/update',userForm.value).then(res=>{
					if(res?.data&&res.data.code==0){
						context?.$toolUtil.message('更新成功','success')
						passwordForm.value = {
							mima: '',
							newmima: '',
							newmima2: ''
						}
						getSession()
					}
				})
			}
		})
	}
	//菜单
	const menuList = ref([])
	const role = ref('')
	//头像上传回调
	const touxiangUploadSuccess=(e)=>{
		userForm.value.touxiang = e
	}
	//初始化
	const init = () => {
		const menus = menu.list()
		let arr = []
		if (menus) {
			menuList.value = menus
		}
		role.value = context?.$toolUtil.storageGet('frontRole')
		for (let i = 0; i < menuList.value.length; i++) {
			if (menuList.value[i].roleName == role.value) {
				arr = menuList.value[i].backMenu
				break;
			}
		}
		menuList.value = arr
		getSession()
	}
	//菜单悬浮的显示与隐藏
	const usersTabIndex = ref(-1)
	const usersTabHover = (index) => {
		usersTabIndex.value = index
	}
	const usersTabLeave = () => {
		usersTabIndex.value = -1
	}
	//富文本
	const editorChange = (e,name) =>{
		userForm.value[name] = e
	}
	//保存
	const updateSession = () => {
		userFormRef.value.validate((valid)=>{
			if(valid){
				if(userForm.value.touxiang!=null){
					userForm.value.touxiang = userForm.value.touxiang.replace(new RegExp(context?.$config.url,"g"),"");
				}
				store.dispatch('user/update',userForm.value).then(res=>{
					if(res?.data&&res.data.code==0){
						context?.$toolUtil.message('更新成功','success')
						getSession()
					}
				})
			}
		})
	}
	//退出登录
	const loginout = () => {
		context?.$toolUtil.message('退出成功', 'success')
		context?.$toolUtil.storageClear()
		router.replace('/index/home')
	}
	init()
</script>

<style lang="scss" scoped>
	.usersView {
		.usersBox {
			.usersForm {
				// form item
				:deep(.el-form-item) {
					// 内容盒子
					.el-form-item__content {
					}
				}
			}
		}
	}
</style>
<style lang="scss">
/**总盒子**/
.center_view {
    width: 100%;
    padding: 0 7% 50px;
    margin: 0 auto;
    overflow: hidden;
    font-size: 16px;
    /* display: flex; */
}
/**内容区**/
.center_view .usersView{
    display: flex;
    flex-direction:column;
    margin: 0;
    background: none;
    padding: 0px;
    border-radius: 8px;
}

/**右部 总盒子**/
.center_view .usersView .usersBox{
    width: calc(100% - 0px);
    background: #fff;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    box-shadow: none;
    border-radius: 0 0 6px 6px;
    padding-bottom: 50px;
border-radius: 0px 0px 0px 0px;
}
/**form盒子**/
.center_view .usersView .usersBox .usersForm{
    width: 100%;
    padding: 30px;
}
.center_view .usersView .usersBox .usersForm .el-form-item{
    margin: 0px 0px 20px;
    display: flex;
}
.center_view .usersView .usersBox .usersForm .el-form-item .el-form-item__label{
    width: 150px !important;
    background: none;
    text-align: right;
    display: block;
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-weight: 500;
}
.center_view .list_inp .el-form-item__content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 120px);
}
.center_view .el-form-item .el-input__wrapper{
    height: 36px;
    line-height: 36px;
    padding: 0px 10px;
    width: 100%;
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    font-size: 16px;
    border-radius: 8px;
}
.center_view .el-input__wrapper.is-focus {
    box-shadow: 0 0 0 1px var(--theme) inset;
}

/**会员**/
.center_view .vip_item{
    display: flex;
    align-items: center;
}
.center_view .vip_item .vip_btn{
    background: var(--theme);
    color: rgb(255, 255, 255);
    height: 36px;
    line-height: 36px;
    padding: 0px 20px;
    border-radius: 8px;
    margin: 0px 0px 0px 5px;
    border-color: var(--theme);
}
/**end**/

/**下拉选择**/
.center_view .el-form-item__content .list_sel{
    line-height: 36px;
    /* border: 1px solid var(--theme); */
    box-sizing: border-box;
    width: calc(100% - 120px);
    padding: 0;
    border-radius: 0px;
    background: rgb(255, 255, 255);
    font-size: 16px;
    border-radius: 4px;
}
.center_view .el-form-item__content .list_sel .el-select__wrapper{
    line-height: 36px;
    border-radius:8px;
}
.center_view .el-form-item__content .list_sel .el-select__wrapper.is-focused {
    box-shadow: 0 0 0 1px var(--theme) inset;
}
.center_view .el-select-dropdown__item.is-selected {
    color: var(--theme);
    font-weight: 700;
}
/**end**/

/**日期选择**/
.center_view .el-form-item__content .list_date{
    line-height: 36px;
    box-sizing: border-box;
    width: 100%;
    background: rgb(255, 255, 255);
    font-size: 16px;
    border-radius: 4px;
}
/**end**/

/**radio**/
.center_view .list_radio{
    display: flex;
    width: calc(100% - 120px);
    align-items: center;
    flex-wrap: wrap;
}
.center_view .list_radio .el-radio{
    width: 30%;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.center_view .list_radio .el-radio .el-radio__inner{
    border-color: #999;
    background: #fff;
}
.center_view .list_radio .el-radio .el-radio__label{
    color: #999;
    font-size: 16px;
}
.center_view .list_radio .el-radio.is-checked .el-radio__inner{
    border-color: var(--theme);
    background: var(--theme);
}
.center_view .list_radio .el-radio.is-checked .el-radio__label{
    color: var(--theme);
    font-size: 16px;
}
/**end**/

/**checkbox**/
.center_view .list_checkbox{
    display: flex;
    width: calc(100% - 120px);
    flex-wrap: wrap;
    align-items: center;
}
.center_view .list_checkbox .el-checkbox{
    width: 20%;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.center_view .list_checkbox .el-checkbox__inner{
    border-color: #999;
    background: #fff;
}
.center_view .list_checkbox .el-checkbox__label{
    color: #999;
    font-size: 16px;
}
.center_view .list_checkbox .el-checkbox.is-checked .el-checkbox__inner{
    border-color: var(--theme);
    background: var(--theme);
}
.center_view .list_checkbox .el-checkbox.is-checked .el-checkbox__label{
    color: var(--theme);
    font-size: 16px;
}
/**end**/

/**textarea**/
.center_view .list_textarea{
}
.center_view .list_textarea .el-textarea__inner{
    width: 100%;
    min-height: 150px;
    padding: 12px;
    /* border: 1px solid var(--theme); */
    border-radius: 0px;
    color: #666;
    font-size: 16px;
    border-radius: 4px;
}
/**end**/

/**图片上传**/
/* 盒子 */
.center_view .el-upload--picture-card{
    background-color: rgb(255, 255, 255);
    width: 100px;
    height: 90px;
    line-height: 100px;
    text-align: center;
    border:1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
}
/* 图标 */
.center_view .usersView .usersBox .usersForm .el-form-item .el-form-item__content .el-upload--picture-card .el-icon{
    font-size: 32px;
    color: #999;
}
/* 提示语 */
.center_view .usersView .usersBox .usersForm .el-form-item .el-form-item__content .img-uploader .el-upload__tip{
    font-size: 15px;
    color: #999;
    margin: 0;
}
.center_view .el-upload-list--picture-card .el-upload-list__item{
    border: none;
}
/**end**/

/**文件上传**/
.center_view .usersView .usersBox .usersForm .el-form-item .el-form-item__content .el-upload--text .el-upload-dragger{
    background: none;
    border:1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    padding:0 0 10px;
    line-height: 1
}
.center_view .usersView .usersBox .usersForm .el-form-item .el-form-item__content .el-upload--text .el-upload-dragger .el-icon--upload {
    color: var(--el-text-color-placeholder);
    font-size: 60px;
    line-height: 50px;
    margin-bottom: 10px;
}
/* 图标 */
.center_view .el-upload--text .el-upload-dragger .el-icon-upload{
    font-size: 60px;
    color: var(--theme);
    line-height: 1;
    margin-bottom: 0;
}
/* 提示语 */
.center_view .upload-demo .el-upload__tip{
    font-size: 15px;
    color: #999;
    margin: 10px 0 0;
    line-height:1;
    padding: 0;
}
/* 点击上传 */
.center_view .el-upload--text .el-upload-dragger em{
    color: var(--theme);
    font-size: 15px;
}
/**end**/

/**富文本**/
.center_view .list_editor{
    width: 100%;
    height: auto;
    margin: 0px;
    padding: 0px;
    border-radius: 0px;
    background: rgb(255, 255, 255);
    /* border: 1px solid var(--theme); */
    min-height: 300px;
}
/**end**/

/**按钮**/
.center_view .formModel_btn_box{
    width: 100%;
    padding: 10px 0px 10px 150px;
    margin: 40px 0px 0px;
    /* text-align: right; */
    display: flex;
    justify-content: center;
}
/**更新信息**/
.center_view .formModel_btn_box .formModel_confirm{
    margin: 0px 0px 0px 20px;
    padding: 0px 24px;
    width: auto;
    height: 40px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-radius: 0px;
    border: 0px;
    cursor: pointer;
    background: var(--theme);
    border-radius: 4px;
}
.center_view .formModel_btn_box .formModel_confirm:hover{
    background: var(--theme);
}
/**退出登陆**/
.center_view .formModel_btn_box .formModel_cancel{
    margin: 0px 0px 0px 20px;
    padding: 0px 24px;
    width: auto;
    height: 40px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-radius: 0px;
    border: 0px;
    cursor: pointer;
    background: rgba(142, 142, 142, 1);
    border-radius: 4px;
    order: 2;
}
.center_view .formModel_btn_box .formModel_cancel:hover{
    background: rgba(66, 66, 66,1);
}


.center_view .el-form-item .upload-demo {
    width: 360px;
}

/* nf9 */
/* 标题 */
.center_view .section_title {
    background-size: 100% 100%;
    color: #9C8CFD;
    font-size: 26px;
    line-height: 48px;
    width: 100%;
    margin: 30px auto;
    text-align: left;
    font-weight: 700;
background: none;
border-radius: 0px;
height:30px;
line-height:30px;
}
.center_view .section_title span{
    margin-left:15px;
    position:relative;
}


.center_view .usersView .usersBox .usersForm .el-form-item{
    margin:10px;
    display: flex;
  
  justify-content: flex-start; /* 左对齐 */
}
.center_view .usersView .usersBox .usersForm .el-form-item .el-form-item__label{
    width: 150px !important;
    background: none;
    text-align: left;
    display: block;
   font-weight: 400;
font-size: 18px;
color: #585858;
    padding-left:10px;
}
.center_view .el-form-item .el-input__wrapper{
    height: 36px;
    line-height: 36px;
    padding: 0px 10px;
    box-sizing: border-box;

    font-size: 16px;
background: none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-shadow:none;
}
.center_view .el-select__wrapper{
    background: none;
border-radius: 10px 10px 10px 10px;
    border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-shadow:none;
}

.center_view .el-textarea__inner{
       background: none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-shadow:none;

}
.center_view .el-upload-list--picture-card .el-upload-list__item{

border-radius:10px;
}
.center_view .el-upload--picture-card{
     background: #F8F9FB;
}
.center_view .usersView .usersBox .usersForm .el-form-item .el-form-item__content .el-upload--text .el-upload-dragger{
    border:none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
}

.center_view .list_editor{
     background: none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
}
.center_view .editor-box {
  border:none;
}
.center_view .w-e-bar{
    background:none;
}
.center_view .w-e-text-container{
 background:none;
}
.center_view .list_checkbox{
    background: #F8F9FB;
border-radius: 10px 10px 10px 10px;
}
.center_view .el-checkbox__input{
    display:none;
}
/* nf13 */
.el-col.el-col-12 {
        flex: 0 0 100%;
    max-width: 100%;
    padding-left:25%;
    padding-right:25%;
    border-bottom:1px solid #E2E4F8; 
}

.el-row{
  width:100%;
  flex-direction:column;
  margin-left:auto;
  margin-right:auto;
  position:relative;
}


.el-col.el-col-24 {
         flex: 0 0 100%;
    max-width: 100%;
    padding-left:25%;
    padding-right:25%;
    border-bottom:1px solid #E2E4F8; 
}
/**tab总盒子**/
.center_view .usersView .usersTabView{
    box-sizing: border-box;
    border-bottom: none;
    background: none;
    padding: 10px 0 0;
    display: flex;
    column-gap: 20px;
    flex-wrap: nowrap;
    width: 100%;
     
    flex-shrink: 0;
    border-radius: 8px;
    box-shadow:none;
    border:none;
    margin-right: 50px;
    order: 0;
    margin-bottom: 50px;
}
/**item**/
.center_view .usersView .usersTabView .usersTab{
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;
    color: #9C8CFD;
    text-align: center;
    position: relative;
    line-height: 50px;
    height:50px;
background: #FFFFFF;
border-radius: 25px 25px 25px 25px;
}
.center_view .usersView .usersTabView .usersTab:hover{
    background: var(--theme);
    color: #fff;
}
.center_view .usersView .usersTabView .usersTab.usersTabActive{
     background: #FFFFFF;
border-radius:25px;
    color: var(--theme)
}

.usersTabView .usersTabHoverView {
    background: #fff;
    color: #9C8CFD;
    z-index: 9;
    position:relative;
}
.usersTabView .usersTabHoverTab {
    line-height: 50px;
    height:50px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #9C8CFD;
    padding: 0 20px;
border-radius: 25px 25px 25px 25px;
 
}

.usersTabView .usersTabHoverTab:hover {
    color:#FFF;
    background:#9C8CFD;
}
</style>