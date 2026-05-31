<template>
	<div>
		<el-dialog modal-class="edit_form_modal" class="edit_form" v-model="formVisible" :title="formTitle" width="80%" destroy-on-close :fullscreen='false'>
			<el-form class="formModel_form" ref="formRef" :model="form" :rules="rules">
				<el-row >
					<el-col :span="12">
						<el-form-item label="名称" prop="mingcheng">
							<el-input class="list_inp" v-model="form.mingcheng" placeholder="名称"
                                type="text"
								:readonly="!isAdd||disabledForm.mingcheng?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12" >
						<el-form-item label="类型" prop="leixing">
							<el-select
								class="list_sel"
								:disabled="!isAdd||disabledForm.leixing?true:false"
								v-model="form.leixing" 
								placeholder="请选择类型"
								>
								<el-option v-for="(item,index) in leixingLists" :label="item"
									:value="item"
									>
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="金额" prop="jine">
							<el-input class="list_inp" v-model.number="form.jine" placeholder="金额"
                                type="number"
                                @mousewheel.native.prevent
								:readonly="!isAdd||disabledForm.jine?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="申请对象" prop="shenqingduixiang">
							<el-input class="list_inp" v-model="form.shenqingduixiang" placeholder="申请对象"
                                type="text"
								:readonly="!isAdd||disabledForm.shenqingduixiang?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="专业限制" prop="zhuanyexianzhi">
							<el-input class="list_inp" v-model="form.zhuanyexianzhi" placeholder="专业限制"
                                type="text"
								:readonly="!isAdd||disabledForm.zhuanyexianzhi?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="GPA要求" prop="gpayaoqiu">
							<el-input class="list_inp" v-model="form.gpayaoqiu" placeholder="GPA要求"
                                type="text"
								:readonly="!isAdd||disabledForm.gpayaoqiu?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="语言要求" prop="yuyanyaoqiu">
							<el-input class="list_inp" v-model="form.yuyanyaoqiu" placeholder="语言要求"
                                type="text"
								:readonly="!isAdd||disabledForm.yuyanyaoqiu?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item prop="fengmian"
									  label="封面"
						>
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
							<el-select
								class="list_sel"
								:disabled="!isAdd||disabledForm.fudaoyuanzhanghao?true:false"
								v-model="form.fudaoyuanzhanghao" 
								placeholder="请选择辅导员账号"
								@change="fudaoyuanzhanghaoChange">
								<el-option v-for="(item,index) in fudaoyuanzhanghaoLists" :label="item" :value="item">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="辅导员姓名" prop="fudaoyuanxingming">
							<el-input class="list_inp" v-model="form.fudaoyuanxingming" placeholder="辅导员姓名"
                                type="text"
								:readonly="!isAdd||disabledForm.fudaoyuanxingming?true:false" />
						</el-form-item>
					</el-col>

					<el-col :span="24">
						<el-form-item label="详情" prop="xiangqing">
							<el-input v-model="form.xiangqing" placeholder="详情" type="textarea"
							:readonly="!isAdd||disabledForm.xiangqing?true:false"
							/>
						</el-form-item>
					</el-col>

				</el-row>
			</el-form>
			<template #footer v-if="isAdd||type=='logistics'||type=='reply'">
				<span class="formModel_btn_box">
					<el-button class="cancel_btn" @click="closeClick">取消</el-button>
					<el-button class="confirm_btn" type="primary" @click="save"
						>
						提交
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<script setup>
	import {
		reactive,
		ref,
		getCurrentInstance,
		nextTick,
		computed,
		defineEmits
	} from 'vue'
    import {
        useStore
    } from 'vuex';
	const moment = window.moment
    const store = useStore()
    const user = computed(()=>store.getters['user/session'])
	const context = getCurrentInstance()?.appContext.config.globalProperties;	
	const emit = defineEmits(['formModelChange'])
    const isAdmin = localStorage.getItem('isAdmin')||context.$toolUtil.storageGet("sessionTable")=='users'
	//基础信息
	const tableName = 'jiangxuejin'
	const formName = '奖学金'
	//基础信息
	//form表单
	const form = ref({})
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
	})
	const formVisible = ref(false)
	const isAdd = ref(false)
	const formTitle = ref('')
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
	})
	//表单验证
	
	const formRef = ref(null)
	const id = ref(0)
	const type = ref('')
	//类型列表
	const leixingLists = ref([])
	//封面上传回调
	const fengmianUploadSuccess=(e)=>{
		form.value.fengmian = e
	}
	//辅导员账号列表
	const fudaoyuanzhanghaoLists = ref([])
	//获取唯一标识
	const getUUID =()=> {
      return new Date().getTime();
    }
	//重置
	const resetForm = () => {
		form.value = {
			mingcheng: '',
			leixing: '',
			xiangqing: '',
			jine: '',
			shenqingduixiang: '',
			zhuanyexianzhi: '',
			gpayaoqiu: '',
			yuyanyaoqiu: '',
			fengmian: '',
			fudaoyuanzhanghao: '',
			fudaoyuanxingming: '',

		}
	}
	//获取info
	const getInfo = ()=>{
		context?.$http({
			url: `${tableName}/info/${id.value}`,
			method: 'get'
		}).then(res => {
			let reg=new RegExp('../../../file','g')
			form.value = res.data.data
			formVisible.value = true
		})
	}
	const crossRow = ref('')
	const crossTable = ref('')
	const crossTips = ref('')
	const crossColumnName = ref('')
	const crossColumnValue = ref('')
	//初始化
	const init=(formId=null,formType='add',formNames='',row=null,table=null,statusColumnName=null,tips=null,statusColumnValue=null)=>{
		resetForm()
		if(formId){
			id.value = formId
			type.value = formType
		}
		if(formType == 'add'){
			isAdd.value = true
			formTitle.value = '新增' + formName
			formVisible.value = true
		}else if(formType == 'info'){
			isAdd.value = false
			formTitle.value = '查看' + formName
			getInfo()
		}else if(formType == 'edit'){
			isAdd.value = true
			formTitle.value = '修改' + formName
			getInfo()
		}
		else if(formType == 'cross'){
			isAdd.value = true
			formTitle.value = formNames
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
			formVisible.value = true
		}
		context?.$http({
			url: `${context?.$toolUtil.storageGet('sessionTable')}/session`,
			method: 'get'
		}).then(res => {
			var json = res.data.data
		})
		context?.$http({
			url: `option/leixing/leixing`,
			method: 'get',
		}).then(res=>{
			leixingLists.value = res.data.data
		})
		context?.$http({
			url: `option/fudaoyuan/fudaoyuanzhanghao`,
			method: 'get',
		}).then(res=>{
			fudaoyuanzhanghaoLists.value = res.data.data
		})
		//由上级字段带出不可改
		disabledForm.value.fudaoyuanxingming = true;
	}
	//初始化
	//声明父级调用
	defineExpose({
		init
	})
	//关闭
	const closeClick = () => {
		formVisible.value = false
	}
	const fudaoyuanzhanghaoChange=()=>{
		context?.$http({
			url: `follow/fudaoyuan/fudaoyuanzhanghao?columnValue=` + form.value.fudaoyuanzhanghao,
			method: 'get'
		}).then(res=>{
			if(res.data.data.fudaoyuanxingming){
				form.value.fudaoyuanxingming = res.data.data.fudaoyuanxingming
			}
		})
	}
	//富文本
	const editorChange = (e,name) =>{
		form.value[name] = e
	}
	//提交
	const save= async ()=>{
		if(form.value.fengmian!=null) {
			form.value.fengmian = form.value.fengmian.replace(new RegExp(context?.$config.url,"g"),"");
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
							crossUserId = user.value.id
							crossRefId = objcross['id']
							crossOptNum = crossColumnName.value.replace(/\[/,"").replace(/\]/,"")
						}
					}
				}
				if(crossUserId&&crossRefId){
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
							}).then(async res=>{
								emit('formModelChange')
								context?.$toolUtil.message(`操作成功`,'success')
                                formVisible.value = false
							})
						}
					})
				}else{
					context?.$http({
						url: `${tableName}/${!form.value.id ? "save" : "update"}`,
						method: 'post', 
						data: form.value 
					}).then(async (res)=>{
						emit('formModelChange')
						context?.$toolUtil.message(`操作成功`,'success')
                        formVisible.value = false
					})
				}
			}else{
                context.$message.error('请完善信息')
            }
		})
	}
	//修改跨表数据
	const changeCrossData = async (row,key)=>{
        if(type.value == 'cross'){
			let data = row
			if(key){	//如果有指定key，则只更新key属性
				data = {
					id:row.id,
				}
				data[key] = row[key]
			}
            await context?.$http({
                url: `${crossTable.value}/update`,
                method: 'post',
                data: data
            }).then(res=>{})
        }
	}
</script>
<style lang="scss" scoped>
</style>
