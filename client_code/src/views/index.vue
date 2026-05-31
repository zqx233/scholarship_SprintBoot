<template>
	<div id="index" class="main-containers">
        <div class="index_top">
<div class="top-header">
    <div class="projectName">{{projectName}}</div>


                <el-button class="notice-btn" @click="noticeDialogVisible=true">
                    <span class="iconfont "></span>
                    系统公告
                </el-button>



				<el-button v-if="!Token" class="login" @click="loginClick">
                    <el-icon><User/></el-icon>登录
				</el-button>

				<div class="user" v-if="Token">
					<el-dropdown class="avatar-container" trigger="hover">
						<div class="avatar-wrapper">
							<img class="user-avatar" :src="store.getters['user/avatar']" style="width: 50px">
							<div class="nickname">{{store.getters['user/username']}}</div>
							<el-icon class="el-icon-arrow-down">
								<arrow-down />
							</el-icon>
						</div>
						<template #dropdown>
							<el-dropdown-menu class="user-dropDown" slot="dropdown">
								<el-dropdown-item @click="menuHandler('center')" class="center">
									<span>个人中心</span>
								</el-dropdown-item>
								<el-dropdown-item @click="loginOut" class="loginOut">
									<span>退出登录</span>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>

</div>
            <div class="menu-wrapper">
                <el-scrollbar wrap-class="scrollbar-wrapper" class="menu_scrollbar">
                    <el-menu :unique-opened="true" :default-active="menuIndex"
                         class="menu_view" mode="horizontal" @select="menuChange"
                         :key="menuIndex"  :ellipsis="false">
                        <el-menu-item class="first-item" index="/index/home" @click="menuHandler('/')">
                            <i class="iconfont icon-zhuye2"></i>
                            <template #title>
                                <span>首页</span>
                            </template>
                        </el-menu-item>
                        <template v-for="(menu,index) in menuList" :key="menu.menu">
                            <el-sub-menu v-if="menu.child.length>1" :index="menu.name" class="first-item" :teleported="true">
                                <template #title>
                                    <i class="iconfont" :class="menu.icon"></i>
                                    <span>{{ menu.name }}</span>
                                </template>
                                <el-menu-item class="second-item" v-for=" (child,index1) in menu.child" :key="index1"
                                              :index="child.url" @click="menuHandler(child.url)">{{ child.name }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="menu.child[0].url" class="first-item" @click="menuHandler(menu.child[0].url)">
                                <i class="iconfont" :class="menu.icon"></i>
                                <template #title>
                                    <span>{{menu.child[0].name}}</span>
                                </template>
                            </el-menu-item>
                        </template>
                        <el-menu-item v-if="Token" :index="`/index/${context.$toolUtil.storageGet('frontSessionTable')}Center`" class="first-item" @click="menuHandler('center')">
                            <i class="iconfont icon-user1"></i>
                            <template #title>
                                <span>个人中心</span>
                            </template>
                        </el-menu-item>
                    </el-menu>
                </el-scrollbar>
            </div>

			<div class="rotation_view" >
				<mySwiper :type="3" :data="rotationList" :autoHeight="false" :autoplay="true"
					:loop="false" :navigation="true" :pagination="true"
					paginationType="1" :scrollbar="false" slidesPerView="1"
					spaceBetween="20" :centeredSlides="false"
					:freeMode="false" effectType="0"
					direction="horizontal">
					<template #default="scope">
						<img :src="scope.row.value?baseUrl + scope.row.value:''" @click="carouselClick(scope.row.url)">
					</template>
				</mySwiper>
			</div>

        </div>
		<el-scrollbar class="contain_view body-containers">
			<router-view :key="routerKey"/>
			<el-backtop :right="100" :bottom="100" />
			<div class="bottom_view ql-snow ql-editor">
                
			</div>
		</el-scrollbar>
		<el-dialog v-model="noticeDialogVisible" title="系统公告">
			<div>
				<div v-html="store.state.system.notice.content"></div>
			</div>
		</el-dialog>
	</div>
</template>
<script setup>
	import menu from '@/utils/menu'
	import axios from 'axios'
    const moment = window.moment
	import {
		ref,
		onBeforeUnmount,
		getCurrentInstance,
		nextTick,
		computed,
		watch,
        provide
	} from 'vue';
	import {
		useRouter,
		useRoute
	} from 'vue-router';
	import {
		useStore
	} from 'vuex';
	const store = useStore()
	const router = useRouter()
	const route = useRoute();
	const context = getCurrentInstance()?.appContext.config.globalProperties;
    const baseUrl = ref(context.$config.url)
    const projectName = ref(`基于SpringBoot的高校奖学金在线申请与公示系统`)
	const Token = ref('')
	if(localStorage.getItem('frontToken') && !store.getters['user/session'].id){
		store.dispatch('user/getSession')
	}
	//获取通知公告
	const noticeDialogVisible = ref(false)
	store.dispatch('system/getSystemNotice')
	onBeforeUnmount(() => {
	})
	// 获取默认菜单index
	const setMenuIndex = (path)=>{
        if(path){
            menuIndex.value = path.replace('Detail','List')
        }else{
            menuIndex.value = ''
        }
	}
	// 默认菜单index
	const menuIndex = ref('')
    const routerKey = ref(Math.random())
	watch(() => router.currentRoute.value,(value, oldValue) => {
		Token.value = context?.$toolUtil.storageGet('frontToken')
        if(value.path==oldValue?.path){
            //改变路由query时重新加载router-view
            routerKey.value = Math.random()
        }
        if(value.query.centerType){
            setMenuIndex()
        }else{
            setMenuIndex(value.path)
        }
	},{
		immediate:true
	})
	const init = () => {
		// 获取菜单
		getMenu()
		// 赋值token
		Token.value = context?.$toolUtil.storageGet('frontToken')
		// 轮播图
		getRotationList()
		if(Token.value){
			getSession()
		}
	}
	// 切换菜单保存index
	const menuChange = (e)=>{
		if(e=='chat')return
	}
	// 轮播图
	const rotationList = ref([])
	const getRotationList = () => {
		context?.$http({
			url: 'config/list',
			method: 'get',
			params: {
				page: 1,
				limit: 3
			}
		}).then(res => {
			rotationList.value = res.data.data.list
		})
	}

    // 轮播图跳转
    const carouselClick = (url)=>{
        if (url) {
            if (url.startsWith('http')) {
                window.open(url)
            } else {
                context.$router.push(url)
            }
        }
    }
	const menuList = ref([])
	const role = ref('')
	const getMenu = () => {
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
			context?.$toolUtil.storageSet("menus", res.data.data.list[0].menujson);
		})
		menuList.value = context?.$config.menuList
	}
	const loginClick = () => {
		context?.$toolUtil.storageSet('toPath',window.history.state.current)
		router.push('/login')
	}
	const loginOut = () => {
        store.dispatch('user/loginOut')
		context?.$toolUtil.message('退出成功', 'success')
		context?.$toolUtil.storageClear()
		router.replace('/index/home')
		Token.value = ''
	}
	//菜单跳转
	const menuHandler = (name) => {
		if (name == 'center') {
			name = `${context?.$toolUtil.storageGet('frontSessionTable')}Center`
			menuChange('center')
		}
		router.push(name)
	}
	// 获取用户信息
	const getSession = () =>{
		context?.$http({
			url: `${context?.$toolUtil.storageGet('frontSessionTable')}/session`,
			method:'get'
		}).then(res=>{
			context?.$toolUtil.storageSet('userid',res.data.data.id)
			if(context?.$toolUtil.storageGet('frontSessionTable') == 'xuesheng'){
				context?.$toolUtil.storageSet("frontName", res.data.data.xuehao)
			}
			if(context?.$toolUtil.storageGet('frontSessionTable') == 'xuesheng'){
				context?.$toolUtil.storageSet('headportrait',res.data.data.touxiang||'')
			}
			if(context?.$toolUtil.storageGet('frontSessionTable') == 'fudaoyuan'){
				context?.$toolUtil.storageSet("frontName", res.data.data.fudaoyuanzhanghao)
			}
			if(context?.$toolUtil.storageGet('frontSessionTable') == 'fudaoyuan'){
				context?.$toolUtil.storageSet('headportrait',res.data.data.touxiang||'')
			}
		})
	}
	init()
</script>
<style lang="scss">
    .el-aside {
        transition: width 0.15s;
        -webkit-transition: width 0.15s;
        -moz-transition: width 0.15s;
        -webkit-transition: width 0.15s;
        -o-transition: width 0.15s;
    }
    .chat-badge{
        position: absolute;
        background: red;
        color: rgb(255, 255, 255);
        font-size: 12px;
        border-radius: 14px;
        padding:0 4px;
        height: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -4px;
        right: -10px;
    }
.index_top .top-header {
    width: 90%;
    padding: 30px 20px;
    background: var(--theme);
    margin:0 auto 20px auto;
    display: flex;
    align-items: center;
    color: #fff;
    border-radius:30px;
    font-size: 16px;
}
.index_top .projectName {
    margin-right: auto;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
}
.index_top .weather {
    color: #fff;
    white-space: nowrap;
    margin: 5px 0 0;
}
.index_top .notice-btn{
    background: url(http://clfile.zggen.cn/20250905/1b34445fff77428fa8826e2108be19e5.png) no-repeat left center / 24px;
    padding: 0 0 0 30px;
    border: none;
    color: #fff;
    margin: 0 20px;
}
.index_top .login{
    background: none;
    border: 0px solid #ffffff50;
    color: #fff;
    font-size: 16px;
    margin: 0 20px 0 0;
}

.index_top .avatar-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
}
.index_top img.user-avatar {
    width: 40px!important;
    height: 40px;
}
.index_top .avatar-wrapper .nickname{
    color: #fff;
    white-space: nowrap;
}
.index_top .avatar-wrapper .el-icon{
    color: #fff;   
}
.index_top .chat{
    white-space: nowrap;
    margin: 0 20px 0 0;
}
.index_top .cart{
    white-space: nowrap;
    margin: 0 20px 0 0;
}

.bottom_view {
    width: 100%;
    padding: 20px 7%;
    margin: 0 auto;
    min-height: 100px;
    background: #000000;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-radius: 0 0 0px 0px;
}


.el-backtop {
    right:40px !important;
}
.main-containers{
    background:#F0F1FB;
    padding-top:20px;
}
#index {
    background: #F0F1FB;
}
.menu-wrapper{
    
    width: 100%;
    padding:10px 7%;
    margin: 0px auto 0px;
    background: none;
    border-top: 0px solid #f0f0f0;
    font-size: 16px;
   
    border-radius: 0px;
    overflow-y: hidden;
}
.menu-wrapper .el-scrollbar__view{
}
.menu-wrapper ul.el-menu.el-menu--horizontal.menu_view {
    font-size: 16px;
    background: none;
    height: 50px;
    display: flex;
    justify-content: center;
}
.menu-wrapper .el-menu--horizontal.el-menu {
    border-bottom:0px;
}

.menu-wrapper .el-menu--horizontal>.el-menu-item {
    align-items: center;
    border-bottom: 0px solid transparent;
    color: #333;
    font-size: 16px;
    margin-right:20px;
    border-radius: 30px;
    padding: 0;
}
.menu-wrapper .el-menu--horizontal>.el-menu-item i{
    margin: 0 3px 0 0;
}
.menu-wrapper .el-menu--horizontal>.el-menu-item:hover{
    background: #fff !important; 
    color: var(--theme) !important; 
    border-bottom: 0px solid var(--theme);
}
.menu-wrapper .el-menu--horizontal>.el-menu-item.is-active{
    background: #fff !important; 
    color: var(--theme) !important; 
    border-bottom: 0px solid var(--theme);
}



.menu-wrapper .menu_view .first-item .el-sub-menu__title{
    color: #333;
    font-size: 16px;
    border-radius: 30px;
    padding: 0 20px 0 0;
}

.menu-wrapper .menu_view .first-item .el-sub-menu__title i{
    margin: 0 3px 0 0;
}
.menu-wrapper .menu_view .first-item .el-sub-menu__title:hover{
    background: #fff; 
    color: var(--theme);
    border-radius: 30px;
    border-bottom: 0px solid var(--theme);
}
.menu-wrapper .el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title{
    background: #fff; 
    border-bottom: none;
    border-bottom: 0px solid var(--theme);
    border-radius: 30px;
}
.menu-wrapper .el-menu--horizontal>.el-menu-item.is-active,.menu-wrapper .el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title {
    background: #fff;  
    color: var(--theme)!important;
    font-size: inherit;
    border-radius: 30px;
    border-bottom: 0px solid var(--theme);
}
.menu-wrapper .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,.menu-wrapper  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background: var(--theme-light4);
}



.el-sub-menu .el-sub-menu__icon-arrow {
    font-size: 12px;
    margin-top: -6px !important;
    position: absolute;
    top: 50%;
    right: 0;
}
.menu-wrapper .menu_wrapper {
    --el-menu-bg-color: none;
    --el-menu-active-color: var(--theme-dark);
}
.menu-wrapper .el-menu--horizontal>.el-menu-item .el-sub-menu__icon-more{
    color: #fff;
}
.el-menu--horizontal>.el-sub-menu .el-sub-menu__title{
    border: 0;
}



.menu-wrapper .el-menu--popup {
    border: none;
    border-radius: var(--el-border-radius-small);
    box-shadow: var(--el-box-shadow-light);
    min-width: 200px;
    padding: 0px 0;
    z-index: 100;
}
.menu-wrapper .el-menu--popup .second-item{
    border-radius: 30px;
}
.menu-wrapper .el-menu--popup .second-item:hover{
    background: var(--theme2) !important;
    color: #0949f7 !important;
}

.menu-wrapper i.el-icon.el-sub-menu__icon-more {
    color: #0949f7 !important;
}

.menu-wrapper .el-menu--horizontal>.el-menu-item.is-active{
background: #FFFFFF!important;
border-radius: 10px;

margin-top:auto;
margin-bottom:auto;
padding:10px;
color:#9C8CFD!important;
}



.menu-wrapper .el-menu--horizontal>.el-menu-item.is-active, .menu-wrapper .el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title {
    background:none;
    color:#9C8CFD!important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    color:#9C8CFD;
}

i.el-icon.el-sub-menu__icon-arrow {
    display:none;
}


.menu-wrapper .menu_view .first-item{
    position: relative;
    background: #fff;
    border-radius: 30px;
    margin-right:20px;
    padding: 10px;
border-radius: 10px 10px 10px 10px;

}
.rotation_view{
    width: 86%;
    padding: 0;
    margin: 10px auto;
    border-radius:30px 30px 10px 10px;
}
.rotation_view .swiper{
    height:450px;
}
.rotation_view .swiper-slide img {
    width: 100%;
    height:100%;
    object-fit: cover;
    border-radius: 0px; 
}
.swiper-pagination-bullet-active {
    background: var(--theme);
}


.rotation_view .swiper-button-prev{
    margin-left:40px !important; 
}
.rotation_view .swiper-button-next{
    margin-right:40px !important; 
}
.rotation_view .swiper-button-next:after,.rotation_view .swiper-button-prev:after {
    background:rgba(255,255,255,.5);
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    padding: 0 20px;
    width: 50px !important;
    height: 50px !important;
    line-height: 50px !important;
    text-align: center;
    border-radius: 100%;
}

.breadcrumb-wrapper {
    width: 100%;
    padding: 0px 0;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.breadcrumb-wrapper .el-breadcrumb{
   width: 100%;
   font-size: 16px; 
}

.breadcrumb-wrapper .el-breadcrumb__separator{
color: #000000;
}

.breadcrumb-wrapper .el-breadcrumb span{
color: #000000!important; 
}

.breadcrumb-wrapper .bread_view{
    margin-top:auto;
    height:100%;
    border-bottom:4px solid #9C8CFD;
    padding-bottom:5px;
}
</style>