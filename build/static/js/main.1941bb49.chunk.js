(this["webpackJsonppost-app"]=this["webpackJsonppost-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),c=n(10),o=n.n(c),r=(n(17),n(18),n(7)),l=n(8),s=n(3),u=n(4),b=n(2),d=n(6),j=n(5),h=(n(19),function(t){var e=t.liked,n=t.allPosts;return Object(a.jsxs)("div",{className:"app-header d-flex",children:[Object(a.jsx)("h1",{children:"Dima L"}),Object(a.jsxs)("h2",{children:[n," items, of them liked ",e]})]})}),f=(n(20),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(a.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"Search in the list",value:this.state.term,onChange:this.onUpdateSearch})}}]),n}(i.Component)),p=(n(21),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"All"},{name:"like",label:"Liked"}],a}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,i=e.label,c=t.props,o=c.filter,r=c.onFilterSelect,l=o===n?"btn-info":"btn-outline-secondary";return Object(a.jsx)("button",{type:"button",className:"btn ".concat(l),onClick:function(){return r(n)},children:i},n)}));return Object(a.jsx)("div",{className:"btn-group",children:e})}}]),n}(i.Component)),m=n(11),O=(n(22),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,i=t.onToggleImportant,c=t.onToggleLiked,o=t.like,r="app-list-item d-flex justify-content-between";return t.important&&(r+=" important"),o&&(r+=" like"),Object(a.jsxs)("div",{className:r,children:[Object(a.jsx)("span",{className:"app-list-item-label",onClick:c,children:e}),Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(a.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:i,children:Object(a.jsx)("i",{className:"fa fa-star"})}),Object(a.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(a.jsx)("i",{className:"fa fa-trash-o"})}),Object(a.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(i.Component)),g=(n(23),function(t){var e=t.posts,n=t.onDelete,i=t.onToggleImportant,c=t.onToggleLiked,o=e.map((function(t){var e=t.id,o=Object(m.a)(t,["id"]);return Object(a.jsx)("li",{className:"list-group-item",children:Object(a.jsx)(O,Object(r.a)(Object(r.a)({},o),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return i(e)},onToggleLiked:function(){return c(e)}}))},e)}));return Object(a.jsx)("ul",{className:"app-list list-group",children:o})}),v=(n(24),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(a.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{type:"text",placeholder:"What to add?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"ADD"})]})}}]),n}(i.Component)),k=(n(25),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Going to learn React",important:!0,like:!1,id:1},{label:"That is so good",important:!1,like:!1,id:2},{label:"I need a break...",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(b.a)(a)),a.addItem=a.addItem.bind(Object(b.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(b.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(b.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(b.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(b.a)(a)),a.maxId=4,a}return Object(u.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};this.setState((function(t){var n=t.data;return{data:[].concat(Object(l.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{important:!i.important});return{data:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(r.a)(Object(r.a)({},i),{},{like:!i.like});return{data:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"filterPost",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):t}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,i=t.filter,c=e.filter((function(t){return t.like})).length,o=e.length,r=this.filterPost(this.searchPost(e,n),i);return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(h,{liked:c,allPosts:o}),Object(a.jsxs)("div",{className:"search-panel d-flex",children:[Object(a.jsx)(f,{onUpdateSearch:this.onUpdateSearch}),Object(a.jsx)(p,{filter:i,onFilterSelect:this.onFilterSelect})]}),Object(a.jsx)(g,{posts:r,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(a.jsx)(v,{onAdd:this.addItem})]})}}]),n}(i.Component));o.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1941bb49.chunk.js.map