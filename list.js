
   const TASK = document.getElementsByClassName("todo_input")[0]
   const addTaskBtnDOM = document.getElementsByClassName("button")[0]
   let checkDOM = document.querySelector("#list") //seçme fonksiyonu için
   
   addTaskBtnDOM.addEventListener("click",() =>{
       if(TASK.value != "" && TASK.value !=0) {
          
       let localgorevler = JSON.parse(localStorage.getItem("gorev"))
       if(localgorevler === null) {
           taskList = []
       }else {
           taskList = localgorevler;
       }
       taskList.push(TASK.value)
       localStorage.setItem("gorev",JSON.stringify(taskList))
           
               TASK.value ="" // inputu sıfırladık
               $('.success').toast('show');
   
           }else {
               $('.error').toast('show'); 
           }
   
       
       showlist()
   })
   
   function showlist() {
   
       let outPut = "";
       let taskListShow = document.querySelector("#list")
       let localgorevler = JSON.parse(localStorage.getItem("gorev"))
       if(localgorevler === null) {
        taskList = []
       }else {
        taskList = localgorevler;
       }
       taskList.forEach((data, index)=> {
           outPut += `<li> ${data} <button class="close" onclick="deleteItem(${index})">x</button></li>`
   
       });
       taskListShow.innerHTML = outPut;
   
   }
   showlist()
   
   function deleteItem(index){
       let localgorevler = JSON.parse(localStorage.getItem("gorev"))
       taskList.splice(index, 1)
       localStorage.setItem("gorev",JSON.stringify(taskList))
       showlist()
   }
   
    checkDOM.addEventListener("click", checkTask)
       
       function checkTask (gorevler) {
           if (gorevler.target.tagName ="li") {
               gorevler.target.classList.toggle("checked")
           }
       }