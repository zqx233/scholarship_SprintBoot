<template>
    <div class="home_box">




			<!-- 奖学金首页展示 -->
            <div class="homeList_view">
<div class="tableName"><span>奖学金展示</span></div>
<div class="list">
    <div v-for="(item,index) in jiangxuejinHomeList" @click="detailClick('jiangxuejin',item.id)" class="item" style="cursor: pointer;">
        <img v-if="item.imgUrls" :src="item.imgUrls[0]" alt="">
        <div class="content">

<div class="title">名称：{{item.mingcheng}}</div>
<div class="title">类型：{{item.leixing}}</div>

            <div class="num-row">



            </div>
        </div>
    </div>
</div>
<div class="more" @click="moreClick('jiangxuejin')" style="cursor: pointer;"><span>查看更多 ></span></div>
            </div>




    </div>
</template>

<script setup>
	import {
		ref,
        computed,
		getCurrentInstance
	} from 'vue';
    const moment = window.moment
	import {
		useRouter
	} from 'vue-router';
    import {
        useStore
    } from 'vuex';
    const store = useStore()
    const user = computed(()=>store.getters['user/session'])
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const router = useRouter()
    const baseUrl = ref(context.$config.url)
	//奖学金首页展示
	const jiangxuejinCategorys = ref([])
	const jiangxuejin_index = ref(-1)
	const getjiangxuejinCategorys = () => {
		context?.$http({
			url: 'option/leixing/leixing',
			method: 'get',
		}).then(res => {
			jiangxuejinCategorys.value = res.data.data
            jiangxuejinCategorys.value = jiangxuejinCategorys.value.splice(0,10)
		})
	}
	getjiangxuejinCategorys()
	const jiangxuejinCategoryChange = (index)=>{
		jiangxuejin_index.value = index
		getjiangxuejinHomeList()
	}
	const jiangxuejinHomeList = ref([])
	const getjiangxuejinHomeList = () => {
		let params = {
			page: 1,
			limit: 8,
            sort:'id',
            order:'desc',
		}
		if(jiangxuejin_index.value>=0){
            params.leixing = jiangxuejinCategorys.value[jiangxuejin_index.value]
		}
		context?.$http({
			url: 'jiangxuejin/list',
			method: 'get',
			params: params
		}).then(res => {
			jiangxuejinHomeList.value = res.data.data.list
			jiangxuejinHomeList.value.forEach(item=>{
				if(item.fengmian!=null){
					item.imgUrls = item.fengmian.split(',').map(item=>(isHttp(item)?'':context.$config.url)+item)
				}else{
                    item.imgUrls = []
                }
			})
		})
	}
	//判断图片链接是否带http
	const isHttp = (str) => {
        return str && str.substr(0,4)=='http';
    }
	//跳转详情
	const detailClick = (table,id) => {
		router.push(`/index/${table}Detail?id=${id}`)
	}
	const moreClick = (table) => {
		router.push(`/index/${table}List`)
	}
	const init = () => {
		//奖学金首页展示
		getjiangxuejinHomeList()
	}
	init()
</script>

<style lang="scss">
.home_box {
    width: 100%;
    margin: 0 auto;
    padding: 20px 0px 50px;
    display: flex;
    flex-wrap: wrap;
    background:#F0F1FB;  
}
.homeList_view {
       width: 86%;
      margin-left:auto;
    margin-right:auto;
    margin-top: 30px;
    position: relative;
    order:2;
}

.homeList_view .tableName span{
    padding:0 0 6px;
 
}

.homeList_view .list {
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.homeList_view .list .item {
    flex: 1;
    max-width: 25%;
    min-width: 20%;
    border-radius: 0px;
    overflow: hidden;
    background: #fff;
 
}

.homeList_view .item img {
    width: 100%;
    height: 242px;
    object-fit: cover;
    border-radius: 10px 10px 10px 10px;
}

.homeList_view .thumbsupnum,.homeList_view  .storeupnum,.homeList_view .clicknum {
    display: flex;
    align-items: center;
    gap: 6px;
}

.homeList_view .categoryList .item {
    background: #f0f0f0;
    padding: 10px 20px;
    text-align: center;
    min-width: 100px;
}

.homeList_view .el-carousel {
    height: 100%;
}

.homeList_view .el-carousel img {
    height: 100%;
}

.homeList_view .el-carousel__container {
    height: 100%;
}

.homeList_view .content {
    width: 100%;
    padding: 14px;
    display: flex;
    flex-wrap: wrap;
}


.homeList_view .price .number {
    font-weight: 900;
font-size: 24px;
color: #9C8CFD;
}



.homeList_view .thumbsupnum {
   color: #DCA7F9;
    text-align:center;
   flex: 1;
height: 30px;

    display: flex;
    align-items: center;
      justify-content:center;
}

.homeList_view .storeupnum {
       color: #6C90DF;
    display: flex;
    align-items: center;
      justify-content:center;
   flex:1;
height: 30px;

}

.homeList_view .clicknum {
    color: #9C8CFD;
    display: flex;
    align-items: center;
      justify-content:center;
    flex: 1;
height: 30px;

}

.homeList_view .more {
    width: auto;
    position: absolute;
    top:20px;
    right:0;
}
.homeList_view .more span{
    color: #b51022;
}
/* nf9 */
.homeList_view .tableName  {
    margin-top:20px;
}
.homeList_view .tableName  span {
    position:relative;
}



.homeList_view   .more span{
    color: #9C8CFD!important;
    font-size: 16px;
}


.homeList_view .num-row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    width:100%;
    order:4;
    gap:5px;
    justify-content:space-around
}
/* nf13 */
.homeList_view .list .item{
    padding:20px;
    background: #FFFFFF;
border-radius: 0px;
    position:relative;
      border-bottom-left-radius:25%;  /* 控制左下角弯曲 */
      border-bottom-right-radius: 25%; /* 控制右下角弯曲 */
}
.homeList_view .price {
    height:70px;
    line-height:70px!important;
    width: 100%;
    text-align: center;
font-weight: 900;
font-size: 24px;
color: #9C8CFD;
    line-height: 1.5;
    margin: 5px 0 0 0;
    order: 5;
background:url("http://clfile.zggen.cn/20250929/bdad01a0b097413b8b747418c174fd71.png")no-repeat;
background-size:100% 100%;
}
.homeList_view .list .item:hover{
background: #F7F6FF;
box-shadow: 0px 0px 10px 0px #9C8CFD;


}

.homeList_view .list .item:hover .price {
    height:70px;
    line-height:70px!important;
    width: 100%;
    text-align: center;
font-weight: 900;
font-size: 24px;
color: #9C8CFD;
    line-height: 1.5;
    margin: 5px 0 0 0;
    order: 5;
background:url("http://clfile.zggen.cn/20250929/43761e6eaf7a4aa494149bdcb2ae5de2.png")no-repeat;
    background-size:100% 100%;
}

.homeList_view .tableName span::before{
    content:'';
    height:4px;
    width:70vw;
    position:absolute;
    bottom:0px;
    left:1px;
    background:url("http://clfile.zggen.cn/20250929/e90e85d178b7468bb891eb8301f6c248.png")no-repeat;
}
.homeList_view .tableName {
    text-align: left;
    font-weight: 900;
font-size: 36px;
color: #9C8CFD;
    letter-spacing: 1px;
}
.homeList_view  .more {
    width: 160px!important;
height: 40px;
    position: absolute;
    top:25px;
    right:20px;
  background:none;
border-radius: 10px 10px 10px 10px;
    text-align:center;
    line-height:40px;
    border:1px solid #9C8CFD ;
     box-sizing: border-box; /* 确保边框不会影响总大小 */
}
</style>