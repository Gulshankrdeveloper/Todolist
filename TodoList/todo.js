let inputs=document.querySelector("#in")
let text=document.querySelector(".text")

function Add(){
    if(inputs.value=="")
    {
        alert("Please enter your task first")
    }
    else{
        let newElement=document.createElement("ul")
        newElement.innerHTML=`${inputs.value} <span> &#xe872</span>`
        text.appendChild(newElement)
        inputs.value=""

        newElement.querySelector("span").addEventListener("click",remove)
        function remove(){
            newElement.remove()
        }
    }
}