<template>
  <div class="goods_box">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control">
        <input class="inpt" type="checkbox" :id="id"  :checked="state" @change="oncheckboxchange"/>
        <label class="custom-control-label" :for="id">
          <img :src="pic" alt=""  />
        </label>
      </div>
    </div>
    <!-- 右侧信息 -->
    <div class="goods-info">
      <!-- 商品标签 -->
      <h6>{{ title }}</h6>
      <div class="goods-info-bottom">
        <span class="goods-price">${{ price }}</span>
        
      </div>
      <div class="count"><es-counter :num="count" :min="1"></es-counter></div>
    </div>
  </div>
</template>

<script>
import EsCounter from '../es-counter/EsCounter.vue';
export default {
  components: { EsCounter },
  emits:['statechange'],
  props: {
    id:{
      default:0,
      type:Number,
    },
    title: {
      default: "",
      type: String,
    },
    pic: {
      default: "",
      type: String,
    },
    price: {
      default: "",
      type: Number,
    },
    state: {
      default: "",
      type: Boolean,
    },
    components:{
      EsCounter,
    },
    count:{
      default:0,
      type:Number
    }
  },
  methods:{
    oncheckboxchange(e) {
      this.$emit('statechange',
      {id:this.id,
      value:e.target.checked,})
    }
  }
 
};
</script>

<style lang='less' scoped>
.goods_box {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border-bottom: 1px solid #999;
}
.tumb {
  float: left;
  width: 150px;
  height: 100px;
}
.custom-control {
  float: left;
  width: 150px;
  height: 100px;
}
img {
  width: 90px;
  height: 90px;
  margin-left: 15px;
}
.inpt {
  float: left;
  margin-top: 45px;
  margin-left: 10px;
}
.goods-info {
  position: relative;
  float: left;
  width: 200px;
  height: 100px;
}
h6 {
  margin-top: 3px;
  margin-bottom: 0;
}
span {
  position: absolute;
  top: 70px;
  font-weight: 700;
  color: crimson;
}
.count {
  float: right;
  margin-top: 28px;
}
</style>