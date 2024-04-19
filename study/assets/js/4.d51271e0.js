(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(t,s,e){t.exports={example:"example_2BsT0vSQ"}},115:function(t,s,e){"use strict";var a=e(106),n=e.n(a);e.d(s,"default",(function(){return n.a}))},119:function(t,s,e){"use strict";e.r(s);var a={mounted(){document.querySelector("."+this.$style.example).textContent="这是通过内联脚本中的内嵌 CSS 样式渲染的。"}},n=e(115),r=e(0);var _=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("由于 VuePress 应用程序在生成静态构建文件时，会通过 Node.js 进行服务器端渲染，所以任何 Vue 用法都必须符合 "),e("a",{attrs:{href:"https://ssr.vuejs.org/zh/guide/universal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("编写通用代码"),e("OutboundLink")],1),t._v(" 的要求。简而言之，确保只在 "),e("code",[t._v("beforeMounted")]),t._v(" 或 "),e("code",[t._v("mounted")]),t._v(" 钩子函数中访问 浏览器特定 API / DOM API。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),e("p",[t._v("请注意，这无法解决一些组件或库在**静态导入(import)**时就试图访问浏览器 API 的问题 - 为了使用在导入时使用浏览器环境的代码，你需要在合适的生命周期钩子函数中，动态导入(dynamically import)它们：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),e("pre",[e("code",[t._v(t._s(2))])]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("也可以运行指令：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("pre",[e("code",t._l(3,(function(s){return e("span",[t._v(t._s(s)+" ")])})),0)]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("编译后的组件没有任何私有数据，但是我们可以访问到 "),e("router-link",{attrs:{to:"./custom-themes.html#网站和网页元数据-site-and-page-metadata"}},[t._v("网站元数据")]),t._v("。例如：")],1),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),e("p",[e("code",[t._v(".vuepress/components")]),t._v(" 中的所有 "),e("code",[t._v("*.vue")]),t._v(" 文件都会自动注册为 "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-registration.html#Global-Registration",target:"_blank",rel:"noopener noreferrer"}},[t._v("全局(global)"),e("OutboundLink")],1),e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("异步(async)"),e("OutboundLink")],1),t._v(" 组件。例如：")]),t._v(" "),t._m(27),e("p",[t._v("在所有 markdown 文件中，你都可以直接使用这些组件（其名称(name)是从文件名推断出的）：")]),t._v(" "),t._m(28),e("demo-1"),t._v(" "),e("OtherComponent"),t._v(" "),e("Foo-Bar"),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("重要")]),t._v(" "),e("p",[t._v("确保自定义组件的名称，是由连字符(hyphen)拼接，或者遵循帕斯卡命名(PascalCase)。否则，它将被视为内联元素，然后被包裹在一个 "),e("code",[t._v("<p>")]),t._v(" 标签内，这将导致 hydration 无法匹配，这是因为 "),e("code",[t._v("<p>")]),t._v(" 中不允许放置块元素。（译注：查看 "),e("a",{attrs:{href:"https://ssr.vuejs.org/zh/guide/hydration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSR 客户端激活(client-side hydration)"),e("OutboundLink")],1),t._v("）")])]),t._v(" "),t._m(29),t._v(" "),e("p",[t._v("你可以在标题中使用 Vue 组件，但是请注意以下两种方式的不同：")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("输出的 HTML 由 "),e("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),e("OutboundLink")],1),t._v(" 完成。而解析后的标题由 VuePress 完成，用于"),e("router-link",{attrs:{to:"./../default-theme-config/#侧边栏"}},[t._v("侧边栏")]),t._v("以及文档的标题。")],1)]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),e("p",[t._v("接着，你就可以在 markdown 或者主题组件中使用如下代码：")]),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),t._m(38),t._v(" "),e("p",[t._v("对于没有内置 webpack 配置支持的预处理器，除了安装必要的依赖外，还需要 "),e("router-link",{attrs:{to:"./../config/#configurewebpack"}},[t._v("扩展内部 webpack 配置")]),t._v("。")],1)]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),e("p",{staticClass:"demo",class:t.$style.example}),t._v(" "),t._m(41),t._v(" "),e("h3",{attrs:{id:"outboundlink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outboundlink"}},[t._v("#")]),t._v(" OutboundLink "),e("Badge",{attrs:{text:"stable"}})],1),t._v(" "),e("p",[t._v("("),e("OutboundLink"),t._v(") 用于表示这是一个外部链接。在 VuePress 中，每个外部链接后面，都跟着一个这样的组件。")],1),t._v(" "),e("h3",{attrs:{id:"clientonly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clientonly"}},[t._v("#")]),t._v(" ClientOnly "),e("Badge",{attrs:{text:"stable"}})],1),t._v(" "),t._m(42),t._v(" "),e("h3",{attrs:{id:"content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" Content "),e("Badge",{attrs:{text:"beta",type:"warn"}})],1),t._v(" "),t._m(43),t._v(" "),e("p",[t._v("当前 "),e("code",[t._v(".md")]),t._v(" 文件的编译后内容，会在这里进行渲染。当你使用 "),e("router-link",{attrs:{to:"./../default-theme-config/#自定义页面的-class"}},[t._v("自定义布局")]),t._v(" 时，这将非常有用。")],1),t._v(" "),t._m(44),t._m(45),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./custom-themes.html#内容出口-content-outlet"}},[t._v("自定义主题 > 获取渲染内容")])],1)]),t._v(" "),e("h3",{attrs:{id:"badge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#badge"}},[t._v("#")]),t._v(" Badge "),e("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),e("Badge",{attrs:{text:"0.10.1+"}})],1),t._v(" "),t._m(46),t._v(" "),e("p",[t._v("这个组件可以用在标题文本的末尾，用来为某些 API 添加一些状态：")]),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"在-markdown-中使用-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-markdown-中使用-vue"}},[this._v("#")]),this._v(" 在 Markdown 中使用 Vue")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"浏览器-api-访问限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-api-访问限制"}},[this._v("#")]),this._v(" 浏览器 API 访问限制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你正在使用或展示一个对于 SSR 不友好的组件（比如说包含了自定义指令），则可以将它们包装在内置的 "),s("code",[this._v("<ClientOnly>")]),this._v(" 组件中：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模板-templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板-templating"}},[this._v("#")]),this._v(" 模板(templating)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插值"}},[this._v("#")]),this._v(" 插值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每个 markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 "),s("code",[this._v("vue-loader")]),this._v("。这意味着你可以在文本中使用 Vue 风格的插值表达式：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ 1 + 1 }}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[this._v("#")]),this._v(" 指令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"访问网站和页面数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问网站和页面数据"}},[this._v("#")]),this._v(" 访问网站和页面数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ $page }}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"转义-escaping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义-escaping"}},[this._v("#")]),this._v(" 转义(escaping)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("默认情况下，花括号代码块(fenced code blocks)会自动用 "),s("code",[this._v("v-pre")]),this._v(" 包装。如果要在内联代码片段或纯文本内显示原始插值或特定于 Vue 的语法，则需要把段落包裹在 "),s("code",[this._v("v-pre")]),this._v(" 自定义容器中：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("::: v-pre\n"),s("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[this._v("`{{ This will be displayed as-is }}`")]),this._v("\n:::\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("输出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[s("code",[this._v("{{ This will be displayed as-is }}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用组件（using-components）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用组件（using-components）"}},[this._v("#")]),this._v(" 使用组件（Using Components）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      ├─ OtherComponent.vue\n      └─ Foo\n         └─ Bar.vue\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo-Bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在标题中使用-vue-组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在标题中使用-vue-组件"}},[this._v("#")]),this._v(" 在标题中使用 Vue 组件")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Markdown")]),t._v(" "),e("th",[t._v("输出的 HTML")]),t._v(" "),e("th",[t._v("解析后的标题")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("pre",{pre:!0},[e("code",[t._v(" # text <Tag/> ")])])]),t._v(" "),e("td",[e("code",[t._v("<h1>text <Tag/></h1>")])]),t._v(" "),e("td",[e("code",[t._v("text")])])]),t._v(" "),e("tr",[e("td",[e("pre",{pre:!0},[e("code",[t._v(" # text `<Tag/>` ")])])]),t._v(" "),e("td",[e("code",[t._v("<h1>text <code>&lt;Tag/&gt;</code></h1>")])]),t._v(" "),e("td",[e("code",[t._v("text <Tag/>")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("被 "),s("code",[this._v("<code>")]),this._v(" 包装的 HTML 将按原样显示，只有未被包装的 HTML 才会被 Vue 解析。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用预处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用预处理器"}},[this._v("#")]),this._v(" 使用预处理器")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("VuePress 已经为如下预处理器内置了相关的 webpack 配置："),e("code",[t._v("sass")]),t._v(", "),e("code",[t._v("scss")]),t._v(", "),e("code",[t._v("less")]),t._v(", "),e("code",[t._v("stylus")]),t._v(" 和 "),e("code",[t._v("pug")]),t._v("。要使用它们，你只需要在项目中安装对应的依赖即可。例如，要使用 "),e("code",[t._v("sass")]),t._v("，直接在项目中安装：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("yarn")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("add")]),this._v(" -D sass-loader node-sass\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n.title\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 "),s("code",[this._v('<template lang="pug">')]),this._v(" 需要安装 "),s("code",[this._v("pug")]),this._v(" 和 "),s("code",[this._v("pug-plain-loader")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("yarn")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("add")]),this._v(" -D pug pug-plain-loader\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你是 Stylus 用户，那么不需要在项目中安装 "),s("code",[this._v("stylus")]),this._v(" 和 "),s("code",[this._v("stylus-loader")]),this._v("，因为 VuePress 内部已经使用了 Stylus。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"脚本和样式提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本和样式提升"}},[this._v("#")]),this._v(" 脚本和样式提升")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("有时候，你可能只需要当前页面应用一些 JavaScript 或 CSS。在这些情况下，你可以在 markdown 文件中，直接编写根级别的 "),e("code",[t._v("<script>")]),t._v(" 和 "),e("code",[t._v("<style>")]),t._v(" 标签，它们会从编译后的 HTML 中提取出来，并作为生成的 Vue 单文件组件的 "),e("code",[t._v("<script>")]),t._v(" 和 "),e("code",[t._v("<style>")]),t._v(" 标签。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内置组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置组件"}},[this._v("#")]),this._v(" 内置组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考 "),s("a",{attrs:{href:"#browser-api-access-restrictions"}},[this._v("浏览器 API 访问限制")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[e("strong",[t._v("Props")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("custom")]),t._v(" - boolean")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("用法")]),t._v("：")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("<")]),this._v("Content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("/>")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("也可以参考：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[e("strong",[t._v("Props")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("text")]),t._v(" - string")]),t._v(" "),e("li",[e("code",[t._v("type")]),t._v(" - string, 可选值："),e("code",[t._v('"tip"|"warn"|"error"')]),t._v(", 默认值是："),e("code",[t._v('"tip"')]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("vertical")]),t._v(" - string, 可选值："),e("code",[t._v('"top"|"middle"')]),t._v(", 默认值是："),e("code",[t._v('"top"')]),t._v(".")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("用法")]),t._v("：")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("###")]),this._v(' Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("也可以参考：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"#%E5%9C%A8%E6%A0%87%E9%A2%98%E4%B8%AD%E4%BD%BF%E7%94%A8-vue-%E7%BB%84%E4%BB%B6"}},[this._v("在标题中使用 Vue 组件")])])])}],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);s.default=_.exports}}]);