(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"366":function(t,i,e){var a=e(37),s=e(367);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={"insert":"head","singleton":!1};a(s,r);t.exports=s.locals||{}},"367":function(t,i,e){(i=e(38)(!1)).push([t.i,".example-item .control-cnt {\n  margin-top: 1rem;\n}\n.example-item .slider-list {\n  margin-top: 2rem;\n}\n.example-item .slider-list__item {\n  margin-bottom: 1rem;\n}\n.example-item .slider-list__item-header {\n  margin-bottom: 0.4rem;\n  color: #999;\n  font-size: 0.7rem;\n  text-align: center;\n}\n.example-item .slide-image {\n  width: 100%;\n  height: 9rem;\n}",""]),t.exports=i},"422":function(t,i,e){"use strict";e.r(i);e(366);var a={"name":"SwiperPage","data":function data(){return{"current":1,"duration":500,"interval":5e3,"isCircular":!1,"isAutoplay":!1,"hasIndicatorDots":!0,"imgUrls":["https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180","https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180","https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"]}},"methods":{"setAutoPlay":function setAutoPlay(t){this.isAutoplay=t.detail.value},"setCircular":function setCircular(t){this.isCircular=t.detail.value},"setIndicatorDots":function setIndicatorDots(t){this.hasIndicatorDots=t.detail.value},"setInterval":function setInterval(t){this.interval=t.detail.value},"setDuration":function setDuration(t){this.duration=t.detail.value}}},s=e(1),r=Object(s.a)(a,(function render(){var t=this,i=t._self._c;return i("taro-view",{"staticClass":"page"},[i("DocsHeader",{"attrs":{"title":"Swiper 滑块视图容器"}}),t._v(" "),i("taro-view",{"staticClass":"doc-body"},[i("taro-view",{"staticClass":"panel"},[i("taro-view",{"staticClass":"panel__title"},[t._v("基础用法")]),t._v(" "),i("taro-view",{"staticClass":"panel__content"},[i("taro-view",{"staticClass":"example-item"},[i("taro-swiper",{"attrs":{"indicatorColor":"#999","indicatorActiveColor":"#333","current":t.current,"duration":t.duration,"interval":t.interval,"circular":t.isCircular,"autoplay":t.isAutoplay,"indicatorDots":t.hasIndicatorDots,"previousMargin":"20"}},t._l(t.imgUrls,(function(t,e){return i("taro-swiper-item",{"key":e},[i("taro-image",{"staticClass":"slide-image","attrs":{"src":t}})],1)})),1),t._v(" "),i("taro-view",{"staticClass":"control-cnt"},[i("AtList",[i("AtListItem",{"attrs":{"title":"指示点","switchIsCheck":t.hasIndicatorDots,"isSwitch":"","onSwitchChange":t.setIndicatorDots}}),t._v(" "),i("AtListItem",{"attrs":{"title":"自动播放","switchIsCheck":t.isAutoplay,"isSwitch":"","onSwitchChange":t.setAutoPlay}}),t._v(" "),i("AtListItem",{"attrs":{"title":"循环播放","switchIsCheck":t.isCircular,"isSwitch":"","onSwitchChange":t.setCircular}})],1),t._v(" "),i("taro-view",{"staticClass":"slider-list"},[i("taro-view",{"staticClass":"slider-list__item"},[i("taro-view",{"staticClass":"slider-list__item-header"},[i("taro-text",[t._v("幻灯片切换时长(ms)")])],1),t._v(" "),i("taro-view",{"staticClass":"slider-list__item-body"},[i("taro-slider",{"attrs":{"activeColor":"#6190e8","showValue":"","step":1,"min":500,"max":2e3,"value":t.duration,"onChange":t.setDuration}})],1)],1),t._v(" "),i("taro-view",{"staticClass":"slider-list__item"},[i("taro-view",{"staticClass":"slider-list__item-header"},[i("taro-text",[t._v("自动播放间隔时长(ms)")])],1),t._v(" "),i("taro-view",{"staticClass":"slider-list__item-body"},[i("taro-slider",{"attrs":{"activeColor":"#6190e8","showValue":"","step":1,"min":2e3,"max":1e4,"value":t.interval,"onChange":t.setInterval}})],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);i.default=r.exports}}]);