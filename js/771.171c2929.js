"use strict";(self["webpackChunkcars_admin"]=self["webpackChunkcars_admin"]||[]).push([[771],{3185:function(t,e,a){a.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-cascader",{class:{"cascader-input":t.initValueFlag},attrs:{filterable:"",placeholder:t.initValue,options:t.cascader_options,props:t.cascader_props},on:{change:t.changeValue},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[],n=a(9322),l={name:"",data(){const t=this;return{address:[],addressData:{},value:[],cascader_options:[],cascader_props:{lazy:!0,lazyLoad(e,a){const r=e.level,o={},l={0:{type:"province"},1:{type:"city",code:"province"},2:{type:"area",code:"city"}};l[r].code&&(o[`${l[r].code}_code`]=e.value),o.type=l[r].type,(0,n.Df)(o).then((e=>{const o=e.data.data,n=l[r].type.toUpperCase();o.forEach((t=>{t.value=t[`${n}_CODE`],t.label=t[`${n}_NAME`],2===r&&(t.leaf=r>=2)})),t.addressData[l[r].type]=o,a(o)})),0!==e.level&&t.getAddress(e)}},initValue:"请选择省市区",initValueFlag:!1}},methods:{initDefault(t){t&&(this.initValueFlag=!0,this.initValue=t.split(",").join(" / "))},changeValue(t){this.$emit("update:cityAreaValue",t.join());const e=t[t.length-1],a=this.addressData.area.filter((t=>t.value==e))[0];this.address[2]=a.label,this.getAddress()},getAddress(t){if(t){const e=t.level-1;this.address[e]=t.label}this.mapLocation&&this.$emit("callback",{function:"setMapCenter",data:{address:this.address.join("")}})},clear(){console.log(11111),this.value=""}},components:{},props:{mapLocation:{type:Boolean,default:!1},cityAreaValue:{type:String,default:""}}},i=l,s=a(1001),c=(0,s.Z)(i,r,o,!1,null,"1a447781",null),u=c.exports},9771:function(t,e,a){a.d(e,{Z:function(){return C}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.table_config.search_form?a("FormSearch",{attrs:{formItme:t.table_config.form_item,formHandler:t.table_config.form_handler,formConfig:t.table_config.form_config},on:{callbackComponent:t.callbackComponent}}):t._e(),t._t("content"),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading_table,expression:"loading_table"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"加载中",data:t.table_data,border:""}},[t.table_config.checkbox?a("el-table-column",{attrs:{type:"selection",width:"35"}}):t._e(),t._l(this.table_config.thead,(function(e){return["function"===e.type?a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(r){return[a("span",{domProps:{innerHTML:t._s(e.callback&&e.callback(r.row,e.prop))}})]}}],null,!0)}):"slot"===e.type?a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(a){return[t._t(e.slotName,null,{data:a.row})]}}],null,!0)}):"switch"===e.type?a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(r){return[a("el-switch",{attrs:{"active-value":e.on||!0,"inactive-value":e.off||!1,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(t){e.handler&&e.handler(t,r.row)}},model:{value:r.row[e.prop],callback:function(a){t.$set(r.row,e.prop,a)},expression:"scope.row[item.prop]"}}),t._t(e.slotName,null,{data:r.row,type:e.prop})]}}],null,!0)}):"image"===e.type?a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row[e.prop],width:e.imgWidth||50,alt:""}})]}}],null,!0)}):"operation"===e.type?a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(r){return[e.buttonGroup&&e.buttonGroup.length>0?[t._l(e.buttonGroup,(function(e){var o;return["button"===e.event?a("el-button",{key:e.id,attrs:{type:e.type,size:"small"},on:{click:function(t){e.handler&&e.handler(r.row)}}},[t._v(" "+t._s(e.label)+" ")]):t._e(),"link"===e.event?a("router-link",{key:e.id,staticClass:"mr-10",attrs:{to:{name:e.name,query:(o={},o[e.key]=r.row[e.value||"id"],o)}}},[a("el-button",{attrs:{type:e.type,size:"small"}},[t._v(t._s(e.label))])],1):t._e()]}))]:t._e(),e.slotName?t._t(e.slotName,null,{data:r.row}):t._e(),e.default&&e.default.deleteButton?a("el-button",{attrs:{size:"small",loading:r.row[e.default.deleteKey||"id"]==t.rowId},on:{click:function(a){return t.delConfirm(r.row[e.default.deleteKey||"id"])}}},[t._v("删除")]):t._e()]}}],null,!0)}):a("el-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,width:e.width}})]}))],2),a("el-row",{staticClass:"padding-top-30"},[a("el-col",{attrs:{span:4}},[a("div",{staticStyle:{padding:"5px"}})]),a("el-col",{attrs:{span:20}},[t.table_config.pagination?a("el-pagination",{staticClass:"pull-right",attrs:{background:"","current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)],1)],2)},o=[],n=(a(7658),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",attrs:{inline:"",model:t.form_data}},[t._l(t.formItme,(function(e){return a("el-form-item",{key:e.prop,attrs:{label:e.label,prop:e.prop,rules:e.rules}},["Input"===e.type?a("el-input",{style:{width:e.width},attrs:{placeholder:e.placeholder,disabled:e.disabled},model:{value:t.form_data[e.prop],callback:function(a){t.$set(t.form_data,e.prop,"string"===typeof a?a.trim():a)},expression:"form_data[item.prop]"}}):t._e(),"Select"===e.type?a("el-select",{style:{width:e.width},attrs:{filterable:"",aaaa:e.options,placeholder:e.placeholder,disabled:e.disabled},model:{value:t.form_data[e.prop],callback:function(a){t.$set(t.form_data,e.prop,"string"===typeof a?a.trim():a)},expression:"form_data[item.prop]"}},t._l(e.options,(function(t){return a("el-option",{key:t.value||t[e.select_vlaue],attrs:{value:t.value||t[e.select_vlaue],label:t.label||t[e.select_label]}})})),1):t._e(),"City"===e.type?a("div",[a("CityArea",{ref:"city",refInFor:!0,attrs:{cityAreaValue:t.city_value},on:{"update:cityAreaValue":function(e){t.city_value=e},"update:city-area-value":function(e){t.city_value=e}}})],1):t._e(),"Keyword"===e.type?a("div",[a("KeyWord",{ref:"keyword",refInFor:!0,attrs:{options:e.options,value:t.keyword},on:{"update:value":function(e){t.keyword=e}}})],1):t._e(),"Slot"===e.type?t._t(e.slotName):t._e()],2)})),a("el-form-item",[a("el-button",{attrs:{type:"danger"},on:{click:t.search}},[t._v("搜索")]),t.formConfig.resetButton?a("el-button",{attrs:{type:"danger"},on:{click:t.reset}},[t._v("重置")]):t._e(),t._l(t.formHandler,(function(e){return["link"===e.element?a("el-button",{key:e.key,attrs:{type:e.type}},[a("router-link",{attrs:{to:e.router}},[a("span",{staticClass:"color-white"},[t._v(t._s(e.label))])])],1):t._e(),"button"===e.element?a("el-button",{key:e.key,attrs:{type:e.type},on:{click:function(t){e.handler&&e.handler()}}},[t._v(" "+t._s(e.label)+" ")]):t._e()]}))],2)],2)}),l=[],i=a(3185),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.inputEnter},model:{value:t.search_key,callback:function(e){t.search_key=e},expression:"search_key"}},t._l(t.search_options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-col",{attrs:{span:16}},[a("el-input",{on:{input:t.inputEnter},model:{value:t.search_value,callback:function(e){t.search_value=e},expression:"search_value"}})],1)],1)},c=[],u={name:"",components:{},data(){return{search_key:"",search_value:"",search_options:[],keyword_options:this.$store.state.config.keyword_options}},methods:{initOptions(){let t=[];this.options.forEach((e=>{const a=this.keyword_options.filter((t=>t.value==e));t=t.concat(a)})),this.search_options=t},inputEnter(){let t={};t.key=this.search_key,t.value=this.search_value,this.$emit("update:value",t)},clear(){this.search_key="",this.search_value=""}},props:{options:{type:Array,default:()=>[]}},watch:{options:{handler(t){this.initOptions()},immediate:!0}}},d=u,p=a(1001),f=(0,p.Z)(d,s,c,!1,null,"5c5004f9",null),h=f.exports,m={name:"Form",components:{CityArea:i.Z,KeyWord:h},props:{formItme:{type:Array,default:()=>[]},formHandler:{type:Array,default:()=>[]},formConfig:{type:Object,default:()=>{}}},data(){return{keyword:{},city_value:"",form_data:{}}},methods:{search(){const t={};for(let e in this.form_data)this.form_data[e]&&(t[e]=this.form_data[e]);this.$refs.keyword&&this.keyword.key&&this.keyword.value&&(t[this.keyword.key]=this.keyword.value),this.$refs.city&&this.city_value&&(t.area=this.city_value),this.$emit("callbackComponent",{function:"search",data:t})},reset(){this.$refs.form.resetFields(),this.$refs.city[0]&&this.$refs.city[0].clear(),this.$refs.keyword[0]&&this.$refs.keyword[0].clear()},initFormData(){this.formItme.forEach((t=>{"Select"===t.type&&this.selectOption(t)}))},initFormFelid(t){const e={};this.formItme.forEach((t=>{t.prop&&(e[t.prop]="")})),this.form_data=e},selectOption(t){const e=this.$store.state.config[t.options];e&&(t.options=e)}},watch:{formItme:{handler(t){console.log("newValuenewValuenewValuenewValuenewValue"),console.log(t),this.initFormData(),this.initFormFelid()},immediate:!0}}},_=m,y=(0,p.Z)(_,n,l,!1,null,"76eac57c",null),b=y.exports,g=a(9322),k=(a(4050),a(7805),{name:"TableComponent",components:{FormSearch:b},data(){return{loading_table:!1,table_data:[],table_config:{isRequest:!0,thead:[],checkbox:!0,url:"",pagination:!0,data:{},search_form:!0,form_item:[],form_handler:[],form_config:{resetButton:!1}},total:0,currentPage:1,rowId:"",form_data:{}}},beforeMount(){},methods:{callbackComponent(t){this[t.function](t.data)},search(t){const e=t;e.pageNumber=1,e.pageSize=10,this.requestData(e)},initConfig(){for(let t in this.config)Object.keys(this.table_config).includes(t)&&(this.table_config[t]=this.config[t]);this.table_config.isRequest&&this.loadData()},loadData(){let t={url:this.table_config.url,data:this.table_config.data};this.loading_table=!0,(0,g.Vj)(t).then((t=>{const e=t.data;e&&(this.table_data=e.data),this.$nextTick((()=>{})),this.total=e.total,this.loading_table=!1})).catch((t=>{this.loading_table=!1}))},requestData(t=""){t&&(this.table_config.data=t),this.loadData()},handleSizeChange(t){this.table_config.data.pageSize=t,this.loadData()},handleCurrentChange(t){this.table_config.data.pageNumber=t,this.loadData()},delConfirm(t){console.log(t),this.$confirm("确定删除此信息","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.rowId=t;let e={url:this.table_config.url+"Delete",data:{id:t}};(0,g.HG)(e).then((t=>{this.$message({type:"success",message:t.message}),this.rowId="",this.loadData()})).cacth((t=>{this.rowId=""}))})).catch((()=>{}))},edit(t,e){this.$router.push({name:e,query:{id:t}})}},props:{config:{type:Object,default:()=>({})},searchFormConfig:{type:Object,default:function(){return{}}}},watch:{config:{handler(t){this.initConfig()},immediate:!0},"$store.state.common.table_loadData_flag":{handler(t){this.loadData()}}}}),v=k,w=(0,p.Z)(v,r,o,!1,null,"6cbaaf92",null),C=w.exports},7805:function(t,e,a){a.d(e,{$u:function(){return s},VD:function(){return o},em:function(){return l},ge:function(){return i},z9:function(){return n}});var r=a(4471);function o(t={}){return r.Z.request({method:"post",url:"/cars/status/",data:t})}function n(t={}){return r.Z.request({method:"post",url:"/cars/carsDetailed/",data:t})}function l(t={}){return r.Z.request({method:"post",url:"/cars/carsInfoAdd/",data:t})}function i(t={}){return r.Z.request({method:"post",url:"/cars/carsInfoEdit/",data:t})}function s(t={}){return r.Z.request({method:"post",url:"/cars/lock/",data:t})}},9322:function(t,e,a){a.d(e,{HG:function(){return s},oG:function(){return c},Df:function(){return l},Re:function(){return u},Hp:function(){return d},Vj:function(){return i}});var r=a(4471);const o={parkingList:"/parking/list/",parkingListDelete:"/parking/delete/",brandList:"/brand/list/",brandListDelete:"/brand/delete/",carsList:"/cars/list/",carsListDelete:"/cars/delete/",carsAttrList:"/carsAttr/list/",leaseList:"/lease/list/",memberList:"/member/list/",memberListDelete:"/member/delete/",orderList:"/order/list/"};var n=o;function l(t={}){return r.Z.request({method:"post",url:"/cityPicker/",data:t})}function i(t={}){return r.Z.request({method:"post",url:n[t.url],data:t.data})}function s(t={}){return r.Z.request({method:"post",url:n[t.url],data:t.data})}function c(t={}){return r.Z.request({method:"post",url:"/common/getCarsBrand/",data:t})}function u(t={}){return r.Z.request({method:"post",url:"/common/getParking/",data:t})}function d(t={}){return r.Z.request({method:"post",url:"/uploadImgToken/",data:t})}},4050:function(t,e,a){a.d(e,{Ip:function(){return n},QR:function(){return o},Y1:function(){return i},wU:function(){return l}});var r=a(4471);function o(t={}){return r.Z.request({method:"post",url:"/parking/add/",data:t})}function n(t={}){return r.Z.request({method:"post",url:"/parking/detailed/",data:t})}function l(t={}){return r.Z.request({method:"post",url:"/parking/edit/",data:t})}function i(t={}){return r.Z.request({method:"post",url:"/parking/status/",data:t})}}}]);