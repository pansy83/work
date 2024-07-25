1.项目概述
利用react框架完成了一个web端的课表组件
2.安装和使用
cd myapp
npm start
3.项目结构
代码写在src中
下一级文件有common pages router static
4.功能说明
课表出场动画（Home.jsx）
一共是有week12.jsx week13.jsx week14.jsx week15.jsx四个页面(展示周数，日期)
在week12里面 可以点击按钮出现加号 但是不支持添加活动
点击课程查看信息有点混乱
在week13里面 可以点击第一行的小方块 支持添加活动
点击课程可以查看信息
在week14 里面 点击课程可以查看信息 点击周二的第一个高数小方块 可以简单地实现拖拽
在week15 里面 可以点击第一行的小方块 支持添加活动
点击课程可以查看信息
but 添加活动只允许添加一个小方块
5.技术实现
react 
