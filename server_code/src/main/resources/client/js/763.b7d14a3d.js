"use strict";
(self["webpackChunkvue3_nf0"] = self["webpackChunkvue3_nf0"] || []).push([[763],{

/***/ 763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ formAdd; }
});

// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(962);
// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(450);
// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(155);
// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(634);
// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/vuex/dist/vuex.esm-bundler.js + 5 modules
var vuex_esm_bundler = __webpack_require__(644);
;// CONCATENATED MODULE: ../../../../../../../node_modules_front/3/node_modules/thread-loader/dist/cjs.js!../../../../../../../node_modules_front/3/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/jiangxuejinshenqing/formAdd.vue?vue&type=script&setup=true&lang=js

const _hoisted_1 = {
  class: "edit_view"
};
const _hoisted_2 = {
  class: "breadcrumb-wrapper",
  style: {
    "width": "100%"
  }
};
const _hoisted_3 = {
  class: "bread_view"
};
const _hoisted_4 = {
  class: "formModel_btn_box"
};



const tableName = 'jiangxuejinshenqing';
const formName = '奖学金申请';
//基础信息

/* harmony default export */ var formAddvue_type_script_setup_true_lang_js = ({
  __name: 'formAdd',
  setup(__props) {
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const user = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters['user/session']);
    const moment = window.moment;
    const context = (0,runtime_core_esm_bundler/* getCurrentInstance */.FN)()?.appContext.config.globalProperties;
    const route = (0,vue_router_esm_bundler/* useRoute */.yj)();
    const router = (0,vue_router_esm_bundler/* useRouter */.tv)();
    //基础信息
    const breadList = (0,reactivity_esm_bundler/* ref */.iH)([{
      name: formName
    }]);
    //获取唯一标识
    const getUUID = () => {
      return new Date().getTime();
    };
    //form表单
    const form = (0,reactivity_esm_bundler/* ref */.iH)({
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
      shhf: ''
    });
    const formRef = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const id = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const type = (0,reactivity_esm_bundler/* ref */.iH)('');
    const disabledForm = (0,reactivity_esm_bundler/* ref */.iH)({
      mingcheng: false,
      leixing: false,
      xiangqing: false,
      jine: false,
      shenqingduixiang: false,
      zhuanyexianzhi: false,
      gpayaoqiu: false,
      yuyanyaoqiu: false,
      fengmian: false,
      fudaoyuanzhanghao: false,
      fudaoyuanxingming: false,
      xuehao: false,
      xueshengxingming: false,
      tijiaoshijian: false,
      tijiaomiaoshu: false,
      tijiaowenjian: false,
      sfsh: false,
      shhf: false
    });
    const isAdd = (0,reactivity_esm_bundler/* ref */.iH)(false);
    //表单验证
    const rules = (0,reactivity_esm_bundler/* ref */.iH)({
      mingcheng: [],
      leixing: [],
      xiangqing: [],
      jine: [{
        validator: context.$toolUtil.validator.number,
        trigger: 'blur'
      }],
      shenqingduixiang: [],
      zhuanyexianzhi: [],
      gpayaoqiu: [],
      yuyanyaoqiu: [],
      fengmian: [],
      fudaoyuanzhanghao: [],
      fudaoyuanxingming: [],
      xuehao: [],
      xueshengxingming: [],
      tijiaoshijian: [],
      tijiaomiaoshu: [],
      tijiaowenjian: [],
      sfsh: [],
      shhf: []
    });
    //封面上传回调
    const fengmianUploadSuccess = e => {
      form.value.fengmian = e;
    };
    //提交文件上传回调
    const tijiaowenjianUploadSuccess = e => {
      form.value.tijiaowenjian = e;
    };
    //获取info
    const getInfo = () => {
      context?.$http({
        url: `${tableName}/info/${id.value}`,
        method: 'get'
      }).then(res => {
        let reg = new RegExp('../../../file', 'g');
        form.value = res.data.data;
      });
    };
    const crossRow = (0,reactivity_esm_bundler/* ref */.iH)('');
    const crossTable = (0,reactivity_esm_bundler/* ref */.iH)('');
    const crossTips = (0,reactivity_esm_bundler/* ref */.iH)('');
    const crossColumnName = (0,reactivity_esm_bundler/* ref */.iH)('');
    const crossColumnValue = (0,reactivity_esm_bundler/* ref */.iH)('');
    //初始化
    const init = (formId = null, formType = 'add', formNames = '', row = null, table = null, statusColumnName = null, tips = null, statusColumnValue = null) => {
      if (formId) {
        id.value = formId;
        type.value = formType;
      }
      if (formType == 'add') {
        isAdd.value = true;
      } else if (formType == 'info') {
        isAdd.value = false;
        getInfo();
      } else if (formType == 'edit') {
        isAdd.value = true;
        getInfo();
      } else if (formType == 'cross') {
        isAdd.value = true;
        // getInfo()
        for (let x in row) {
          if (x == 'mingcheng') {
            form.value.mingcheng = row[x];
            disabledForm.value.mingcheng = true;
            continue;
          }
          if (x == 'leixing') {
            form.value.leixing = row[x];
            disabledForm.value.leixing = true;
            continue;
          }
          if (x == 'xiangqing') {
            form.value.xiangqing = row[x];
            disabledForm.value.xiangqing = true;
            continue;
          }
          if (x == 'jine') {
            form.value.jine = row[x];
            disabledForm.value.jine = true;
            continue;
          }
          if (x == 'shenqingduixiang') {
            form.value.shenqingduixiang = row[x];
            disabledForm.value.shenqingduixiang = true;
            continue;
          }
          if (x == 'zhuanyexianzhi') {
            form.value.zhuanyexianzhi = row[x];
            disabledForm.value.zhuanyexianzhi = true;
            continue;
          }
          if (x == 'gpayaoqiu') {
            form.value.gpayaoqiu = row[x];
            disabledForm.value.gpayaoqiu = true;
            continue;
          }
          if (x == 'yuyanyaoqiu') {
            form.value.yuyanyaoqiu = row[x];
            disabledForm.value.yuyanyaoqiu = true;
            continue;
          }
          if (x == 'fengmian') {
            form.value.fengmian = row[x];
            disabledForm.value.fengmian = true;
            continue;
          }
          if (x == 'fudaoyuanzhanghao') {
            form.value.fudaoyuanzhanghao = row[x];
            disabledForm.value.fudaoyuanzhanghao = true;
            continue;
          }
          if (x == 'fudaoyuanxingming') {
            form.value.fudaoyuanxingming = row[x];
            disabledForm.value.fudaoyuanxingming = true;
            continue;
          }
          if (x == 'xuehao') {
            form.value.xuehao = row[x];
            disabledForm.value.xuehao = true;
            continue;
          }
          if (x == 'xueshengxingming') {
            form.value.xueshengxingming = row[x];
            disabledForm.value.xueshengxingming = true;
            continue;
          }
          if (x == 'tijiaoshijian') {
            form.value.tijiaoshijian = row[x];
            disabledForm.value.tijiaoshijian = true;
            continue;
          }
          if (x == 'tijiaomiaoshu') {
            form.value.tijiaomiaoshu = row[x];
            disabledForm.value.tijiaomiaoshu = true;
            continue;
          }
          if (x == 'tijiaowenjian') {
            form.value.tijiaowenjian = row[x];
            disabledForm.value.tijiaowenjian = true;
            continue;
          }
        }
        if (row) {
          crossRow.value = row;
        }
        if (table) {
          crossTable.value = table;
        }
        if (tips) {
          crossTips.value = tips;
        }
        if (statusColumnName) {
          crossColumnName.value = statusColumnName;
        }
        if (statusColumnValue) {
          crossColumnValue.value = statusColumnValue;
        }
      }
      context?.$http({
        url: `${context?.$toolUtil.storageGet('frontSessionTable')}/session`,
        method: 'get'
      }).then(res => {
        var json = res.data.data;
        if (context?.$toolUtil.storageGet("frontSessionTable") != "users") {
          disabledForm.value.xiangqing = true;
        }
        if (json.hasOwnProperty('fudaoyuanzhanghao') && context?.$toolUtil.storageGet("frontSessionTable") != "users") {
          form.value.fudaoyuanzhanghao = json.fudaoyuanzhanghao;
          disabledForm.value.fudaoyuanzhanghao = true;
        }
        if (json.hasOwnProperty('fudaoyuanxingming') && context?.$toolUtil.storageGet("frontSessionTable") != "users") {
          form.value.fudaoyuanxingming = json.fudaoyuanxingming;
          disabledForm.value.fudaoyuanxingming = true;
        }
        if (json.hasOwnProperty('xuehao') && context?.$toolUtil.storageGet("frontSessionTable") != "users") {
          form.value.xuehao = json.xuehao;
          disabledForm.value.xuehao = true;
        }
        if (json.hasOwnProperty('xueshengxingming') && context?.$toolUtil.storageGet("frontSessionTable") != "users") {
          form.value.xueshengxingming = json.xueshengxingming;
          disabledForm.value.xueshengxingming = true;
        }
        if (localStorage.getItem('autoSave')) {
          localStorage.removeItem('autoSave');
          save();
        }
      });
    };
    //初始化
    //取消
    const backClick = () => {
      history.back();
    };
    //提交
    const save = () => {
      if (form.value.fengmian != null) {
        form.value.fengmian = form.value.fengmian.replace(new RegExp(context?.$config.url, "g"), "");
      }
      if (form.value.tijiaowenjian != null) {
        form.value.tijiaowenjian = form.value.tijiaowenjian.replace(new RegExp(context?.$config.url, "g"), "");
      }
      var table = crossTable.value;
      var objcross = JSON.parse(JSON.stringify(crossRow.value));
      let crossUserId = '';
      let crossRefId = '';
      let crossOptNum = '';
      formRef.value.validate(async valid => {
        if (valid) {
          if (type.value == 'cross') {
            if (crossColumnName.value != '') {
              if (!crossColumnName.value.startsWith('[')) {
                for (let o in objcross) {
                  if (o == crossColumnName.value) {
                    objcross[o] = crossColumnValue.value;
                  }
                }
                //修改跨表数据
                await changeCrossData(objcross);
              } else {
                crossUserId = context?.$toolUtil.storageGet('userid');
                crossRefId = objcross['id'];
                crossOptNum = crossColumnName.value.replace(/\[/, "").replace(/\]/, "");
              }
            }
          }
          if (crossUserId && crossRefId) {
            //限制用户操作次数
            form.value.crossuserid = crossUserId;
            form.value.crossrefid = crossRefId;
            let params = {
              page: 1,
              limit: 1000,
              crossuserid: form.value.crossuserid,
              crossrefid: form.value.crossrefid
            };
            context?.$http({
              url: `${tableName}/page`,
              method: 'get',
              params: params
            }).then(async res => {
              if (res.data.data.total >= crossOptNum) {
                context?.$toolUtil.message(`${crossTips.value}`, 'error');
                return false;
              } else {
                context?.$http({
                  url: `${tableName}/${!form.value.id ? "save" : "update"}`,
                  method: 'post',
                  data: form.value
                }).then(async res => {
                  context?.$toolUtil.message(`操作成功`, 'success');
                  history.back();
                });
              }
            });
          } else {
            context?.$http({
              url: `${tableName}/${!form.value.id ? "save" : "update"}`,
              method: 'post',
              data: form.value
            }).then(async res => {
              context?.$toolUtil.message(`操作成功`, 'success');
              history.back();
            });
          }
        }
      });
    };
    //修改跨表数据
    const changeCrossData = (row, key) => {
      if (type.value == 'cross') {
        let data = row;
        if (key) {
          //如果有指定key，则只更新key属性
          data = {
            id: row.id
          };
          data[key] = row[key];
        }
        context?.$http({
          url: `${crossTable.value}/update`,
          method: 'post',
          data: data
        }).then(res => {});
      }
    };
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
      type.value = route.query.type ? route.query.type : 'add';
      let row = null;
      let table = null;
      let statusColumnName = null;
      let tips = null;
      let statusColumnValue = null;
      if (type.value == 'cross') {
        row = context?.$toolUtil.storageGet('crossObj') ? JSON.parse(context?.$toolUtil.storageGet('crossObj')) : {};
        table = context?.$toolUtil.storageGet('crossTable');
        statusColumnName = context?.$toolUtil.storageGet('crossStatusColumnName');
        tips = context?.$toolUtil.storageGet('crossTips');
        statusColumnValue = context?.$toolUtil.storageGet('crossStatusColumnValue');
      }
      init(route.query.id ? route.query.id : null, type.value, '', row, table, statusColumnName, tips, statusColumnValue);
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.Ah)(() => {
      Object.keys(localStorage).map(item => {
        if (item.startsWith('cross')) {
          localStorage.removeItem(item);
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_el_breadcrumb_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-breadcrumb-item");
      const _component_el_breadcrumb = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-breadcrumb");
      const _component_el_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-input");
      const _component_el_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-form-item");
      const _component_el_col = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-col");
      const _component_uploads = (0,runtime_core_esm_bundler/* resolveComponent */.up)("uploads");
      const _component_el_date_picker = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-date-picker");
      const _component_el_row = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-row");
      const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-button");
      const _component_el_form = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-form");
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_breadcrumb, {
        separator: ">  ",
        class: "breadcrumb"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_breadcrumb_item, {
          class: "first_breadcrumb",
          to: {
            path: '/'
          }
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => _cache[14] || (_cache[14] = [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("首页", -1)])),
          _: 1,
          __: [14]
        }), ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(breadList.value, (item, index) => {
          return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_el_breadcrumb_item, {
            class: "second_breadcrumb",
            key: index
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(item.name), 1)]),
            _: 2
          }, 1024);
        }), 128))]),
        _: 1
      })])]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        model: form.value,
        class: "add_form",
        "label-width": "120px",
        rules: rules.value
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_row, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "名称",
              prop: "mingcheng"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.mingcheng,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => form.value.mingcheng = $event),
                placeholder: "名称",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.mingcheng ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "类型",
              prop: "leixing"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.leixing,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => form.value.leixing = $event),
                placeholder: "类型",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.leixing ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "金额",
              prop: "jine"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.jine,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => form.value.jine = $event),
                modelModifiers: {
                  number: true
                },
                placeholder: "金额",
                type: "number",
                readonly: !isAdd.value || disabledForm.value.jine ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "申请对象",
              prop: "shenqingduixiang"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.shenqingduixiang,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => form.value.shenqingduixiang = $event),
                placeholder: "申请对象",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.shenqingduixiang ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "专业限制",
              prop: "zhuanyexianzhi"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.zhuanyexianzhi,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => form.value.zhuanyexianzhi = $event),
                placeholder: "专业限制",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.zhuanyexianzhi ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "GPA要求",
              prop: "gpayaoqiu"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.gpayaoqiu,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => form.value.gpayaoqiu = $event),
                placeholder: "GPA要求",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.gpayaoqiu ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "语言要求",
              prop: "yuyanyaoqiu"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.yuyanyaoqiu,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => form.value.yuyanyaoqiu = $event),
                placeholder: "语言要求",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.yuyanyaoqiu ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "封面",
              prop: "fengmian"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_uploads, {
                disabled: !isAdd.value || disabledForm.value.fengmian ? true : false,
                action: "file/upload",
                tip: "请上传封面",
                style: {
                  "width": "100%",
                  "text-align": "left"
                },
                fileUrls: form.value.fengmian ? form.value.fengmian : '',
                onChange: fengmianUploadSuccess
              }, null, 8, ["disabled", "fileUrls"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "辅导员账号",
              prop: "fudaoyuanzhanghao"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.fudaoyuanzhanghao,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => form.value.fudaoyuanzhanghao = $event),
                placeholder: "辅导员账号",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.fudaoyuanzhanghao ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "辅导员姓名",
              prop: "fudaoyuanxingming"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.fudaoyuanxingming,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => form.value.fudaoyuanxingming = $event),
                placeholder: "辅导员姓名",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.fudaoyuanxingming ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "学号",
              prop: "xuehao"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.xuehao,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => form.value.xuehao = $event),
                placeholder: "学号",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.xuehao ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "学生姓名",
              prop: "xueshengxingming"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                class: "list_inp",
                modelValue: form.value.xueshengxingming,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => form.value.xueshengxingming = $event),
                placeholder: "学生姓名",
                type: "text",
                readonly: !isAdd.value || disabledForm.value.xueshengxingming ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "提交时间",
              prop: "tijiaoshijian"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_date_picker, {
                class: "list_date",
                modelValue: form.value.tijiaoshijian,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => form.value.tijiaoshijian = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                type: "datetime",
                style: {
                  "width": "100%"
                },
                readonly: !isAdd.value || disabledForm.value.tijiaoshijian ? true : false,
                placeholder: "请选择提交时间"
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 12
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "提交文件",
              prop: "tijiaowenjian"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_uploads, {
                disabled: !isAdd.value || disabledForm.value.tijiaowenjian ? true : false,
                type: "file",
                action: "file/upload",
                tip: "请上传提交文件",
                limit: 1,
                style: {
                  "width": "100%",
                  "text-align": "left"
                },
                fileUrls: form.value.tijiaowenjian ? form.value.tijiaowenjian : '',
                onChange: tijiaowenjianUploadSuccess
              }, null, 8, ["disabled", "fileUrls"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 24
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "详情",
              prop: "xiangqing"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                modelValue: form.value.xiangqing,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => form.value.xiangqing = $event),
                placeholder: "详情",
                type: "textarea",
                readonly: !isAdd.value || disabledForm.value.xiangqing ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_col, {
            span: 24
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_form_item, {
              label: "提交描述",
              prop: "tijiaomiaoshu"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
                modelValue: form.value.tijiaomiaoshu,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => form.value.tijiaomiaoshu = $event),
                placeholder: "提交描述",
                type: "textarea",
                readonly: !isAdd.value || disabledForm.value.tijiaomiaoshu ? true : false
              }, null, 8, ["modelValue", "readonly"])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, {
          class: "formModel_cancel",
          onClick: backClick
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => _cache[15] || (_cache[15] = [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("取消", -1)])),
          _: 1,
          __: [15]
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, {
          class: "formModel_confirm",
          onClick: save,
          type: "success"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => _cache[16] || (_cache[16] = [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 保存 ", -1)])),
          _: 1,
          __: [16]
        })])]),
        _: 1
      }, 8, ["model", "rules"])]);
    };
  }
});
;// CONCATENATED MODULE: ./src/views/pages/jiangxuejinshenqing/formAdd.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ../../../../../../../node_modules_front/3/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!../../../../../../../node_modules_front/3/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules_front/3/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../../../../node_modules_front/3/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/jiangxuejinshenqing/formAdd.vue?vue&type=style&index=0&id=3bc7974b&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/pages/jiangxuejinshenqing/formAdd.vue?vue&type=style&index=0&id=3bc7974b&lang=scss&scoped=true

;// CONCATENATED MODULE: ../../../../../../../node_modules_front/3/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!../../../../../../../node_modules_front/3/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules_front/3/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../../../../node_modules_front/3/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/jiangxuejinshenqing/formAdd.vue?vue&type=style&index=1&id=3bc7974b&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/pages/jiangxuejinshenqing/formAdd.vue?vue&type=style&index=1&id=3bc7974b&lang=scss

// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/views/pages/jiangxuejinshenqing/formAdd.vue



;



const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(formAddvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-3bc7974b"]])

/* harmony default export */ var formAdd = (__exports__);

/***/ })

}]);
//# sourceMappingURL=763.b7d14a3d.js.map