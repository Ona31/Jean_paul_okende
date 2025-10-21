
window.addEventListener("scroll", function(){
    const nav = document.getElementById("header");
    if(window.scrollY > 50 ){
        nav.classList.add("scroll")
    }
    else{
        nav.classList.remove("scroll")
    }
})