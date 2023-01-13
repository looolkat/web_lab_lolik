let ArrayLinks = document.querySelectorAll(".category-menu a");
let PostArray = document.querySelectorAll(".itema");



ArrayLinks.forEach(link => {
    link.onclick = function(event){
        let link_text = link.innerHTML;
        event.preventDefault();
        console.log("сработал");
        PostArray.forEach(post =>{
            if(post.lastElementChild.childElementCount > 1){
                for(let i = 0; i<post.lastElementChild.childElementCount-1; i++){
                    if(post.lastElementChild.children[i].textContent == link_text || post.lastElementChild.lastElementChild.textContent == link_text){
                        post.classList.remove("block");
                    }else{
                        post.classList.add("block");
                    }
                }
            }else{
                if(post.lastElementChild.children[0].textContent == link_text){
                    post.classList.remove("block");
                }else{
                    post.classList.add("block");
                }
            }
        });
    };
});