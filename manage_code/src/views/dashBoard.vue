<template>
<div class="board_view">
<div class="header">
    <div class="date">{{moment(now).format("YYYY-MM-DD HH:mm:ss")}}</div>
    <div class="projectName animate__animated animate__backInUp">{{projectName}}</div>
    <div class="right">
        <div class="back" @click="backClick">管理界面</div>
        <iframe scrolling="no" src="https://widget.tianqiapi.com/?style=tz&skin=pitaya&city=深圳&color=FFFFFF" frameborder="0" width="100%" height="30" allowtransparency="true"></iframe>
    </div>
</div>
<div class="content">
    <div class="block block1">
        <div class="block-title"><span>奖学金项目</span></div>
        <div class="chart" id="chart1"></div>
    </div>

    <div class="block block2">
        <div class="block-title"><span>类型</span></div>
        <div class="chart" id="chart2"></div>
    </div>

    <div class="block block3">
        <div class="block-title"><span>奖学金额度</span></div>
        <div class="chart" id="chart3"></div>
    </div>

    <div class="block block4">
    <div class="block-title">
        <span>奖学金</span>
    </div>
        <el-table ref="jiangxuejinTableRef" :data="jiangxuejinList" :show-overflow-tooltip='true' :show-header='false' height='250px' >
            <el-table-column label="名称" prop="mingcheng">
            </el-table-column>
            <el-table-column label="类型" prop="leixing">
            </el-table-column>
            <el-table-column label="详情" prop="xiangqing">
            </el-table-column>
            <el-table-column label="金额" prop="jine">
            </el-table-column>
            <el-table-column label="申请对象" prop="shenqingduixiang">
            </el-table-column>
            <el-table-column label="专业限制" prop="zhuanyexianzhi">
            </el-table-column>
            <el-table-column label="GPA要求" prop="gpayaoqiu">
            </el-table-column>
            <el-table-column label="语言要求" prop="yuyanyaoqiu">
            </el-table-column>
            <el-table-column label="封面" prop="fengmian">
                <template #default="scope">
                    <template v-if="scope.row.fengmian">
                        <img v-if="scope.row.fengmian.substring(0,4)=='http'" :src="scope.row.fengmian.split(',')[0]"/>
                        <img v-else :src="baseUrl+scope.row.fengmian.split(',')[0]"/>
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="辅导员账号" prop="fudaoyuanzhanghao">
            </el-table-column>
            <el-table-column label="辅导员姓名" prop="fudaoyuanxingming">
            </el-table-column>
        </el-table>
    </div>

        <div class="count-list">
            <div class="count-item">
                <div class="count-title"><span>奖学金总数</span></div>
                <div class="count-number"><countTo :startVal="0" :endVal="jiangxuejinCount" :duration="1000"></countTo></div>
            </div>
            <div class="count-item">
                <div class="count-title"><span>奖学金申请总数</span></div>
                <div class="count-number"><countTo :startVal="0" :endVal="jiangxuejinshenqingCount" :duration="1000"></countTo></div>
            </div>
        </div>

    <div class="block block5">
        <div class="block-title"><span>专业限制</span></div>
        <div class="chart" id="chart5"></div>
    </div>

    <div class="block block6">
        <div class="block-title"><span>GPA要求</span></div>
        <div class="chart" id="chart6"></div>
    </div>

    <div class="block block7">
        <div class="block-title"><span>申请人数</span></div>
        <div class="chart" id="chart7"></div>
    </div>

    <div class="block block8">
        <div class="block-title"><span>通过率</span></div>
        <div class="chart" id="chart8"></div>
    </div>

    <div class="block block9">
    <div class="block-title">
        <span>奖学金申请</span>
    </div>
        <el-table ref="jiangxuejinshenqingTableRef" :data="jiangxuejinshenqingList" :show-overflow-tooltip='true' :show-header='false' height='250px' >
            <el-table-column label="名称" prop="mingcheng">
            </el-table-column>
            <el-table-column label="类型" prop="leixing">
            </el-table-column>
            <el-table-column label="详情" prop="xiangqing">
            </el-table-column>
            <el-table-column label="金额" prop="jine">
            </el-table-column>
            <el-table-column label="申请对象" prop="shenqingduixiang">
            </el-table-column>
            <el-table-column label="专业限制" prop="zhuanyexianzhi">
            </el-table-column>
            <el-table-column label="GPA要求" prop="gpayaoqiu">
            </el-table-column>
            <el-table-column label="语言要求" prop="yuyanyaoqiu">
            </el-table-column>
            <el-table-column label="封面" prop="fengmian">
                <template #default="scope">
                    <template v-if="scope.row.fengmian">
                        <img v-if="scope.row.fengmian.substring(0,4)=='http'" :src="scope.row.fengmian.split(',')[0]"/>
                        <img v-else :src="baseUrl+scope.row.fengmian.split(',')[0]"/>
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="辅导员账号" prop="fudaoyuanzhanghao">
            </el-table-column>
            <el-table-column label="辅导员姓名" prop="fudaoyuanxingming">
            </el-table-column>
            <el-table-column label="学号" prop="xuehao">
            </el-table-column>
            <el-table-column label="学生姓名" prop="xueshengxingming">
            </el-table-column>
            <el-table-column label="提交时间" prop="tijiaoshijian">
            </el-table-column>
            <el-table-column label="提交描述" prop="tijiaomiaoshu">
            </el-table-column>
            <el-table-column label="提交文件" prop="tijiaowenjian">
            </el-table-column>
            <el-table-column label="是否审核" prop="sfsh">
            </el-table-column>
            <el-table-column label="回复内容" prop="shhf">
            </el-table-column>
        </el-table>
    </div>

</div>

</div>
</template>
<script setup>
    import {
        inject,
        nextTick,
        ref,
        getCurrentInstance,
        onMounted,
        onUnmounted,
        computed
    } from 'vue';
    import {
        useStore
    } from 'vuex';
    const store = useStore()
    const user = computed(()=>store.getters['user/session'])
    const moment = window.moment
    const context = getCurrentInstance()?.appContext.config.globalProperties;
    const projectName = context.$project.projectName
    const baseUrl = context.$config.url

    //时间
    const now = ref(new Date())
    const initDate = ()=>{
        const timer = setInterval(() => {
            now.value = new Date()
        }, 1000)
        onUnmounted(() => {
            clearInterval(timer)
        })
    }
    initDate()

    const backClick = ()=>{
        context?.$router.push('/')
    }
import countTo from '@/components/count-to/vue-countTo.vue';
	const jiangxuejinCount = ref(0)
    //数量统计
	const getjiangxuejinCount = () => {
		context.$http({
			url:'jiangxuejin/count',
			method: 'get'
		}).then(res=>{
			jiangxuejinCount.value = res.data.data
		})
	}
	const jiangxuejinshenqingCount = ref(0)
    //数量统计
	const getjiangxuejinshenqingCount = () => {
		context.$http({
			url:'jiangxuejinshenqing/count',
			method: 'get'
		}).then(res=>{
			jiangxuejinshenqingCount.value = res.data.data
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
    import '@/assets/js/echarts-theme1'
    //获取数据并渲染图表
    const getChart1 = () =>{
        nextTick(async ()=>{
            var mingchengEchart1 = echarts.init(document.getElementById("chart1"),'theme1');
			let params = {}
            context.$http({
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
                        name: res[i].mingcheng                    })
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
    //获取数据并渲染图表
    const getChart2 = () =>{
        nextTick(async ()=>{
            var leixingEchart2 = echarts.init(document.getElementById("chart2"),'theme1');
			let params = {}
            context.$http({
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
                        name: res[i].leixing                    })
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
    //获取数据并渲染图表
    const getChart3 = () =>{
        nextTick(async ()=>{
            var jineEchart3 = echarts.init(document.getElementById("chart3"),'theme1');
			let params = {}
            context.$http({
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
                        name: res[i].mingcheng                    })
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
    //获取数据并渲染图表
    const getChart5 = () =>{
        nextTick(async ()=>{
            var zhuanyexianzhiEchart5 = echarts.init(document.getElementById("chart5"),'theme1');
			let params = {}
            context.$http({
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
                        name: res[i].zhuanyexianzhi                    })
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
    //获取数据并渲染图表
    const getChart6 = () =>{
        nextTick(async ()=>{
            var gpayaoqiuEchart6 = echarts.init(document.getElementById("chart6"),'theme1');
			let params = {}
            context.$http({
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
                        name: res[i].gpayaoqiu                    })
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
    //获取数据并渲染图表
    const getChart7 = () =>{
        nextTick(async ()=>{
            var xueshengxingmingEchart1 = echarts.init(document.getElementById("chart7"),'theme1');
			let params = {}
			if(params.conditionColumn) {
				params.conditionColumn += ';' + 'sfsh'
				params.conditionValue += ';' + '是'
			}else {
				params.conditionColumn = 'sfsh'
				params.conditionValue = '是'
			}
            context.$http({
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
                        name: res[i].xueshengxingming                    })
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
    //获取数据并渲染图表
    const getChart8 = () =>{
        nextTick(async ()=>{
            var xueshengxingmingEchart2 = echarts.init(document.getElementById("chart8"),'theme1');
			let params = {}
			if(params.conditionColumn) {
				params.conditionColumn += ';' + 'sfsh'
				params.conditionValue += ';' + '是'
			}else {
				params.conditionColumn = 'sfsh'
				params.conditionValue = '是'
			}
            context.$http({
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
                        name: res[i].xueshengxingming                    })
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

    const jiangxuejinList = ref([])
    const jiangxuejinTableRef = ref()
    const getjiangxuejinList = ()=>{
        let params = {
            page: 1,
            limit: 20,
        }
        context.$http.get("jiangxuejin/page",{
            params: params
        }).then(({ data }) => {
            if (data && data.code === 0) {
                jiangxuejinList.value = data.data.list;
                nextTick(()=>{
                    const timeout = 2000
                    let scrollView = jiangxuejinTableRef.value.$el.querySelector('.el-scrollbar .el-scrollbar__wrap')
                    if(scrollView && scrollView.scrollHeight>scrollView.clientHeight){
                        const scroll = ()=>{
                            const rowHeight = scrollView.querySelector('.el-table__row')?.clientHeight
                            if(rowHeight){
                                scrollView.scrollTo({
                                    top: rowHeight,
                                    behavior: "smooth"
                                })
                                setTimeout(()=>{
                                    if(timer){
                                        scrollView.scrollTo({
                                            top:0,
                                        })
                                        jiangxuejinList.value.push(jiangxuejinList.value[0]);
                                        jiangxuejinList.value.shift();
                                    }
                                },timeout-100)
                            }else{
                                clearInterval(timer)
                            }
                        }
                        var timer = setInterval(scroll,timeout)
                        scrollView.addEventListener('mouseenter',()=>{
                            clearInterval(timer)
                            timer=0
                        })
                        scrollView.addEventListener('mouseleave',()=>{
                            clearInterval(timer)
                            timer = setInterval(scroll,timeout)
                        })
                    }
                })
            }
        });
    }
    const jiangxuejinshenqingList = ref([])
    const jiangxuejinshenqingTableRef = ref()
    const getjiangxuejinshenqingList = ()=>{
        let params = {
            page: 1,
            limit: 20,
        }
        context.$http.get("jiangxuejinshenqing/page",{
            params: params
        }).then(({ data }) => {
            if (data && data.code === 0) {
                jiangxuejinshenqingList.value = data.data.list;
                nextTick(()=>{
                    const timeout = 2000
                    let scrollView = jiangxuejinshenqingTableRef.value.$el.querySelector('.el-scrollbar .el-scrollbar__wrap')
                    if(scrollView && scrollView.scrollHeight>scrollView.clientHeight){
                        const scroll = ()=>{
                            const rowHeight = scrollView.querySelector('.el-table__row')?.clientHeight
                            if(rowHeight){
                                scrollView.scrollTo({
                                    top: rowHeight,
                                    behavior: "smooth"
                                })
                                setTimeout(()=>{
                                    if(timer){
                                        scrollView.scrollTo({
                                            top:0,
                                        })
                                        jiangxuejinshenqingList.value.push(jiangxuejinshenqingList.value[0]);
                                        jiangxuejinshenqingList.value.shift();
                                    }
                                },timeout-100)
                            }else{
                                clearInterval(timer)
                            }
                        }
                        var timer = setInterval(scroll,timeout)
                        scrollView.addEventListener('mouseenter',()=>{
                            clearInterval(timer)
                            timer=0
                        })
                        scrollView.addEventListener('mouseleave',()=>{
                            clearInterval(timer)
                            timer = setInterval(scroll,timeout)
                        })
                    }
                })
            }
        });
    }

    //初始化
    const init=()=>{
        getjiangxuejinList()
        getjiangxuejinshenqingList()
        getjiangxuejinCount()
        getjiangxuejinshenqingCount()
        getChart1()
        getChart2()
        getChart3()
        getChart5()
        getChart6()
        getChart7()
        getChart8()
    }
    init()
</script>
<style lang="scss">
.chart{
    width: 100%;
    height: 100%;
}
.condition-box {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.condition-box>* {
    max-width: 300px;
}
.board_view {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    height: 100vh;
    background-image: url(http://clfile.zggen.cn/20251102/1cc6f10eb7d743a8ba50d05f8748bc68.webp);
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
}

.board_view .header {
    width: 100%;
    position: relative;
    margin: 0px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(http://clfile.zggen.cn/20251102/bcc6ad0860d54e9cbc6890505a8df279.webp);
    background-size: 100% 100%;
}

.board_view .projectName {
    margin: 0px;
    width: 60vw;
    line-height: 54px;
    height: 80px;
    color: rgb(255, 255, 255);
    font-size: 22px;
    text-align: center;
    background-size: 100% 100%;
    margin-top: 20px;
}

.board_view .date {
    display: inline-block;
    color: rgb(255, 255, 255);
    font-size: 14px;
    background-image: url(http://clfile.zggen.cn/20250929/08af99971fad41ccadfb8b27dc6c14de.webp);
    background-size: 100% 100%;
    width: 20vw;
    padding-left: 50px;
}
.board_view .back {
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    order: -1;
    margin-right: 20px;
    color: #129BFF;
}

.board_view .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: calc(-110px + 100vh);
    padding: 20px 20px 0px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
}
.board_view .count-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    gap:10px;
    background-image: url(http://clfile.zggen.cn/20251102/898a6e83dec44affb2c57018f260c6f6.webp);
    background-size: 100% 100%;
    padding:20px;
}

.board_view .count-item {
    display: flex;
    justify-content: center;
    margin: 0px 10px 0px 0px;
    flex-direction: column;
    color: #fff;
    background-image: url(http://clfile.zggen.cn/20251102/730773c272eb405bae7572645512e850.webp);
    background-size: 100% 100%;
    width: 40%;
    max-height: 6vw;
    padding-left: 90px;
    padding-right: 20px;
    position: relative;
}
.board_view .systemInfo {
    display: flex;
    height: calc(32% - 20px);
    margin: 0px 0px 20px;
    background-size: 100% 100%;
    padding: 20px;
}

.board_view .el-carousel {
    margin: 0px auto;
    width: 40%;
    height: 100%;
}

.board_view .systemInfo_content {
    line-height: 24px;
    font-size: 14px;
    margin: 0px 0px 0px 20px;
    color: rgb(255, 255, 255);
    height: 100%;
    flex: 1;
    overflow: auto;
    /* margin-top: 20px; */
}

.board_view .systemInfo_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.board_view .block-title,.board_view .map-title {
    width: 100%;
    text-align: left;
    background-image: url(http://clfile.zggen.cn/20251102/a309405cf0b847448ed30a33b5348aca.webp);
    background-size: 100% 100%;
    max-width: 500px;
    height: 40px;
    margin: 0px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    flex-shrink: 0;
    padding-left: 12px;
}
.board_view .el-table img {
    width: 100px;
    height: 50px;
    object-fit: fill;
}

.board_view .el-table {
    --el-table-bg-color: rgba(0,0,0,0);
    --el-table-tr-bg-color: rgba(0,0,0,0);
    --el-table-header-bg-color: rgba(0,0,0,0);
    --el-table-header-text-color: rgba(255,255,255,1);
    --el-table-text-color: rgba(255,255,255,1);
    --el-table-row-hover-bg-color: rgba(255,255,255,0.2);
}
.board_view .chart,.board_view #map {
    flex: 1;
    height: calc(100% - 40px)
}

.board_view .el-table {
    height: calc(100% - 40px);
}

.board_view .block,.board_view  .map {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.board_view .header .right {
    background-image: url(http://clfile.zggen.cn/20250929/51f95825665c45c2a18bd50c5650d43a.webp);
    background-size: 100% 100%;
    display: flex;
    height: 30px;
    width: 20vw;
    align-items: center;
}

.board_view iframe {
    width: 230px;
    height: 20px;
}

.board_view .count-number {
    font-size: 20px;
    font-weight: 700;
}

.board_view .count-title {
    padding-bottom: 6px;
    position: relative;
}

.board_view .el-carousel__container {
    height: 100%!important;
}

.board_view .systemInfo_content::-webkit-scrollbar {
    background:none;
    color:#fff;
    width:10px;
    background:rgba(18,155,255,0.2);
}
.board_view .systemInfo_content::-webkit-scrollbar-thumb{
    background-color:rgba(18,155,255,0.6);
    border-radius:10px;
    width:10px;
}

.board_view .forecast-box {
    margin-left: 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    gap: 10px;
    padding: 40px 20px;
}

.board_view .forecast-btn {
    background: #29DAF8;
    text-align: center;
    line-height: 36px;
    border-radius: 2px;
}

.board_view .header-left {
    width: 20vw;
    padding-left: 20px;
}

.board_view .header-right {
    display: flex;
    padding-right: 20px;
    align-items: center;
    white-space: nowrap;
    width: 20vw;
}

.board_view .block,.board_view  .systemInfo,.board_view .forecast-box {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgb(0 213 255 / 30%) 100%);
}
.board_view #map {
    flex: 1;
    background-image: url(http://clfile.zggen.cn/20251102/460dc6fa973c4548b3199ab3d6b2d729.webp);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.board_view .count-item:before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url(http://clfile.zggen.cn/20251102/88413184cce447e7bc10b9a5749e54c3.webp);
    left: 10%;
}

.board_view .el-input__wrapper {
    height: 40px;
    background: rgba(41,218,248,0.2);
    border-radius: 0px 0px 0px 0px;
    border: 1px solid;
    border-image: linear-gradient(90deg, rgba(43, 225, 252, 0), rgba(43, 225, 252, 1), rgba(43, 225, 252, 0)) 1 1;
    border-color: rgba(0,0,0,0);
    box-shadow: none;
}

.board_view .content>* {
    width: 30%;
    min-height: 30%;
    flex: 1;
}
.board_view .el-table {
    flex: 1!important;
}
.board_view .list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    color: #fff;
    overflow: auto;
    padding-top: 10px;
}

.board_view .list-item {
    min-width: 26%;
    flex: 1;
}

.board_view .list-item img {
    width: 100%;
    height: 90px;
    object-fit: cover;
}

.board_view ::-webkit-scrollbar {
    background:none;
    color:#fff;
    width:10px;
    background:rgba(18,155,255,0.1);
}
.board_view ::-webkit-scrollbar-thumb{
    background-color:rgb(72 131 173 / 20%);
    border-radius:10px;
    width:10px;
}
.board_view .content>* {
    min-height: 20%;
}
.board_view .count-list {
    height: 33%;
    flex: none!important;
    min-height: 10%!important;
}

.board_view .count-item {
    width: 30%;
}

.board_view .forecast-item {
    display: flex;
    align-items: center;
}

.board_view .forecast-item .label {
    width: 100px;
    flex-shrink: 0;
    text-align: center;
}

.map {
    min-height: 30%!important;
}

.board_view .forecast-box {
    margin: 0;
    padding: 10px 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex: 0.8;
}
</style>
