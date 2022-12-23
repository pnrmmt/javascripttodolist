
    let userformDOM = document.querySelector("#userForm") //forma ulaşıyoruz
    userformDOM.addEventListener("submit",addTask)
    const TASK = document.querySelector("#task")
    let checkDOM = document.querySelector("#list") //seçme fonksiyonu için
    
    
    //görev kaydetme fonksiyonu
    function addTask(event) {   
        event.preventDefault()
        if(TASK.value != "" && TASK.value !=0) {
            addList(TASK.value)
            TASK.value ="" // inputu sıfırladık
            $('.success').toast('show');
    
        }else {
            $('.error').toast('show'); 
        }
    }
    
    let addlistDOM = document.querySelector("#list") // eklenen görevleri listeye bağlama fonksiyonu
    function addList(task){
        let liDOM =document.createElement("li")
        liDOM.innerHTML = `${task}`
        addlistDOM.append(liDOM)
    
        let span = document.createElement("SPAN"); // sonradan ekleyeceğimiz görevler için span oluşturduk (kapatma butonu)
        let unicode1 = document.createTextNode("\u00D7"); // spana karşılık gelen kodu belirttik
        span.className = "close"; // eklediğimiz spanın hangi sınıfa dahil olduğunu belirttik
        span.addEventListener("click", silmefunc);
        span.appendChild(unicode1); // span 'ı, belirttiğimiz kod yazısına bağladık
        liDOM.appendChild(span); // eklemiş olduğumuz yeni liste elemanını da span'a bağladık
    
    
    }
    //Yeni eklenen görevi silme fonksiyonu 
    function silmefunc(e) {
        const item = e.target.parentElement;
        item.remove();
        
      } 
      
    //seçme fonksiyonu
    checkDOM.addEventListener("click", checkTask)
    
    function checkTask (gorevler) {
        if (gorevler.target.tagName ="li") {
            gorevler.target.classList.toggle("checked")
        }
    }
    // Toggle: Öğe görünür durumdaysa gizlemeyi, gizli durumdaysa görünür hale getirmemizi sağlar.
    
    // //var olan görevlere çarpı butonu
    // let closeDOM = document.getElementsByTagName("li") // var olan listeyi aldık
    // for(i=0; i < closeDOM.length; i++) {
    //     let span =document.createElement("SPAN")
    //     let unicode2 = document.createTextNode("\u00D7")
    //     span.className = "close"
    //     span.appendChild(unicode2) 
    //     closeDOM[i].appendChild(span) // var olan liste elemanlarını span'a bağladık
    // }
    
    // //var olan görevleri silmek için
    // let close= document.getElementsByClassName("close")
    // for (let i = 0; i<close.length; i++) {
    //     close[i].onclick = function() {
    //         let li = this.parentElement;
    //         li.style.display ="none";
            
          
    //     }
        
    // }
    