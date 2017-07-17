<template>
  <div class="grid-demo">
    <div class="grid-demo__item">
      <h2 id="rate-ping-fen">
        <a href="#rate-ping-fen" aria-hidden="true" class="header-anchor">¶</a>
        Layout 布局
      </h2>
      <p>通过基础的 24 分栏，迅速简便地创建布局。 （<a href="http://element.eleme.io/#/zh-CN/component/layout" target="_blank">Element
        Layout 布局</a>）</p>
    </div>
    <div class="grid-demo__item">
      <h3 id="ji-chu-bu-ju">
        <a href="#ji-chu-bu-ju" aria-hidden="true" class="header-anchor">¶</a>
        基础布局
      </h3>
      <p>使用单一分栏创建基础的栅格布局。</p>
      <demo>
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
        <template slot="description">
          通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeA"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="fen-lan-jian-ge">
        <a href="#fen-lan-jian-ge" aria-hidden="true" class="header-anchor">¶</a>
        分栏间隔
      </h3>
      <p>分栏之间存在间隔。</p>
      <demo>
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
        <template slot="description">
          <code>Row</code> 组件 提供 <code>gutter</code> 属性来指定每一栏之间的间隔，默认间隔为 0。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeB"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="hun-he-bu-ju">
        <a href="#hun-he-bu-ju" aria-hidden="true" class="header-anchor">¶</a>
        混合布局
      </h3>
      <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
      <demo>
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
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeC"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="fen-lan-pian-yi">
        <a href="#fen-lan-pian-yi" aria-hidden="true" class="header-anchor">¶</a>
        分栏偏移
      </h3>
      <p>支持偏移指定的栏数。</p>
      <demo>
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
        <template slot="description">
          通过制定 <code>col</code> 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeD"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="dui-qi-fang-shi">
        <a href="#dui-qi-fang-shi" aria-hidden="true" class="header-anchor">¶</a>
        对齐方式
      </h3>
      <p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
      <demo>
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
        <template slot="description">
          将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>justify</code> 属性来指定 start, center, end, space-between,
          space-around 其中的值来定义子元素的排版方式。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeE"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="cross-dui-qi-fang-shi">
        <a href="#cross-dui-qi-fang-shi" aria-hidden="true" class="header-anchor">¶</a>
        交叉轴对齐方式 <span class="new">（改进特性，新增示例）</span>
      </h3>
      <p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
      <demo>
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
        <template slot="description">
          将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>align</code> 属性来指定 top, middle, center, baseline,
          stretch 其中的值来定义子元素在交叉轴上的对齐方式。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeH"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="pai-lie-fang-xiang">
        <a href="#pai-lie-fang-xiang" aria-hidden="true" class="header-anchor">¶</a>
        排列方向 <span class="new">（新增特性，新增示例）</span>
      </h3>
      <p>通过 <code>flex</code> 布局来对分栏进行灵活的排列。</p>
      <demo>
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
        <template slot="description">
          将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>direction</code> 属性来指定 row, row-reverse, column,
          column-reverse 其中的值来定义子元素的排列方式。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeF"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="dan-duo-hang">
        <a href="#dan-duo-hang" aria-hidden="true" class="header-anchor">¶</a>
        单行、多行 <span class="new">（新增特性，新增示例）</span>
      </h3>
      <p>通过 <code>flex</code> 布局来对分栏进行灵活的单行或多行显示。</p>
      <demo>
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
        <template slot="description">
          将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>wrap</code> 属性来指定 nowrap, wrap, wrap-reverse
          其中的值来定义子元素的单行或多行显示方式并允许你控制行的堆叠方向。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeG"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="duo-zhou-dui-qi-fang-shi1">
        <a href="#duo-zhou-dui-qi-fang-shi1" aria-hidden="true" class="header-anchor">¶</a>
        多轴对齐方式 <span class="new">（新增特性，新增示例）</span>
      </h3>
      <p>通过 <code>flex</code> 布局来对分栏进行灵活的对齐。</p>
      <demo>
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
        <template slot="description">
          将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>content</code> 属性来指定 start, center, end, space-around,
          space-between, stretch 其中的值来定义子元素的多轴对齐方式。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeI"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="pai-lie-shun-xu">
        <a href="pai-lie-shun-xu" aria-hidden="true" class="header-anchor">¶</a>
        排列顺序 <span class="new">（新增特性，新增示例）</span>
      </h3>
      <p>通过 <code>flex</code> 布局来对分栏进行灵活的排序。</p>
      <demo>
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
        <template slot="description">
          将 <code>type</code> 属性赋值为 'flex'，可以启用flex 布局，并通过 <code>order</code> 属性来指定 子元素的排列顺序，数值越小，排列越靠前，默认为0。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeJ"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="xiang-ying-shi-bu-ju">
        <a href="xiang-ying-shi-bu-ju" aria-hidden="true" class="header-anchor">¶</a>
        响应式布局 <span class="new">（改进特性）</span>
      </h3>
      <p>参照了 Bootstrap 的 响应式设计，预设了四个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>和 <code>lg</code>。</p>
      <demo>
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
        <template slot="description">
          支持 <code>xs</code>，<code>sm</code>，<code>md</code>，<code>lg</code>，属性值为 <code>object</code>或
          <code>number</code> 类型的任意组合。
        </template>
        <template slot="highlight">
          <pre v-highlightjs="sourcecodeK"><code class="html javascript"></code></pre>
        </template>
      </demo>
    </div>
    <div class="grid-demo__item">
      <h3 id="row-attributes">
        <a href="#row-attributes" aria-hidden="true" class="header-anchor">¶</a>
        Row Attributes
      </h3>
      <table class="table">
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
          <td>top/middle/bottom/baseline <i class="new">（新增）</i>/stretch <i class="new">（新增）</i></td>
          <td>top</td>
        </tr>
        <tr>
          <td>direction <i class="new">（新增）</i></td>
          <td>flex 布局下的排列方向</td>
          <td>string</td>
          <td>row/row-reverse/column/column-reverse</td>
          <td>row</td>
        </tr>
        <tr>
          <td>wrap <i class="new">（新增）</i></td>
          <td>flex 布局下的单行或多行显示方式</td>
          <td>string</td>
          <td>nowrap/wrap/wrap-reverse</td>
          <td>wrap</td>
        </tr>
        <tr>
          <td>content <i class="new">（新增）</i></td>
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
    </div>
    <div class="grid-demo__item">
      <h3 id="col-attributes">
        <a href="#col-attributes" aria-hidden="true" class="header-anchor">¶</a>
        Col Attributes
      </h3>
      <table class="table">
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
          <td>order <i class="new">（新增）</i></td>
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
    </div>
  </div>
</template>
<script>
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
  import Demo from './Demo.vue'

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
    },
    components: {
      Demo
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .grid-demo {
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
    h2, h3 {
      font-weight: 400;
      color: #1f2f3d;
    }
    h2 {
      font-size: 28px;
      margin: 0
    }
    h3 {
      font-size: 22px;
      margin: 45px 0 15px;
    }
    h3, h2 {
      &:hover {
        a {
          opacity: .4;
        }
      }
      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;
        color: #4078c0;
        text-decoration: none;
        &:hover {
          opacity: .4;
        }
      }
    }
    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      a {
        color: #2d8cf0;
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        transition: color .2s ease;
        &:hover {
          color: #57a3f3;
        }
      }
    }
    .new {
      font-style: normal;
      color: #FF4949;
      code {
        background-color: #FF4949 !important;
        color: #fff !important;
      }
    }
    .table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;
      th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        background-color: #eff2f7;
        white-space: nowrap;
      }
      th, td {
        border-bottom: 1px solid #eaeefb;
        padding: 10px;
        max-width: 250px;
      }
    }
  }
</style>
