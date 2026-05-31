<template>
	<div class="edit_view">
        <div class="breadcrumb-wrapper" style="width: 100%;">
            <div class="bread_view">
                <el-breadcrumb separator=">  " class="breadcrumb">
                    <el-breadcrumb-item class="first_breadcrumb" :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item class="second_breadcrumb" v-for="(item,index) in breadList" :key="index">{{item.name}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
		<el-form ref="formRef" :model="form" class="add_form" label-width="120px" :rules="rules">
			<el-row>
				<el-col :span="12">
					<el-form-item label="名称" prop="mingcheng">
						<el-input class="list_inp"
                                  v-model="form.mingcheng"
                                  placeholder="名称"
                                  type="text"
							      :readonly="!isAdd||disabledForm.mingcheng?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="类型" prop="leixing">
						<el-input class="list_inp"
                                  v-model="form.leixing"
                                  placeholder="类型"
                                  type="text"
							      :readonly="!isAdd||disabledForm.leixing?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="金额" prop="jine">
						<el-input class="list_inp"
                                  v-model.number="form.jine"
                                  placeholder="金额"
                                  type="number"
							      :readonly="!isAdd||disabledForm.jine?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="申请对象" prop="shenqingduixiang">
						<el-input class="list_inp"
                                  v-model="form.shenqingduixiang"
                                  placeholder="申请对象"
                                  type="text"
							      :readonly="!isAdd||disabledForm.shenqingduixiang?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="专业限制" prop="zhuanyexianzhi">
						<el-input class="list_inp"
                                  v-model="form.zhuanyexianzhi"
                                  placeholder="专业限制"
                                  type="text"
							      :readonly="!isAdd||disabledForm.zhuanyexianzhi?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="GPA要求" prop="gpayaoqiu">
						<el-input class="list_inp"
                                  v-model="form.gpayaoqiu"
                                  placeholder="GPA要求"
                                  type="text"
							      :readonly="!isAdd||disabledForm.gpayaoqiu?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="语言要求" prop="yuyanyaoqiu">
						<el-input class="list_inp"
                                  v-model="form.yuyanyaoqiu"
                                  placeholder="语言要求"
                                  type="text"
							      :readonly="!isAdd||disabledForm.yuyanyaoqiu?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="封面" prop="fengmian">
						<uploads
							:disabled="!isAdd||disabledForm.fengmian?true:false"
							action="file/upload" 
							tip="请上传封面"
							style="width: 100%;text-align: left;"
							:fileUrls="form.fengmian?form.fengmian:''" 
							@change="fengmianUploadSuccess">
						</uploads>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="辅导员账号" prop="fudaoyuanzhanghao">
						<el-input class="list_inp"
                                  v-model="form.fudaoyuanzhanghao"
                                  placeholder="辅导员账号"
                                  type="text"
							      :readonly="!isAdd||disabledForm.fudaoyuanzhanghao?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="辅导员姓名" prop="fudaoyuanxingming">
						<el-input class="list_inp"
                                  v-model="form.fudaoyuanxingming"
                                  placeholder="辅导员姓名"
                                  type="text"
							      :readonly="!isAdd||disabledForm.fudaoyuanxingming?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="学号" prop="xuehao">
						<el-input class="list_inp"
                                  v-model="form.xuehao"
                                  placeholder="学号"
                                  type="text"
							      :readonly="!isAdd||disabledForm.xuehao?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="学生姓名" prop="xueshengxingming">
						<el-input class="list_inp"
                                  v-model="form.xueshengxingming"
                                  placeholder="学生姓名"
                                  type="text"
							      :readonly="!isAdd||disabledForm.xueshengxingming?true:false" />
					</el-form-item>
				</el-col>

				<el-col :span="12">
					<el-form-item label="提交时间" prop="tijiaoshijian">
						<el-date-picker
							class="list_date"
							v-model="form.tijiaoshijian"
							format="YYYY-MM-DD HH:mm:ss"
							value-format="YYYY-MM-DD HH:mm:ss"
							type="datetime"
							style="width:100%;"
							:readonly="!isAdd||disabledForm.tijiaoshijian?true:false"
							placeholder="请选择提交时间" />
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="提交文件" prop="tijiaowenjian">
						<uploads
							:disabled="!isAdd||disabledForm.tijiaowenjian?true:false"
							type="file"
							action="file/upload" 
							tip="请上传提交文件" 
							:limit="1" 
							style="width: 100%;text-align: left;"
							:fileUrls="form.tijiaowenjian?form.tijiaowenjian:''" 
							@change="tijiaowenjianUploadSuccess">
						</uploads>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item label="详情" prop="xiangqing">
						<el-input v-model="form.xiangqing" placeholder="详情" type="textarea"
						:readonly="!isAdd||disabledForm.xiangqing?true:false"
						/>
					</el-form-item>
				</el-col>
				<el-col :span="24">
					<el-form-item label="提交描述" prop="tijiaomiaoshu">
						<el-input v-model="form.tijiaomiaoshu" placeholder="提交描述" type="textarea"
						:readonly="!isAdd||disabledForm.tijiaomiaoshu?true:false"
						/>
					</el-form-item>
				</el-col>
			</el-row>
			<div class="formModel_btn_box">
				<el-button class="formModel_cancel" @click="backClick">取消</el-button>
				<el-button class="formModel_confirm"
                           @click="save"
                           type="success"
				>
					保存
				</el-button>
			</div>
		</el-form>
	</div>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		watch,
		onUnmounted,
		onMounted,
		nextTick,
		computed
	} from 'vue';
	import {
		useRoute,
		useRouter
	} from 'vue-router';
    import {
        useStore
    } from 'vuex';
    const store = useStore()
    const user = computed(()=>store.getters['user/session'])
    const moment = window.moment
	const context = getCurrentInstance()?.appContext.config.globalProperties;
	const route = useRoute()
	const router = useRouter()
	//基础信息
	const tableName = 'jiangxuejinshenqing'
	const formName = '奖学金申请'
	//基础信息
	const breadList = ref([{
		name: formName
	}])
	//获取唯一标识
	const getUUID =()=> {
      return new Date().getTime();
    }
	//form表单
	const form = ref({
		mingcheng: '',
		leixing: '',
		xiangqing: '',
		jine: 0,
		shenqingduixiang: '',
		zhuanyexianzhi: '',
		gpayaoqiu: '',
		yuyanyaoqiu: '',
		fengmian: '',
		fudaoyuanzhanghao: '',
		fudaoyuanxingming: '',
		xuehao: '',
		xueshengxingming: '',
		tijiaoshijian: '',
		tijiaomiaoshu: '',
		tijiaowenjian: '',
		shhf: '',
	})
	const formRef = ref(null)
	const id = ref(0)
	const type = ref('')
	const disabledForm = ref({
		mingcheng : false,
		leixing : false,
		xiangqing : false,
		jine : false,
		shenqingduixiang : false,
		zhuanyexianzhi : false,
		gpayaoqiu : false,
		yuyanyaoqiu : false,
		fengmian : false,
		fudaoyuanzhanghao : false,
		fudaoyuanxingming : false,
		xuehao : false,
		xueshengxingming : false,
		tijiaoshijian : false,
		tijiaomiaoshu : false,
		tijiaowenjian : false,
		sfsh : false,
		shhf : false,
	})
	const isAdd = ref(false)
	//表单验证
	const rules = ref({
		mingcheng: [
		],
		leixing: [
		],
		xiangqing: [
		],
		jine: [
			{ validator: context.$toolUtil.validator.number, trigger: 'blur' },
		],
		shenqingduixiang: [
		],
		zhuanyexianzhi: [
		],
		gpayaoqiu: [
		],
		yuyanyaoqiu: [
		],
		fengmian: [
		],
		fudaoyuanzhanghao: [
		],
		fudaoyuanxingming: [
		],
		xuehao: [
		],
		xueshengxingming: [
		],
		tijiaoshijian: [
		],
		tijiaomiaoshu: [
		],
		tijiaowenjian: [
		],
		sfsh: [
		],
		shhf: [
		],
	})
	//封面上传回调
	const fengmianUploadSuccess=(e)=>{
		form.value.fengmian = e
	}
	//提交文件上传回调
	const tijiaowenjianUploadSuccess=(e)=>{
		form.value.tijiaowenjian = e
	}
	//获取info
	const getInfo = ()=>{
		context?.$http({
			url: `${tableName}/info/${id.value}`,
			method: 'get'
		}).then(res => {
			let reg=new RegExp('../../../file','g')
			form.value = res.data.data
		})
	}
	const crossRow = ref('')
	const crossTable = ref('')
	const crossTips = ref('')
	const crossColumnName = ref('')
	const crossColumnValue = ref('')
	//初始化
	const init = (formId=null,formType='add',formNames='',row=null,table=null,statusColumnName=null,tips=null,statusColumnValue=null) => {
		if(formId){
			id.value = formId
			type.value = formType
		}
		if(formType == 'add'){
			isAdd.value = true
		}else if(formType == 'info'){
			isAdd.value = false
			getInfo()
		}else if(formType == 'edit'){
			isAdd.value = true
			getInfo()
		}
		else if(formType == 'cross'){
			isAdd.value = true
			// getInfo()
			for(let x in row){
				if(x=='mingcheng'){
					form.value.mingcheng = row[x];
					disabledForm.value.mingcheng = true;
					continue;
				}
				if(x=='leixing'){
					form.value.leixing = row[x];
					disabledForm.value.leixing = true;
					continue;
				}
				if(x=='xiangqing'){
					form.value.xiangqing = row[x];
					disabledForm.value.xiangqing = true;
					continue;
				}
				if(x=='jine'){
					form.value.jine = row[x];
					disabledForm.value.jine = true;
					continue;
				}
				if(x=='shenqingduixiang'){
					form.value.shenqingduixiang = row[x];
					disabledForm.value.shenqingduixiang = true;
					continue;
				}
				if(x=='zhuanyexianzhi'){
					form.value.zhuanyexianzhi = row[x];
					disabledForm.value.zhuanyexianzhi = true;
					continue;
				}
				if(x=='gpayaoqiu'){
					form.value.gpayaoqiu = row[x];
					disabledForm.value.gpayaoqiu = true;
					continue;
				}
				if(x=='yuyanyaoqiu'){
					form.value.yuyanyaoqiu = row[x];
					disabledForm.value.yuyanyaoqiu = true;
					continue;
				}
				if(x=='fengmian'){
					form.value.fengmian = row[x];
					disabledForm.value.fengmian = true;
					continue;
				}
				if(x=='fudaoyuanzhanghao'){
					form.value.fudaoyuanzhanghao = row[x];
					disabledForm.value.fudaoyuanzhanghao = true;
					continue;
				}
				if(x=='fudaoyuanxingming'){
					form.value.fudaoyuanxingming = row[x];
					disabledForm.value.fudaoyuanxingming = true;
					continue;
				}
				if(x=='xuehao'){
					form.value.xuehao = row[x];
					disabledForm.value.xuehao = true;
					continue;
				}
				if(x=='xueshengxingming'){
					form.value.xueshengxingming = row[x];
					disabledForm.value.xueshengxingming = true;
					continue;
				}
				if(x=='tijiaoshijian'){
					form.value.tijiaoshijian = row[x];
					disabledForm.value.tijiaoshijian = true;
					continue;
				}
				if(x=='tijiaomiaoshu'){
					form.value.tijiaomiaoshu = row[x];
					disabledForm.value.tijiaomiaoshu = true;
					continue;
				}
				if(x=='tijiaowenjian'){
					form.value.tijiaowenjian = row[x];
					disabledForm.value.tijiaowenjian = true;
					continue;
				}
			}
			if(row){
				crossRow.value = row
			}
			if(table){
				crossTable.value = table
			}
			if(tips){
				crossTips.value = tips
			}
			if(statusColumnName){
				crossColumnName.value = statusColumnName
			}
			if(statusColumnValue){
				crossColumnValue.value = statusColumnValue
			}
		}
		context?.$http({
			url: `${context?.$toolUtil.storageGet('frontSessionTable')}/session`,
			method: 'get'
		}).then(res => {
			var json = res.data.data
			if(context?.$toolUtil.storageGet("frontSessionTable")!="users") {
				disabledForm.value.xiangqing = true;
			}
			if(json.hasOwnProperty('fudaoyuanzhanghao') && context?.$toolUtil.storageGet("frontSessionTable")!="users"){
				form.value.fudaoyuanzhanghao = json.fudaoyuanzhanghao
				disabledForm.value.fudaoyuanzhanghao = true;
			}
			if(json.hasOwnProperty('fudaoyuanxingming') && context?.$toolUtil.storageGet("frontSessionTable")!="users"){
				form.value.fudaoyuanxingming = json.fudaoyuanxingming
				disabledForm.value.fudaoyuanxingming = true;
			}
			if(json.hasOwnProperty('xuehao') && context?.$toolUtil.storageGet("frontSessionTable")!="users"){
				form.value.xuehao = json.xuehao
				disabledForm.value.xuehao = true;
			}
			if(json.hasOwnProperty('xueshengxingming') && context?.$toolUtil.storageGet("frontSessionTable")!="users"){
				form.value.xueshengxingming = json.xueshengxingming
				disabledForm.value.xueshengxingming = true;
			}
            if (localStorage.getItem('autoSave')) {
                localStorage.removeItem('autoSave')
                save()
            }
		})
	}
	//初始化
	//取消
	const backClick = () => {
		history.back()
	}
	//提交
	const save=()=>{
		if(form.value.fengmian!=null) {
			form.value.fengmian = form.value.fengmian.replace(new RegExp(context?.$config.url,"g"),"");
		}
		if(form.value.tijiaowenjian!=null) {
			form.value.tijiaowenjian = form.value.tijiaowenjian.replace(new RegExp(context?.$config.url,"g"),"");
		}
		var table = crossTable.value
		var objcross = JSON.parse(JSON.stringify(crossRow.value))
		let crossUserId = ''
		let crossRefId = ''
		let crossOptNum = ''
		formRef.value.validate(async (valid)=>{
			if(valid){
                if(type.value == 'cross'){
                    if(crossColumnName.value!=''){
                        if(!crossColumnName.value.startsWith('[')){
                            for(let o in objcross){
                                if(o == crossColumnName.value){
                                    objcross[o] = crossColumnValue.value
                                }
                            }
                            //修改跨表数据
                            await changeCrossData(objcross)
                        }else{
                            crossUserId = context?.$toolUtil.storageGet('userid')
                            crossRefId = objcross['id']
                            crossOptNum = crossColumnName.value.replace(/\[/,"").replace(/\]/,"")
                        }
                    }
                }
				if(crossUserId&&crossRefId){    //限制用户操作次数
					form.value.crossuserid = crossUserId
					form.value.crossrefid = crossRefId
					let params = {
						page: 1,
						limit: 1000, 
						crossuserid:form.value.crossuserid,
						crossrefid:form.value.crossrefid,
					}
					context?.$http({
						url: `${tableName}/page`,
						method: 'get', 
						params: params 
					}).then(async (res)=>{
						if(res.data.data.total>=crossOptNum){
							context?.$toolUtil.message(`${crossTips.value}`,'error')
							return false
						}else{
							context?.$http({
								url: `${tableName}/${!form.value.id ? "save" : "update"}`,
								method: 'post', 
								data: form.value 
							}).then(async (res)=>{
                                context?.$toolUtil.message(`操作成功`,'success')
                                history.back()
							})
						}
					})
				}else{
					context?.$http({
						url: `${tableName}/${!form.value.id ? "save" : "update"}`,
						method: 'post', 
						data: form.value 
					}).then(async (res)=>{
                        context?.$toolUtil.message(`操作成功`,'success')
                        history.back()
					})
				}
			}
		})
	}
	//修改跨表数据
	const changeCrossData=(row,key)=>{
        if(type.value == 'cross'){
            let data = row
            if(key){	//如果有指定key，则只更新key属性
                data = {
                    id:row.id,
                }
                data[key] = row[key]
            }
            context?.$http({
                url: `${crossTable.value}/update`,
                method: 'post',
                data: data
            }).then(res=>{})
        }
	}
	onMounted(()=>{
		type.value = route.query.type?route.query.type:'add'
		let row = null
		let table = null
		let statusColumnName = null
		let tips = null
		let statusColumnValue = null
		if(type.value == 'cross'){
			row = context?.$toolUtil.storageGet('crossObj')?JSON.parse(context?.$toolUtil.storageGet('crossObj')):{}
			table = context?.$toolUtil.storageGet('crossTable')
			statusColumnName = context?.$toolUtil.storageGet('crossStatusColumnName')
			tips = context?.$toolUtil.storageGet('crossTips')
			statusColumnValue = context?.$toolUtil.storageGet('crossStatusColumnValue')
		}
		init(route.query.id?route.query.id:null, type.value,'', row, table, statusColumnName, tips, statusColumnValue)
	})
    onUnmounted(()=>{
        Object.keys(localStorage).map(item=>{
            if(item.startsWith('cross')){
                localStorage.removeItem(item)
            }
        })
    })
</script>
<style lang="scss" scoped>
	// 表单
	.add_form{
		// form item
		:deep(.el-form-item) {
			// 内容盒子
			.el-form-item__content {
				//文件上传样式
				.upload-demo {
					width: 100%;
				}
			}
		}
	}
</style>
<style lang="scss">
.edit_view {
    width: 100%;
    padding: 0 7%;
    margin: 0 auto;
    position: relative;
    font-size:16px;
    color:#666;
    border-radius:0px;
}
.edit_view .add_form{
    width: 100%;
    margin: 30px auto;
    background: rgb(255, 255, 255);
    padding: 50px 100px;
    border:0px solid #eee;
    border-radius: 0px;
}


.edit_view .add_form .el-form-item .el-form-item__content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: calc(100% - 120px);
}
.edit_view .list_inp .el-input__wrapper{
    height: 36px;
}


.edit_view .list_date{
    line-height: 36px;
}




.edit_view .add_form .el-form-item .el-form-item__content .el-textarea{
    border: 0px solid rgba(226, 227, 229, 1);
}
.edit_view .add_form .el-form-item .el-form-item__content .el-textarea .el-textarea__inner{
    width: 100%;
    min-height: 150px;
    padding: 12px;
   
    border-radius: 4px;
    color: #666;
    font-size: 16px;
}


.edit_view .add_form .el-form-item .el-form-item__content .el-upload--picture-card{
    background-color: rgb(255, 255, 255);
    width: 100px;
    height: 90px;
    line-height: 100px;
    text-align: center;
    
    border-radius: 0px;
    cursor: pointer;
}

.edit_view .add_form .el-form-item .el-form-item__content .el-upload--picture-card .el-icon{
    font-size: 32px;
    color: #999;
}

.edit_view .add_form .el-form-item .el-form-item__content .img-uploader .el-upload__tip{
    font-size: 15px;
    color: #666;
    margin: 0;
}

.edit_view .add_form .el-form-item .el-form-item__content .el-upload--text .el-upload-dragger{
    background-color:none;
    
 border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-sizing: border-box;
    width: 360px;
    height: 180px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
}

.edit_view .add_form .el-form-item .el-form-item__content .el-upload--text .el-upload-dragger .el-icon--upload{
    font-size: 67px;
    color: var(--theme);
    line-height: 50px;
}

.edit_view .add_form .el-form-item .el-form-item__content .upload-demo .el-upload__tip{
    font-size: 15px;
    color: #666;
    margin: 0px 0 0;
    line-height:1;
}

.edit_view .add_form .el-form-item .el-form-item__content .el-upload--text .el-upload-dragger em{
    color: var(--theme);
    font-size: 15px;
}


.edit_view .add_form .formModel_btn_box{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0px 10px 0px;
    margin: 40px 0px 0px;
    justify-content: center;
}

.edit_view .add_form .formModel_btn_box .formModel_confirm{
    margin: 0px 0px 0px 30px;
    padding: 0px 24px;
    width: auto;
    height: 36px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 0px;
    background: var(--theme);
    cursor: pointer;
}
.edit_view .add_form .formModel_btn_box .formModel_confirm:hover{
    background: var(--theme);
}

.edit_view .add_form .formModel_btn_box .formModel_cancel{
    margin: 0px 0px 0px 30px;
    padding: 0px 24px;
    width: auto;
    height: 36px;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    border: 0px;
    background: rgba(188, 188, 188, 1);
    cursor: pointer;
}
.edit_view .add_form .formModel_btn_box .formModel_cancel:hover{
}


.edit_view .add_form .formModel_btn_box .formModel_face{
    margin: 0px 0px 0px 30px;
    padding: 0px 20px;
    width: auto;
    height: 36px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    border: 0px;
    background: rgb(191 106 106);
    cursor: pointer;
    order: -1;
}
.edit_view .add_form .formModel_btn_box .formModel_face:hover{
}







.edit_view .add_form .el-form-item{
   margin:10px;
    display: flex;
  
  justify-content: flex-start; 
    
}
.edit_view .add_form .el-form-item .el-form-item__label{
     width: 150px !important;
    background: none;
    text-align: left;
    display: block;
   font-weight: 400;
font-size: 18px;
color: #585858;
    padding-left:10px;
}
.edit_view .list_inp .el-input__wrapper{
     height: 36px;
    line-height: 36px;
    padding: 0px 10px;
    box-sizing: border-box;

    font-size: 16px;
background: none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-shadow:none;
}
.edit_view .el-select__wrapper{
    background: none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-shadow:none;
}

.edit_view .el-input__wrapper {
 background: none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-shadow:none;
}
.edit_view .add_form .el-form-item .el-form-item__content .face_box .face_img{
border-radius: 10px 10px 10px 10px;
}

.edit_view .add_form .el-form-item .el-form-item__content .face_box .face_btn{
    margin-top:auto;
    background: #9C8CFD;
border-radius: 10px 10px 10px 10px;
    color:#FFF;
}

.edit_view .el-textarea__inner{
       background: none;
border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
    box-shadow:none;

}
.edit_view .el-upload-list--picture-card .el-upload-list__item{

border-radius: 10px 10px 10px 10px;
}

.edit_view .add_form .el-form-item .el-form-item__content .el-upload--picture-card{
       background: #F8F9FB;
border-radius: 10px 10px 10px 10px;
    border:none; 
  margin:auto;
}

.edit_view .el-upload.el-upload--picture-card i.el-icon {
   font-size:50px!important; 
  
}



.edit_view .editor-box {
 
    background:none;
   border-radius: 5px 5px 5px 5px;
border: 1px solid #A8A8A8;
}

.edit_view .w-e-bar.w-e-bar-show.w-e-toolbar {
    background:none;
}

.edit_view .w-e-text-container {
  background:none;

}

.edit_view .add_form .el-form-item .el-form-item__content .list_checkbox{
background: #F8F9FB;
border-radius: 10px 10px 10px 10px;
}

.edit_view .add_form .el-form-item .el-form-item__content .list_checkbox .el-checkbox.is-checked .el-checkbox__inner{
    display:none;
}
.edit_view .add_form .el-form-item .el-form-item__content .list_checkbox .el-checkbox .el-checkbox__inner{
    display:none;
}

.el-col.el-col-12 {
flex: 0 0 100%;
    max-width: 100%;
    padding-left:25%;
    padding-right:25%;
    border-bottom:1px solid #E2E4F8;
}

.el-col.el-col-24 {
flex: 0 0 100%;
    max-width: 100%;
    padding-left:25%;
    padding-right:25%;
    border-bottom:1px solid #E2E4F8;
}

.edit_view .el-row {
flex-direction:column;
    width:100%;
}
</style>