let yoff = 0.0;
let dSlider;
let nSlider;


function setup() 
{
  createCanvas(windowWidth, 300);
  noFill(0);
  frameRate(24)


  
  dSlider = createSlider(100,400,5);
  dSlider.position(660,400)
  dSlider.addClass("mySliders");

    nSlider = createSlider(5.0,15.0,0.1);
  nSlider.position(888,400)
  nSlider.addClass("mySliders");


  let b = createP('C L O U D S');
b.style('font-size', '16px');
b.position(680, 358);
b.style('color', '#000000');
  
  
  let c = createP('F L O W');
c.style('font-size', '16px');
c.position(918, 358);
c.style('color', '#000000');
  
    let e = createP('Wave Generator')
e.style('font-size', '28px');
e.position(78, 368);
e.style('color', '#000000');
  
  
    let e2 = createP('MentorCloud')
e2.style('font-size', '28px');
e2.position(78, 340);
e2.style('color', '#000000');
  
    let e3 = createP('All copyrights @ Frozen Iris 2022')
e3.style('font-size', '16px');
e3.position(78, 440);
e3.style('color', '#C3C3C3');
  
  button = createButton("S A V E");
  button.style('font-size', '12px', 'color', '0,255,255');
  button.position(1168, 380);
  button.size(70,32)
button.mousePressed(savename);
  
  
  
  let d = createP('C O L O R');
d.style('font-size', '16px');
d.position(400, 354); 
d.style('color', '#000000');
colPic = createColorPicker("white");   
colPic.position(400, 400);
colPic.style("width","180px")
colPic.addClass("mySliders");
  
  

  
}


function draw() {
  background(6,34,46, 205)
 // perlinVertex(50, 100, 0.002, 2)
  //perlinVertex(100, 150, 0.004, 4)
 // stroke(227,77,76)
  //stroke(53,225,157)
  let blu=colPic.value();
  //stroke(blu)
  let a,b;
   d = dSlider.value();
  n = nSlider.value();
  let blu2=colPic.value()-a;
  


  for(a=200; a<210+d;a+=5)
    
{     stroke(blu)

      perlinVertex(a, -60, 0.0006, n)  
  
      stroke(blu2)

      perlinVertex(105, a, 0.0006, n)  

    }
    
//   perlinVertex(305, -50, 0.0005, 8.1)  

//   perlinVertex(310, -60, 0.0005, 8.2)
//   perlinVertex(315, -70, 0.0005, 8.3)
//   perlinVertex(320, -80, 0.0005, 8.4)
//   perlinVertex(325, -90, 0.0005, 8.5)
//   perlinVertex(330, -100, 0.0005, 8.6)
//   perlinVertex(335, -110, 0.0005, 8.7)
//   perlinVertex(340, -120, 0.0005, 8.8)
//   perlinVertex(345, -130, 0.0005, 8.9)
//   perlinVertex(350, -140, 0.0005, 9)
//   perlinVertex(355, -150, 0.0005, 9.1)
//   perlinVertex(360, -160, 0.0005, 9.2)
//   perlinVertex(365, -170, 0.0005, 9.3)
//   perlinVertex(370, -180, 0.0005, 9.4)
//   perlinVertex(375, -190, 0.0005, 9.5)

  
  
  
  
  
  
  //   stroke(53,225,157)
 //perlinVertex(200, 20, 0.005, 6)
 //    stroke(72,93,216)
 // perlinVertex(100, 350, 0.005, 10)
}

function perlinVertex(startY, endY, yAdd, xGap){
  beginShape();
  let xoff = 0;
  let extra = map(noise(xoff, yoff) * (endY), 0, endY, 0, 1);
  strokeWeight(1)
  for (let x = 0; x < width; x += xGap) {
      let y = map(noise(xoff, yoff), 0, 1, startY, endY);
      curveVertex(x, y+(0.5*extra));
    rotate(0.0001*xoff/y)
      xoff += 0.025;
    }
  yoff += yAdd; 
  curveVertex(width+10, height+100); 
  curveVertex(0, height+30); 
  endShape(CLOSE);

}
function savename(){


  save( "Variant" + d+n+ ".jpg")  
  

}
