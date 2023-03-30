const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addtoDo(this.value)
            this.value = ""
        }
    }
)
const addtoDo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML =` 
    ${item} 
    <i class="fa fa-close" style="font-size:24px"></i> `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    toDoBox.appendChild(listItem)
}