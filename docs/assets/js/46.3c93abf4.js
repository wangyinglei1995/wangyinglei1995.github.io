(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{163:function(t,a,_){"use strict";_.r(a);var v=_(0),r=Object(v.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"小程序路由"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小程序路由"}},[t._v("#")]),t._v(" 小程序路由")]),t._v(" "),_("h5",{attrs:{id:"_1、路由管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、路由管理"}},[t._v("#")]),t._v(" 1、路由管理")]),t._v(" "),_("ul",[_("li",[t._v("在小程序中所有页面的路由全部由框架进行管理，框架以栈的形式维护了当前的所有页面。")])]),t._v(" "),_("h5",{attrs:{id:"_2、栈（计算机术语）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、栈（计算机术语）"}},[t._v("#")]),t._v(" 2、栈（计算机术语）")]),t._v(" "),_("ul",[_("li",[t._v("栈（stack）又名堆栈，它是一种运算受限的线性表。其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。")]),t._v(" "),_("li",[t._v("可进可出（进是添加，处删除），也就意味这小程序中可以跳转新页面，可以后退，但是不能前进")])]),t._v(" "),_("h5",{attrs:{id:"_3、浏览器如何管理浏览记录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、浏览器如何管理浏览记录"}},[t._v("#")]),t._v(" 3、浏览器如何管理浏览记录")]),t._v(" "),_("ul",[_("li",[t._v("浏览器以浏览新网页的形式将所有浏览都保留在历史记录，任何浏览都会保存，后退不会删除浏览器记录，也就意味着可以前进")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("场景\nA页面    A页面进栈\nA页面 -> B页面   B页面进栈\nB页面 ->  C页面  C页面进栈\nC页面后退    C页面出栈\nB页面 ->  D页面   D页面进栈\n[A,B,D]\n\nD页面打开  A页面   在一个A页面进栈\n")])])]),_("h5",{attrs:{id:"_4、getcurrentpages"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、getcurrentpages"}},[t._v("#")]),t._v(" 4、getCurrentPages()")]),t._v(" "),_("ul",[_("li",[t._v("该函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。在小程序中栈最多只能维护10个数据")])]),t._v(" "),_("h5",{attrs:{id:"_5、栈的表现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、栈的表现"}},[t._v("#")]),t._v(" 5、栈的表现")]),t._v(" "),_("ul",[_("li",[t._v("打开新页面 -> 进栈")]),t._v(" "),_("li",[t._v("后退 -> 当前页面出栈")]),t._v(" "),_("li",[t._v("重定向  -> 当期页面出栈新页面入栈")]),t._v(" "),_("li",[t._v("重加载  -> 页面全部出栈保留当期页面栈")]),t._v(" "),_("li",[t._v("Tab 切换 ->\t页面全部出栈，只留下新的 Tab 页面")])]),t._v(" "),_("h5",{attrs:{id:"_5、路由跳转方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、路由跳转方式"}},[t._v("#")]),t._v(" 5、路由跳转方式")]),t._v(" "),_("ul",[_("li",[t._v("在小程序中路由跳转方式有两种（组件跳转，api跳转）")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("跳转形式")]),t._v(" "),_("th",[t._v("Api")]),t._v(" "),_("th",[t._v("组件")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("打开新页面")]),t._v(" "),_("td",[t._v("wx.navigateTo(‘路径’)")]),t._v(" "),_("td",[t._v('<\\navigator open-type="navigateTo"/>')])]),t._v(" "),_("tr",[_("td",[t._v("页面重定向")]),t._v(" "),_("td",[t._v("wx.redirectTo")]),t._v(" "),_("td",[t._v('<\\navigator open-type="redirectTo"/>')])]),t._v(" "),_("tr",[_("td",[t._v("页面返回")]),t._v(" "),_("td",[t._v("wx.navigateBack")]),t._v(" "),_("td",[t._v('<\\navigator open-type="navigateBack">')])]),t._v(" "),_("tr",[_("td",[t._v("Tab 切换")]),t._v(" "),_("td",[t._v("wx.switchTab")]),t._v(" "),_("td",[t._v('<\\navigator open-type="switchTab"/>')])]),t._v(" "),_("tr",[_("td",[t._v("重启动")]),t._v(" "),_("td",[t._v("wx.reLaunch")]),t._v(" "),_("td",[t._v('<\\navigator open-type="reLaunch"/>')])])])]),t._v(" "),_("h4",{attrs:{id:"注意"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意:")]),t._v(" "),_("ul",[_("li",[t._v("navigateTo, redirectTo 只能打开非 tabBar 页面。")]),t._v(" "),_("li",[t._v("switchTab 只能打开 tabBar 页面。")]),t._v(" "),_("li",[t._v("reLaunch 可以打开任意页面。")]),t._v(" "),_("li",[t._v("页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。")]),t._v(" "),_("li",[t._v("调用页面路由带的参数可以在目标页面的onLoad中获取")]),t._v(" "),_("li",[t._v("页面只有在出栈后才会被卸载也就是执行onUnload, tab页面只有在程序卸载的时候才会卸载")])])])}],!1,null,null,null);a.default=r.exports}}]);