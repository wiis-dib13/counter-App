let num = 0
let jcp = document.getElementById("re")

function calcule(){
num+=1
jcp.textContent = num + " hour,"
}
let score= document.getElementById("score")

function save(){
  score.textContent += num + " - "
  num = 0 
  jcp.textContent = 0
}

