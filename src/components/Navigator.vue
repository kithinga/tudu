 <template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col">
        <div class="tsk">
          <router-link to="/">
            <button class="nvbt bthome">
              <span class="material-icons">home</span>
            </button>
          </router-link>
          <router-link to="/tasks">
            <button class="nvbt">
              <span class="material-icons">task</span>Task
            </button>
          </router-link>
          <router-link to="/future">
            <button class="nvbt">
              <span class="material-icons">next_plan</span>Future
            </button>
          </router-link>
          <router-link to="/pending">
            <button class="nvbt">
              <span class="material-icons">pending_actions</span>Pending
            </button>
          </router-link>
          <router-link to="/perfomance">
            <button class="nvbt">
              <span class="material-icons">timeline</span>Perfomance
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
.tsk {
  margin: 1rem;
}

.nvbt {
  /* height:2.3rem; */
  border: none;
  background-color: rgb(246, 252, 251);
  border-radius: 3px;
  font-weight: 500;
  font-size: 13px;
  padding: 0.4rem;
  padding-left:0.6rem;
  padding-right:0.6rem;
  margin: 5px;
  border: solid 1px rgb(230, 231, 231);
}
.nvbt span{
  color: rgb(57, 156, 123);
  margin-right: 0.5rem;
}

.bthome{
  border-radius:50rem;
  padding-left:17px;
  margin-right: 2rem;
}

.nvbt:hover {
  background-color: rgb(244, 252, 250);
  border: rgb(176, 240, 215) solid 1px;
}



</style>

