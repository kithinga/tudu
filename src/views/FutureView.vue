
<template>
  <Navigator />
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-lg-2">
        <!-- css for status check is in the tasks css -->
          <div class="status-check shadow-sm">
              <ul>
                <h5>Task status</h5>
                <li class="check-text shadow-sm">
                    <router-link to="/tasks">
                        Ongoing <span class="ong check-span"></span>
                    </router-link>
                </li>
                <li class="check-text shadow-sm">
                    <router-link to="/pending">
                        Overdue <span class="ovd check-span"></span>
                    </router-link>
                </li>
                <li class="check-text shadow-sm">
                    <router-link to="/future">
                        Complete <span class="com check-span"></span>
                    </router-link>
                </li>
              </ul>
            </div>
      </div>
      <div class="col-lg-8">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-md-8 tacent">
              <div class="container-fluid">
                <div class="row no-gutters checker">
                  <div class="col-lg-6">
                    <div class="tid-task">
                      <div class="fute-avar">
                        <h4 class="fute-tihead">
                          Futures<span class="material-icons fute-tic"
                            >next_plan</span
                          >
                        </h4>
                        <h5 class="fute-stat">to be reused</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="fute-des">
                      <h5 class="shadow-sm">
                        Task statistics to mark progress
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Chart content goes here -->
              <div class="container-fluid chart-con">
                <div class="row no-gutters justify-content-center">
                  <div class="col futes">
                    <text
                      >Nobodys call, i call the shots Vue is a front-end
                      JavaScript framework used to create single-page apps that
                      run on the client-side. It can also be used to create
                      full-stack applications by making HTTP requests to a
                      backend server. It is popular with Node.js and the
                      Express(MEVN stack). JSON server is an npm package that
                      lets you create mock REST APIs with zero coding. It is
                      used to create a simple JSON file that can be used as a
                      database and responds to HTTP requests. Axios is the HTTP
                      client that we will use to make HTTP requests to the JSON
                      server. In this article, we will build a shopping list
                      application. We will start with a blank Vue.js
                      application, then add the JSON server for local data
                      storage, and Axios for making HTTP requests:
                    </text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2"></div>
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
      const res = await axios.get(`http://localhost:3000/futures`);
      this.future = res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
};

// Chart js here
</script>



<style scoped>
.tacent {
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  border: solid 1px rgb(250, 243, 243);
  padding-bottom: 1.6rem;
  width: 100%;
}
</style>