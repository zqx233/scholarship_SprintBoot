const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '奖学金管理',
					icon: '',
					child:[

						{
							name:'奖学金',
                            url:'/index/jiangxuejinList'

						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: `基于SpringBoot的高校奖学金在线申请与公示系统`
        } 
    }
}
export default config
