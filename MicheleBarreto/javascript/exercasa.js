const inputNome = document.getElementById("enderecoInputNome");
const inputCEP = document.getElementById("enderecoInputCEP");
const inputRua = document.getElementById("enderecoInputRua");
const inputNumero = document.getElementById("enderecoInputNumero");
const inputComplemento = document.getElementById("enderecoInputComplemento");
const button = document.querySelector(".endereco__button");


button.addEventListener("click", function(event){
    event.preventDefault();

    if(inputNome.value === ""){
      inputNome.focus();
      return false;
    }else if(inputCEP.value === ""){
        inputCEP.focus();
        return false;
    }else if(inputRua.value === ""){
        inputRua.focus();
        return false;
    }else if(inputNumero.value === ""){
        inputNumero.focus();
        return false;
    }


    document.querySelector(".endereco__subtitle").textContent = `Parabéns ${inputNome.value} Endereço cadastrado com sucesso!`

    const item = document.createElement("div");

    const nome = document.createElement("p");
    nome.textContent = inputNome.value;

    const endereco = document.createElement("p");
    endereco.textContent = `${inputRua.value}, ${inputNumero.value} ${inputComplemento.value && inputComplemento.value} 
    - ${inputCEP.value}`;
    

    item.appendChild(nome);
    item.appendChild(endereco);

   document.getElementById("lista").appendChild(item);

    inputNome.value = ""
    inputCEP.value = ""
    inputRua.value = ""
    inputNumero.value = ""
    inputComplemento.value = ""
    
    return true;
})
