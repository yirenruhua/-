<template>
  <div class="settlement_box">
    <div class="qx">
      <input class="inp " type="checkbox" :checked="info" @change="checkboxchang"/>
      <p>全选</p>
    </div>
    <div class="price">
      <p>合计</p>
      <span>￥{{ amount.toFixed(2) }}</span>
    </div>
    <div class="js">
      <button class="btn btn-primary btn-settle" :disabled="total === 0">结算({{ total }})</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'EsFooter',
  emits:["fullchang"],
  props: {
    
    amount: {
      default: 0,
      type: Number,
    },
    total: {
      default: 0,
      type: Number,
    },
    info:{
      default:false,
      type:Boolean,
    }
  },
  methods:{
    checkboxchang(e){
      this.$emit("fullchang",e.target.checked)
    }
  }
};
</script>

<style lang='less' scoped>
.settlement_box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: aqua;
  font-size: 12px;
}
.qx {
  float: left;
  width: 120px;
  height: 50px;
}
.inp {
  float: left;
  margin-top: 20px;
  margin-left: 10px;
}
.qx p {
  float: left;
  margin-top: 20px;
}
.price {
  float: left;
  width: 130px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: 700;
}
.price p {
  display: inline-block;
  font-weight: 300;
  margin-right: 10px;
}
.price span {
  color: brown;
}
.js {
  float: right;
  line-height: 50px;

}

</style>