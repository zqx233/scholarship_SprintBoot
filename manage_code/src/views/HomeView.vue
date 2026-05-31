<template>
	<div class="home_view">


<div class="row3">

    

</div>

		<div class="countList">
			<el-collapse-transition v-if="btnAuth('jiangxuejin','首页总数')">
				<el-card v-show="countTypeList.closejiangxuejinCountType" class="count-item">
					<template #header>
						<div class="card_head_title">
							奖学金
						</div>
						<div class="card_head_right">
							<el-icon @click="countTypeClick('hiddenjiangxuejinCountType')" class="showIcons"
								:class="countTypeList.hiddenjiangxuejinCountType?'showIcons1':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="countTypeClick('closejiangxuejinCountType')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="count_item" v-show="countTypeList.hiddenjiangxuejinCountType">
							<div class="count_title"><span>奖学金总数</span></div>
							<div class="count_num"><countTo :startVal="0" :endVal="jiangxuejinCount" :duration="1000"></countTo></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejinshenqing','首页总数')">
				<el-card v-show="countTypeList.closejiangxuejinshenqingCountType" class="count-item">
					<template #header>
						<div class="card_head_title">
							奖学金申请
						</div>
						<div class="card_head_right">
							<el-icon @click="countTypeClick('hiddenjiangxuejinshenqingCountType')" class="showIcons"
								:class="countTypeList.hiddenjiangxuejinshenqingCountType?'showIcons1':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="countTypeClick('closejiangxuejinshenqingCountType')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="count_item" v-show="countTypeList.hiddenjiangxuejinshenqingCountType">
							<div class="count_title"><span>奖学金申请总数</span></div>
							<div class="count_num"><countTo :startVal="0" :endVal="jiangxuejinshenqingCount" :duration="1000"></countTo></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
		</div>

		<div class="chartList">
			<el-collapse-transition v-if="btnAuth('jiangxuejin','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinChartType1" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinChartType1')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinChartType1?'showIcons1':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinChartType1')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinChartType1">
							<div class="chart-title"><span>奖学金项目</span></div>
							<div id="jiangxuejinmingchengEchart1" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejin','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinChartType2" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinChartType2')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinChartType2?'showIcons2':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinChartType2')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinChartType2">
							<div class="chart-title"><span>类型</span></div>
							<div id="jiangxuejinleixingEchart2" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejin','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinChartType3" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinChartType3')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinChartType3?'showIcons3':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinChartType3')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinChartType3">
							<div class="chart-title"><span>奖学金额度</span></div>
							<div id="jiangxuejinjineEchart3" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejin','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinChartType4" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinChartType4')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinChartType4?'showIcons4':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinChartType4')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinChartType4">
							<div class="chart-title"><span>申请对象</span></div>
							<div id="jiangxuejinshenqingduixiangEchart4" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejin','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinChartType5" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinChartType5')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinChartType5?'showIcons5':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinChartType5')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinChartType5">
							<div class="chart-title"><span>专业限制</span></div>
							<div id="jiangxuejinzhuanyexianzhiEchart5" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejin','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinChartType6" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinChartType6')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinChartType6?'showIcons6':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinChartType6')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinChartType6">
							<div class="chart-title"><span>GPA要求</span></div>
							<div id="jiangxuejingpayaoqiuEchart6" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejinshenqing','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinshenqingChartType1" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金申请
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinshenqingChartType1')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinshenqingChartType1?'showIcons1':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinshenqingChartType1')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinshenqingChartType1">
							<div class="chart-title"><span>申请人数</span></div>
							<div id="jiangxuejinshenqingxueshengxingmingEchart1" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
			<el-collapse-transition v-if="btnAuth('jiangxuejinshenqing','首页统计')">
				<el-card v-show="cardTypeList.closejiangxuejinshenqingChartType2" class="chart-item">
					<template #header>
						<div class="card_head_title">
							奖学金申请
						</div>
						<div class="card_head_right">
							<el-icon @click="cardTypeClick('hiddenjiangxuejinshenqingChartType2')" class="showIcons"
									 :class="cardTypeList.hiddenjiangxuejinshenqingChartType2?'showIcons2':''">
								<ArrowUpBold />
							</el-icon>
							<el-icon @click="cardTypeClick('closejiangxuejinshenqingChartType2')" class="closeIcons">
								<CloseBold />
							</el-icon>
						</div>
					</template>
					<el-collapse-transition>
						<div class="card_item" v-show="cardTypeList.hiddenjiangxuejinshenqingChartType2">
							<div class="chart-title"><span>通过率</span></div>
							<div id="jiangxuejinshenqingxueshengxingmingEchart2" class="Echart" style="width: 100%;height: 400px;"></div>
						</div>
					</el-collapse-transition>
				</el-card>
			</el-collapse-transition>
		</div>



	</div>
</template>

<script setup>
	import {
		inject,
		nextTick,
		ref,
		getCurrentInstance,
		computed,
		onMounted,
	} from 'vue';
	import {
		useStore
	} from 'vuex';
	const moment = window.moment
	const store = useStore()
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const projectName = context.$project.projectName
	const user = computed(()=>store.getters['user/session'])
	//权限验证
	const btnAuth = (e,a)=>{
		return context?.$toolUtil.isAuth(e,a)
	}
	import countTo from '@/components/count-to/vue-countTo.vue';
	const countTypeList = ref({
	})
	const getCountList=()=>{
		countTypeList.value.closejiangxuejinCountType = true
		countTypeList.value.hiddenjiangxuejinCountType = true
		if(btnAuth('jiangxuejin','首页总数')){
			getjiangxuejinCount()
		}
		countTypeList.value.closejiangxuejinshenqingCountType = true
		countTypeList.value.hiddenjiangxuejinshenqingCountType = true
		if(btnAuth('jiangxuejinshenqing','首页总数')){
			getjiangxuejinshenqingCount()
		}
	}
	const jiangxuejinCount = ref(0)
	const getjiangxuejinCount = () => {
		context?.$http({
			url:'jiangxuejin/count',
			method: 'get'
		}).then(res=>{
			jiangxuejinCount.value = res.data.data
		})
	}
	const jiangxuejinshenqingCount = ref(0)
	const getjiangxuejinshenqingCount = () => {
		context?.$http({
			url:'jiangxuejinshenqing/count',
			method: 'get'
		}).then(res=>{
			jiangxuejinshenqingCount.value = res.data.data
		})
	}
	const countTypeClick = (e) => {
		countTypeList.value[e] = !countTypeList.value[e]
	}
	//获取总数
	getCountList()
	const cardTypeClick = (e) =>{
		cardTypeList.value[e] = !cardTypeList.value[e]
		setTimeout(()=>{
			getChartList()
		},1000)
	}
	const cardTypeList = ref({
		closejiangxuejinChartType1: true,
		hiddenjiangxuejinChartType1: true,
		closejiangxuejinChartType2: true,
		hiddenjiangxuejinChartType2: true,
		closejiangxuejinChartType3: true,
		hiddenjiangxuejinChartType3: true,
		closejiangxuejinChartType4: true,
		hiddenjiangxuejinChartType4: true,
		closejiangxuejinChartType5: true,
		hiddenjiangxuejinChartType5: true,
		closejiangxuejinChartType6: true,
		hiddenjiangxuejinChartType6: true,
		closejiangxuejinshenqingChartType1: true,
		hiddenjiangxuejinshenqingChartType1: true,
		closejiangxuejinshenqingChartType2: true,
		hiddenjiangxuejinshenqingChartType2: true,
	})
	//判断是否有统计图筛选权限
	const changeStatQuery = (arr)=>{
		if(!arr){	//不传限制条件，默认都可见
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
	const getjiangxuejinChart1 = () => {
		nextTick(async ()=>{
			var mingchengEchart1 = echarts.init(document.getElementById("jiangxuejinmingchengEchart1"), null);
			let params = {}
			context?.$http({
				url: "jiangxuejin/group/mingcheng?order=desc",
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].mingcheng);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].mingcheng				    })
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
				mingchengEchart1.clear()
				// 使用刚指定的配置项和数据显示图表。
				mingchengEchart1.setOption(option);
				//根据窗口的大小变动图表
				mingchengEchart1.resize();
			})
		})
	}
	const getjiangxuejinChart2 = () => {
		nextTick(async ()=>{
			var leixingEchart2 = echarts.init(document.getElementById("jiangxuejinleixingEchart2"), null);
			let params = {}
			context?.$http({
				url: "jiangxuejin/group/leixing?order=desc",
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].leixing);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].leixing				    })
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
				leixingEchart2.clear()
				// 使用刚指定的配置项和数据显示图表。
				leixingEchart2.setOption(option);
				//根据窗口的大小变动图表
				leixingEchart2.resize();
			})
		})
	}
	const getjiangxuejinChart3 = () => {
		nextTick(async ()=>{
			var jineEchart3 = echarts.init(document.getElementById("jiangxuejinjineEchart3"), null);
			let params = {}
			context?.$http({
				url: `jiangxuejin/value/mingcheng/jine?order=desc`,
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].mingcheng);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].mingcheng				    })
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
				jineEchart3.clear()
				// 使用刚指定的配置项和数据显示图表。
				jineEchart3.setOption(option);
				//根据窗口的大小变动图表
				jineEchart3.resize();
			})
		})
	}
	const getjiangxuejinChart4 = () => {
		nextTick(async ()=>{
			var shenqingduixiangEchart4 = echarts.init(document.getElementById("jiangxuejinshenqingduixiangEchart4"), null);
			let params = {}
			context?.$http({
				url: "jiangxuejin/group/shenqingduixiang?order=desc",
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].shenqingduixiang);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].shenqingduixiang				    })
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
                let middle = option.xAxis
                option.xAxis = option.yAxis
                option.yAxis = middle
				shenqingduixiangEchart4.clear()
				// 使用刚指定的配置项和数据显示图表。
				shenqingduixiangEchart4.setOption(option);
				//根据窗口的大小变动图表
				shenqingduixiangEchart4.resize();
			})
		})
	}
	const getjiangxuejinChart5 = () => {
		nextTick(async ()=>{
			var zhuanyexianzhiEchart5 = echarts.init(document.getElementById("jiangxuejinzhuanyexianzhiEchart5"), null);
			let params = {}
			context?.$http({
				url: "jiangxuejin/group/zhuanyexianzhi?order=desc",
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].zhuanyexianzhi);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].zhuanyexianzhi				    })
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
				zhuanyexianzhiEchart5.clear()
				// 使用刚指定的配置项和数据显示图表。
				zhuanyexianzhiEchart5.setOption(option);
				//根据窗口的大小变动图表
				zhuanyexianzhiEchart5.resize();
			})
		})
	}
	const getjiangxuejinChart6 = () => {
		nextTick(async ()=>{
			var gpayaoqiuEchart6 = echarts.init(document.getElementById("jiangxuejingpayaoqiuEchart6"), null);
			let params = {}
			context?.$http({
				url: "jiangxuejin/group/gpayaoqiu?order=desc",
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].gpayaoqiu);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].gpayaoqiu				    })
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
				gpayaoqiuEchart6.clear()
				// 使用刚指定的配置项和数据显示图表。
				gpayaoqiuEchart6.setOption(option);
				//根据窗口的大小变动图表
				gpayaoqiuEchart6.resize();
			})
		})
	}
	const getjiangxuejinshenqingChart1 = () => {
		nextTick(async ()=>{
			var xueshengxingmingEchart1 = echarts.init(document.getElementById("jiangxuejinshenqingxueshengxingmingEchart1"), null);
			let params = {}
			if(params.conditionColumn) {
				params.conditionColumn += ';' + 'sfsh'
				params.conditionValue += ';' + '是'
			}else {
				params.conditionColumn = 'sfsh'
				params.conditionValue = '是'
			}
			context?.$http({
				url: "jiangxuejinshenqing/group/xueshengxingming?order=desc",
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].xueshengxingming);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].xueshengxingming				    })
				}
				var option = {};
				option = {
    title: {
        text: '申请人数',
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
				xueshengxingmingEchart1.clear()
				// 使用刚指定的配置项和数据显示图表。
				xueshengxingmingEchart1.setOption(option);
				//根据窗口的大小变动图表
				xueshengxingmingEchart1.resize();
			})
		})
	}
	const getjiangxuejinshenqingChart2 = () => {
		nextTick(async ()=>{
			var xueshengxingmingEchart2 = echarts.init(document.getElementById("jiangxuejinshenqingxueshengxingmingEchart2"), null);
			let params = {}
			if(params.conditionColumn) {
				params.conditionColumn += ';' + 'sfsh'
				params.conditionValue += ';' + '是'
			}else {
				params.conditionColumn = 'sfsh'
				params.conditionValue = '是'
			}
			context?.$http({
				url: "jiangxuejinshenqing/group/xueshengxingming?order=desc",
				method: "get",
				params
			}).then(obj=>{
				let res = obj.data.data
				let xAxis = [];
				let yAxis = [];
				let dataList = []
				for(let i=0;i<res.length;i++){
				    xAxis.push(res[i].xueshengxingming);
				    yAxis.push(parseFloat((res[i].total)));
					dataList.push({
				        value: parseFloat((res[i].total)),
				        name: res[i].xueshengxingming				    })
				}
				var option = {};
				option = {
    title: {
        text: '通过率',
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
				xueshengxingmingEchart2.clear()
				// 使用刚指定的配置项和数据显示图表。
				xueshengxingmingEchart2.setOption(option);
				//根据窗口的大小变动图表
				xueshengxingmingEchart2.resize();
			})
		})
	}
	const getChartList = () => {
		if(btnAuth('jiangxuejin','首页统计')){
			getjiangxuejinChart1()
		}
		if(btnAuth('jiangxuejin','首页统计')){
			getjiangxuejinChart2()
		}
		if(btnAuth('jiangxuejin','首页统计')){
			getjiangxuejinChart3()
		}
		if(btnAuth('jiangxuejin','首页统计')){
			getjiangxuejinChart4()
		}
		if(btnAuth('jiangxuejin','首页统计')){
			getjiangxuejinChart5()
		}
		if(btnAuth('jiangxuejin','首页统计')){
			getjiangxuejinChart6()
		}
		if(btnAuth('jiangxuejinshenqing','首页统计')){
			getjiangxuejinshenqingChart1()
		}
		if(btnAuth('jiangxuejinshenqing','首页统计')){
			getjiangxuejinshenqingChart2()
		}
	}
	//获取统计图数据
	getChartList()
</script>
<style lang="scss" scoped>
	// 首页盒子
	.home_view {
        background-image: url("http://clfile.zggen.cn/20250728/efa8c4527e0d4b5fa31b9fa123463b16.webp")!important;
	}

	.showIcons {
		transition: transform 0.3s;
		margin-right: 10px;
	}

	.showIcons1 {
		transform: rotate(-180deg);
	}
</style>
<style>
.condition-box {
	display: flex;
	gap: 10px;
	justify-content: center;
}

.condition-box>* {
	max-width: 300px;
}
.home_view .countList {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.home_view .count-item {
    flex: 1;
    min-width: 20%;
    position: relative;
    border-radius: 14px;
}

.home_view .el-card__header {
    display: none;
}

.home_view .count_title {
    color: #999;
}

.home_view .count_num {
    font-size: 26px;
    font-weight: 700;
    line-height: 60px;
}

.home_view .count-item:before {
    content:'';
    width: 70px;
    height: 70px;
    background-size:100% 100%;
    position: absolute;
    top: 20px;
    right: 20px;
    background-image: url(http://clfile.zggen.cn/20250728/1c5c95ac0e45404ab7f32efd9f0efe8b.webp);
}
.home_view .count-item:nth-child(4n+2):before{
    background-image: url(http://clfile.zggen.cn/20250728/9fb3c22f32b141a8a7b6df52d73a5b60.webp);
}
.home_view .count-item:nth-child(4n+3):before{
    background-image: url(http://clfile.zggen.cn/20250728/afe3f5ea390b48fe960d49997da854d1.webp);
}
.home_view .count-item:nth-child(4n+4):before{
    background-image: url(http://clfile.zggen.cn/20250728/31fbbfc7d08041eeabb48fd4c75f4d5f.webp);
}

.home_view {
    padding: 30px;
    background: #fef7db;
}

.home_view .chartList {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
}

.home_view .chart-item {
    flex: 1;
    min-width: 40%;
    border-radius: 16px;
}

.home_view .row3 {
    display: flex;
    margin-top: 30px;
    gap: 30px;
}
.home_view .el-carousel img {
    object-fit: cover;
}

.home_view .el-carousel {
    margin-bottom: 20px;
}
.home_view .chart-title {
    display: none;
}
.home_view{
    background: #D6E1E7!important;
    padding:0px;
}
.home_view .el-carousel__container {
    display:none;
}


.row3 {

height:420px;
overflow:hidden!important;
margin-top:0px!important;
padding-left:1.5%!important;
padding-right:1.5%!important;
padding-top:10px;
padding-bottom:30px;
background:#FFFFFF;
width:100%!important;
 position:relative;
top:-20px;
border-radius: 0px 0px 30px 30px;
border: 1px solid #D6E1E7;

}

.home_view .home-calendar {
    flex:1;
    padding:0px;
   
}

.home_view .home_news {
    flex:2;
}

.home_view .header {
    display:none!important;
}

.home_view .home-calendar::before {
    display:none!important;
}

.home_view .home-calendar {}

.home_view .home_news {
    height:350px;

    border-radius:0px;
    border-left:5px solid #64B0E5;
    margin-top:10px;
    display:flex;
    align-items:center;
    gap:30px;
}

.home_view .countList {
    width:97%;
    margin:auto;
}

.home_view .chartList {
 width:97%;
    margin:auto;

}

.home_view table {
background: #E1F1FF!important;
border-radius: 20px 20px 20px 20px!important;
border:2px solid  #D6E1E7;
}

.home_view .home_news .list {
    height:310px;
      display: flex;
    flex-wrap: wrap;  /* 允许换行 */
    gap: 10px;
       /* 设置容器的固定高度 */
    overflow-y: auto; /* 添加垂直滚动条 */
   

    
}

.home_view .home_news .title {
    flex:1;
    color: #64B0E5;
}



.home_view .item {
flex: 0 0 calc(50% - 10px);  /* 每个元素占容器的一半宽度 */
    box-sizing: border-box;
    background: #E1F1FF!important;
border-radius: 10px 10px 10px 10px!important;
}

.item .row2 div {
    height:60px;
     overflow:hidden!important;        /* 超出的文本隐藏 */
    text-overflow:ellipsis!important; /* 显示省略号 */
}
  /* 自定义滚动条样式 */
.home_view         ::-webkit-scrollbar {
            width: 5px;  /* 垂直滚动条宽度 */
            height: 5px; /* 水平滚动条高度 */
        }

.home_view         ::-webkit-scrollbar-track {
            background: #D6E1E7; /* 轨道背景 */
            border-radius: 5px;  /* 圆角 */
        }

.home_view       ::-webkit-scrollbar-thumb {
    background-color: #64B0E5 !important;
    border-radius: 5px;
    border: 2px solid #64B0E5;
}
.home_view td.festival .text {
    width: 50px;
    height: 50px;
    background: #64B0E5;
    border-radius: 40px 40px 40px 40px;
    font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 22px;
    text-align: center;
    font-style: normal;
    text-transform: none;
}

.home_view .home-calendar table {
padding:0px!important;
}

.home_view .countList {
    margin-bottom:20px!important;
}

.home_view .el-card.is-always-shadow.chart-item {
  background:#FFFFFF!important;
  position: relative!important; /* 使其成为定位容器 */
 
}
.home_view .el-card.is-always-shadow.chart-item::before {
  content: ""; /* 伪元素的内容为空 */
  position: absolute;
  top: 1%;
  right:1%;
  width: 60px; /* 设置 logo 的宽度 */
  height: 60px; /* 设置 logo 的高度 */
  background-image: url('http://clfile.zggen.cn/20250821/936febf422d147259e4171e1f34163a9.png'); /* logo 图片路径 */
  background-size: cover; /* 让图片自适应大小 */
  background-position: center; /* 图片居中 */
}
/* 总数 */

.home_view .el-card.is-always-shadow.count-item {
   background: linear-gradient( 135deg, #F9C721 0%, #FF733C 100%);
border-radius: 20px 20px 20px 20px;
}



.home_view  .count_num {
   order:1!important;
}

.home_view  .count_title {
   order:2!important;
}

.home_view .count_item {
 display: flex;
  flex-direction: column;  /* 改为纵向排列 */
}


.home_view /* .count_item  span{
   color:#fff;
} */

.home_view .countList {}

.home_view .el-card.is-always-shadow.count-item {}

.home_view .el-card__body .count_item .count_title span {
   color:#fff;
}

.home_view .el-card__body .count_item .count_num span {
   font-weight: 700;
font-size: 40px;
color: #FFFFFF;
   color:#fff;
}
.home_view .count-item:before {
    content:'';
    width:60px;
    height: 60px;
        background-size: contain; /* 关键修改：保持图片比例 */
    background-repeat: no-repeat; /* 防止重复 */
    background-position: center; /* 居中显示 */
 
    position: absolute;
    top:5%;
    right:2%;
    
    background-image: url('http://clfile.zggen.cn/20250821/0cef9915a3164faf8941b94b75725808.png')!important;
}
.home_view .count-item:nth-child(4n+2):before{
    background-image: url('http://clfile.zggen.cn/20250821/f6c942f65e734c14a767165d3a1bfc38.png')!important;
}
.home_view .count-item:nth-child(4n+3):before{
    background-image: url('http://clfile.zggen.cn/20250821/3bdb9670eca44984b33a6b45e229c573.png')!important;
}
.home_view .count-item:nth-child(4n+4):before{
    background-image: url('http://clfile.zggen.cn/20250821/d44758fa599949b182d75d84f0052ce0.png')!important;
}
.countList .el-card.is-always-shadow.count-item:nth-child(4n+1) {
  background: linear-gradient(135deg, #F9C721 0%, #FF733C 100%) !important;
}

.countList .el-card.is-always-shadow.count-item:nth-child(4n+2) {
  background: linear-gradient(135deg, #64B0E5 0%, #4568FF 100%) !important;
}

.countList .el-card.is-always-shadow.count-item:nth-child(4n+3) {
  background: linear-gradient(135deg, #4EE0FE 0%, #2EAAE9 100%) !important;
}

.countList .el-card.is-always-shadow.count-item:nth-child(4n+4) {
  background: linear-gradient(135deg, #53E26D 0%, #46CEA3 100%) !important;
}

.home-calendar{
  border: 0px solid rgb(238, 238, 238);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px;
  margin: 0px auto 30px;
  color: rgb(102, 102, 102);
  width: 30%;
  min-width: 480px;
  font-size: inherit;
  height: auto;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  padding: 0 30px 30px;
  height: 600px;
}
.home-calendar .header{
  padding: 17px 40px;
  border-color: rgba(126, 96, 16, 0.1);
  flex-wrap: wrap;
  background: #fef7db;
  border-width: 0px 0px 1px;
  display: flex;
  width: 100%;
  border-style: solid;
  justify-content: space-between;
  height: auto;
}
.home-calendar .header .btn{
  cursor: pointer;
  border: 0px solid rgb(153, 153, 153);
  padding: 0px 0px 0px 12px;
  align-items: center;
  color: rgb(102, 102, 102);
  border-radius: 4px;
  display: flex;
  width: auto;
  font-size: inherit;
  justify-content: center;
  order: 2;
}
.home-calendar .header .title{
  padding: 0px 10px;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: rgb(51, 51, 51);
}
.home-calendar table{
  width: 100%;
  padding: 0px 0px 20px;
  height: auto;
}
.home-calendar tbody,.home-calendar thead{
  width: 100%;
}
.home-calendar tr{
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
}
.home-calendar th{
  align-items: center;
  flex: 1;
  display: flex;
  line-height: 50px;
  justify-content: center;
}
.home-calendar td{
  cursor: pointer;
  padding: 6px 12px 12px;
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
}

.home-calendar .header .btn.lastYear,.home-calendar .header .btn.nextYear {
    display: none;
}

.home-calendar .btn.lastMonth {
    margin-left: auto;
}

.home-calendar:before {
    content: '日历';
    font-size: 22px;
    color: #555;
    line-height: 60px;
}

.home-calendar table {
    background: #fef7db;
}

.home-calendar .header .btn .text {
    display: none;
}

.home-calendar .lastMonth .iconfont {
    transform: rotate(180deg);
}

.home-calendar .iconfont {
    font-size: 28px;
    background: #fff;
    border-radius: 50%;
}
</style>