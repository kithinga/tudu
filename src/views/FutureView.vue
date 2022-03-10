<template>
  <Navigator />
  <div><h4 class="tihead">Futures</h4></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2" v-for="fute in futures" :key="fute.id">
        <div>
          <p>{{ fute.id }}</p>
          <p>{{ fute.name }}</p>
          <h4>{{ fute.title }}</h4>
          <p>{{ fute.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navigator from "@/components/Navigator.vue";
import axios from "axios";
export default {
  components: {
    Navigator,
  },
  data() {
    return {
      futures: [],
    };
  },
  async created() {
    try {
      const resp = await axios.get(`http://localhost:3000/futures`);
      this.futures = resp.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>


