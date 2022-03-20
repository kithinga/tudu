<template>
  <Navigator />
  <div><h4 class="tihead">Pending</h4></div>
  <div class="container-fluid">
    <div class="row no-gutters justify-content-center">
      <div class="col-lg-2" v-for="pend in pending" :key="pend.id">
        <div class="pnd-card">
          <h5>{{ pend.id }}</h5>
          <p>{{ pend.name }}</p>
          <p>{{ pend.details }}</p>
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
    data() {
      return {
        pending: [],
      };
    },
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/pending`)
        this.pending = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<style scoped>
.pnd-card {
  /* background-color:grey; */
  border: 1px solid rgb(255, 224, 207);
  padding: 1.3rem;
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgb(253, 249, 244);
}

h5 {
  font-size: 13px;
  color: rgb(255, 110, 13);
  font-weight: 600;
}
p {
  font-size: 13px;
  color: rgb(83, 99, 119);
  font-weight: 400;
}
.tihead {
  color: rgb(235, 92, 10);
}
</style>