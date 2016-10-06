function setup() {
  createCanvas(800,800);
  background(200);
}

function draw() {
  
  //shirt
  fill(235,0,25);
  strokeJoin(ROUND);
  strokeWeight(2);
  beginShape();
  vertex(358,225); //top left
  vertex(345,400); //bottom left
  vertex(455,400); //bottom right
  vertex(442,225); //top right
  endShape();
  
  //body underneath shirt
  fill(255,205,148);
  beginShape();
  vertex(373,230);
  quadraticVertex(370,260,400,260);
  vertex(400,260);
  quadraticVertex(430,260,427,230);
  endShape();
  
  //head
  ellipseMode(CENTER);
  fill(150,20,90);
  arc(455,90,80,50,PI+QUARTER_PI,QUARTER_PI); //hat
  fill(255,205,148);
  ellipse(400,150,150,180); //whole head
  
  //hat
  fill(150,20,90);
  arc(400,120,140,120,179,360); // upper hat
  angleMode(DEGREES);
  fill(255,205,148);
  arc(400,112,48,50,179,360); //hole in hat
  fill(150,20,90);
  ellipse(428,116,10,8);
  noStroke();
  rect(417,112,8,8);
  stroke(0);
  fill(150,20,90);
  rect(375,112,50,8);
  fill(0);
  ellipse(385,116,3,3);
  ellipse(395,116,3,3);
  ellipse(405,116,3,3);
  ellipse(415,116,3,3);
  
  
  //left arm
  fill(255,205,148);
  strokeJoin(ROUND);
  strokeWeight(2);
  beginShape();
  vertex(354,270); //bottom of shoulder
  vertex(327,382); //bottom of wrist
  quadraticVertex(345,410,319,382); //thumb
  quadraticVertex(310,420,312,382); //index
  quadraticVertex(300,421,304,380); //middle
  quadraticVertex(290,413,300,370); //little
  vertex(300,370); //top of wrist
  vertex(357,223); //top of shoulder
  endShape();
  
  //right arm
  fill(255,205,148);
  strokeJoin(ROUND);
  strokeWeight(2);
  beginShape();
  vertex(446,270); //bottom of shoulder
  vertex(473,382); //bottom of wrist
  quadraticVertex(455,410,481,382); //thumb
  quadraticVertex(490,420,488,382); //index
  quadraticVertex(500,421,496,380); //middle
  quadraticVertex(510,412,500,370); //little
  vertex(500,370); //top of wrist
  vertex(443,223); //top of shoulder
  endShape();
  
  //legs
  fill(0,0,128);
  strokeJoin(ROUND);
  beginShape();
  vertex(350,401); //top left
  vertex(340,600); //bottom left left
  vertex(390,600); //bottom left right
  vertex(400,460); //middle
  vertex(410,600); //bottom right left
  vertex(460,600); //bottom right right
  vertex(450,401); //top right
  endShape();
  
  //left foot
  fill(255);
  strokeJoin(ROUND);
  beginShape();
  vertex(387,600);
  vertex(387,630);
  quadraticVertex(270,630,345,600);
  endShape();
  
  //right foot
  fill(255);
  strokeJoin(ROUND);
  beginShape();
  vertex(412,600);
  vertex(412,630);
  quadraticVertex(530,630,455,600);
  endShape();
  
  //eyes
  fill(255);
  ellipse(372,140,20,20); //left
  ellipse(428,140,20,20); //right
  fill(0);
  ellipse(372,140,5,5); //left
  ellipse(428,140,5,5); //right
  strokeWeight(3);
  line(360,128,385,132); //left eyebrow
  line(416,128,441,128); //right eyebrow
  
  //nose
  fill(255,205,148);
  strokeWeight(1);
  line(400,145,400,170);
  ellipse(400,180,48,17);
  rectMode(CENTER);
  noStroke();
  rect(376,180,40,40);
  fill(0);
  
  //mouth
  stroke(0);
  line(375,215,431,210);
  
  //glasses
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  fill(0,106,78,150);
  rect(372,148,24,15); //left
  rect(428,148,24,15); //right
  line(383,148,417,148);
  line(360,141,325,130); //left
  line(440,141,475,130); //right
  
    //smoke
  fill(255);
  rectMode(CORNER);
  angleMode(DEGREES);
  rotate(335);
  rect(290,370,3,17);
  
  resetMatrix();
  
  //text on shirt
  textSize(16);
  fill(0);
  text("GANGSTA",362,320);
}