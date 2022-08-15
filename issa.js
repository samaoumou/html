let color=['white','brown','yellow','red','green'];
let button=document.getElementById('button');
button.addEventListener('click',function couleur(){
    var randomColor=color[Math.floor(Math.random()*color.length)]
    let bloc1=document.getElementById('bloc1');
    if(randomColor=='white'){
        bloc1.style.color='black';
    }
    else{
        bloc1.style.color='black';
    }
    let bloc2=document.getElementById('bloc2');
    if(randomColor=='white'){
        bloc2.style.color='black'; 
    }
    else{
        bloc3.style.color='black';
    }
    let bloc3=document.getElementById('bloc3');
    if(randomColor=='white'){
        bloc3.style.color='black';
    }
    else{
        bloc3.style.color='black';
    }
    let bloc4=document.getElementById('bloc4');
    if(randomColor=='white'){
        bloc4.style.color='black';
    }
    else{
        bloc4.style.color='black';
    }
})     


   