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
  <p class="btn-expand">
  <a class="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
   <h6> All Activities <span class="material-icons">
apps expand_more
</span> </h6>
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="carda1">
     

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
      border-radius:    7px;
      font-weight:      500;
      font-size:        13px;
      padding:          0.4rem;
      padding-left:     0.6rem;
      padding-right:    0.6rem;
      margin:           5px;
      width:            7.5rem;
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
  .collapse{
    padding: 1px;
  }
  .mobile-nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* border: solid 1px rgb(233, 231, 231); */
    border-top-left-radius: 21px;
    border-top-right-radius: 21px;
    background-color:white;
    /* margin: 0.7rem; */
    /* padding: 0.4rem; */
    padding-top: 1rem;
  
  }
  .carda1{
    padding: 1px;
  }
  .nvbt {
      /*                height:2.3rem; */
      border:           none;
      background-color: rgb(249,       255, 255);
      border-radius:    8px;
      font-weight:      500;
      font-size:        13px;
      padding: 2px;
      /* margin:           10px; */
      min-width:       7rem;
      height:           3rem;
      border:           solid          1px  rgb(232, 229, 235);
}

.nav-black{
  background-color:rgb(245, 245, 250);
  padding-top:0.1rem;
  /* border-bottom: 3px solid rgb(255, 255, 255); */
}
.btn-expand{

  margin: 3px;
  padding-top: 0.5rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  border-radius:6px;
  width:98%;
  border: solid 0.7px rgb(232, 234, 236);
}
.btn-expand span{
  margin-left: 3rem;
  color: rgb(49, 131, 151);
  line-height:10px;
  vertical-align: middle;
}
.btn-expand h6{
  /* margin-left: 3rem; */
  font-weight: 600;
  /* letter-spacing:-0.5px; */
  color: rgb(131, 128, 163);
  font-size: 15px;
}

}
</style>

