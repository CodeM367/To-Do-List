let input = document.querySelector("#search");
let box = document.querySelector("#innerBox");
let storageFull = document.querySelector("span");

let store = 0;
input.addEventListener("keyup",(event)=>{

 if(event.key == "Enter"){
   let inputData = input.value;
   if(store <= 8){
    addToDo(inputData);
    store++;
    input.value = "";
   
   }
   else{
    storageFull.style.display = "block";
   }
   
 }
});
const addToDo = (data)=>{
const listItem = document.createElement("li");
listItem.innerHTML = `${data} <i class="ri-close-line"></i>
        `
        listItem.addEventListener("click",()=>{
            listItem.classList.toggle("done");
        });
        listItem.querySelector("i").addEventListener("click",()=>{
            listItem.remove();
            store--;
            storageFull.style.display = "none";
             })
        box.appendChild(listItem);
 }


