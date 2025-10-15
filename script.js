function open_menu(){
    let overlay = document.querySelector("#overlay");
    let navigation = document.querySelector("#navigation");
    let overlay_status = overlay.style.display;
    if(overlay_status == "block"){
        overlay.style.display = "none";
        navigation.style.display = "none";
    }else{
        overlay.style.display = "block";
        navigation.style.display = "block";
    }
}

function abort_overlay(){
    let overlay = document.querySelector("#overlay");
    let navigation = document.querySelector("#navigation");
    overlay.style.display = "none";
    navigation.style.display = "none";
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        const offset = target.offsetTop - (window.innerHeight / 2) + (target.offsetHeight / 2);
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});
