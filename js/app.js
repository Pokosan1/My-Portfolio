var textOverImages = document.querySelectorAll('.onClickTextOverImage div');


for (var i = 0; i < textOverImages.length; i++) {
    textOverImages[i].onclick=function() {  
        this.classList.toggle('show');
    
    }
}
