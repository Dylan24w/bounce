/*
 * Dylan, Braden, Jarod, Tim
 * Smiley Face
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    background(200);
  
    //edge line colors
    stroke(0, 0, 0);
  
    // Set colors of face
    fill(210, 180, 140);
  
    // face
    ellipse(200, 200, 350, 350);
  
    // Set colors of eyes (white)
    fill(255, 255, 255);
  
    // Left eye
    ellipse(275, 125, 80, 80);
    // right eye
    ellipse(125, 125, 80, 80);
  
    // Set colors of pupils and hair(brown)
    fill(92, 64, 41);
  
    // Left eye
    ellipse(275, 125, 30, 30);
    // right eye
    ellipse(125, 125, 30, 30);
  
    // nose
    triangle(180, 220, 220, 220, 200, 180);
  
    // eyebrow 1
    rect(100, 70, 50, 15);
  
    // eyebrow 2
    rect(250, 70, 50, 15);
  
    // Set colors of hat
    fill(0, 0, 0);
  
    // hat
    rect(100, 10, 200, 25);
    rect(130, 10, 140, -100);
  
    //A arc
    // Set colors of mouth
    fill(255, 179, 179);
    arc(200, 260, 150, 100, 0, PI, CHORD);
  }