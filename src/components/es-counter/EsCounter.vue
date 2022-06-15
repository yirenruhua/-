<template>
  <div class="conter-container">
    <button type="button" class="btn btn-light btn-sm" @click="onSubClick">-</button>
    <input type="number" class="form-control form-control-sm ipt-num" v-model.number="number">
    <button type="button" class="btn btn-light btn-sm" @click="onAddClick">+</button>
  </div>
</template>

<script>
export default {
  props:{
    num:{
      type:Number,
      default:0
    },
    min:{
      type:Number,
      default:NaN
    }
  },
  data() {
    return{
      number:this.num,
    }
  },
  methods:{
    onSubClick() {
      if(!isNaN(this.min) && this.number- 1 <this.min) return
      this.number--
    } ,
    onAddClick() {
      this.number++
    }
  }
}
</script>

<style lang="less" scoped>
.conter-container {
  display: flex;
}
.btn {
  float: left;
}
.ipt-num {
  float: left;
  width: 34px;
  text-align: center;

}
</style>