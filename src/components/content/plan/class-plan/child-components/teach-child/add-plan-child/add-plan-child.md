# 添加计划弹窗里面的弹窗

- 这里面主要是有三个小弹窗(components)
- 1. 添加方案设置 - 添加方案(AddNewPlan)
- 2. 添加方案设置 - 已添加方案(AddedPlan)
- 3. 计划类型设置 - (PlanTypeSetting)
  
## 使用步骤

1. 因为**时间方案设置**Button和**计划类型设置**Button是在同一个数组中渲染出来的, 所以在设置弹窗之前判断一下按钮的`currentIndex`: 如果为0, 则要先设置可点击的下拉菜单, 然后在菜单中设置点击事件; 如果为1则直接设置点击事件
   >> 这一部分的内容, 主要是从大的弹窗 `AddTeachPlan` 中的两个按钮， 显示出来
   >>
   >> 这里主要用到了`Dropdown`, `DropdownMenu` 和 `DropdownMenuItem` 配合使用`Button`来实现
   >> 这一部分实现的具体代码如下
  
```JavaScript
<Dropdown v-for="(item, index) in modalButtonGroup" :key="index">
  <Button :type="item.type">
    {{ item.tag }}
  </Button>
  <DropdownMenu v-if="index === 0" slot="list">
    <DropdownItem v-for="(item, index) in setPlanList" :key="index">
      {{ item.info }}
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
```

2. 根据需求分析, 创建三个新的子组件: AddNewPlan, AddedPlan, PlanTypeSetting; 引入后设置并在AddTeachPlan中使用
3. 设置组件弹窗
