

const light_mode = document.getElementById("light_mode");
const dark_mode = document.getElementById("dark_mode");




setInterval(()=>{
    const Time = Date.now()
      document.getElementById("date").textContent = `Current Time[ms]: ${Time}`;
}, 1000)



light_mode.addEventListener("click",()=>{
   light_mode.style.backgroundColor = `rgb(22, 106, 201)`;
   dark_mode.style.background = `transparent`;
   document.getElementById("profile_card").classList.remove("dark_mode")
   document.getElementById("profile_card").classList.add("light_mode");
   document.getElementById("message_btn").style.color = 'black';
   document.getElementById("message_btn").classList.remove("btn")


   

})

dark_mode.addEventListener("click",()=>{
     dark_mode.style.backgroundColor = `rgb(22, 106, 201)`;
     light_mode.style.background = `transparent`
     document.getElementById("profile_card").classList.remove("light_mode");
     document.getElementById("profile_card").classList.add("dark_mode")
     document.getElementById("message_btn").style.color = 'white';
      document.getElementById("message_btn").classList.add("btn")
     

  
})






   











