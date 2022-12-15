
    // Listeye yeni görev eklemek
    function newElement() {
      
        let li = document.createElement("li"); // yeni liste elemanı oluşturuldu
        let listTask = document.querySelector("#list") // liste elemanlarının alınması için listTask değişkeni oluşturuldu
        let task = document.querySelector("#task"); // gireceğimiz input değerini almak için
        let gorev = document.createTextNode(task.value); // ekleyeceğimiz görevi metin ile oluşturma
        li.appendChild(gorev);  // oluşturulan yeni liste elemanı gorev değişkenine bağlandı
        
    
        //Local Storage Veri Ekleme
        let localItems = JSON.parse(localStorage.getItem("localItem"))
        
        if(localItems === null) {
          taskList = [];
        }else {
          taskList = localItems;
        }
        taskList.push(task.value)
        localStorage.setItem("localItem", JSON.stringify(taskList))//Local Storage Veri Ekleme Sonu
        
        
        //Görev Ekleme Başlangıç Kısmı
        if (task.value != '' && task.value != 0 ) {
           
              listTask.appendChild(li);  
              $(document).ready(function () {
              $('.success').toast('show'); // toast bildirimi
            
          });
        } else {
          
              $(document).ready(function () {
              $('.error').toast('show');    
        });
        }
        task.value = "";
        // .value =" " ile input'ta görünen değeri sıfırladık
    
    
        //Kapatma butonu eklemek (sonradan ekleyeceğimiz görevler için)
        let span = document.createElement("SPAN"); // sonradan ekleyeceğimiz görevler için span oluşturduk (kapatma butonu)
        let unicode1 = document.createTextNode("\u00D7"); // spana karşılık gelen kodu belirttik
        span.className = "close"; // eklediğimiz spanın hangi sınıfa dahil olduğunu belirttik
        span.appendChild(unicode1); // span 'ı, belirttiğimiz kod yazısına bağladık
        li.appendChild(span); // eklemiş olduğumuz yeni liste elemanını da span'a bağladık
    
        let close= document.getElementsByClassName("close")
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var li = this.parentElement;
            li.style.display = "none";
          }
        }  
      } // eklediğimiz çarpı butonuna (span) kapatma özelliği ekledik 
    
        //Kapatma butonu eklemek (var olan liste elemanları için)
        let closeDOM = document.getElementsByTagName("li") // var olan listeyi aldık
        for(i=0; i < closeDOM.length; i++) {
            let span =document.createElement("SPAN")
            let unicode2 = document.createTextNode("\u00D7")
            span.className = "close"
            span.appendChild(unicode2) 
            closeDOM[i].appendChild(span) // var olan liste elemanlarını span'a bağladık
        }
    
        //Eklenen Görevleri Seçmek
        let checkDOM = document.querySelector("#list")
        checkDOM.addEventListener("click", checkTask)
    
        function checkTask(gorevler) {
            if(gorevler.target.tagName="li"){
    
                gorevler.target.classList.toggle("checked");
            }
        }
        // Toggle: Öğe görünür durumdaysa gizlemeyi, gizli durumdaysa görünür hale getirmemizi sağlar.
    
    
        // Eklenen Görevleri Silmek 
        let close= document.getElementsByClassName("close")
        for (let i = 0; i<close.length; i++) {
            close[i].onclick = function() {
                let li = this.parentElement;
                li.style.display ="none";
                
              
            }
            
        }
    
    
       
