char[] accum;
int i = 0;

void setup() {
  size(400, 400);
  accum = new char[20];
} 

void draw() {
}

void keyPressed() {
  if (keyCode == ENTER) { // signalling the end of the text entry
    printArray(accum);
    String input = new String(accum);
    String typed = input.substring(0, i);
    i = 0; // reset counter
    if (typed.equals("qwer")) {
      background(255, 0, 0);
    } 
    else if (typed.equals("asdf")) {
      background(0, 255, 0);
    } 
    else if (typed.equals("zxcv")) {
      background(0, 0, 255);
    } 
    else {
      background(128);
    }
  } 
  else { 
    accum[i] = (char)key;
    i++;
    i = i % 20; // prevents array overflows for more than accum.length consecutive keystrokes
  }
}