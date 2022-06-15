<template>
  <div class="App">
  <es-head title="购物车"></es-head>
  <es-goods 
  v-for='item in goodslist' 
  :key="item.id" 
  :id="item.id"
  :title="item.goods_name"
  :pic="item.goods_img"
  :price="item.goods_price"
  :state="item.goods_state"
  :count="item.goods_count"
  @statechange="onstagoodschang"
  ></es-goods>
  <es-footer :amount="amount" :total="total" @fullchang="onFullStatechange"></es-footer></div>
</template>

<script>
import EsHead from './components/es-head/EsHead.vue'
import EsFooter from './components/es-footer/EsFooter.vue'
import EsGoods from './components/es-goods/EsGoods.vue'
export default {
  created() {
    this.getGoodsList()
  },
  data() {
    return{
      goodslist:[]
    }
  },
  components:{
    EsHead,
    EsFooter,
    EsGoods,
  },
  methods: {
    async getGoodsList() {
      const { data:res } = await this.$http.get('/api/cart')
      if (res.status !== 200) return  alert('请求失败!')
      this.goodslist =res.list
    },
    onFullStatechange(infull){
      this.goodslist.forEach(x => x.goods_state = infull)
    },
    onstagoodschang(e) {
      const findResult = this.goodslist.find(x => x.id == e.id)
      if (findResult) {
        findResult.goods_state = e.value
      }
    }
    
  },
  computed:{
    amount(){
      let a=0
      this.goodslist.filter(x => x.goods_state).forEach(x =>{
        a +=x.goods_price * x.goods_count
      })
      return a
    },
    total() {
      let t=0
      this.goodslist.filter(x => x.goods_state).forEach(x =>{
        t +=x.goods_count
      })
      return t
    }
    
  },
}
</script>

<style lang="less" scoped>
.App {
  padding: 40px 0 50px 0;
}
</style>