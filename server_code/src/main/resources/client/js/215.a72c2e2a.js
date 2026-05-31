"use strict";
(self["webpackChunkvue3_nf0"] = self["webpackChunkvue3_nf0"] || []).push([[215],{

/***/ 215:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ register; }
});

// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(962);
// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(450);
// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(155);
// EXTERNAL MODULE: ../../../../../../../node_modules_front/3/node_modules/vue-router/dist/vue-router.esm-bundler.js
var vue_router_esm_bundler = __webpack_require__(634);
;// CONCATENATED MODULE: ../../../../../../../node_modules_front/3/node_modules/thread-loader/dist/cjs.js!../../../../../../../node_modules_front/3/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/xuesheng/register.vue?vue&type=script&setup=true&lang=js

const _hoisted_1 = {
  class: "register_view"
};
const _hoisted_2 = {
  class: "form",
  style: {
    "z-index": "1"
  }
};
const _hoisted_3 = {
  class: "projectName"
};
const _hoisted_4 = {
  class: "register_form"
};
const _hoisted_5 = {
  class: "list_item"
};
const _hoisted_6 = {
  class: "list_item"
};
const _hoisted_7 = {
  class: "list_item"
};
const _hoisted_8 = {
  class: "list_item"
};
const _hoisted_9 = {
  class: "list_item"
};
const _hoisted_10 = {
  class: "list_item"
};
const _hoisted_11 = {
  class: "list_file_list"
};


/* harmony default export */ var registervue_type_script_setup_true_lang_js = ({
  __name: 'register',
  setup(__props) {
    const context = (0,runtime_core_esm_bundler/* getCurrentInstance */.FN)()?.appContext.config.globalProperties;
    const projectName = context.$project.projectName;
    //获取注册类型
    const route = (0,vue_router_esm_bundler/* useRoute */.yj)();
    const tableName = (0,reactivity_esm_bundler/* ref */.iH)('xuesheng');

    //公共方法
    const getUUID = () => {
      return new Date().getTime();
    };
    const registerForm = (0,reactivity_esm_bundler/* ref */.iH)({});
    const init = () => {};
    const touxiangUploadSuccess = fileUrls => {
      registerForm.value.touxiang = fileUrls;
    };

    //注册按钮
    const handleRegister = () => {
      let url = tableName.value + "/register";
      if (!registerForm.value.xuehao) {
        context?.$toolUtil.message(`学号不能为空`, 'error');
        return false;
      }
      if (!registerForm.value.mima) {
        context?.$toolUtil.message(`密码不能为空`, 'error');
        return false;
      }
      if (registerForm.value.mima != registerForm.value.mima2) {
        context?.$toolUtil.message('两次密码输入不一致', 'error');
        return false;
      }
      if (registerForm.value.lianxifangshi && !context?.$toolUtil.isMobile(registerForm.value.lianxifangshi)) {
        context?.$toolUtil.message(`联系方式应输入手机格式`, 'error');
        return false;
      }
      if (registerForm.value.touxiang != null) {
        registerForm.value.touxiang = registerForm.value.touxiang.replace(new RegExp(context?.$config.url, "g"), "");
      }
      context?.$http({
        url: url,
        method: 'post',
        data: registerForm.value
      }).then(res => {
        context?.$toolUtil.message('注册成功', 'success', obj => {
          context?.$router.push({
            path: "/login"
          });
        });
      });
    };
    //返回登录
    const close = () => {
      context?.$router.push({
        path: "/login"
      });
    };
    init();
    (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {});
    return (_ctx, _cache) => {
      const _component_el_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-input");
      const _component_uploads = (0,runtime_core_esm_bundler/* resolveComponent */.up)("uploads");
      const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-button");
      return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [_cache[12] || (_cache[12] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "logo"
      }, null, -1)), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.zw)((0,reactivity_esm_bundler/* unref */.SU)(projectName)) + "注册", 1), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [_cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "list_label"
      }, "学号：", -1)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
        class: "list_inp",
        modelValue: registerForm.value.xuehao,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => registerForm.value.xuehao = $event),
        placeholder: "请输入学号",
        type: "text"
      }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [_cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "list_label"
      }, "密码：", -1)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
        class: "list_inp",
        modelValue: registerForm.value.mima,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => registerForm.value.mima = $event),
        placeholder: "请输入密码",
        type: "password",
        "show-password": ""
      }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [_cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "list_label"
      }, "确认密码：", -1)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
        class: "list_inp",
        modelValue: registerForm.value.mima2,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => registerForm.value.mima2 = $event),
        type: "password",
        placeholder: "请输入确认密码",
        "show-password": ""
      }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [_cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "list_label"
      }, "学生姓名：", -1)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
        class: "list_inp",
        modelValue: registerForm.value.xueshengxingming,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => registerForm.value.xueshengxingming = $event),
        placeholder: "请输入学生姓名",
        type: "text"
      }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [_cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "list_label"
      }, "联系方式：", -1)), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_input, {
        class: "list_inp",
        modelValue: registerForm.value.lianxifangshi,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => registerForm.value.lianxifangshi = $event),
        placeholder: "请输入联系方式",
        type: "text"
      }, null, 8, ["modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_10, [_cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "list_label"
      }, "头像：", -1)), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_11, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_uploads, {
        action: "file/upload",
        tip: "请上传头像",
        fileUrls: registerForm.value.touxiang ? registerForm.value.touxiang : '',
        onChange: touxiangUploadSuccess
      }, null, 8, ["fileUrls"])])])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "back",
        onClick: close
      }, "已有账号，直接登录"), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, {
        class: "register",
        onClick: handleRegister
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => _cache[11] || (_cache[11] = [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("注册", -1)])),
        _: 1,
        __: [11]
      }), _cache[13] || (_cache[13] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "form-circle1"
      }, null, -1)), _cache[14] || (_cache[14] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "form-circle2"
      }, null, -1))]), _cache[15] || (_cache[15] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "circle1"
      }, null, -1)), _cache[16] || (_cache[16] = (0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
        class: "circle2"
      }, null, -1))]);
    };
  }
});
;// CONCATENATED MODULE: ./src/views/pages/xuesheng/register.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ../../../../../../../node_modules_front/3/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!../../../../../../../node_modules_front/3/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../node_modules_front/3/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../../../../../../node_modules_front/3/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../../../../../../node_modules_front/3/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/pages/xuesheng/register.vue?vue&type=style&index=0&id=4999eb6e&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/pages/xuesheng/register.vue?vue&type=style&index=0&id=4999eb6e&lang=scss

;// CONCATENATED MODULE: ./src/views/pages/xuesheng/register.vue



;

const __exports__ = registervue_type_script_setup_true_lang_js;

/* harmony default export */ var register = (__exports__);

/***/ })

}]);
//# sourceMappingURL=215.a72c2e2a.js.map