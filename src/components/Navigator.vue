<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <!--  -->
      <div class="col">
        <div class="tsk">
          <router-link to="/tasks">
            <button class="nvbt">Tasks</button>
          </router-link>
           <router-link to="/future">
            <button class="nvbt">Futures</button>
          </router-link>
           <router-link to="/pending">
            <button class="nvbt">Pending</button>
          </router-link>
          <router-link to="/perfomance">
            <button class="nvbt">Perfomance</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
     .nvbt{
       /* height:2.3rem; */
       border: none;background-color:rgb(236, 243, 242);
       border-radius:3px;
       font-weight:500;
       font-size:13px;
       padding: 0.7rem;
       padding-left: 1rem;
       padding-right: 1rem;
       margin:5px;
       border: solid 1px rgb(230, 231, 231);
     }
     .nvbt:hover{
       background-color:rgb(244, 252, 250);
       border: rgb(176, 240, 215) solid 1px;
     }
</style>

