import{_ as e,c as t,o as a,a3 as r}from"./chunks/framework.BX09VxeE.js";const f=JSON.parse('{"title":"vue的生命周期以及作用","description":"","frontmatter":{},"headers":[],"relativePath":"interview/vue/1、vue的生命周期以及作用.md","filePath":"interview/vue/1、vue的生命周期以及作用.md"}'),o={name:"interview/vue/1、vue的生命周期以及作用.md"},d=r('<h1 id="vue的生命周期以及作用" tabindex="-1">vue的生命周期以及作用 <a class="header-anchor" href="#vue的生命周期以及作用" aria-label="Permalink to &quot;vue的生命周期以及作用&quot;">​</a></h1><h2 id="beforecreate" tabindex="-1">beforeCreate <a class="header-anchor" href="#beforecreate" aria-label="Permalink to &quot;beforeCreate&quot;">​</a></h2><p><strong>beforeCreate</strong> 是 new Vue() 之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问</p><h2 id="created" tabindex="-1">created <a class="header-anchor" href="#created" aria-label="Permalink to &quot;created&quot;">​</a></h2><p><strong>created</strong> 在实例创建完成后发生，当前阶段 <strong>已经万册灰姑娘了数据观测</strong>，也就是可以使用数据、更改数据，在这里更改数据 <strong>不会触发updated函数</strong>。可以做一些初始数据的获取，在当前阶段<strong>无法与DOM进行交互</strong>，如果非要想，可以通过<code>vm.$nextTick</code>来访问DOM</p><h2 id="beforemount" tabindex="-1">beforeMount <a class="header-anchor" href="#beforemount" aria-label="Permalink to &quot;beforeMount&quot;">​</a></h2><p><strong>beforeMount</strong> 发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟DOM已经创建完成，即将开始渲染。在此时也可以对数据进行修改，不会触发updated。</p><h2 id="mounted" tabindex="-1">mounted <a class="header-anchor" href="#mounted" aria-label="Permalink to &quot;mounted&quot;">​</a></h2><p><strong>mounted</strong> 在挂载完成后发生，在当前阶段，真是DOM挂载完毕，数据完成双向绑定，可以访问DOM节点，使用 $refs 属性对DOM进行操作</p><h2 id="beforeupdate" tabindex="-1">beforeUpdate <a class="header-anchor" href="#beforeupdate" aria-label="Permalink to &quot;beforeUpdate&quot;">​</a></h2><p><strong>beforeUpdate</strong> 发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。</p><h2 id="updated" tabindex="-1">updated <a class="header-anchor" href="#updated" aria-label="Permalink to &quot;updated&quot;">​</a></h2><p><strong>updated</strong> 发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。</p><h2 id="beforedestroy" tabindex="-1">beforeDestroy <a class="header-anchor" href="#beforedestroy" aria-label="Permalink to &quot;beforeDestroy&quot;">​</a></h2><p><strong>beforeDestroy</strong> 发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。</p><h2 id="destroyed" tabindex="-1">destroyed <a class="header-anchor" href="#destroyed" aria-label="Permalink to &quot;destroyed&quot;">​</a></h2><p><strong>destroyed</strong> 发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。</p>',17),n=[d];function s(i,u,h,c,l,p){return a(),t("div",null,n)}const _=e(o,[["render",s]]);export{f as __pageData,_ as default};
