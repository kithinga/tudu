<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <!-- Modal just laying around -->
      <div
        class="modal  fade"
        id="exampleModal01"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="exampleModalLabel">
                <span class="material-icons syi">edit</span>Edit  tasks
              </h6>
            </div>
            <div class="modal-body">
              <form class="task-form" autocomplete="off">
                <label for="name">Task title</label><br />
                <input
                  type="text"
                  id="name"
                  v-model="taskName"
                  placeholder="Task title"
                  required
                /><br />

                <label for="details">Details</label><br />
                <input
                  type="text"
                  id="details"
                  v-model="taskDetails"
                  placeholder="Details"
                  required
                />

                <label for="date">Date</label><br />
                <input
                  type="date"
                  v-model="dueDate"
                  placeholder="Due-Date"
                  required
                />

                <button type="submit" class="submit shadow-sm" @click="EditTask">
                  Edittask
                </button>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EditTask',
}
</script>


<style scoped>
     .task-form{
    text-align:left;
}


.task-form input{
    height:2.8rem;
    width:100%;
    border-radius:4px;
    padding-left: 1.7rem;
    border: solid 1px rgb(217, 215, 224);
}

.task-form textarea{
    min-height:4.4rem;
    height:auto;
    width:100%;
    border-radius:4px;
    padding-left: 1.7rem;
    border: solid 1px rgb(217, 215, 224);
    padding-top: 1rem;
}
input:focus{

    outline: none;
    border: solid 2px rgb(197, 183, 235);
  }
textarea:focus{

    outline: none;
    border: solid 2px rgb(190, 178, 221);
  }


#date,#name,#details{
    font-weight:400;
    font-size:11px;
    color: rgb(91, 78, 204);
}


.task-form label{
    text-align:left;
    font-size:13px;
    font-weight:500;
    color: rgb(109, 114, 177);
    margin-top:1.3rem;
}
.submit{
    font-size:13px;
    color: rgb(253, 253, 253);
    border: solid 1px rgb(255, 255, 255);
    background-color:rgb(109, 107, 221);
    margin-top:2rem;
    border-radius:20px;
    width:7rem;
    font-weight: 500;
    height:2.8rem;
}
.btn-group{
    /* background-color:rgb(109, 109, 179); */
    padding:0;
    margin: 0;
    border-radius: 4px;
    border-bottom-left-radius:0.7rem;
   /* border: solid 1px rgb(243, 241, 253); */
}

button{
    outline: none;
}


.card-head{
    color: rgb(197, 190, 190);
    border-radius:20px;
    text-align:right;
    /* background-color:rgb(250, 249, 253); */
}

.dropdown-menu{
/* background-color:red;     */
background-color: rgb(253, 253, 255);
border          : solid 1px rgb(233, 232, 236);    
padding:1rem;
}
.done,.edit,.close{
  margin:0.55rem;
  cursor: pointer;
}
.done:hover,.edit:hover,.close:hover{
  transform:scale(1.4);
  
}

.close{
    color: rgb(197, 101, 64);
    font-weight:500;
}
.edit{
    color:rgb(76, 122, 173);
}
.ver{
    color: rgb(146, 138, 156);
}
.done{
    color: rgb(94, 64, 128);
}
</style>