(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"410":function(t,a,e){"use strict";e.r(a);var i={"name":"TabBarPage","data":function data(){return{"current1":0,"current2":0,"current3":0,"current4":0,"current5":0,"tabList1":[{"title":"待办事项","text":8},{"title":"拍照"},{"title":"通讯录","dot":!0}],"tabList2":[{"title":"待办事项","iconType":"bullet-list","text":"new"},{"title":"拍照","iconType":"camera"},{"title":"文件夹","iconType":"folder","text":"100","max":99}],"tabList3":[{"title":"领取中心","image":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png","selectedImage":"https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png","text":"new"},{"title":"找折扣","image":"https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"},{"title":"领会员","image":"https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png","text":"100","max":99}]}},"methods":{"handleClick":function handleClick(t,a){this["current".concat(t)]=a}}},n=e(1),s=Object(n.a)(i,(function render(){var t=this,a=t._self._c;return a("taro-view",{"staticClass":"page"},[a("DocsHeader",{"attrs":{"title":"TabBar 标签栏"}}),t._v(" "),a("taro-view",{"staticClass":"doc-body"},[a("taro-view",{"staticClass":"panel"},[a("taro-view",{"staticClass":"panel__title"},[t._v("文本标签栏")]),t._v(" "),a("taro-view",{"staticClass":"panel__content no-padding"},[a("AtTabBar",{"attrs":{"tabList":t.tabList1,"onClick":t.handleClick.bind(this,1),"current":t.current1}})],1)],1),t._v(" "),a("taro-view",{"staticClass":"panel"},[a("taro-view",{"staticClass":"panel__title"},[t._v("图标文本标签栏")]),t._v(" "),a("taro-view",{"staticClass":"panel__content no-padding"},[a("AtTabBar",{"attrs":{"tabList":t.tabList2,"onClick":t.handleClick.bind(this,2),"current":t.current2}})],1)],1),t._v(" "),a("taro-view",{"staticClass":"panel"},[a("taro-view",{"staticClass":"panel__title"},[t._v("\n        自定义图标颜色、字体颜色、背景颜色\n      ")]),t._v(" "),a("taro-view",{"staticClass":"panel__content no-padding"},[a("AtTabBar",{"attrs":{"backgroundColor":"#FAFBFC","color":"#ea6bb8","selectedColor":"#e64340","tabList":t.tabList2,"onClick":t.handleClick.bind(this,3),"current":t.current3}})],1)],1),t._v(" "),a("taro-view",{"staticClass":"panel"},[a("taro-view",{"staticClass":"panel__title"},[t._v("图片icon")]),t._v(" "),a("taro-view",{"staticClass":"panel__content no-padding","staticStyle":{"padding-bottom":"24px"}},[a("AtTabBar",{"attrs":{"tabList":t.tabList3,"onClick":t.handleClick.bind(this,5),"current":t.current5}})],1)],1),t._v(" "),a("taro-view",{"staticClass":"panel"},[a("taro-view",{"staticClass":"panel__title"},[t._v("固定底部")]),t._v(" "),a("taro-view",{"staticClass":"panel__content no-padding","staticStyle":{"padding-bottom":"24px"}},[a("AtTabBar",{"attrs":{"fixed":"","tabList":t.tabList2,"onClick":t.handleClick.bind(this,4),"current":t.current4}})],1)],1)],1)],1)}),[],!1,null,null,null);a.default=s.exports}}]);