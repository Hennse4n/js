const button = document.querySelector(".bttn");
const text = document.querySelector(".texto");

button.addEventListener('click', function(){
    const list = document.querySelector(".lista");
    const txt = document.getElementsByName("name")[0].value
    
    const new_li = document.createElement("li");
    new_li.textContent = txt;

    const new_btn = document.createElement("button");
    new_btn.textContent = "Borrar";

    
    new_btn.addEventListener('click', function(){
        new_li.remove();
        new_btn.remove();
    });

    new_li.appendChild(new_btn);
    list.appendChild(new_li);
});
 

