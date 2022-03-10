<template>
  <Navigator />
  <div><h4 class="tihead">Futures</h4></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2" v-for="fute in futures" :key="fute.id">
        <div>
           <p>{{fute.id}}</p>
          <h4>{{ fute.title }}</h4>
          <p>{{ fute.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navigator from "@/components/Navigator.vue";
export default {
  components: {
    Navigator,
  },
  data() {
      return {
        futures: [
        ]
      }
  },
    methods:{
      async getData(){
        try {
          const response = await this.$http.get(
            'http://localhost:3000/futures'
          );
          this.futures = response.data;
        }catch (e) {
          console.error(e)
        }
      }
    }
};
</script>