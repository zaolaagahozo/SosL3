function showMessage(){
  alert("Welcome to JavaScript Practical Questions!");
}

const themeBtn = document.getElementById("themeBtn")

themeBtn.addEventListener("click", function(){

  if(document.body.style.background == "white"){

    document.body.style.background = "#0d0f1a"
    document.body.style.color = "white"

  }else{

    document.body.style.background = "white"
    document.body.style.color = "black"

  }

})