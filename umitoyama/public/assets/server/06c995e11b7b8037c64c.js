exports.ids=[5],exports.modules={27:function(t){t.exports=JSON.parse('[{"title":"サンバル","category":"southindian","tags":["southindian","veg","tamilnadu"],"date":"2019-08-17","content":"## サンバル\\n\\n","slug":"sambar","id":1},{"title":"ラッサム","category":"southindian","tags":["southindian","veg","tamilnadu"],"date":"2019-08-17","content":"## ラッサム\\n\\n","slug":"rasam","id":2},{"title":"チキンコロンブ","category":"southindian","tags":["southindian","nonveg","tamilnadu"],"date":"2019-08-20","content":"## チキンコロンブ\\n\\n","slug":"chicken-kuzhambu","id":3}]')},33:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0},category:{type:String,required:!0},tags:{type:Array,required:!0},date:{type:String,required:!0},slug:{type:String,required:!0}}},c=r(1);var o={components:{Card:Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"card"},[r("si-category-icon",{staticClass:"category",attrs:{category:t.category}}),t._ssrNode(" "),r("nuxt-link",{staticClass:"post-link",attrs:{to:{name:"posts-slug",params:{slug:t.slug}}}},[r("time",{staticClass:"date",attrs:{datetime:t.date}},[t._v(t._s(t.date))]),t._v(" "),r("h2",{staticClass:"title"},[t._v(t._s(t.title))])]),t._ssrNode(' <div class="tags" data-v-6e207a2e>'+t._ssrList(t.tags,function(e,i){return'<span class="tag" data-v-6e207a2e>'+t._ssrEscape(t._s(e))+"</span>"})+"</div>")],2)},[],!1,function(t){},"6e207a2e","038dad00").exports},props:{posts:{type:Array,required:!0}}};var d=Object(c.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-list"},this._l(this.posts,function(t){return e("card",{key:t.id,staticClass:"card",attrs:{title:t.title,category:t.category,tags:t.tags,date:t.date,slug:t.slug}})}),1)},[],!1,function(t){},"741afdf6","0689e984").exports,l=r(27),y={components:{Posts:l,CardList:d},data:()=>({posts:l})},h=Object(c.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("card-list",{attrs:{posts:this.posts}})],1)},[],!1,null,null,"39ceacd5");e.default=h.exports}};
//# sourceMappingURL=06c995e11b7b8037c64c.js.map