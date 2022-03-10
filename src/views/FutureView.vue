<template>
  <Navigator />
  <div><h4 class="tihead">Futures</h4></div>
  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="fute in futures" :key="fute.id">
        <div class="fu-card shadow-sm">
          <h5>{{ fute.id }}</h5>
          <p>{{ fute.name }}</p>
          <p>{{ fute.details }}</p>
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


<style scoped>
.fu-card {
  /* background-color:grey; */
  border: 1px solid rgb(242, 242, 248);
  padding: 1.3rem;
  border-radius: 6px;
  /* box-shadow: 2px 2px 2px rgb(239, 240, 241); */
}

h5 {
  font-size: 13px;
  color: rgb(3, 129, 187);
  font-weight: 600;
}
p {
  font-size: 13px;
  color:rgb(97, 89, 133);
  font-weight: 400;
}
.tihead {
  color: rgb(3, 124, 194);
}
</style>

