export const sourcecodeA = `<vm-row>
  <vm-col :span="24"><div class="grid-content bg-purple">24</div></vm-col>
</vm-row>
<vm-row>
  <vm-col :span="12"><div class="grid-content bg-purple">12</div></vm-col>
  <vm-col :span="12"><div class="grid-content bg-purple-light">12</div></vm-col>
</vm-row>
<vm-row>
  <vm-col :span="8"><div class="grid-content bg-purple">8</div></vm-col>
  <vm-col :span="8"><div class="grid-content bg-purple-light">8</div></vm-col>
  <vm-col :span="8"><div class="grid-content bg-purple">8</div></vm-col>
</vm-row>
<vm-row>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
</vm-row>
<vm-row>
  <vm-col :span="4"><div class="grid-content bg-purple">4</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple-light">4</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple">4</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple-light">4</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple">4</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple-light">4</div></vm-col>
</vm-row>

<style lang="less" rel="stylesheet/less">
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
</style>`

export const sourcecodeB = `<vm-row :gutter="16">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>`

export const sourcecodeC = `<vm-row :gutter="16">
  <vm-col :span="16"><div class="grid-content bg-purple">16</div></vm-col>
  <vm-col :span="8"><div class="grid-content bg-purple">8</div></vm-col>
</vm-row>
<vm-row :gutter="16">
  <vm-col :span="8"><div class="grid-content bg-purple">8</div></vm-col>
  <vm-col :span="8"><div class="grid-content bg-purple">8</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple">4</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple">4</div></vm-col>
</vm-row>
<vm-row :gutter="16">
  <vm-col :span="4"><div class="grid-content bg-purple">4</div></vm-col>
  <vm-col :span="16"><div class="grid-content bg-purple">16</div></vm-col>
  <vm-col :span="4"><div class="grid-content bg-purple">4</div></vm-col>
</vm-row>`

export const sourcecodeD = `<vm-row :gutter="16">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="8" :offset="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row :gutter="16">
  <vm-col :span="6" :offset="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6" :offset="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row :gutter="16">
  <vm-col :span="12" :offset="6"><div class="grid-content bg-purple">12</div></vm-col>
</vm-row>`

export const sourcecodeE = `<vm-row type="flex" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" justify="center" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" justify="end" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" justify="space-between" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" justify="space-around" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>`

export const sourcecodeF = `<vm-row type="flex" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6-1</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6-2</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6-3</div></vm-col>
</vm-row>
<vm-row type="flex" direction="row-reverse" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6-1</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6-2</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6-3</div></vm-col>
</vm-row>
<vm-row type="flex" direction="column" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6-1</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6-2</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6-3</div></vm-col>
</vm-row>
<vm-row type="flex" direction="column-reverse" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6-1</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6-2</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6-3</div></vm-col>
</vm-row>`

export const sourcecodeG = `<vm-row type="flex" wrap="nowrap" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" wrap="wrap-reverse" class="row-bg">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>`

export const sourcecodeH = `<vm-row type="flex" class="row-bg" style="height: 100px">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" align="middle" class="row-bg" style="height: 100px;">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" align="bottom" class="row-bg" style="height: 100px;">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" align="baseline" class="row-bg" style="height: 100px;">
  <span style="line-height: 70px;margin-right: 20px;">baseline</span>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" align="stretch" class="row-bg" style="height: 100px;">
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple" style="min-height: 100%;line-height: 80px;">6</div></vm-col>
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple-light" style="min-height: 100%;line-height: 80px;">6</div></vm-col>
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple" style="min-height: 100%;line-height: 80px;">6</div></vm-col>
</vm-row>`

export const sourcecodeI = `<vm-row type="flex" class="row-bg" style="height: 200px;">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" content="center" class="row-bg" style="height: 200px;">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" content="end" class="row-bg" style="height: 200px;">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" content="space-between" class="row-bg" style="height: 200px;">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" content="space-around" class="row-bg" style="height: 200px;">
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple-light">6</div></vm-col>
  <vm-col :span="6"><div class="grid-content bg-purple">6</div></vm-col>
</vm-row>
<vm-row type="flex" content="stretch" class="row-bg" style="height: 200px;">
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple" style="min-height: 100%;line-height: 90px;">6</div></vm-col>
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple-light" style="min-height: 100%;line-height: 90px;">6</div></vm-col>
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple" style="min-height: 100%;line-height: 90px;">6</div></vm-col>
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple-light" style="min-height: 100%;line-height: 90px;">6</div></vm-col>
  <vm-col :span="6" style="height: auto;"><div class="grid-content bg-purple" style="min-height: 100%;line-height: 90px;">6</div></vm-col>
</vm-row>`


export const sourcecodeJ = `<vm-row type="flex" class="row-bg">
  <vm-col :span="6" :order="3"><div class="grid-content bg-purple">6-1 | order-3</div></vm-col>
  <vm-col :span="6" :order="4"><div class="grid-content bg-purple-light">6-2 | order-4</div></vm-col>
  <vm-col :span="6" :order="1"><div class="grid-content bg-purple">6-3 | order-1</div></vm-col>
  <vm-col :span="6" :order="2"><div class="grid-content bg-purple-light">6-4 | order-2</div></vm-col>
</vm-row>`

export const sourcecodeK = `<vm-row :gutter="16" class="row-bg">
  <vm-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></vm-col>
  <vm-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></vm-col>
  <vm-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></vm-col>
  <vm-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></vm-col>
</vm-row>
<vm-row :gutter="16" class="row-bg">
  <vm-col :xs="{ span: 6, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 2, offset: 2 }" :lg="3"><div class="grid-content bg-purple">1</div></vm-col>
  <vm-col :xs="{ span:  2, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 6, offset: 2 }" :lg="9"><div class="grid-content bg-purple-light">2</div></vm-col>
  <vm-col :xs="{ span:  2, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 6, offset: 2 }" :lg="9"><div class="grid-content bg-purple">3</div></vm-col>
  <vm-col :xs="{ span: 6, offset: 2, pull: 1 }" :sm="{ span: 4, push: 2 }" :md="{ span: 2, offset: 2 }" :lg="3"><div class="grid-content bg-purple-light">4</div></vm-col>
</vm-row>`