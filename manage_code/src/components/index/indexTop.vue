<template>
	<div class="top_view">
		<div class="projectName">{{projectName}}</div>



			<el-dropdown class="avatar-container" trigger="hover">
				<div class="avatar-wrapper">
					<div class="nickname">欢迎 {{adminName}}</div>
					<img class="user-avatar" :src="store.getters['user/avatar']">
					<el-icon class="el-icon-arrow-down">
						<arrow-down />
					</el-icon>
				</div>
				<template #dropdown>
					<el-dropdown-menu class="user-dropDown" slot="dropdown">
						<el-dropdown-item class="center" @click="centerClick" >
							个人中心
						</el-dropdown-item>
						<el-dropdown-item class="password" @click="updatepasswordClick">
							修改密码
						</el-dropdown-item>
						<el-dropdown-item class="front">
							<span style="display:block;" @click="frontClick">系统前台</span>
						</el-dropdown-item>
						<el-dropdown-item v-if="btnAuth('board','查看')">
							<span style="display:block;" @click="boardClick">数据看板</span>
						</el-dropdown-item>
						<el-dropdown-item class="backUp" v-if="role=='users'">
							<span style="display:block;" @click="backUp">数据备份</span>
						</el-dropdown-item>
						<el-dropdown-item class="loginOut">
							<span style="display:block;" @click="onLogout">退出登录</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>


	</div>
</template>

<script setup>
	import axios from 'axios'
	const moment = window.moment
	import {
		toRefs,
		defineEmits,
		getCurrentInstance,
		ref,
		onBeforeUnmount,
		onMounted,
		computed,
	} from 'vue';
	import {
		useRouter,
		useRoute
	} from 'vue-router';
	const route = useRoute()
	const router = useRouter()
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const baseUrl = ref(context.$config.url)
	const projectName = context.$project.projectName
	const emit = defineEmits(['collapseChange'])
	const role = context.$toolUtil.storageGet('sessionTable')
	const adminName = context.$toolUtil.storageGet('adminName')
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}

	const props = defineProps({
		collapse: Boolean
	})
	const {collapse} = toRefs(props)

	//获取用户信息
	import { useStore } from 'vuex'
	const store = useStore()
	const user = computed(()=>store.getters['user/session'])
	const avatar = ref(store.state.user.avatar)
	store.dispatch('user/getSession').then(()=>{
		avatar.value = store.state.user.avatar
	})
	const toggleClick = () => {
		emit('collapseChange')
	}
	// 数据备份
	const backUp = () =>{
		ElMessageBox.confirm(`是否备份数据库?`, '数据备份提示', {
			confirmButtonText: '是',
			cancelButtonText: '否',
			type: 'warning',
		}).then(()=>{
			axios.get(process.env.VUE_APP_BASE_API + '/mysqldump', {
			    headers: {
			      token: context?.$toolUtil.storageGet("Token")
			    },
			    responseType: "blob"
			  }).then(({data})=>{
				const binaryData = [];
				binaryData.push(data);
				const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
				    type: 'application/pdf;chartset=UTF-8'
				}))
				const a = document.createElement('a')
				a.href = objectUrl
				a.download = 'mysql.dmp'
				// a.click()
				// 下面这个写法兼容火狐
				a.dispatchEvent(new MouseEvent('click', {
				    bubbles: true,
				    cancelable: true,
				    view: window
				}))
				window.URL.revokeObjectURL(data)
				message.message("数据备份成功")
			})
		}).catch(_ => {})
	}
	// 退出登录
	const onLogout = () => {
		let toolUtil = context?.$toolUtil
		store.dispatch('delAllCachedViews')
		store.dispatch('delAllVisitedViews')
        store.dispatch('user/loginOut')
		toolUtil.storageClear()
		router.replace({
			name: "login"
		});
	}
	// 跳转前台
	const frontClick = () => {
        window.open(`${context.$config.url}client/index.html#/index/home`,'_blank')
	}
	// 跳转看板
	const boardClick = () => {
		router.push(`/dashBoard`)
	}
	// 个人中心
	const centerClick = () => {
		router.push(`/${role}Center`)
	}
	// 修改密码
	const updatepasswordClick = () => {
		router.push(`/updatepassword`)
	}
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
/* 消息徽标容器 */
.message-badge-wrapper {
    margin-right: 15px;
    order: 10;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.message-badge-wrapper .message-icon {
    color: inherit;
    transition: opacity 0.3s;
}

.message-badge-wrapper:hover .message-icon {
    opacity: 0.8;
}

.message-badge-wrapper .message-badge {
    display: flex;
    align-items: center;
}

/* 徽标数字样式 */
.message-badge-wrapper :deep(.el-badge__content) {
    border: 2px solid #fff;
    font-size: 12px;
    font-weight: bold;
}
.top_view {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
background: #64B0E5;
border-radius: 0px 0px 0px 0px;
}

.top_view .projectName {
    position: relative;padding-left: 50px;line-height: 44px;margin-right: 50px;font-size: 24px;
}



.top_view .currentDate {
    margin: 0 10px;
}

.top_view .notice-btn {
    margin: 0 10px;
}

.top_view img.user-avatar {
    width: 40px;
    height: 40px;
}

.top_view .avatar-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
}

.top_view .nickname {
    order: 2;
}

.top_view .avatar-wrapper>.el-icon {
    order: 3;
}
.top_view iframe {
    width: 220px;
    height: 18px;
}
.top_view .projectName {
    padding-left:0px!important;
}
.top_view .projectName {
  color: #FFFFFF;
  position: relative !important;
  z-index: 1;
  padding-right:10px;
}

.top_view .projectName:before {
content: '';
  width: 2px;
  height: 62px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 52%, rgba(255,255,255,0) 100%);
  position: absolute;
  top: 50%;           /* 垂直居中 */
  right: 0;           /* 靠右边界 */
  transform: translateY(-50%); /* 垂直居中调整 */
  z-index: 100;
}


 

.top_view .currentDate {
 position: relative !important;
  z-index: 1;
  padding-right:20px;
  padding-left:20px;
}
/* 右边竖线 */
.top_view .currentDate:before {
  content: '';
  width: 2px;
  height: 62px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 52%, rgba(255,255,255,0) 100%);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 100;
}

/* 左边竖线 */
.top_view .currentDate:after {
  content: '';
  width: 2px;
  height: 62px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 52%, rgba(255,255,255,0) 100%);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 100;
}



.top_view button.el-button.notice-btn {

}
.top_view .el-dropdown.avatar-container {
     margin-left:auto;
}
/* 系统按钮*/

.top_view button.el-button.notice-btn {
    margin-left:100px;
}
</style>