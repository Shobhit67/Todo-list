const ull = document.querySelector("#to-do-box");
const input = document.querySelector("#item");

input.addEventListener("keyup", 
function(event) {
    if(event.key == "Enter"){
        addTOdo(this.value);
        this.value = "";
    }
})

const addTOdo = (e) => {
    const createLi = document.createElement("li");
    createLi.innerHTML = ` ${e} <i class="fas fa-times"></i> `;
    ull.appendChild(createLi)

    createLi.addEventListener("click", 
    function (){
        this.classList.toggle("done");
    })

    createLi.querySelector("i").addEventListener("click", ()=> {
        createLi.remove();
    })
    
    document.querySelector("span").classList.add("removee");

    
}

// input.addEventListener("keypress", 
// function (){
//     document.querySelector("span").classList.add("removee");
// })


