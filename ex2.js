
let form = document.querySelector("#form");
let trabalho = document.querySelector("#trabalho");
let nome = document.querySelector("#nome");
let botao = document.querySelector("#botao");

addEventListener("submit", function(event){
  event.preventDefault();


if(nome.value === ""){
   alert("coloque eu nome")
}  else if(trabalho.value ===""){
    alert("coloque seu trabalho" )
}else { 

  let pessoa = {
    nome: nome.value,
    trabalho : trabalho.value
  };

  fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(pessoa)
  })

  .then(function(response){
     return response.json()
  })

  .then(function(response){
   alert("cadastro realizado com sucesso") 
  })
}
});




