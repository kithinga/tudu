 <template > 
 
  <div class="container-fluid device-nav ">
    <div class="row no-gutters">
      <div class="col">
        <div class="tsk">
          <router-link to="/">
            <button class="nvbt bthome">
              <span class="material-icons">home</span>
            </button>
          </router-link>
          <router-link to="/tasks">
            <button class="nvbt task-btn rounded">
              <span class="material-icons">task</span>Tasks
            </button>
          </router-link>
          <router-link to="/notes">
            <button class="nvbt task-btn rounded">
              <span class="material-icons">notes</span>Notes
            </button>
          </router-link>
          <router-link to="/future">
            <button class="nvbt future-btn">
              <span class="material-icons">next_plan</span>Future
            </button>
          </router-link>
          <router-link to="/pending">
            <button class="nvbt pending-btn">
              <span class="material-icons">pending_actions</span>Pending
            </button>
          </router-link>
          <router-link to="/perfomance">
            <button class="nvbt perfomance-btn">
              <span class="material-icons">timeline</span>Perfomance
            </button>
          </router-link>
          <router-link to="/perfomance">
            <button class="nvbt perfomance-btn">
              <span class="material-icons"></span>Websites
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile responsive -->
  <div class="nav-black">
  <div class="mobile-nav">

    <div class="mb-bt0">
      <router-link to="/">
        <button class="nvbt home-btn shadow-sm">
          <span class="material-icons">home</span>Home
        </button>
      </router-link>
    </div>

    <div class="mb-bt1">
      <router-link to="/tasks">
        <button class="nvbt task-btn shadow-sm">
          <span class="material-icons">tasks</span>Tasks
        </button>
      </router-link>
    </div>
    <div class="mb-bt2">
      <router-link to="/notes">
        <button class="nvbt note-btn rounded shadow-sm">
          <span class="material-icons">notes</span>Notes
        </button>
      </router-link>
    </div>
    <div class="mb-bt3">
      <router-link to="/future">
        <button class="nvbt future-btn shadow-sm">
          <span class="material-icons">next_plan</span>Future
        </button>
      </router-link>
    </div>
    <div class="mb-bt4">
      <router-link to="/pending">
        <button class="nvbt pending-btn shadow-sm">
          <span class="material-icons">pending_actions</span>Pending
        </button>
      </router-link>
    </div>
    <div class="mb-bt5">
      <router-link to="/perfomance">
        <button class="nvbt perfomance-btn shadow-sm">
          <span class="material-icons">timeline</span>Perfomance
        </button>
      </router-link>
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
      /*                height:2.3rem; */
      border:           none;
      background-color: rgb(249,       255, 255);
      border-radius:    8px;
      font-weight:      500;
      font-size:        13px;
      padding:          0.4rem;
      padding-left:     0.6rem;
      padding-right:    0.6rem;
      margin:           5px;
      width:            7rem;
      height:           3.5rem;
      border:           solid          1px  rgb(232, 229, 235);
}
.nvbt span {
  /* color: rgb(57, 156, 123); */
  margin-right: 0.3rem;
}

.bthome {
  border-radius: 50rem;
  padding-left: 17px;
  margin-right: 2rem;
  color: rgb(85, 86, 95);
}

.nvbt:hover {
  background-color: rgb(247, 255, 253);
  /* background-color: rgb(4, 112, 49); */
  border: rgb(176, 240, 215) solid 1px;
  box-shadow: 3px 3px 3px #f3f2f2;
}

.task-btn span {
  color: rgb(163, 163, 228);
}
.future-btn span {
  color: rgb(115, 175, 202);
}
.pending-btn span {
  color: rgb(218, 165, 129);
}
.perfomance-btn span {
  color: rgb(201, 165, 8);
}

@media (max-width: 575.98px) {
  .device-nav {
    display: none;
  }
  .mobile-nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* border: solid 1px rgb(233, 231, 231); */
    border-top-left-radius: 21px;
    border-top-right-radius: 21px;
    background-color:white;

    /* margin: 0.7rem; */
    padding: 0.4rem;
    padding-top: 1rem;
  
  }
  .nvbt {
      /*                height:2.3rem; */
      border:           none;
      background-color: rgb(249,       255, 255);
      border-radius:    8px;
      font-weight:      500;
      font-size:        13px;
      padding: 2px;
      margin:           5px;
      min-width:            7rem;
      height:           3rem;
      border:           solid          1px  rgb(232, 229, 235);
}

.nav-black{
  background-color:rgb(3, 3, 3);
  padding-top:0.3rem;
  border-bottom: 0.29px solid rgb(255, 255, 255);
}

}
</style>

