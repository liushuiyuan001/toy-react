# toy-react
## 极简版react
### 自定义jsx解析器
### 实现setState
  > 一个递归merge算法
### 实现虚拟dom，基本diff对比
  1. 当调用mountTo方法和setState是会调用
  2. 将type（节点类型），props（属性，方法），range（mountTo生成真实dom的range），children存储在一个对象中。分别存储旧的oldVdom和新的vdom做对比
  3. 将新旧vdom通过对比是否相同 不同的话调用对象的mountTo方法传入range生成真实dom 相同的话不做处理
### mountTo
  1. 初始化根据render函数的真实dom生成range
  2. 记录当前range
  3. 根据虚拟dom的range生成dom