## react-redux
1. 为了避免对context有重复的逻辑，需要一个高级组件connect
2. connect通过props的方式传递数据
3. 每个组件需要的aciton不一样，需要mapDispatchToProps 告诉组件
4. 把context从业务逻辑中删除，提供了Provider来干脏活累活。