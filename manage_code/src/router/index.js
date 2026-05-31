import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import login from '@/views/login.vue'
import index from '@/views/index.vue'
import HomeView from '@/views/HomeView.vue'
export const routes = [{
		path: '/login',
		name: 'login',
        meta: { title: '登录' },
		component: login
	},{
		path: '/',
		name: '首页',
        meta: { title: '首页' },
		component: index,
		children: [{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				affix: true,
                title: '首页'
			}
		}, {
			path: '/updatepassword',
			name: 'updatepassword',
            meta: { title: '修改密码' },
			component: () => import('../views/updatepassword.vue')
		}

		,{
			path: '/usersCenter',
			name: 'usersCenter',
            meta: { title: '管理员个人中心' },
			component: ()=>import('@/views/users/center')
		}
		,{
			path: '/fudaoyuanCenter',
			name: 'fudaoyuanCenter',
            meta: { title: '辅导员个人中心' },
			component: ()=>import('@/views/fudaoyuan/center')
		}
		,{
			path: '/leixing',
			name: 'leixing',
            meta: { title: '类型' },
			component: ()=>import('@/views/leixing/list')
		}
		,{
			path: '/xuesheng',
			name: 'xuesheng',
            meta: { title: '学生' },
			component: ()=>import('@/views/xuesheng/list')
		}
		,{
			path: '/systemNotice',
			name: 'systemNotice',
            meta: { title: '系统公告' },
			component: ()=>import('@/views/systemNotice/list')
		}
		,{
			path: '/jiangxuejinshenqing',
			name: 'jiangxuejinshenqing',
            meta: { title: '奖学金申请' },
			component: ()=>import('@/views/jiangxuejinshenqing/list')
		}
		,{
			path: '/jiangxuejin',
			name: 'jiangxuejin',
            meta: { title: '奖学金' },
			component: ()=>import('@/views/jiangxuejin/list')
		}
		,{
			path: '/syslog',
			name: 'syslog',
            meta: { title: '操作日志' },
			component: ()=>import('@/views/syslog/list')
		}
		,{
			path: '/fudaoyuan',
			name: 'fudaoyuan',
            meta: { title: '辅导员' },
			component: ()=>import('@/views/fudaoyuan/list')
		}
        ,{
            path: '/menu',
            name: 'menu',
            meta: { title: '菜单权限管理' },
            component: ()=>import('@/views/menu_manage/list')
        }
		,{
			path: '/config',
			name: 'config',
            meta: { title: '轮播图' },
			component: ()=>import('@/views/config/list')
		}
		,{
			path: '/users',
			name: 'users',
            meta: { title: '管理员' },
			component: ()=>import('@/views/users/list')
		}
		]
	},
	{
		path: '/fudaoyuanRegister',
		name: 'fudaoyuanRegister',
        meta: { title: '辅导员注册' },
		component: ()=>import('@/views/fudaoyuan/register')
	},
	{
	path: '/dashBoard',
	name: 'dashBoard',
	meta: { title: '看板' },
	component: () => import('../views/dashBoard.vue')
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
