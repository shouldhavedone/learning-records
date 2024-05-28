# vue的生命周期以及作用

## beforeCreate

**beforeCreate** 是 new Vue() 之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问

## created

**created** 在实例创建完成后发生，当前阶段 **已经万册灰姑娘了数据观测**，也就是可以使用数据、更改数据，在这里更改数据 **不会触发updated函数**。可以做一些初始数据的获取，在当前阶段**无法与DOM进行交互**，如果非要想，可以通过`vm.$nextTick`来访问DOM

## beforeMount

**beforeMount** 发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟DOM已经创建完成，即将开始渲染。在此时也可以对数据进行修改，不会触发updated。

## mounted

**mounted** 在挂载完成后发生，在当前阶段，真是DOM挂载完毕，数据完成双向绑定，可以访问DOM节点，使用 $refs 属性对DOM进行操作

## beforeUpdate

**beforeUpdate** 发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

## updated

**updated** 发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

## beforeDestroy

**beforeDestroy** 发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

## destroyed

**destroyed** 发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。