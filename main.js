
var currentStep = document.getElementById('currentStep');
var winner = document.getElementById('winner');
var amobaBigBox = document.getElementById('amobaBigBox');
var newGameBtn = document.getElementById('newGame');
var count = 0; 



winner.onclick = function winnerWindowClose() {
    winner.style.display = 'none';
}

createBox(25);
playgame ();
winner.style.display = 'none';


function createBox(boxNumber) {   
    for (i = 0; i < boxNumber; i++) {
    var div = document.createElement('div');
    amobaBigBox.appendChild(div);
    div.setAttribute('id','smallboxCell'+i);
    div.classList.add("boxStyle");
    div.classList.add("overflow-hidden");
    
    if (count == '0') {
        currentStep.innerHTML ='<p>1. játékos következik: X </p>';
    };} }

function clickCounter() {
    count=count+1;
    console.log(count);
}

function playgame () {
Array.from(document.querySelectorAll('.boxStyle'))
.forEach(boxStyle => boxStyle.onclick =  function() {

    clickCounter();
    var  clickx = 'x';
    var  clicko = 'O';
    if (boxStyle.children.length != 0) {
        alert('Kérem, hogy egy üres mezőt válasszon!');
        count = count+1;
        return boxStyle.innerHTML.value;
        
    }
    if (count%2 == 1) {
        boxStyle.innerHTML = '<p class="xstyle">'+ clickx +'</p>';
        currentStep.innerHTML ='<p>2. játékos következik: O </p>';
        boxStyle.children.value = 1;
    } else if(count %2 == 0) {
        boxStyle.innerHTML = '<p class="ostyle">'+clicko+'</p>';
        currentStep.innerHTML ='<p>1. játékos következik: X </p>';
        boxStyle.children.value = 2;
    } 

    
    var b0 = document.getElementById("smallboxCell0").children.value;
    var b1 = document.getElementById("smallboxCell1").children.value;
    var b2 = document.getElementById("smallboxCell2").children.value;
    var b3 = document.getElementById("smallboxCell3").children.value;
    var b4 = document.getElementById("smallboxCell4").children.value;
    var b5 = document.getElementById("smallboxCell5").children.value;    
    var b6 = document.getElementById("smallboxCell6").children.value;
    var b7 = document.getElementById("smallboxCell7").children.value;
    var b8 = document.getElementById("smallboxCell8").children.value;
    var b9 = document.getElementById("smallboxCell9").children.value;
    var b10 = document.getElementById("smallboxCell10").children.value;    
    var b11 = document.getElementById("smallboxCell11").children.value;
    var b12 = document.getElementById("smallboxCell12").children.value;
    var b13 = document.getElementById("smallboxCell13").children.value;
    var b14 = document.getElementById("smallboxCell14").children.value;
    var b15 = document.getElementById("smallboxCell15").children.value;
    var b16 = document.getElementById("smallboxCell16").children.value;
    var b17 = document.getElementById("smallboxCell17").children.value;
    var b18 = document.getElementById("smallboxCell18").children.value;
    var b19 = document.getElementById("smallboxCell19").children.value;
    var b20 = document.getElementById("smallboxCell20").children.value;
    var b21 = document.getElementById("smallboxCell21").children.value;
    var b22 = document.getElementById("smallboxCell22").children.value;
    var b23 = document.getElementById("smallboxCell23").children.value;
    var b24 = document.getElementById("smallboxCell24").children.value;



    if ((b0 == 1 && b1 == 1 && b2 == 1) || (b0 == 1 && b5 == 1 && b10 == 1) || (b0 == 1 && b6 == 1 && b12 == 1) ||
        (b1 == 1 && b2 == 1 && b3 == 1) || (b1 == 1 && b6 == 1 && b11 == 1) || (b1 == 1 && b7 == 1 && b13 == 1) ||
        (b2 == 1 && b3 == 1 && b4 == 1) || (b2 == 1 && b6 == 1 && b10 == 1) || (b2 == 1 && b8 == 1 && b14 == 1) || 
        (b2 == 1 && b7 == 1 && b12 == 1) ||
        (b3 == 1 && b2 == 1 && b1 == 1) || (b3 == 1 && b7 == 1 && b11 == 1) || (b3 == 1 && b8 == 1 && b13 == 1)||
        (b4 == 1 && b9 == 1 && b14 == 1) || (b4 == 1 && b8 == 1 && b12 == 1) ||
        (b5 == 1 && b6 == 1 && b7 == 1) || (b5 == 1 && b10 == 1 && b15 == 1) || (b5 == 1 && b11 == 1 && b17 == 1) ||
        (b6 == 1 && b7 == 1 && b8 == 1) || (b6 == 1 && b11 == 1 && b16 == 1) || (b6 == 1 && b12 == 1 && b18 == 1) || 
        (b7 == 1 && b11 == 1 && b15 == 1) || (b7 == 1 && b13 == 1 && b19 == 1) || (b7 == 1 && b8 == 1 && b9 == 1) ||
        (b7 == 1 && b12 == 1 && b17 == 1) ||
        (b8 == 1 && b12 == 1 && b16 == 1) || (b8 == 1 && b13 == 1 && b18 == 1) ||
        (b9 == 1 && b8 == 1 && b7 == 1) || (b9 == 1 && b13 == 1 && b17 == 1) || (b9 == 1 && b14 == 1 && b19 == 1) ||
        (b10 == 1 && b6 == 1 && b2 == 1) || (b10 == 1 && b11 == 1 && b12 == 1) || (b10 == 1 && b16 == 1 && b22 == 1)||
        (b10 == 1 && b15 == 1 && b20 == 1) ||
        (b11 == 1 && b12 == 1 && b13 == 1) || (b11 == 1 && b17 == 1 && b23 == 1) || (b11 == 1 && b16 == 1 && b21 == 1) ||
        (b12 == 1 && b13 == 1 && b14 == 1) || (b12 == 1 && b18 == 1 && b24 == 1) || (b12 == 1 && b17 == 1 && b22 == 1)|| 
        (b12 == 1 && b16 == 1 && b20 == 1) ||
        (b13 == 1 && b18 == 1 && b23 == 1) || (b13 == 1 && b17 == 1 && b21 == 1) ||
        (b14 == 1 && b19 == 1 && b24 == 1) || (b14 == 1 && b18 == 1 && b22 == 1) ||
        (b15 == 1 && b16 == 1 && b17 == 1) ||
        (b16 == 1 && b17 == 1 && b18 == 1) ||
        (b17 == 1 && b18 == 1 && b19 == 1) ||
        (b20 == 1 && b21 == 1 && b22 == 1) ||
        (b21 == 1 && b22 == 1 && b23 == 1) ||
        (b22 == 1 && b23 == 1 && b24 == 1))  {
        currentStep.style.display = 'none';
        winner.style.display = 'block';
        winner.innerHTML = '<p class="winnerP"> 1. játékos nyert!</p>' + '<p>Kezdéshez kattintson az Új játék gombra!</p>';
        amobaBigBox.style.pointerEvents = 'none';
    } else if (
        (b0 == 2 && b1 == 2 && b2 == 2) || (b0 == 2 && b5 == 2 && b10 == 2) || (b0 == 2 && b6 == 2 && b12 == 2) ||
        (b1 == 2 && b2 == 2 && b3 == 2) || (b1 == 2 && b6 == 2 && b11 == 2) || (b1 == 2 && b7 == 2 && b13 == 2) ||
        (b2 == 2 && b3 == 2 && b4 == 2) || (b2 == 2 && b6 == 2 && b10 == 2) || 
        (b2 == 2 && b8 == 2 && b14 == 2) || (b2 == 2 && b7 == 2 && b12 == 2) ||
        (b3 == 2 && b2 == 2 && b1 == 2) || (b3 == 2 && b7 == 2 && b11 == 2) || (b3 == 2 && b8 == 2 && b13 == 2) ||
        (b4 == 2 && b9 == 2 && b14 == 2) || (b4 == 2 && b8 == 2 && b12 == 2) ||
        (b5 == 2 && b6 == 2 && b7 == 2) || (b5 == 2 && b10 == 2 && b15 == 2) || (b5 == 2 && b11 == 2 && b17 == 2) ||
        (b6 == 2 && b7 == 2 && b8 == 2) || (b6 == 2 && b11 == 2 && b16 == 2) || (b6 == 2 && b12 == 2 && b18 == 2) || 
        (b7 == 2 && b11 == 2 && b15 == 2) || (b7 == 2 && b13 == 2 && b19 == 2) || (b7 == 2 && b8 == 2 && b9 == 2) || 
        (b7 == 2 && b12 == 2 && b17 == 2)  || 
        (b8 == 2 && b12 == 2 && b16 == 2) || (b8 == 2 && b13 == 2 && b18 == 2) ||
        (b9 == 2 && b8 == 2 && b7 == 2) || (b9 == 2 && b13 == 2 && b17 == 2) || (b9 == 2 && b14 == 2 && b19 == 2) ||
        (b10 == 2 && b6 == 2 && b2 == 2) || (b10 == 2 && b11 == 2 && b12 == 2) || (b10 == 2 && b16 == 2 && b22 == 2)||
        (b10 == 2 && b15 == 2 && b20 == 2)||
        (b11 == 2 && b12 == 2 && b13 == 2) || (b11 == 2 && b17 == 2 && b23 == 2) || (b11 == 2 && b16 == 2 && b21 == 2) ||
        (b12 == 2 && b13 == 2 && b14 == 2) || (b12 == 2 && b18 == 2 && b24 == 2) || (b12 == 2 && b17 == 2 && b22 == 2) ||
        (b12 == 2 && b16 == 2 && b20 == 2) ||
        (b13 == 2 && b18 == 2 && b23 == 2) || (b13 == 2 && b17 == 2 && b21 == 2)  ||  
        (b14 == 2 && b19 == 2 && b24 == 2) || (b14 == 2 && b18 == 2 && b22 == 2) ||
        (b15 == 2 && b16 == 2 && b17 == 2) || 
        (b16 == 2 && b17 == 2 && b18 == 2) ||
        (b17 == 2 && b18 == 2 && b19 == 2) ||
        (b20 == 2 && b21 == 2 && b22 == 2) ||
        (b21 == 2 && b22 == 2 && b23 == 2) ||
        (b22 == 2 && b23 == 2 && b24 == 2)) {
        currentStep.style.display = 'none';
        winner.style.display = 'block';
        winner.innerHTML = '<p class="winnerP"> 2. játékos nyert!</p>'+ '<p>Kezdéshez kattintson az Új játék gombra!</p>';
        amobaBigBox.style.pointerEvents = 'none';
    } else if ((b0 > 0 )  && (b1 > 0) && (b2 > 0) && (b3 > 0)  && (b4 > 0) && (b5 > 0) && (b6 > 0) && (b7 > 0) && (b8 > 0) && (b9 > 0) && (b10 > 0) && (b11 > 0)&& (b12 > 0) && (b13 > 0) && (b14 > 0) && (b15 > 0)&& (b16 > 0)&& (b17 > 0) && (b18 > 0) && (b19 > 0) && (b20 > 0)&&  (b21 > 0)&&  (b22 > 0)&& (b23 > 0) &&(b24 > 0))  {
        currentStep.style.display = 'none';
        winner.style.display = 'block';
        winner.innerHTML = '<p class="winnerP"> Döntetlen!</p>'+ '<p>Kezdéshez kattintson az Új játék gombra!</p>';
        amobaBigBox.style.pointerEvents = 'none';
    }});
}

 function newGame() {
    var element = amobaBigBox;
    while (element.firstChild) {
    element.removeChild(element.firstChild);
}};



newGameBtn.onclick = function (){
    newGame();
    createBox(25);
    playgame ();
    winner.style.display = 'none';
    amobaBigBox.style.pointerEvents = 'auto';
    count = 0
    if (count == '0') {
        currentStep.style.display = 'block';
        currentStep.innerHTML ='<p>1. játékos következik: X </p>';
    };
}


