document.querySelector("#push").onclick = function(){
   //herhangibir giriş yapılmadıysa alert verir
   if(document.querySelector("#newtask input").value.length == 0){
      alert("Please Enter a Task")
   }
   else{
      //ekleme yapar
      document.querySelector("#tasks").innerHTML += `
      <div class="task">
         <span id="taskname">
         ${document.querySelector("#newtask input").value}
         </span>
         <button class="delete">
         <i class="fa-solid fa-trash-can"></i>
         </button>
         
      </div>
      `//eklenen öğeyi siler
      const current_task =document.querySelectorAll(".delete");
      for(let i=0;i<current_task.length;i++){
         current_task[i].onclick = function(){
            this.parentNode.remove()
         }
      }
      //Silinen öğenin üzerini çizer
      const task = document.querySelectorAll(".task");
      for(let i=0;i<task.length;i++){
         task[i].onclick = function(){
            this.classList.toggle("completed")
         }
      }

      //entere basınca inputun içini boşaltır
      document.querySelector("#newtask input").value="";
   }

   
}