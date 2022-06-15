<template>
  <div class="shoping_head" :style="{backgroundColor:bgcolor,color:color,fontSize:fSize + 'px'}">{{ title }}</div>
</template>

<script>
export default {
  name:'EsHead',
  props: {
    title: {
      default: "",
      type: String,
    },
    bgcolor:{
      type:String,
      default:'#0078FF',
    },
    color:{
      type:String,
      default:'#fff',
    },
    fsezi:{
      type:Number,
      default:12
    }
  },
};
</script>

<style lang="less" scoped>
.shoping_head {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 45px;
  font-size: 14px;
  line-height: 45px;
  font-weight: 700;
  text-align: center;
  background-color: cornflowerblue;
}
</style>