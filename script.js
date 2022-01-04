
// ----------------------news ----------------------------//
var News=document.querySelector(".news");
var ViewName=document.querySelector(".viewname");
var ViewPhone=document.querySelector(".Viewphone");
var deleteBtn=document.querySelector("#delete");

let list= JSON.parse(localStorage.getItem("view")) ;




            var log=document.querySelector(".log");
            var login=document.querySelector(".login");
         
            let Main = document.querySelector(".main");

          log.onclick=function(){
            
            login.style.display="block";
            
            let username = document.querySelector("#username");
            let pass = document.querySelector("#password");
            let getUser=localStorage.getItem("username");
            let getPassword=localStorage.getItem("password");
            let getform=document.querySelector('#loginn')
            getform.addEventListener("submit",Login)

            function Login(e){
            e.preventDefault();
            if(username.value===""||pass.value===""){
            alert("please Fill Data");
                        }
            else {
            if (username.value==="maya" &&pass.value==="999"
                ) {
                     News.style.display="block";
                     let drawfunction;


                    let list= JSON.parse(localStorage.getItem("view")) ;

                   ( drawfunction=function(list=[]){
                       let draw=list.map((item) =>{
                        
                        return `
                        <div class="name">${item.name}</div>
                        <div class="phone">${item.phone} </div> 
                        `;
                    });
                        News.innerHTML=draw.join(""); 
                      })(JSON.parse(localStorage.getItem("view"))||view);

                    
                   }

            else {
                      alert("username or password is wrong");
                 }
        }
    }
            
          }



            
            let userName = document.querySelector("#name");
            let Phone = document.querySelector("#phone");
            let button = document.querySelector("#donebtn");
            button.addEventListener("click",viewIndex);
         


            function viewIndex(e) {
                e.preventDefault();
                if(userName.value===""||Phone.value===""){
                alert("please Fill Data");
                                        }
                else {
              
                let newname=userName.value;
                    let newphone=Phone.value;
                  

                    let obj={
                    id: list ? list.length + 1 : 1, 
                    name:newname ,
                    phone : newphone ,
                  

                    };

                    let newlist= list ? [...list, obj] :[obj];
                    console.log(newlist);
                    localStorage.setItem("view",JSON.stringify(newlist));
                    userName.value=""
                    Phone.value=""}
                 
            }

