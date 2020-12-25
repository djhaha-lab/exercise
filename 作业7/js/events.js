(function(){
    
    var sign=document.querySelector('.nav');
    sign.addEventListener('click',function(event){   
        var dangqian=event.target;
        if(dangqian.className=='sign')
       {
        for(var i=0;i<3;i++){
            console.log( sign.children[i]);
            sign.children[i].style.backgroundColor='rgba(1, 74, 158, 0.3)';
            sign.children[i].children[0].style.borderRight='1rem solid rgba(1, 74, 158, 0.3)';
            sign.children[i].children[1].style.borderLeft='1.2rem solid rgba(1, 74, 158, 0.3)';
        }
        dangqian.style.backgroundColor='#0c5c92';
        dangqian.children[0].style.borderRight='1rem solid #0c5c92';
        dangqian.children[1].style.borderLeft='1.2rem solid #0c5c92';
       }
    })
})()