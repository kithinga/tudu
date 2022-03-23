
<template>
  <Navigator />
  <div><h4 class="tihead">Perfomance</h4></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                 <div class="pers" v-for="per of perfomance" :key="per.id">
                     
                 </div>
                 
            </div>
        </div>
    </div>

</template>



<script>
import Navigator from '@/components/Navigator.vue'
import axios from "axios";
export default {
    components: {
        Navigator
    },
    data(){
        return{
               perfomance:[],
        }
    } ,
    methods:{
           async getAllPers() {
               const {res} = await axios.get()
           }
    },
    created() {
        this.getAllPers();
    }
}
 // Chart js here
 
</script>