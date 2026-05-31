import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'syslogList',
			component: ()=>import('@/views/pages/syslog/list')
		}, {
			path: 'syslogDetail',
			component: ()=>import('@/views/pages/syslog/formModel')
		}, {
			path: 'syslogAdd',
			component: ()=>import('@/views/pages/syslog/formAdd')
		}
		, {
			path: 'xueshengList',
			component: ()=>import('@/views/pages/xuesheng/list')
		}, {
			path: 'xueshengDetail',
			component: ()=>import('@/views/pages/xuesheng/formModel')
		}, {
			path: 'xueshengAdd',
			component: ()=>import('@/views/pages/xuesheng/formAdd')
		}
		, {
			path: 'xueshengCenter',
			component: ()=>import('@/views/pages/xuesheng/center')
		}
		, {
			path: 'fudaoyuanList',
			component: ()=>import('@/views/pages/fudaoyuan/list')
		}, {
			path: 'fudaoyuanDetail',
			component: ()=>import('@/views/pages/fudaoyuan/formModel')
		}, {
			path: 'fudaoyuanAdd',
			component: ()=>import('@/views/pages/fudaoyuan/formAdd')
		}
		, {
			path: 'systemNoticeList',
			component: ()=>import('@/views/pages/systemNotice/list')
		}, {
			path: 'systemNoticeDetail',
			component: ()=>import('@/views/pages/systemNotice/formModel')
		}, {
			path: 'systemNoticeAdd',
			component: ()=>import('@/views/pages/systemNotice/formAdd')
		}
		, {
			path: 'leixingList',
			component: ()=>import('@/views/pages/leixing/list')
		}, {
			path: 'leixingDetail',
			component: ()=>import('@/views/pages/leixing/formModel')
		}, {
			path: 'leixingAdd',
			component: ()=>import('@/views/pages/leixing/formAdd')
		}
		, {
			path: 'jiangxuejinList',
			component: ()=>import('@/views/pages/jiangxuejin/list')
		}, {
			path: 'jiangxuejinDetail',
			component: ()=>import('@/views/pages/jiangxuejin/formModel')
		}, {
			path: 'jiangxuejinAdd',
			component: ()=>import('@/views/pages/jiangxuejin/formAdd')
		}
		, {
			path: 'jiangxuejinshenqingList',
			component: ()=>import('@/views/pages/jiangxuejinshenqing/list')
		}, {
			path: 'jiangxuejinshenqingDetail',
			component: ()=>import('@/views/pages/jiangxuejinshenqing/formModel')
		}, {
			path: 'jiangxuejinshenqingAdd',
			component: ()=>import('@/views/pages/jiangxuejinshenqing/formAdd')
		}
		]
	},
	{
		path: '/login',
		component: ()=>import('../views/pages/login.vue')
	}
	,{
		path: '/xueshengRegister',
		component: ()=>import('@/views/pages/xuesheng/register')
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
// 全局后置钩子，路由跳转后执行
router.afterEach(() => {
    // 滚动到顶部
    window.scrollTo(0, 0)
})

export default router
