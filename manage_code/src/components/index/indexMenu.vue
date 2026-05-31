<template>
	<div class="menu_wrapper" :class="{'menu_wrapper_collapse':collapse}">
		<el-menu :default-openeds="[]" :unique-opened="true" :default-active="menuIndex" class="menu_view"
				 mode="horizontal"  ellipsis :ellipsis-icon="MoreFilled">
			<el-menu-item class="first-item" index="/" @click="menuHandler('')">
				<i class="iconfont icon-zhuye2"></i>
				<span>首页</span>
			</el-menu-item>
			<template v-for=" (item,index) in menuList.backMenu" :key="item.menu">
				<el-sub-menu class="first-item" :index="item.menu" popper-class="menu_popper">
					<template #title>
						<i class="iconfont" :class="item.fontClass"></i>
						<span>{{ item.menu }}</span>
					</template>
					<el-menu-item class="second-item" v-for=" (child,sort) in item.child" :key="sort"
						:index="getPath(child.classname||child.tableName,child.menuJump)"
						@click="menuHandler(child.classname||child.tableName,child.menuJump)">{{ child.menu }}
					</el-menu-item>
				</el-sub-menu>
			</template>
		</el-menu>
	</div>
</template>

<script setup>
	import menu from '@/utils/menu'
	import {
		ref,
		toRefs,
		getCurrentInstance,
		nextTick,
        watch
	} from 'vue';
	import { useStore } from 'vuex'
	const store = useStore()
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	//props
	const props = defineProps({
		collapse: Boolean
	})
	const {
		collapse
	} = toRefs(props)
	//data
	const menuList = ref([])
	const role = ref('')
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}
	const init = () => {
		const menus = menu.list()
		if (menus) {
			menuList.value = menus
		}
		role.value = context?.$toolUtil.storageGet('role')

		for (let i = 0; i < menuList.value.length; i++) {
			if (menuList.value[i].roleName == role.value) {
				menuList.value = menuList.value[i];
				menuList.value.backMenu = menuList.value.backMenu.filter(item=>{
					return item.child.length && item.child[0].tableName!="board"
				})
				break;
			}
		}
	}
    // 默认菜单index
    const menuIndex = ref('')
    watch(() => context.$router.currentRoute.value,(value, oldValue) => {
        menuIndex.value = decodeURIComponent(value.fullPath)
    },{
        immediate:true
    })
	const getPath = (name,menuJump) => {
        if(name == 'center'){
            return `/${role.value}Center`
        }else if(name == 'storeup'){
            return `/storeup?type=${menuJump}`
        }else if(name == 'exampaper' && menuJump == '12'){
            return '/exampaperlist'
        }else if(name == 'examrecord' && menuJump == '22'){
            return '/examfailrecord'
        }else{
            return `/${name}${menuJump?'?menuJump='+menuJump:''}`
        }
	}
    const menuHandler = (name,menuJump) => {
        let url = getPath(name,menuJump)
        context.$router.push(url)
    }
	init()
</script>

<style>


.menu_wrapper ul.el-menu.el-menu--horizontal.menu_view {
    border-top: 1px solid #f0f0f0;
    font-size: 16px;
    line-height: 50px;
    height: 50px;
}

.menu_wrapper .first-item {
    position: relative;
}

.menu_wrapper .is-active.first-item {
    background: var(--theme-light4);
}


.menu_wrapper .el-menu--horizontal>.el-menu-item.is-active,.menu_wrapper .el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title {
    color: #555!important;
    font-size: inherit;
}

.menu_wrapper .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,.menu_wrapper  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background: var(--theme-light4);
}

.menu_wrapper .el-menu-item {
    line-height: inherit;
}

.menu_wrapper .first-item:hover {
    top: -1px;
}

.menu_wrapper {
    --el-menu-bg-color: none;
    --el-menu-active-color: var(--theme-dark);
}
.menu_wrapper li.el-menu-item.is-active.first-item {
    background:none;
    border-bottom: 3px solid #64B0E5!important;
}
.menu_wrapper li.el-menu-item.is-active.first-item:hover{
    background:none;
}
.menu_wrapper li.el-menu-item.is-active.first-item i {
    color: #64B0E5!important;
}
.menu_wrapper li.el-menu-item.is-active.first-item span {
    color: #64B0E5!important;
}



.menu_wrapper li.el-sub-menu.first-item div i {
   color: #8EABCE!important;
}
.menu_wrapper li.el-sub-menu.first-item div span {
   color: #8EABCE!important;
}
/* 二级菜单 */
/** 二级盒子 **/
.el-popper.is-light, .el-popper.is-light>.el-popper__arrow:before {
    
    margin-top:15px;
    border-radius: 10px 10px 10px 10px;
}
.el-menu--popup {
  
    border-radius: 10px 10px 10px 10px;
    box-shadow: none;
    min-width: 200px;
    padding: 10px 0;
    z-index: 100;
    background:#fff;
    top:-4px;
}
.el-menu--popup .second-item{
    background: #fff !important;
   color: #8EABCE!important;
}
.el-menu--popup .second-item:hover{
    background: #64B0E5 !important;
    color: #fff!important;
}
/* 在左上角添加白色小三角 */
.el-popper.is-light:before {
    content: '';
    position: absolute;
    top: -10px; /* 根据需要调整 */
    left: 10px; /* 根据需要调整 */
    width: 0;
    height: 0;
    border-left: 15px solid transparent; /* 增大三角的大小 */
    border-right: 15px solid transparent; /* 增大三角的大小 */
    border-bottom: 15px solid #fff; /* 增大三角的大小 */
}
</style>