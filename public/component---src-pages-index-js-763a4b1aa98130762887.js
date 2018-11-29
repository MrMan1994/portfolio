(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);a(166);var i=a(8),l=a.n(i),n=a(52),s=a.n(n),r=a(0),o=a.n(r),c=a(145),u=a(4),m=a.n(u),p=function(e){return o.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},o.a.createElement("div",{className:"logo"},o.a.createElement("span",{className:"icon fa-diamond"})),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",null,"Ruben Mosblech Photography"))),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#",onClick:function(){e.onOpenArticle("intro")}},"Intro")),o.a.createElement("li",null,o.a.createElement("a",{href:"#",onClick:function(){e.onOpenArticle("work")}},"Work")),o.a.createElement("li",null,o.a.createElement("a",{href:"#",onClick:function(){e.onOpenArticle("about")}},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"#",onClick:function(){e.onOpenArticle("feedback")}},"Feedback")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SHJ6T5HEET968&source=url",rel:"noopener noreferrer",target:"_blank"},"Donate")))))};p.propTypes={onOpenArticle:m.a.func,timeout:m.a.bool};var d=p,h=a(168),b=a.n(h),f=a(149),E=a.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{position:"relative",display:"flex"}},o.a.createElement("img",{src:E.a,width:"90%",alt:""}),o.a.createElement("span",{style:{position:"absolute",display:"flex",width:"90%",alignItems:"center",justifyContent:"center",bottom:0}},"Cologne"))},t}(o.a.Component),A=a(174),v=a.n(A),y=a(175),C=a.n(y),N=a(176),k=a.n(N),w=a(177),x=[{original:a.n(w).a},{original:k.a},{original:E.a}],V=(k.a,function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var a=t.prototype;return a.renderRightNav=function(e,t){return o.a.createElement("i",{className:"fa fa-angle-right fa-3x rightArrow",disabled:t,onClick:e})},a.renderLeftNav=function(e,t){return o.a.createElement("i",{className:"fa fa-angle-left fa-3x leftArrow",disabled:t,onClick:e})},a.renderFullscreenButton=function(e,t){return o.a.createElement("i",{className:"fa fa-expand fa-2x fullScreen",onClick:e,style:{cursor:"pointer"}})},a.render=function(){var e=this,t=o.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return o.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},o.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Intro"),o.a.createElement("span",{className:"image main"},o.a.createElement("img",{src:v.a,alt:""})),o.a.createElement("p",null,"Aliquam luctus tellus ac arcu volutpat efficitur. Maecenas sed posuere nisl, tempor pharetra eros. Vivamus facilisis odio nunc, eget egestas ipsum pellentesque id. Cras in rutrum ante. Fusce sit amet tellus vel ante interdum molestie. Nam dignissim dolor sapien, ut ullamcorper tellus commodo id. Nulla malesuada aliquet imperdiet. Donec volutpat risus ut tellus suscipit, vel feugiat augue elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent porta arcu tortor, nec interdum nibh congue quis. Nullam mattis elit et orci rhoncus, nec venenatis magna commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit"),t),o.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Work"),o.a.createElement("div",{style:this.props.isAlbumVisible?{display:"block",marginBottom:"1%"}:{display:"none"}},o.a.createElement("span",{className:"fa fa-long-arrow-left fa-1x",onClick:function(){e.props.onCloseAlbum()},style:{cursor:"pointer"}}),o.a.createElement("span",{onClick:function(){e.props.onCloseAlbum()},style:{cursor:"pointer",marginLeft:"1%"}},"back")),o.a.createElement("div",{className:"gallery_overview",style:this.props.isAlbumVisible?{display:"none"}:{display:"inline-flex"}},o.a.createElement(g,null),o.a.createElement(g,null),o.a.createElement(g,null),o.a.createElement("br",null),o.a.createElement(g,null)),o.a.createElement("div",{id:"gallery_cologne",style:this.props.isAlbumVisible?{display:"block"}:{display:"none"}},o.a.createElement(b.a,{renderFullscreenButton:this.renderFullscreenButton,renderLeftNav:this.renderLeftNav,renderRightNav:this.renderRightNav,showNav:!0,showIndex:!0,showPlayButton:!1,preloadNextImage:!0,disableSwipe:!1,items:x})),t),o.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"About"),o.a.createElement("span",{className:""},o.a.createElement("img",{className:"image left",src:C.a,alt:""})),o.a.createElement("p",null,"'","99 in Cologne, Germany ",o.a.createElement("br",null)," I","'","m a young photographer and IT enthusiast",o.a.createElement("br",null),"Aliquam luctus tellus ac arcu volutpat efficitur. Maecenas sed posuere nisl, tempor pharetra eros. Vivamus facilisis odio nunc, eget egestas ipsum pellentesque id. Cras in rutrum ante. Fusce sit amet tellus vel ante interdum molestie. Nam dignissim dolor sapien, ut ullamcorper tellus commodo id. Nulla malesuada aliquet imperdiet. Donec volutpat risus ut tellus suscipit, vel feugiat augue elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent porta arcu tortor, nec interdum nibh congue quis. Nullam mattis elit et orci rhoncus, nec venenatis magna commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit"),t),o.a.createElement("article",{id:"feedback",className:("feedback"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},o.a.createElement("h2",{className:"major"},"Feedback"),o.a.createElement("form",{method:"post",action:"#"},o.a.createElement("div",{className:"field half first"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",id:"name"})),o.a.createElement("div",{className:"field half"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"text",name:"email",id:"email"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{name:"message",id:"message",rows:"4"})),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),o.a.createElement("li",null,o.a.createElement("input",{type:"reset",value:"Reset"})))),t))},t}(o.a.Component));V.propTypes={route:m.a.object,article:m.a.string,album:m.a.string,articleTimeout:m.a.bool,onCloseArticle:m.a.func,onCloseAlbum:m.a.func,timeout:m.a.bool,setWrapperRef:m.a.func.isRequired,isAlbumVisible:m.a.bool};var O=V,T=function(e){return o.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},o.a.createElement("p",{className:"copyright"},"© ",o.a.createElement("i",null,"2018 - Ruben Mosblech"),o.a.createElement("br",null),o.a.createElement("a",{href:"https://stock.adobe.com/de/contributor/208227324/Ruben",rel:"noopener noreferrer",target:"_blank"},"My Adobe Stock Account")))};T.propTypes={timeout:m.a.bool};var R=T,S=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,isAlbumVisible:!1,timeout:!1,articleTimeout:!1,article:"",album:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(s()(s()(a))),a.handleOpenAlbum=a.handleOpenAlbum.bind(s()(s()(a))),a.handleCloseArticle=a.handleCloseArticle.bind(s()(s()(a))),a.handleCloseAlbum=a.handleCloseAlbum.bind(s()(s()(a))),a.setWrapperRef=a.setWrapperRef.bind(s()(s()(a))),a.handleClickOutside=a.handleClickOutside.bind(s()(s()(a))),a.handleOpenContextMenu=a.handleOpenContextMenu.bind(s()(s()(a))),a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleOpenAlbum=function(e){this.setState({isAlbumVisible:!this.state.isAlbumVisible,album:e})},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""}),e.state.isAlbumVisible&&e.setState({isAlbumVisible:!e.state.isAlbumVisible,album:""})},350)},a.handleCloseAlbum=function(){this.setState({isAlbumVisible:!this.state.isAlbumVisible,album:""})},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&(this.handleCloseArticle(),this.state.isAlbumVisible&&this.handleCloseAlbum())},a.handleOpenContextMenu=function(e){},a.render=function(){return o.a.createElement(c.a,{location:this.props.location},o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":""),onContextMenu:this.handleOpenContextMenu},o.a.createElement("div",{id:"wrapper"},o.a.createElement(d,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),o.a.createElement(O,{isArticleVisible:this.state.isArticleVisible,isAlbumVisible:this.state.isAlbumVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,album:this.state.album,onCloseArticle:this.handleCloseArticle,onOpenAlbum:this.handleOpenAlbum,onCloseAlbum:this.handleCloseAlbum,setWrapperRef:this.setWrapperRef}),o.a.createElement(R,{timeout:this.state.timeout})),o.a.createElement("div",{id:"bg"})))},t}(o.a.Component);t.default=S},149:function(e,t,a){e.exports=a.p+"static/rheinauhafen-f7b2e400ed536e1263b21716951f0eaa.jpg"},174:function(e,t,a){e.exports=a.p+"static/pic01-55e1797fd15a7113b2be5a8fc1363d93.jpg"},175:function(e,t,a){e.exports=a.p+"static/me_6x9-20356f9a2f0bc9e2680f3c21404fe019.jpg"},176:function(e,t,a){e.exports=a.p+"static/cologne_cathedral_green-f91594d9b85c8e7e0916da6589b979b9.jpg"},177:function(e,t,a){e.exports=a.p+"static/cologne_cathedral_bw-f07719956a043ec3ffe7cbd83342e183.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-763a4b1aa98130762887.js.map