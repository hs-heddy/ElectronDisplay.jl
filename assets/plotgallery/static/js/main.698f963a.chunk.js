(this["webpackJsonpelectron-display-react"]=this["webpackJsonpelectron-display-react"]||[]).push([[0],{48:function(e,t,n){e.exports=n(65)},53:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(10),o=n.n(a),i=n(38),r=n.n(i),c=(n(53),n(2)),l=n(1),s=n(3),u=n(4),d=n(6),p=n(5),h=n(7),m=(n(54),function(e){var t=e.index,n=e.onClick,a=e.thumbnailURL,i=e.selected;return o.a.createElement("div",{className:"Thumbnail",onClick:n},o.a.createElement("div",{className:"column left"},t+1),o.a.createElement("div",{className:"column right"},a&&o.a.createElement("img",{src:a,className:i?"thumbnail-image-selected":"thumbnail-image",alt:""})))}),f=n(44),g=n(70),w=n(16),b=n(28),v=(n(61),function(e){var t=e.plot,n=e.onThumbnailUpdate,a=e.onInvalidPlot;if(t)switch(window.vega=w.b,t.type){case"vega":if(!t.thumbnail)try{var i=new w.b.View(w.b.parse(t.data)).initialize();"container"!==i.width()&&"container"!==i.height()||(i.width(1e3),i.height(500)),i.toImageURL("png").then(n)}catch(c){console.warn("Error generating thumbnail for a vega plot:",c)}return o.a.createElement(f.a,{spec:t.data,className:"vega-plot",onError:a});case"vega-lite":if(!t.thumbnail)try{var r=new w.b.View(w.b.parse(Object(b.compile)(t.data).spec)).initialize();"container"!==r.width()&&"container"!==r.height()||(r.width(1e3),r.height(500)),r.toImageURL("png").then(n)}catch(c){console.warn("Error generating thumbnail for a vega-lite plot:",c)}return o.a.createElement(g.a,{spec:t.data,className:"vegalite-plot",onError:a});case"image":return t.thumbnail||n(t.data.toString()),o.a.createElement("img",{src:t.data,alt:"Plot"});default:return o.a.createElement("p",null,"Unsupported plot type: ",t.type)}return null});n(64);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).addPlot=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n.setState((function(t){return k({},t,{plots:[].concat(Object(c.a)(t.plots),[e])})})),t||n.switchTo(n.state.plots.length-1)},n.switchTo=function(e){n.setState((function(t){return k({},t,{index:e})}))},n.switchToFunc=function(e){n.setState((function(t){var a=e(t.index,t);return a<0||a>n.state.plots.length-1?t:k({},t,{index:a})}))},n.updateThumbnail=function(e,t){n.setState((function(a){var o=n.state.plots.slice();return o[e].thumbnail=t,k({},a,{plots:o})}))},n.copyListener=function(e){e.clipboardData&&e.clipboardData.setData("text/html",'<img src="'+encodeURI(n.state.plots[n.state.index].thumbnail)+'" />'),e.preventDefault()},n.deleteCurrentPlot=function(){n.setState((function(e){var t=e.plots.slice(),n=e.index;return t.splice(e.index,1),t[e.index]||(n=0===t.length?0:t.length-1),k({},e,{index:n,plots:t})}))},n.deletePlot=function(e){n.setState((function(t){var n=t.plots.slice();return n.splice(e,1),n[t.index]||(e=0===n.length?0:n.length-1),k({},t,{index:e,plots:n})}))},n.keyDownListener=function(e){e.isComposing||229===e.keyCode||(40===e.keyCode||39===e.keyCode?n.switchToFunc((function(e){return e+1})):38===e.keyCode||37===e.keyCode?n.switchToFunc((function(e){return e-1})):36===e.keyCode?n.switchTo(0):35===e.keyCode?n.switchToFunc((function(e,t){return t.plots.length-1})):8!==e.keyCode&&46!==e.keyCode||n.deleteCurrentPlot())},n.render=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"left-panel"},n.state.plots.map((function(e,t){return o.a.createElement(m,{key:t,index:t,thumbnailURL:n.state.plots[t].thumbnail,onClick:function(){n.switchTo(t)},selected:t===n.state.index})}))),o.a.createElement("div",{className:"main-plot"},o.a.createElement(v,{plot:n.state.plots[n.state.index]?n.state.plots[n.state.index]:null,onThumbnailUpdate:function(e){return n.updateThumbnail(n.state.index,e)},onInvalidPlot:function(e){alert("We encountered the following error while displaying plot "+(n.state.index+1)+": "+e.toString()),n.deletePlot(n.state.index)}})))},n.state={plots:[],index:0},window.addPlot=n.addPlot,window.switchTo=n.switchTo,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("copy",this.copyListener),document.addEventListener("keydown",this.keyDownListener)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("copy",this.copyListener),document.removeEventListener("keydown",this.keyDownListener)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.698f963a.chunk.js.map