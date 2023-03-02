"use strict";(self["webpackChunkcars_admin"]=self["webpackChunkcars_admin"]||[]).push([[211],{6532:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("TabalData",{ref:"table",attrs:{config:e.table_config}}),a("LeaseType",{attrs:{flagVisible:e.dialog_show,data:e.current_cars_lease_data},on:{"update:flagVisible":function(t){e.dialog_show=t},"update:flag-visible":function(t){e.dialog_show=t},callbackComponent:e.callbackComponent}})],1)},r=[],o=a(9771),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"cars-dialog-center",attrs:{title:"新增租车类型",width:"30%",visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close,opened:e.opened}},[a("VueForm",{ref:"formVue",attrs:{formData:e.form_data,formItme:e.form_item,formHandler:e.form_handler}})],1)},n=[],l=a(9466),c=a(4224),u={name:"",components:{VueForm:l.Z},props:{flagVisible:{type:Boolean,default:!1},data:{type:Object,defult:()=>{}}},data(){return{dialogVisible:!1,form_data:{carsLeaseTypeName:"",carsLeaseStatus:"",carsLeaseDesc:""},form_item:[{type:"Input",label:"租车类型",prop:"carsLeaseTypeName",required:!0},{type:"Disabled",label:"禁/启状态",prop:"carsLeaseStatus",required:!0},{type:"Textarea",label:"描述",prop:"carsLeaseDesc"}],form_handler:[{label:"确定",key:"submit",type:"danger",handler:()=>this.submit()}],radio_disabled:this.$store.state.config.radio_disabled,logo_current:"",logo:[]}},methods:{opened(){},submit(){this.$refs.formVue.$refs.form.validate((e=>{if(!e)return console.log("error submit!!"),!1;this.form_data.carsLeaseTypeId?this.edit():this.add()}))},add(){(0,c.GY)({...this.form_data}).then((e=>{this.$message({message:e.message,type:"success"}),this.$store.commit("common/SET_TABL_DATA_FLAG"),this.reset()}))},edit(){(0,c.WO)({...this.form_data}).then((e=>{this.$message({message:e.message,type:"success"}),this.$store.commit("common/SET_TABL_DATA_FLAG"),this.close()}))},reset(e){this.$refs.formVue.resetForm()},close(){this.reset("form"),this.dialogVisible=!1,delete this.form_data.carsLeaseTypeId,this.$emit("update:flagVisible",!1)}},watch:{flagVisible:{handler(e,t){this.dialogVisible=e}},data:{handler(e){console.log(2222),this.form_data=e}}}},d=u,f=a(1001),m=(0,f.Z)(d,i,n,!1,null,"5f5aecfe",null),p=m.exports,h=(a(7662),{name:"Cars",data(){return{table_config:{checkbox:!1,pagination:!1,thead:[{label:"租车类型",prop:"carsLeaseTypeName"},{label:"禁启状态",prop:"carsLeaseStatus",type:"switch",handler:(e,t)=>this.leasrStatus(e,t)},{label:"车辆列表",prop:"carsList",width:500},{label:"操作",type:"operation",width:500,buttonGroup:[{label:"编辑",type:"danger",event:"button",handler:e=>this.edit(e)}]}],url:"leaseList",data:{pageSize:10,pageNumber:1},form_item:[{label:"关键字",type:"Keyword",options:["carsLeaseTypeName","carsNumber"]}],form_handler:[{label:"新增",prop:"add",type:"success",element:"button",handler:()=>this.leaseTypeAddDialog()}],form_config:{resetButton:!0}},switch_disabled:"",cars_list_basis_item:[],cars_list_basis_type_id:"",dialog_show:!1,current_cars_lease_data:{}}},components:{TabalData:o.Z,LeaseType:p},methods:{callbackComponent(e){e.function&&this[e.function](e.data)},loadData(){this.$refs.table.requestData()},leasrStatus(e,t){(0,c.De)({id:t.carsLeaseTypeId,status:e}).then((e=>{this.$message({message:e.message,type:"success"})})).catch((a=>{t.carsLeaseStatus=!e}))},edit(e){const t=Object.assign({},e);this.current_cars_lease_data=t,this.dialog_show=!0},leaseTypeAddDialog(){this.dialog_show=!0}},beforeMount(){},mounted(){}}),b=h,_=(0,f.Z)(b,s,r,!1,null,"655bc9d2",null),g=_.exports},4224:function(e,t,a){a.d(t,{De:function(){return i},GY:function(){return o},WO:function(){return n},as:function(){return r}});var s=a(4471);function r(e={}){return s.Z.request({method:"post",url:"/lease/carsLeaseList/",data:e})}function o(e={}){return s.Z.request({method:"post",url:"/lease/add/",data:e})}function i(e={}){return s.Z.request({method:"post",url:"/lease/status/",data:e})}function n(e={}){return s.Z.request({method:"post",url:"/lease/edit/",data:e})}},7662:function(e,t,a){a.d(t,{Fz:function(){return o},Lk:function(){return r},Mk:function(){return n},tl:function(){return i}});var s=a(403);function r(e){let t=e,a="";if(t){let e=t.split(",");a+=e[0],e[1]&&(a+=`<br/>${e[1]}`)}return a}function o(e){const t=s.Z.state.config.parking_type_json[e];if(t)return t.label}function i(e){const t=s.Z.state.config.year_check,a=t.filter((t=>t.value===e));return a.length>0?a[0].label:""}function n(e){const t=s.Z.state.config.energyType,a=t.filter((t=>t.value===parseInt(e)));return a.length>0?a[0].label:""}}}]);