<template>
  <div id="app">
    <demonstration
        tag="h2"
        anchor="layout-bu-ju"
        title="Layout 布局"
        :show-content="false">
      <template slot="description">
        通过基础的 24 分栏，迅速简便地创建布局。（<a href="http://element.eleme.io/#/zh-CN/component/layout" target="_blank">Element
        Layout 布局</a>）
      </template>
    </demonstration>
    <demonstration
        title="基础布局"
        anchor="ji-chu-bu-ju"
        description="使用单一分栏创建基础的栅格布局。"
        :highlight="sourcecodeA">
      <template slot="source">
        <vm-row>
          <vm-col :span="24">
            <div class="grid-content bg-purple">24</div>
          </vm-col>
        </vm-row>
        <vm-row>
          <vm-col :span="12">
            <div class="grid-content bg-purple">12</div>
          </vm-col>
          <vm-col :span="12">
            <div class="grid-content bg-purple-light">12</div>
          </vm-col>
        </vm-row>
        <vm-row>
          <vm-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </vm-col>
          <vm-col :span="8">
            <div class="grid-content bg-purple-light">8</div>
          </vm-col>
          <vm-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </vm-col>
        </vm-row>
        <vm-row>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
        </vm-row>
        <vm-row>
          <vm-col :span="4">
            <div class="grid-content bg-purple">4</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple-light">4</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple">4</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple-light">4</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple">4</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple-light">4</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。
      </template>
    </demonstration>
    <demonstration
        title="分栏间隔"
        anchor="fen-lan-jian-ge"
        description="分栏之间存在间隔。"
        :highlight="sourcecodeB">
      <template slot="source">
        <vm-row :gutter="16">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        <code>Row</code> 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。
      </template>
    </demonstration>
    <demonstration
        title="混合布局"
        anchor="hun-he-bu-ju"
        description="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"
      :highlight="sourcecodeC">
      <template slot="source">
        <vm-row :gutter="16">
          <vm-col :span="16">
            <div class="grid-content bg-purple">16</div>
          </vm-col>
          <vm-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </vm-col>
        </vm-row>
        <vm-row :gutter="16">
          <vm-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </vm-col>
          <vm-col :span="8">
            <div class="grid-content bg-purple">8</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple">4</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple">4</div>
          </vm-col>
        </vm-row>
        <vm-row :gutter="16">
          <vm-col :span="4">
            <div class="grid-content bg-purple">4</div>
          </vm-col>
          <vm-col :span="16">
            <div class="grid-content bg-purple">16</div>
          </vm-col>
          <vm-col :span="4">
            <div class="grid-content bg-purple">4</div>
          </vm-col>
        </vm-row>
      </template>
    </demonstration>
    <demonstration
        title="分栏偏移"
        anchor="fen-lan-pian-yi"
        description="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。"
        :highlight="sourcecodeD">
      <template slot="source">
        <vm-row :gutter="16">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="8" :offset="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row :gutter="16">
          <vm-col :span="6" :offset="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6" :offset="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row :gutter="16">
          <vm-col :span="12" :offset="6">
            <div class="grid-content bg-purple">12</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        通过制定 <code>col</code> 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。
      </template>
    </demonstration>
    <demonstration
        title="对齐方式"
        anchor="dui-qi-fang-shi"
        :highlight="sourcecodeE">
      <template slot="description">
        通过 <code>flex</code> 布局来对分栏进行灵活的对齐。
      </template>
      <template slot="source">
        <vm-row type="flex" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" justify="center" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" justify="end" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" justify="space-between" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" justify="space-around" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>justify</code> 属性来指定 start, center, end, space-between,
        space-around 其中的值来定义子元素的排版方式。
      </template>
    </demonstration>
    <demonstration
        anchor="cross-dui-qi-fang-shi"
        :highlight="sourcecodeH">
      <template slot="title">
        交叉轴对齐方式 <span class="vd-demo__new">（改进特性，新增示例）</span>
      </template>
      <template slot="description">
        通过 <code>flex</code> 布局来对分栏进行灵活的对齐。
      </template>
      <template slot="source">
        <vm-row type="flex" class="row-bg" style="height: 100px">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" align="middle" class="row-bg" style="height: 100px;">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" align="bottom" class="row-bg" style="height: 100px;">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" align="baseline" class="row-bg" style="height: 100px;">
          <span style="line-height: 70px;margin-right: 20px;">baseline</span>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" align="stretch" class="row-bg" style="height: 100px;">
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple" style="min-height: 100%;line-height: 80px;">6</div>
          </vm-col>
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple-light" style="min-height: 100%;line-height: 80px;">6</div>
          </vm-col>
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple" style="min-height: 100%;line-height: 80px;">6</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>align</code> 属性来指定 top, middle, center, baseline,
        stretch 其中的值来定义子元素在交叉轴上的对齐方式。
      </template>
    </demonstration>
    <demonstration
        anchor="pai-lie-fang-xiang"
        :highlight="sourcecodeF">
      <template slot="title">
        排列方向 <span class="vd-demo__new">（新增特性，新增示例）</span>
      </template>
      <template slot="description">
        通过 <code>flex</code> 布局来对分栏进行灵活的排列。
      </template>
      <template slot="source">
        <vm-row type="flex" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-1</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6-2</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-3</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" direction="row-reverse" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-1</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6-2</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-3</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" direction="column" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-1</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6-2</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-3</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" direction="column-reverse" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-1</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6-2</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6-3</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>direction</code> 属性来指定 row, row-reverse, column,
        column-reverse 其中的值来定义子元素的排列方式。
      </template>
    </demonstration>
    <demonstration
        anchor="dan-duo-hang"
        :highlight="sourcecodeG">
      <template slot="title">
        单行、多行 <span class="vd-demo__new">（新增特性，新增示例）</span>
      </template>
      <template slot="description">
        通过 <code>flex</code> 布局来对分栏进行灵活的单行或多行显示。
      </template>
      <template slot="source">
        <vm-row type="flex" wrap="nowrap" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" wrap="wrap-reverse" class="row-bg">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>wrap</code> 属性来指定 nowrap, wrap, wrap-reverse
        其中的值来定义子元素的单行或多行显示方式并允许你控制行的堆叠方向。
      </template>
    </demonstration>
    <demonstration
        anchor="duo-zhou-dui-qi-fang-shi1"
        :highlight="sourcecodeI">
      <template slot="title">
        多轴对齐方式 <span class="vd-demo__new">（新增特性，新增示例）</span>
      </template>
      <template slot="description">
        通过 <code>flex</code> 布局来对分栏进行灵活的对齐。
      </template>
      <template slot="source">
        <vm-row type="flex" class="row-bg" style="height: 125px;">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" content="center" class="row-bg" style="height: 125px;">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" content="end" class="row-bg" style="height: 125px;">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" content="space-between" class="row-bg" style="height: 125px;">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" content="space-around" class="row-bg" style="height: 125px;">
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple-light">6</div>
          </vm-col>
          <vm-col :span="6">
            <div class="grid-content bg-purple">6</div>
          </vm-col>
        </vm-row>
        <vm-row type="flex" content="stretch" class="row-bg" style="height: 125px;">
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple" style="min-height: 100%;line-height: 52px;">6</div>
          </vm-col>
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple-light" style="min-height: 100%;line-height: 52px;">6</div>
          </vm-col>
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple" style="min-height: 100%;line-height: 52px;">6</div>
          </vm-col>
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple-light" style="min-height: 100%;line-height: 52px;">6</div>
          </vm-col>
          <vm-col :span="6" style="height: auto;">
            <div class="grid-content bg-purple" style="min-height: 100%;line-height: 52px;">6</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>content</code> 属性来指定 start, center, end, space-around,
        space-between, stretch 其中的值来定义子元素的多轴对齐方式。
      </template>
    </demonstration>
    <demonstration
        anchor="pai-lie-shun-xu"
        :highlight="sourcecodeJ">
      <template slot="title">
        排列顺序 <span class="vd-demo__new">（新增特性，新增示例）</span>
      </template>
      <template slot="description">
        通过 <code>flex</code> 布局来对分栏进行灵活的排序。
      </template>
      <template slot="source">
        <vm-row type="flex" class="row-bg">
          <vm-col :span="6" :order="3">
            <div class="grid-content bg-purple">6-1 | order-3</div>
          </vm-col>
          <vm-col :span="6" :order="4">
            <div class="grid-content bg-purple-light">6-2 | order-4</div>
          </vm-col>
          <vm-col :span="6" :order="1">
            <div class="grid-content bg-purple">6-3 | order-1</div>
          </vm-col>
          <vm-col :span="6" :order="2">
            <div class="grid-content bg-purple-light">6-4 | order-2</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>order</code> 属性来指定 子元素的排列顺序，数值越小，排列越靠前，默认为0。
      </template>
    </demonstration>
    <demonstration
        anchor="xiang-ying-shi-bu-ju"
        :highlight="sourcecodeK">
      <template slot="title">
        响应式布局 <span class="vd-demo__new">（改进特性）</span>
      </template>
      <template slot="description">
        参照了 Bootstrap 的 响应式设计，预设了四个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>和 <code>lg</code>。
      </template>
      <template slot="source">
        <vm-row :gutter="16" class="row-bg">
          <vm-col :xs="8" :sm="6" :md="4" :lg="3">
            <div class="grid-content bg-purple"></div>
          </vm-col>
          <vm-col :xs="4" :sm="6" :md="8" :lg="9">
            <div class="grid-content bg-purple-light"></div>
          </vm-col>
          <vm-col :xs="4" :sm="6" :md="8" :lg="9">
            <div class="grid-content bg-purple"></div>
          </vm-col>
          <vm-col :xs="8" :sm="6" :md="4" :lg="3">
            <div class="grid-content bg-purple-light"></div>
          </vm-col>
        </vm-row>
        <vm-row :gutter="16" class="row-bg">
          <vm-col :xs="{ span: 6, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 2, offset: 2 }"
                  :lg="3">
            <div class="grid-content bg-purple">1</div>
          </vm-col>
          <vm-col :xs="{ span:  2, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 6, offset: 2 }"
                  :lg="9">
            <div class="grid-content bg-purple-light">2</div>
          </vm-col>
          <vm-col :xs="{ span:  2, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 6, offset: 2 }"
                  :lg="9">
            <div class="grid-content bg-purple">3</div>
          </vm-col>
          <vm-col :xs="{ span: 6, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 2, offset: 2 }"
                  :lg="3">
            <div class="grid-content bg-purple-light">4</div>
          </vm-col>
        </vm-row>
      </template>
      <template slot="explanation">
        支持 <code>xs</code>，<code>sm</code>，<code>md</code>，<code>lg</code>，属性值为 <code>object</code>或
        <code>number</code> 类型的任意组合。
      </template>
    </demonstration>
    <demonstration
      title="Row Attributes"
      anchor="row-attributes"
      :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
          </thead>
          <tbody>
          <tr>
            <td>gutter</td>
            <td>栅格间隔</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>type</td>
            <td>布局模式，可选 flex，现代浏览器下有效</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>justify</td>
            <td>flex 布局下的水平排列方式</td>
            <td>string</td>
            <td>start/end/center/space-around/space-between</td>
            <td>start</td>
          </tr>
          <tr>
            <td>align</td>
            <td>flex 布局下的垂直排列方式</td>
            <td>string</td>
            <td>top/middle/bottom/baseline <i class="vd-demo__new">（新增）</i>/stretch <i class="vd-demo__new">（新增）</i></td>
            <td>top</td>
          </tr>
          <tr>
            <td>direction <i class="vd-demo__new">（新增）</i></td>
            <td>flex 布局下的排列方向</td>
            <td>string</td>
            <td>row/row-reverse/column/column-reverse</td>
            <td>row</td>
          </tr>
          <tr>
            <td>wrap <i class="vd-demo__new">（新增）</i></td>
            <td>flex 布局下的单行或多行显示方式</td>
            <td>string</td>
            <td>nowrap/wrap/wrap-reverse</td>
            <td>wrap</td>
          </tr>
          <tr>
            <td>content <i class="vd-demo__new">（新增）</i></td>
            <td>flex 布局下的多轴排列方式</td>
            <td>string</td>
            <td>start/center/end/space-between/space-around/stretch</td>
            <td>start</td>
          </tr>
          <tr>
            <td>tag</td>
            <td>自定义元素标签</td>
            <td>string</td>
            <td>*</td>
            <td>div</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
    <demonstration
        title="Col Attributes"
        anchor="col-attributes"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>span</td>
            <td>栅格占据的列数</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>order <i class="vd-demo__new">（新增）</i></td>
            <td>flex 布局下的栅格排列顺序</td>
            <td>number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>offset</td>
            <td>栅格左侧的间隔格数</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>push</td>
            <td>栅格向右移动格数</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>pull</td>
            <td>栅格向左移动格数</td>
            <td>number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>xs</td>
            <td><code>&lt;768px</code> 响应式栅格数或者栅格属性对象</td>
            <td>number/object (例如： {span: 4, offset: 4})</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>sm</td>
            <td><code>≥768px</code> 响应式栅格数或者栅格属性对象</td>
            <td>number/object (例如： {span: 4, offset: 4})</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>md</td>
            <td><code>≥992</code> 响应式栅格数或者栅格属性对象</td>
            <td>number/object (例如： {span: 4, offset: 4})</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>lg</td>
            <td><code>≥1200</code> 响应式栅格数或者栅格属性对象</td>
            <td>number/object (例如： {span: 4, offset: 4})</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>tag</td>
            <td>自定义元素标签</td>
            <td>string</td>
            <td>*</td>
            <td>div</td>
          </tr>
          </tbody>
        </table>
      </template>
    </demonstration>
  </div>
</template>

<script type="es6">
  import {
    sourcecodeA,
    sourcecodeB,
    sourcecodeC,
    sourcecodeD,
    sourcecodeE,
    sourcecodeF,
    sourcecodeG,
    sourcecodeH,
    sourcecodeI,
    sourcecodeJ,
    sourcecodeK
  } from './template.js'

  export default {
    data () {
      return {
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        sourcecodeF,
        sourcecodeG,
        sourcecodeH,
        sourcecodeI,
        sourcecodeJ,
        sourcecodeK
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    margin: 60px auto;
    .vm-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .grid-content {
      min-height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 18px;
      color: #5e6d82;
      border-radius: 4px;
    }
    .bg-purple {
      background: #d3dce6;
      &-dark {
        background: #99a9bf;
      }
      &-light {
        background: #e5e9f2;
      }
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
</style>
