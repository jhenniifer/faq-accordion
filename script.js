let accordion =  document.querySelectorAll('.accordion');

accordion.forEach(function(acc){
    acc.addEventListener('click', function(){
        const parentDiv = acc.parentElement;
        const siblingEl = parentDiv.nextElementSibling;
        const ImgEl = acc.nextElementSibling;

    if(siblingEl.style.display === 'none'){
            siblingEl.style.display = 'block';
            ImgEl.src = 'assets/images/icon-minus.svg';
    }else{
        siblingEl.style.display = 'none';
        ImgEl.src = 'assets/images/icon-plus.svg';
    }
})
}) 
