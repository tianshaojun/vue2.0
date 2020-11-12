<template>
   <div>
       <h2>{{msg}}</h2>
       <hr/>
       <h3>{{$store.state.count}}-{{count}}</h3>
       <div>
           <button @click="add(10)">+</button>
           <button @click="reduce">-</button>
       </div>
       <div>
           <button @click="addAction">+</button>
           <button @click="reduceAction">-</button>
       </div>
       <!-- module -->
       <!-- <h3>{{$store.state.a.count}}</h3> -->
   </div>
</template>

<script>
   import store from '@/vuex/store'
   import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
   export default{
       data() {
           return {
               msg: 'Hello Vuex'
           }
       },
       //通过computed的计算属性直接赋值
    //    computed: {
    //        count() {
    //            return this.$store.state.count;
    //        }
    //    },

       //通过mapState的对象来赋值
    //    computed: mapState({
    //        count:state=>state.count
    //    }),

       //通过mapState的数组来赋值
       computed: {
           ...mapState(['count']),
        //    count(){
        //        return this.$store.getters.count;
        //    }
           ...mapGetters(['count'])
       },
       methods: {
           ...mapMutations(['add','reduce']),
           ...mapActions(['addAction','reduceAction'])
       },
       store
   }
</script>