var accum = [];
var pic1, pic2, pic3;

function preload(){
//    pic1 = loadImage('/Users/rz/Desktop/p5/empty-example/assets/pic1.jpg');
//    pic2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg');
//    pic3 = loadImage('assets/pic3.jpg');
}
 
function setup() {
    createCanvas(400, 400);
} 

function draw() {
}

function keyTyped(){
    if (keyCode === ENTER){
        print(accum);
        if(accum === 'qwer'){
            background(255,0,0);
//            loadImage(pic2,0,0);
        }
        else if(accum === 'asdf'){
            background(0,255,0);
        }
        else if(accum === 'zxcv'){
            background(0,0,255);
        }
        else background(128);
        accum = [];
    }
    else accum += key;
}