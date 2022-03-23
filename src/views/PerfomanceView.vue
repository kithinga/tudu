
<template>
  <Navigator />
  <div><h4 class="tihead">Perfomance</h4></div>
  <div class="container-fluid">
    <div class="row no-gutters">
        <div class="col-md-8 tacent">
        <div class="container-fluid">
          <div class="row no-gutters checker">
            <div class="col-lg-6">
              <div class="tid-task">
                <div class="avar">
                  <h4 class="tihead">
                    Perfomance<span class="material-icons tic">timeline</span>
                  </h4>
                  <h5 class="tod">statistics</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="tid-btn">
                <!-- Button to trigger modal -->
                <button
                  type="button"
                  class="btn-addtask shadow-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <p class="addsi">
                    Add-task
                    <span class="material-icons icona">add</span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

      

        <div class="container-fluid">
          <div class="row no-gutters justify-content-center">
            <div class="col-lg-3" v-for="per of perfomance" :key="per">
                <p>{{per.id}}</p>
                <p>{{per.name}}</p>
            </div>
          </div>
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
      perfomance: [],
    };
  },

  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/perfomance`);
      this.perfomance = res.data;
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  },
};

// Chart js here
</script>