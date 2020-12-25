(function(){
    
    var sign=document.querySelector('.nav');
    sign.addEventListener('click',function(event){   
        var dangqian=event.target;
        if(dangqian.className=='sign')
       {
        for(var i=0;i<3;i++){
           
            sign.children[i].style.backgroundColor='rgba(1, 74, 158, 0.3)';
            sign.children[i].children[0].style.borderRight='0.8rem solid rgba(1, 74, 158, 0.3)';
            sign.children[i].children[1].style.borderLeft='1rem solid rgba(1, 74, 158, 0.3)';
        }
        dangqian.style.backgroundColor='#0c5c92';
        dangqian.children[0].style.borderRight='0.8rem solid #0c5c92';
        dangqian.children[1].style.borderLeft='1rem solid #0c5c92';
       }
      if(dangqian.id=='t2'||dangqian.id=='t3'){
          var neirong=document.querySelector('.neirong');
          neirong.style.display='none';
      }
      if(dangqian.id=='t1'){
        var neirong=document.querySelector('.neirong');
        neirong.style.display='flex';
    }
    })

    var sign2=document.querySelector('.nav2');
    sign2.addEventListener('click',function(event){   
        var dangqian=event.target;
        if(dangqian.className=='sign')
       {
        for(var i=0;i<3;i++){
           
            sign2.children[i].style.backgroundColor='rgba(1, 74, 158, 0.3)';
            sign2.children[i].children[0].style.borderRight='0.8rem solid rgba(1, 74, 158, 0.3)';
            sign2.children[i].children[1].style.borderLeft='1rem solid rgba(1, 74, 158, 0.3)';
        }
        dangqian.style.backgroundColor='#0c5c92';
        dangqian.children[0].style.borderRight='0.8rem solid #0c5c92';
        dangqian.children[1].style.borderLeft='1rem solid #0c5c92';
       }
       if(dangqian.id=='t5'||dangqian.id=='t6'){
        var neirong=document.querySelector('.neirong2');
        neirong.style.display='none';
    }
    if(dangqian.id=='t4'){
      var neirong=document.querySelector('.neirong2');
      neirong.style.display='flex';
  }
    })
    var folder=document.querySelectorAll('.folder');
    var n=0;
    


    folder.forEach(function(item){
      
        var node=document.createElement("button");
    var textnode=document.createTextNode("+");
    if(n==0){
        textnode=document.createTextNode("-");
    }
    node.appendChild(textnode);
    
    var node1=document.createElement("p");
    var textnode1=document.createTextNode("景德镇分属党委");
    node1.appendChild(textnode1);
    var node2=document.createElement("p");
    var textnode2=document.createTextNode("赣州分属党委");
    node2.appendChild(textnode2);   
        item.appendChild(node);
        if(n==1){
            item.children[0].innerText='-';
            item.appendChild(node1);
            item.appendChild(node2);
        }
        if(n==0){
            item.children[1].addEventListener('click',function(){                  
                if(this.innerText=='+'){
                    this.innerText='-';
                    item.children[0].style.display='block';
                }else{
                    this.innerText='+';
                    item.children[0].style.display='none';
                }
            })
        }else{
            item.children[0].addEventListener('click',function(){                  
                if(this.innerText=='+'){
                    this.innerText='-';
                   
                    item.appendChild(node1);
                    item.appendChild(node2);
                }else{
                    this.innerText='+';
                    item.removeChild(item.children[1]);
                    item.removeChild(item.children[1]);
                }
            })
        }
        


        n++;
    });


})()