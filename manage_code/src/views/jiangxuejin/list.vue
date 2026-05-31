<template>
	<div>
		<div class="center_view">
			<div class="list_search_view">
				<el-form :model="searchQuery" class="search_form" >
					<div class="search_view">
						<div class="search_label">
							名称：
						</div>
						<div class="search_box">
							<el-input class="search_inp" v-model="searchQuery.mingcheng" placeholder="名称"
								clearable>
							</el-input>
						</div>
					</div>
					<div class="search_btn_view">
						<el-button class="search_btn" type="primary" @click="searchClick()" size="small">搜索</el-button>
					</div>
				</el-form>
				<div class="btn_view">
					<el-button class="add_btn" type="success" @click="addClick" v-if="btnAuth('jiangxuejin','新增')">
						新增
					</el-button>
					<el-button class="del_btn" type="danger" :disabled="selRows.length?false:true" @click="delClick(null)"  v-if="btnAuth('jiangxuejin','删除')">
						删除
					</el-button>
                    <el-button class="statis_btn" type="warning" @click="echartClick1" v-if="btnAuth('jiangxuejin','奖学金项目')">
                        奖学金项目
                    </el-button>
                    <el-button class="statis_btn" type="warning" @click="echartClick2" v-if="btnAuth('jiangxuejin','类型')">
                        类型
                    </el-button>
                    <el-button class="statis_btn" type="warning" @click="echartClick3" v-if="btnAuth('jiangxuejin','奖学金额度')">
                        奖学金额度
                    </el-button>
                    <el-button class="statis_btn" type="warning" @click="echartClick4" v-if="btnAuth('jiangxuejin','申请对象')">
                        申请对象
                    </el-button>
                    <el-button class="statis_btn" type="warning" @click="echartClick5" v-if="btnAuth('jiangxuejin','专业限制')">
                        专业限制
                    </el-button>
                    <el-button class="statis_btn" type="warning" @click="echartClick6" v-if="btnAuth('jiangxuejin','GPA要求')">
                        GPA要求
                    </el-button>
				</div>
			</div>
			<el-table
				v-loading="listLoading" border :stripe='false'
				@selection-change="handleSelectionChange"
				ref="table"
				v-if="btnAuth('jiangxuejin','查看')"
				:data="list"
				@row-click="listChange">
				<el-table-column :resizable='true' align="left" header-align="left" type="selection" width="55" />
				<el-table-column label="序号" width="70" :resizable='true' align="left" header-align="left">
					<template #default="scope">{{ (listQuery.page-1)*listQuery.limit+scope.$index + 1}}</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="mingcheng"
					label="名称">
					<template #default="scope">
						{{scope.row.mingcheng}}
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="leixing"
					label="类型">
					<template #default="scope">
						{{scope.row.leixing}}
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="jine"
					label="金额">
					<template #default="scope">
						{{scope.row.jine}}
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="shenqingduixiang"
					label="申请对象">
					<template #default="scope">
						{{scope.row.shenqingduixiang}}
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="zhuanyexianzhi"
					label="专业限制">
					<template #default="scope">
						{{scope.row.zhuanyexianzhi}}
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="gpayaoqiu"
					label="GPA要求">
					<template #default="scope">
						{{scope.row.gpayaoqiu}}
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="yuyanyaoqiu"
					label="语言要求">
					<template #default="scope">
						{{scope.row.yuyanyaoqiu}}
					</template>
				</el-table-column>
				<el-table-column label="封面" min-width="140" width="120" :resizable='true' :sortable='false' align="left" header-align="left">
					<template #default="scope">
						<div v-if="scope.row.fengmian">
							<el-image v-if="scope.row.fengmian.substring(0,4)=='http'" preview-teleported
								:preview-src-list="[scope.row.fengmian.split(',')[0]]"
								:src="scope.row.fengmian.split(',')[0]" style="width:100px;height:100px"></el-image>
							<el-image v-else preview-teleported
								:preview-src-list="[$config.url+scope.row.fengmian.split(',')[0]]"
								:src="$config.url+scope.row.fengmian.split(',')[0]" style="width:100px;height:100px">
							</el-image>
						</div>
						<div v-else>无图片</div>
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="fudaoyuanzhanghao"
					label="辅导员账号">
					<template #default="scope">
						{{scope.row.fudaoyuanzhanghao}}
					</template>
				</el-table-column>
				<el-table-column min-width="140"
					:resizable='true'
					:sortable='false'
					align="left"
					header-align="left"
					prop="fudaoyuanxingming"
					label="辅导员姓名">
					<template #default="scope">
						{{scope.row.fudaoyuanxingming}}
					</template>
				</el-table-column>
				<el-table-column label="操作" class-name="operation-cell" width="300"  :resizable='true' :sortable='false' align="left" header-align="left">
					<template #default="scope">
						<el-button class="view_btn" type="info" v-if=" btnAuth('jiangxuejin','查看')" @click="infoClick(scope.row.id)">
							详情
						</el-button>
						<el-button class="edit_btn" type="primary" @click="editClick(scope.row.id,scope.row)" v-if=" btnAuth('jiangxuejin','修改')">
							修改						</el-button>
						<el-button class="del_btn" type="danger" @click="delClick(scope.row.id,scope.row)"  v-if="btnAuth('jiangxuejin','删除')">
							删除						</el-button>
						<el-button class="cross_btn" v-if="btnAuth('jiangxuejin','申请')" type="success" @click="jiangxuejinshenqingCrossAddOrUpdateHandler(scope.row,'cross','','','','')">
							申请
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				background
				:layout="layouts.join(',')"
				:total="total"
				:page-size="listQuery.limit"
                v-model:current-page="listQuery.page"
				prev-text="<"
				next-text=">"
				:hide-on-single-page="true"
				:page-sizes="[10, 20, 30, 40, 50, 100]"
				@size-change="sizeChange"
				@current-change="currentChange"  />
		</div>
		<formModel ref="formRef" @formModelChange="formModelChange"></formModel>
		<!-- 统计图弹窗 -->
		<el-dialog v-model="echartVisible" modal-class="edit_form_modal" class="edit_form" title="统计图" width="70%">
			<el-tabs v-model="echartActive" class="demo-tabs" @tab-change="echartTabClick" type="card">
                <el-tab-pane label="奖学金项目" name="1" v-if="btnAuth('jiangxuejin','奖学金项目')"></el-tab-pane>
                <el-tab-pane label="类型" name="2" v-if="btnAuth('jiangxuejin','类型')"></el-tab-pane>
                <el-tab-pane label="奖学金额度" name="3" v-if="btnAuth('jiangxuejin','奖学金额度')"></el-tab-pane>
                <el-tab-pane label="申请对象" name="4" v-if="btnAuth('jiangxuejin','申请对象')"></el-tab-pane>
                <el-tab-pane label="专业限制" name="5" v-if="btnAuth('jiangxuejin','专业限制')"></el-tab-pane>
                <el-tab-pane label="GPA要求" name="6" v-if="btnAuth('jiangxuejin','GPA要求')"></el-tab-pane>
			</el-tabs>
			<div v-if="echartActive==1">
				<div id="mingchengEchart1" style="width:100%;height:600px;"></div>
			</div>
			<div v-if="echartActive==2">
				<div id="leixingEchart2" style="width:100%;height:600px;"></div>
			</div>
			<div v-if="echartActive==3">
				<div id="jineEchart3" style="width:100%;height:600px;"></div>
			</div>
			<div v-if="echartActive==4">
				<div id="shenqingduixiangEchart4" style="width:100%;height:600px;"></div>
			</div>
			<div v-if="echartActive==5">
				<div id="zhuanyexianzhiEchart5" style="width:100%;height:600px;"></div>
			</div>
			<div v-if="echartActive==6">
				<div id="gpayaoqiuEchart6" style="width:100%;height:600px;"></div>
			</div>
			<template #footer>
				<span class="formModel_btn_box">
					<el-button class="cancel_btn" @click="echartVisible=false">取消</el-button>
				</span>
			</template>
		</el-dialog>
		<jiangxuejinshenqingFormModel ref="jiangxuejinshenqingFormModelRef" @formModelChange="formModelChange"></jiangxuejinshenqingFormModel>
	</div>
</template>
<script setup>
	import axios from 'axios'
	const moment = window.moment
	import {
		reactive,
		ref,
		getCurrentInstance,
		nextTick,
		onMounted,
		watch,
		computed,
		inject
	} from 'vue'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		useStore
	} from 'vuex';
	const store = useStore()
	const user = computed(()=>store.getters['user/session'])
	const avatar = computed(()=>store.getters['user/avatar'])
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const baseUrl = ref(context.$config.url)
	import formModel from './formModel.vue'
	//基础信息
	const tableName = 'jiangxuejin'
	const formName = '奖学金'
	const route = useRoute()
    const router = useRouter()
	const role = context.$toolUtil.storageGet('sessionTable')
	//基础信息
	onMounted(()=>{
	})
	//列表数据
	const list = ref(null)
	const table = ref(null)
	const listQuery = ref({
		page: 1,
		limit: 20,
		sort: 'id',
		order: 'desc'
	})
	const searchQuery = ref({})
	const selRows = ref([])
	const listLoading = ref(false)
	const listChange = (row) =>{
		nextTick(()=>{
			//table.value.clearSelection()
			table.value.toggleRowSelection(row)
		})
	}
	//列表
	const getList = () => {
		listLoading.value = true
		let params = JSON.parse(JSON.stringify(listQuery.value))
		params['sort'] = 'id'
		params['order'] = 'desc'
		if(searchQuery.value.mingcheng&&searchQuery.value.mingcheng!=''){
			params['mingcheng'] = '%' + searchQuery.value.mingcheng + '%'
		}
		context.$http({
			url: `${tableName}/page`,
			method: 'get',
			params: params
		}).then(res => {
			listLoading.value = false
			list.value = res.data.data.list
			total.value = Number(res.data.data.total)
		})
	}
	//删
	const delClick = (id,row={}) => {
		let ids = []
		if (id) {
			ids = [id]
		} else {
			if (selRows.value.length) {
				for (let x in selRows.value) {
					ids.push(selRows.value[x].id)
				}
			} else {
				return false
			}
		}
		ElMessageBox.confirm(`是否删除选中${formName}`, '提示', {
			confirmButtonText: '是',
			cancelButtonText: '否',
			type: 'warning',
		}).then(() => {
			context.$http({
				url: `${tableName}/delete`,
				method: 'post',
				data: ids
			}).then(res => {
				context?.$toolUtil.message('删除成功', 'success',()=>{
					getList()
				})
			})
		}).catch(_ => {})
	}
	//多选
	const handleSelectionChange = (e) => {
		selRows.value = e
	}
	//列表数据
	//分页
	const total = ref(0)
	const layouts = ref(["total","prev","pager","next"])
	const sizeChange = (size) => {
		listQuery.value.limit = size
		getList()
	}
	const currentChange = (page) => {
		listQuery.value.page = page
		getList()
	}
	//分页
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}
	//搜索
	const searchClick = () => {
		listQuery.value.page = 1
		getList()
	}
	//表单
	const formRef = ref(null)
	const formModelChange=()=>{
		searchClick()
	}
	const addClick = ()=>{
		formRef.value.init()
	}
	const editClick = (id=null,row={})=>{
		if(id){
			formRef.value.init(id,'edit')
			return
		}
		if(selRows.value.length){
			formRef.value.init(selRows.value[0].id,'edit')
		}
	}

	const infoClick = (id=null)=>{
		if(id){
			formRef.value.init(id,'info')
		}
		else if(selRows.value.length){
			formRef.value.init(selRows.value[0].id,'info')
		}
	}
	// 表单
	// 预览文件
	const preClick = (file) =>{
		if(!file){
			context?.$toolUtil.message('文件不存在','error')
		}
		window.open(context?.$config.url + file)
	}
	// 下载文件
	const download = (file) => {
		if(!file){
			context?.$toolUtil.message('文件不存在','error')
		}
		let arr = file.replace(new RegExp('file/', "g"), "")
		axios.get((location.href.split(context?.$config.name).length>1 ? location.href.split(context?.$config.name)[0] :'') + context?.$config.name + '/file/download?fileName=' + arr, {
			headers: {
				token: context?.$toolUtil.storageGet('Token')
			},
			responseType: "blob"
		}).then(({
			data
		}) => {
			const binaryData = [];
			binaryData.push(data);
			const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
				type: 'application/pdf;chartset=UTF-8'
			}))
			const a = document.createElement('a')
			a.href = objectUrl
			a.download = arr
			// a.click()
			// 下面这个写法兼容火狐
			a.dispatchEvent(new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
				view: window
			}))
			window.URL.revokeObjectURL(data)
		})
	}
	//判断是否有统计图筛选权限
	const changeStatQuery = (arr)=>{
		if(!arr){
			return true
		}
		let role = localStorage.getItem('role')
		for(let x in arr){
			if(arr[x] == role) {
				return true
			}
		}
		return false
	}
	// 统计图1
	const echartVisible = ref(false)
	const echartClick1 = ()=>{
		if(!route.path.endsWith('Analysis')){
			echartActive.value = '1'
			echartVisible.value = true
		}
		nextTick(async ()=>{
			let dom = document.getElementById("mingchengEchart1")
			if(!dom)return
			var mingchengEchart1 = echarts.init(dom, null);
			let params = {}
			context.$http({
				url: `${tableName}/group/mingcheng?order=desc`,
				method: 'get',
				params
			}).then(res=>{
				let obj = res.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<obj.length;i++){
				    xAxis.push(obj[i].mingcheng);
				    yAxis.push(parseFloat((obj[i].total)));
                    dataList.push({
				        value: parseFloat((obj[i].total)),
				        name: obj[i].mingcheng				    })
				}
				var option = {};
				option = {
    title: {
        text: '奖学金项目',
        left: 'center'
    },
    grid:{
        containLabel:true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
    },
    xAxis: {
        data: xAxis,
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    series:{
        data: yAxis,
        type: 'bar'
    }
}
				// 使用刚指定的配置项和数据显示图表。
				mingchengEchart1.setOption(option);
				  //根据窗口的大小变动图表
				window.onresize = function() {
				    mingchengEchart1.resize();
				};
			})
		})
	}
	// 统计图2
    const echartActive = ref('1')
    const echartTabClick = () =>{
		if(echartActive.value==1){
			echartClick1()
		}
		else if(echartActive.value==2){
			echartClick2()
		}
		else if(echartActive.value==3){
			echartClick3()
		}
		else if(echartActive.value==4){
			echartClick4()
		}
		else if(echartActive.value==5){
			echartClick5()
		}
		else if(echartActive.value==6){
			echartClick6()
		}
	}
	const echartClick2 = ()=>{
		if(!route.path.endsWith('Analysis')){
			echartActive.value = '2'
			echartVisible.value = true
		}
		nextTick(async ()=>{
			let dom = document.getElementById("leixingEchart2")
			if(!dom)return
			var leixingEchart2 = echarts.init(dom, null);
			let params = {}
			context.$http({
				url: `${tableName}/group/leixing?order=desc`,
				method: 'get',
				params
			}).then(res=>{
				let obj = res.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<obj.length;i++){
				    xAxis.push(obj[i].leixing);
				    yAxis.push(parseFloat((obj[i].total)));
                    dataList.push({
				        value: parseFloat((obj[i].total)),
				        name: obj[i].leixing				    })
				}
				var option = {};
				option = {
    title:{
        text: '类型',
        left: 'center'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: dataList,
            emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
				// 使用刚指定的配置项和数据显示图表。
				leixingEchart2.setOption(option);
				  //根据窗口的大小变动图表
				window.onresize = function() {
				    leixingEchart2.resize();
				};
			})
		})
	}
	// 统计图3
	const echartClick3 = ()=>{
		if(!route.path.endsWith('Analysis')){
			echartActive.value = '3'
			echartVisible.value = true
		}
		nextTick(async ()=>{
			let dom = document.getElementById("jineEchart3")
			if(!dom)return
			var jineEchart3 = echarts.init(dom, null);
			let params = {}
			context.$http({
				url: `${tableName}/value/mingcheng/jine?order=desc`,
				method: 'get',
				params
			}).then(res=>{
				let obj = res.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<obj.length;i++){
				    xAxis.push(obj[i].mingcheng);
				    yAxis.push(parseFloat((obj[i].total)));
                    dataList.push({
				        value: parseFloat((obj[i].total)),
				        name: obj[i].mingcheng				    })
				}
				var option = {};
                option = {
    title: {
        text: '奖学金额度',
        left: 'center'
    },
    grid:{
        containLabel:true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
    },
    xAxis: {
        data: xAxis,
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    series:{
        data: yAxis,
        type: 'line'
    }
}
				// 使用刚指定的配置项和数据显示图表。
				jineEchart3.setOption(option);
				  //根据窗口的大小变动图表
				window.onresize = function() {
				    jineEchart3.resize();
				};
			})
		})
	}
	// 统计图4
	const echartClick4 = ()=>{
		if(!route.path.endsWith('Analysis')){
			echartActive.value = '4'
			echartVisible.value = true
		}
		nextTick(async ()=>{
			let dom = document.getElementById("shenqingduixiangEchart4")
			if(!dom)return
			var shenqingduixiangEchart4 = echarts.init(dom, null);
			let params = {}
			context.$http({
				url: `${tableName}/group/shenqingduixiang?order=desc`,
				method: 'get',
				params
			}).then(res=>{
				let obj = res.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<obj.length;i++){
				    xAxis.push(obj[i].shenqingduixiang);
				    yAxis.push(parseFloat((obj[i].total)));
                    dataList.push({
				        value: parseFloat((obj[i].total)),
				        name: obj[i].shenqingduixiang				    })
				}
				var option = {};
				option = {
    title: {
        text: '申请对象',
        left: 'center'
    },
    grid:{
        containLabel:true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
    },
    xAxis: {
        data: xAxis,
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    series:{
        data: yAxis,
        type: 'bar'
    }
}
                var middle = option.xAxis
                option.xAxis = option.yAxis
                option.yAxis = middle
				// 使用刚指定的配置项和数据显示图表。
				shenqingduixiangEchart4.setOption(option);
				  //根据窗口的大小变动图表
				window.onresize = function() {
				    shenqingduixiangEchart4.resize();
				};
			})
		})
	}
	// 统计图5
	const echartClick5 = ()=>{
		if(!route.path.endsWith('Analysis')){
			echartActive.value = '5'
			echartVisible.value = true
		}
		nextTick(async ()=>{
			let dom = document.getElementById("zhuanyexianzhiEchart5")
			if(!dom)return
			var zhuanyexianzhiEchart5 = echarts.init(dom, null);
			let params = {}
			context.$http({
				url: `${tableName}/group/zhuanyexianzhi?order=desc`,
				method: 'get',
				params
			}).then(res=>{
				let obj = res.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<obj.length;i++){
				    xAxis.push(obj[i].zhuanyexianzhi);
				    yAxis.push(parseFloat((obj[i].total)));
                    dataList.push({
				        value: parseFloat((obj[i].total)),
				        name: obj[i].zhuanyexianzhi				    })
				}
				var option = {};
				option = {
    title: {
        text: '专业限制',
        left: 'center'
    },
    grid:{
        containLabel:true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
    },
    xAxis: {
        data: xAxis,
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    series:{
        data: yAxis,
        type: 'bar'
    }
}
				// 使用刚指定的配置项和数据显示图表。
				zhuanyexianzhiEchart5.setOption(option);
				  //根据窗口的大小变动图表
				window.onresize = function() {
				    zhuanyexianzhiEchart5.resize();
				};
			})
		})
	}
	// 统计图6
	const echartClick6 = ()=>{
		if(!route.path.endsWith('Analysis')){
			echartActive.value = '6'
			echartVisible.value = true
		}
		nextTick(async ()=>{
			let dom = document.getElementById("gpayaoqiuEchart6")
			if(!dom)return
			var gpayaoqiuEchart6 = echarts.init(dom, null);
			let params = {}
			context.$http({
				url: `${tableName}/group/gpayaoqiu?order=desc`,
				method: 'get',
				params
			}).then(res=>{
				let obj = res.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<obj.length;i++){
				    xAxis.push(obj[i].gpayaoqiu);
				    yAxis.push(parseFloat((obj[i].total)));
                    dataList.push({
				        value: parseFloat((obj[i].total)),
				        name: obj[i].gpayaoqiu				    })
				}
				var option = {};
				option = {
    title: {
        text: 'GPA要求',
        left: 'center'
    },
    grid:{
        containLabel:true
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}'
    },
    xAxis: {
        data: xAxis,
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    series:{
        data: yAxis,
        type: 'bar'
    }
}
				// 使用刚指定的配置项和数据显示图表。
				gpayaoqiuEchart6.setOption(option);
				  //根据窗口的大小变动图表
				window.onresize = function() {
				    gpayaoqiuEchart6.resize();
				};
			})
		})
	}
	import jiangxuejinshenqingFormModel from '@/views/jiangxuejinshenqing/formModel'
	const jiangxuejinshenqingFormModelRef = ref(null)
    const jiangxuejinshenqingCrossAddOrUpdateHandler = (row,type,crossOptAudit,crossOptPay,statusColumnName,tips,statusColumnValue) => {
		if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
			var obj = row
			for (var o in obj){
				if(o==statusColumnName && obj[o]==statusColumnValue){
					context?.$toolUtil.message(tips,'error')
					return;
				}
			}
		}
		nextTick(()=>{
			jiangxuejinshenqingFormModelRef.value.init(row.id,'cross','申请',row,'jiangxuejin',statusColumnName,tips,statusColumnValue)
		})
    }
	//初始化
	const init = () => {
		getList()
	}
	init()
</script>
<style lang="scss" scoped>
	// 表格样式
	.el-table {
		:deep(.el-table__body-wrapper) {
			tbody {
			}
		}
	}
	.condition-box {
		display: flex;
		gap: 10px;
		justify-content: center;
	}

	.condition-box>* {
		max-width: 300px;
	}
</style>