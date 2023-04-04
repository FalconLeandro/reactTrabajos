var spanTip = document.getElementById("tip");

function bgChanger() {
    
    var label1 = document.getElementById("label1");
    
    const tema = document.body.classList.toggle('dark');

    if (tema) {
        label1.innerHTML='<i class="fas fa-moon i"><span class="span-tip" style="color: #3E3E3E;">Dark Mode</span></i>';
        spanTip.setAttribute('style','color:#404040');
        
    } else{
        label1.innerHTML='<i class="fas fa-sun i"><span class="span-tip">Ligth Mode</span></i>';
        spanTip.setAttribute('style','color:#8EC5FC;');
        
    }

}
function cardChanger() {
    var card = document.querySelectorAll(".card");

    card.forEach(element => {
        element.classList.toggle('cards-contract');
        if (element.classList.contains('cards-contract')) {
            spanTip.textContent= "Unfold";
        } else {
            spanTip.textContent= "Contract";
        }
        
    });
    
    
}


