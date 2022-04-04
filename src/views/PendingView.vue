
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
                      <div class="pend-avar">
                        <h4 class="pend-tihead">
                          Pending<span class="material-icons pend-tic"
                            >pending_actions</span
                          >
                        </h4>
                        <h5 class="pend-stat">overdue-tasks</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="pend-des">
                      <h5 class="shadow-sm">
                        Task statistics to mark progress
                      </h5>
                      <p>more stuff on the way</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Chart content goes here -->
              <div class="container-fluid chart-con">
                <div class="row no-gutters justify-content-center">
                  <div class="col pends">
                    <text
                      >Nobodys call, i call the shots Vue is a front-end
                      JavaScript framework used to create single-page apps that
                      run on the client-side. It can also be used to create
                      full-stack applications by making HTTP requests to a
                      backend server. It is popular with Node.js and the
                      Express(MEVN stack). JSON server is an npm package that
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
      pending: [],
    };
  },

  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/pending`);
      this.perfomance = res.data;
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