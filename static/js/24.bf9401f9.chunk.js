(this.webpackJsonpmartalaa=this.webpackJsonpmartalaa||[]).push([[24],{105:function(e,t,n){"use strict";var a=n(4),i=n(8),s=n(44),r=n.n(s),o=n(0),c=n.n(o),l=n(74),d=n(60),m=n(45),u=n(68),p=n(73),h=n(64),f=n(61),b=n(62),g=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],y=Object(h.a)("h4");y.displayName="DivStyledAsH4";var v=Object(f.a)("alert-heading",{Component:y}),x=Object(f.a)("alert-link",{Component:b.a}),j={show:!0,transition:u.a,closeLabel:"Close alert"},w=c.a.forwardRef((function(e,t){var n=Object(l.a)(e,{show:"onClose"}),s=n.bsPrefix,o=n.show,h=n.closeLabel,f=n.className,b=n.children,y=n.variant,v=n.onClose,x=n.dismissible,j=n.transition,w=Object(i.a)(n,g),k=Object(m.a)(s,"alert"),O=Object(d.a)((function(e){v&&v(!1,e)})),I=!0===j?u.a:j,N=c.a.createElement("div",Object(a.a)({role:"alert"},I?void 0:w,{ref:t,className:r()(f,k,y&&k+"-"+y,x&&k+"-dismissible")}),x&&c.a.createElement(p.a,{onClick:O,label:h}),b);return I?c.a.createElement(I,Object(a.a)({unmountOnExit:!0},w,{ref:void 0,in:o}),N):o?N:null}));w.displayName="Alert",w.defaultProps=j,w.Link=x,w.Heading=v,t.a=w},374:function(e,t,n){"use strict";n.r(t);var a=n(40),i=n(41),s=n(43),r=n(42),o=n(0),c=n(47),l=n.n(c),d=n(55),m=n(56),u=n(50),p=n(46),h=n(10),f=n(48),b=n(98),g=n.n(b),y=n(86),v=n(65),x=n(49),j=n(1),w=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"section section-padding",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"section-title text-center",children:[Object(j.jsx)("p",{className:"subtitle",children:"Blog"}),Object(j.jsx)("h4",{className:"title",children:"News Feed"})]}),Object(j.jsx)("div",{className:"row",children:Object(v.d)().map((function(e,t){return Object(j.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(j.jsxs)("article",{className:"sigma_post",children:[Object(j.jsx)("div",{className:"sigma_post-thumb",children:Object(j.jsx)(h.b,{to:"/blog-details/"+e.id,children:Object(j.jsx)("img",{src:"/rccgncc/"+e.image[0],alt:e.title})})}),Object(j.jsxs)("div",{className:"sigma_post-body",children:[Object(j.jsxs)("div",{className:"sigma_post-meta",children:[Object(j.jsxs)("div",{className:"me-3",children:[Object(j.jsx)("i",{className:"far fa-cross"}),Object(x.e)(e.tags).slice(0,2).map((function(e,t){return Object(j.jsx)(h.b,{to:"/blog/tag/"+e.id,className:"sigma_post-category",children:e.title},t)}))]}),Object(j.jsxs)(h.b,{to:"/blog-details/"+e.id,className:"sigma_post-date",children:[" ",Object(j.jsx)("i",{className:"far fa-calendar"}),e.postdate]})]}),Object(j.jsxs)("h5",{children:[" ",Object(j.jsx)(h.b,{to:"/blog-details/"+e.id,children:e.title})," "]}),Object(x.b)(e.author).map((function(e,t){return Object(j.jsxs)("div",{className:"sigma_post-single-author",children:[Object(j.jsx)("img",{src:"/rccgncc/"+e.image,alt:e.name}),Object(j.jsxs)("div",{className:"sigma_post-single-author-content",children:["By ",Object(j.jsx)("p",{children:e.name})]})]},t)}))]})]})},t)}))})]})})}}]),n}(o.Component),k=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={data:f,activePage:1,itemPerpage:8,visible:!1},i.socialTrigger=i.socialTrigger.bind(Object(p.a)(i)),i}return Object(i.a)(n,[{key:"handlePageChange",value:function(e){this.setState({activePage:e})}},{key:"socialTrigger",value:function(e){this.setState({visible:e}),this.state.visible===e&&this.setState({visible:null})}},{key:"render",value:function(){var e=this,t=this.state.data.slice((this.state.activePage-1)*this.state.itemPerpage,this.state.activePage*this.state.itemPerpage).map((function(t,n){return Object(j.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(j.jsxs)("div",{className:"sigma_volunteers volunteers-4",children:[Object(j.jsxs)("div",{className:"sigma_volunteers-thumb",children:[Object(j.jsx)("img",{src:"/rccgncc/"+t.image,alt:t.name}),Object(j.jsxs)("ul",{className:e.state.visible===t?"sigma_sm visible":"sigma_sm",children:[Object(j.jsx)("li",{children:Object(j.jsx)(h.b,{to:"#",className:"trigger-volunteers-socials",onClick:function(n){return e.socialTrigger(t)},children:Object(j.jsx)("i",{className:"fal fa-plus"})})}),t.social.map((function(e,n){return Object(j.jsx)("li",{children:Object(j.jsx)("a",{rel:"external",href:e.text+"/"+t.name,children:Object(j.jsx)("i",{className:e.icon})})},n)}))]})]}),Object(j.jsx)("div",{className:"sigma_volunteers-body",children:Object(j.jsxs)("div",{className:"sigma_volunteers-info",children:[Object(j.jsx)("p",{children:t.post}),Object(j.jsx)("h5",{children:Object(j.jsx)(h.b,{to:"/volunteer-details/"+t.id,children:t.name})})]})})]})},n)}));return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)("div",{className:"section section-padding",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row",children:t}),Object(j.jsx)(g.a,{activePage:this.state.activePage,itemsCountPerPage:this.state.itemPerpage,totalItemsCount:this.state.data.length,pageRangeDisplayed:this.state.data.length,onChange:this.handlePageChange.bind(this),innerClass:"pagination mb-0",activeClass:"active",itemClass:"page-item",linkClass:"page-link"})]})}),Object(j.jsx)(y.a,{}),Object(j.jsx)(w,{})]})}}]),n}(o.Component),O="Volunteers",I=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsxs)(l.a,{children:[Object(j.jsxs)("title",{children:["Martalaa - Mega Church & Shop - React Template | ",O]}),Object(j.jsx)("meta",{name:"description",content:"#"})]}),Object(j.jsx)(d.a,{}),Object(j.jsx)(m.a,{breadcrumb:{pagename:O}}),Object(j.jsx)(k,{}),Object(j.jsx)("footer",{className:"sigma_footer footer-2 sigma_footer-dark",children:Object(j.jsx)(u.a,{})})]})}}]),n}(o.Component);t.default=I},48:function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/img/volunteers/adeboye.png","name":"Pastor E.A Adeboye","post":"General Overseer","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]},{"id":2,"image":"assets/img/volunteers/doherty.png","name":"Pastor Doherty","post":"Provincial Pastor","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]},{"id":3,"image":"assets/img/volunteers/enouch.png","name":"Pastor Enoch","post":"Area Pastor","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]},{"id":4,"image":"assets/img/volunteers/femi.png","name":"Pastor Femi","post":"Parish Pastor","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]},{"id":5,"image":"assets/img/volunteers/5.jpg","name":"Joseph Anthony","post":"Church Member","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]},{"id":6,"image":"assets/img/volunteers/6.jpg","name":"Rosalina William","post":"Church Member","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]},{"id":7,"image":"assets/img/volunteers/7.jpg","name":"Mark Jacob","post":"Church Member","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]},{"id":8,"image":"assets/img/volunteers/femi.png","name":"Pastor Femi","post":"Parish Pastor","contactinfo":[{"icon":"fas fa-phone","title":"Phone","text":"(123) 456-7890 8, +987 868 6578 648"},{"icon":"fas fa-envelope","title":"Email","text":"info@example.com, example@example.com"},{"icon":"fas fa-map-marker-alt","title":"Address Info","text":"24 Fifth st., New York, US"}],"social":[{"icon":"fab fa-facebook-f","title":"Facebook","text":"www.facebook.com"},{"icon":"fab fa-twitter","title":"Twitter","text":"www.twitter.com"},{"icon":"fab fa-instagram","title":"Instagram","text":"www.instagram.com"}],"htmltext":"<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,</p>","skills":[{"title":"Marketing Strategy","value":84},{"title":"Digital Marketing","value":70},{"title":"Web Design","value":85},{"title":"IT Consulting","value":92}]}]')},49:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return c}));var a=n(48),i=n(52),s=n(51),r=n(1);function o(e){return a.filter((function(t){return e.includes(t.id)}))}function c(e){return a.filter((function(t){return e.includes(t.id)}))}function l(e){return i.filter((function(t){return e.includes(t.id)}))}function d(e){return s.filter((function(t){return e.includes(t.id)}))}function m(e){for(var t=[],n=0;n<5;n++)t.push(Object(r.jsx)("i",{className:"far fa-star"},n));if(e&&e>0)for(var a=0;a<=e-1;a++)t[a]=Object(r.jsx)("i",{className:"far fa-star active"},a);return t}var u=window.location.href;function p(e){return[{title:"facebook",iconClass:"fab fa-facebook-f",link:"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(u)},{title:"twitter",iconClass:"fab fa-twitter",link:"http://twitter.com/intent/tweet?text="+encodeURIComponent(e)+"&"+encodeURIComponent(u)},{title:"linkedin",iconClass:"fab fa-linkedin-in",link:"https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(u)+"&title="+encodeURIComponent(e)},{title:"pinterest",iconClass:"fab fa-pinterest-p",link:"http://pinterest.com/pin/create/button/?url="+encodeURIComponent(u)}]}},52:function(e){e.exports=JSON.parse('[{"id":1,"title":"Isabella"},{"id":2,"title":"Samantha"},{"id":3,"title":"Emily"},{"id":4,"title":"June"},{"id":5,"title":"Grace"},{"id":6,"title":"Madison"},{"id":7,"title":"Heather"},{"id":8,"title":"Micheal"}]')},59:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];e.apply(this,a),t.apply(this,a)}}),null)}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0);var i=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function s(e){var t=i(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(4),i=n(8),s=n(44),r=n.n(s),o=/-(.)/g;var c=n(0),l=n.n(c),d=n(45),m=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function p(e,t){var n=void 0===t?{}:t,s=n.displayName,o=void 0===s?u(e):s,c=n.Component,p=n.defaultProps,h=l.a.forwardRef((function(t,n){var s=t.className,o=t.bsPrefix,u=t.as,p=void 0===u?c||"div":u,h=Object(i.a)(t,m),f=Object(d.a)(o,e);return l.a.createElement(p,Object(a.a)({ref:n,className:r()(s,f)},h))}));return h.defaultProps=p,h.displayName=o,h}},62:function(e,t,n){"use strict";var a=n(4),i=n(8),s=n(0),r=n.n(s),o=n(59),c=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var d=r.a.forwardRef((function(e,t){var n=e.as,s=void 0===n?"a":n,d=e.disabled,m=e.onKeyDown,u=Object(i.a)(e,c),p=function(e){var t=u.href,n=u.onClick;(d||l(t))&&e.preventDefault(),d?e.stopPropagation():n&&n(e)};return l(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),d&&(u.tabIndex=-1,u["aria-disabled"]=!0),r.a.createElement(s,Object(a.a)({ref:t},u,{onClick:p,onKeyDown:Object(o.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),m)}))}));d.displayName="SafeAnchor",t.a=d},64:function(e,t,n){"use strict";var a=n(4),i=n(0),s=n.n(i),r=n(44),o=n.n(r);t.a=function(e){return s.a.forwardRef((function(t,n){return s.a.createElement("div",Object(a.a)({},t,{ref:n,className:o()(t.className,e)}))}))}},68:function(e,t,n){"use strict";var a,i=n(4),s=n(8),r=n(44),o=n.n(r),c=n(0),l=n.n(c),d=n(80),m=n(79),u=n(78),p=["className","children"],h=((a={})[d.b]="show",a[d.a]="show",a),f=l.a.forwardRef((function(e,t){var n=e.className,a=e.children,r=Object(s.a)(e,p),f=Object(c.useCallback)((function(e){Object(u.a)(e),r.onEnter&&r.onEnter(e)}),[r]);return l.a.createElement(d.e,Object(i.a)({ref:t,addEndListener:m.a},r,{onEnter:f}),(function(e,t){return l.a.cloneElement(a,Object(i.a)({},t,{className:o()("fade",n,a.props.className,h[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",t.a=f},72:function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/img/clients/1.png"},{"id":2,"image":"assets/img/clients/2.png"},{"id":3,"image":"assets/img/clients/3.png"},{"id":4,"image":"assets/img/clients/4.png"},{"id":5,"image":"assets/img/clients/5.png"},{"id":6,"image":"assets/img/clients/6.png"}]')},73:function(e,t,n){"use strict";var a=n(4),i=n(8),s=n(9),r=n.n(s),o=n(0),c=n.n(o),l=n(44),d=n.n(l),m=["label","onClick","className"],u={label:r.a.string.isRequired,onClick:r.a.func},p=c.a.forwardRef((function(e,t){var n=e.label,s=e.onClick,r=e.className,o=Object(i.a)(e,m);return c.a.createElement("button",Object(a.a)({ref:t,type:"button",className:d()("close",r),onClick:s},o),c.a.createElement("span",{"aria-hidden":"true"},"\xd7"),c.a.createElement("span",{className:"sr-only"},n))}));p.displayName="CloseButton",p.propTypes=u,p.defaultProps={label:"Close"},t.a=p},75:function(e,t,n){"use strict";var a=n(40),i=n(41),s=n(43),r=n(42),o=n(0),c=n(1),l=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={name:"",phone:"",email:"",subject:"",message:"",isVerified:!1},i}return Object(i.a)(n,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onPhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"reCaptchaLoaded",value:function(e){console.log("Captcha Successfully Loaded",e)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://slidesigma.nyc/scripts/sendmail.php",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){""!==e.id?(document.getElementById("server_response_success").classList.add("d-block"),t.resetForm(),t.setState({isVerified:!0})):document.getElementById("server_response_danger").classList.add("d-block")}))}},{key:"resetForm",value:function(){this.setState({name:"",phone:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return Object(c.jsx)(o.Fragment,{})}}]),n}(o.Component);t.a=l},76:function(e,t,n){"use strict";var a=n(0),i=n.n(a),s=n(9),r=n.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(c(t)),t.handleErrored=t.handleErrored.bind(c(t)),t.handleChange=t.handleChange.bind(c(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(c(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},s.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},s.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},s.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},s.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},s.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},s.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},s.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},s.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},s.componentDidMount=function(){this.explicitRender()},s.componentDidUpdate=function(){this.explicitRender()},s.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},s.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},s.handleRecaptchaRef=function(e){this.captcha=e},s.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return i.a.createElement("div",o({},t,{ref:this.handleRecaptchaRef}))},a}(i.a.Component);l.displayName="ReCAPTCHA",l.propTypes={sitekey:r.a.string.isRequired,onChange:r.a.func,grecaptcha:r.a.object,theme:r.a.oneOf(["dark","light"]),type:r.a.oneOf(["image","audio"]),tabindex:r.a.number,onExpired:r.a.func,onErrored:r.a.func,size:r.a.oneOf(["compact","normal","invisible"]),stoken:r.a.string,hl:r.a.string,badge:r.a.oneOf(["bottomright","bottomleft","inline"])},l.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var d=n(15),m=n.n(d);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p={},h=0;var f="onloadcallback";var b,g,y=(b=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+f+"&render=explicit"},g=(g={callbackName:f,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,i;function s(e,n){var a;return(a=t.call(this,e,n)||this).state={},a.__scriptURL="",a}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+h++),this.__scriptLoaderID},r.setupScriptURL=function(){return this.__scriptURL="function"===typeof b?b():b,this.__scriptURL},r.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},r.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=p[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[g.callbackName]},r.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),a=g,i=a.globalName,s=a.callbackName,r=a.scriptId;if(i&&"undefined"!==typeof window[i]&&(p[t]={loaded:!0,observers:{}}),p[t]){var o=p[t];return o&&(o.loaded||o.errored)?void this.asyncScriptLoaderHandleLoad(o):void(o.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},p[t]={loaded:!1,observers:c};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,g.attributes)l.setAttribute(d,g.attributes[d]);r&&(l.id=r);var m=function(e){if(p[t]){var n=p[t].observers;for(var a in n)e(n[a])&&delete n[a]}};s&&"undefined"!==typeof window&&(window[s]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=p[t];e&&(e.loaded=!0,m((function(t){return!s&&(t(e),!0)})))},l.onerror=function(){var e=p[t];e&&(e.errored=!0,m((function(t){return t(e),!0})))},document.body.appendChild(l)},r.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===g.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var a=p[e];a&&(delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===g.removeOnUnmount&&delete p[e])},r.render=function(){var t=g.globalName,n=this.props,i=(n.asyncScriptOnLoad,n.forwardedRef),s=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(s[t]="undefined"!==typeof window[t]?window[t]:void 0),s.ref=i,Object(a.createElement)(e,s)},s}(a.Component),i=Object(a.forwardRef)((function(e,t){return Object(a.createElement)(n,u({},e,{forwardedRef:t}))}));return i.displayName="AsyncScriptLoader("+t+")",i.propTypes={asyncScriptOnLoad:r.a.func},m()(i,e)})(l);t.a=y},86:function(e,t,n){"use strict";var a=n(40),i=n(41),s=n(43),r=n(42),o=(n(0),n(75)),c=n(72),l=n(76),d=n(105),m=n(1),u=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat",style:{backgroundImage:"url(/rccgncc/assets/img/bg1.jpg)"},children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row align-items-center",children:[Object(m.jsx)("div",{className:"col-lg-6 mb-lg-30",children:Object(m.jsx)("form",{onSubmit:this.handleSubmit.bind(this),method:"Get",children:Object(m.jsxs)("div",{className:"form-row",children:[Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("i",{className:"far fa-user"}),Object(m.jsx)("input",{type:"text",className:"form-control transparent",placeholder:"Full Name",name:"name",value:this.state.name,onChange:this.onNameChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("i",{className:"far fa-envelope"}),Object(m.jsx)("input",{type:"email",className:"form-control transparent",placeholder:"Email Id",name:"email",value:this.state.email,onChange:this.onEmailChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("i",{className:"far fa-pencil"}),Object(m.jsx)("input",{type:"text",className:"form-control transparent",placeholder:"Subject",name:"subject",value:this.state.subject,onChange:this.onSubjectChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("i",{className:"far fa-phone"}),Object(m.jsx)("input",{type:"text",className:"form-control transparent",placeholder:"Phone No.",name:"phone",value:this.state.phone,onChange:this.onPhoneChange.bind(this),required:!0})]})}),Object(m.jsx)("div",{className:"col-lg-12",children:Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("textarea",{className:"form-control transparent",placeholder:"Enter Message",rows:4,name:"message",value:this.state.message,onChange:this.onMessageChange.bind(this),required:!0})})}),Object(m.jsxs)("div",{className:"col-lg-12",children:[Object(m.jsxs)("button",{type:"submit",className:"sigma_btn-custom btn-block",children:[" Get a Quote ",Object(m.jsx)("i",{className:"far fa-arrow-right"})," "]}),Object(m.jsxs)(d.a,{variant:"success",className:"d-none mt-3 mb-0",id:"server_response_success",children:[Object(m.jsx)("strong",{children:"Success!"})," Contact form has been successfully submitted."]}),Object(m.jsxs)(d.a,{variant:"danger",className:"d-none mt-3 mb-0",id:"server_response_danger",children:[Object(m.jsx)("strong",{children:"Oops!"})," Something bad happened. Please try again later."]})]}),Object(m.jsx)(l.a,{sitekey:"6LcAzqobAAAAAPt22IB9Nj6yWNMLxXuE5XkWu8ER",onChange:this.reCaptchaLoaded.bind(this),size:"invisible"})]})})}),Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsx)("div",{className:"row",children:c.slice(0,6).map((function(e,t){return Object(m.jsx)("div",{className:"col-lg-6",children:Object(m.jsx)("div",{className:"sigma_client",children:Object(m.jsx)("img",{src:"/rccgncc/"+e.image,alt:"client"})})},t)}))})})]})})})}}]),n}(o.a);t.a=u}}]);
//# sourceMappingURL=24.bf9401f9.chunk.js.map