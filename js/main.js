//alert ('Hola!')

const MIN_SPEED = 200;
const MAX_SPEED = 250;

let speedChivo = 250;
let speedFord = 250;

let GanoChivo = 0;
let GanoFord = 0;

let vueltas = 0;

while(GanoChivo < 50 && GanoFord < 50) {

    vueltas +=1;
    let vueltaChivo = Math.ceil(Math.random()*(MAX_SPEED - MIN_SPEED) + MIN_SPEED);
    let vueltaFord = Math.ceil(Math.random()*(MAX_SPEED - MIN_SPEED) + MIN_SPEED);

    
console.log ('----------- vueltas ' + vueltas + '--------')

        if(vueltaChivo > vueltaFord){
            GanoChivo ++;
            console.log ('Gano Chevrolet');
        }
        else if(vueltaFord > vueltaChivo){
            GanoFord ++;
            console.log ('Gano Ford');
        }
    }        
console.log ('------- GANADOR ------')
        
        if(GanoChivo === 50){
        console.log ('el CHIVO')
            document.write ('<div class="img"><img src="images/chivo.png" /></div');
        } 
        else if(GanoFord === 50) {
        console.log ('FORD')
            document.write ('<div class="img"><img src="images/ford.webp" /></div');
        }        

