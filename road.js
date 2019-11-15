$(document).ready(function(){

    });

function start(){

    var car1 = new Car( {x:1600,y:410} , "green","left.1.png");
    var car2 = new Car( {x:1600,y:620} , "red","left.2.png");
    var car3 = new Car( {x:-100,y:-25}, "green","right.1.png");
    var car4 = new Car({x:-100,y:180}  , "red","right.2.png");

    var all_objects = [car1,car2,car3,car4];
    for( let x = 0; x < 10 ; x++ ){
          var balloons = new Balloons({x:Math.random() * 1900, y:Math.random() * 800 } , "red","balloon.jpg" );
          all_objects.push( balloons  );
      }
    printAll(all_objects);
  
    $(".road").append(car1.printToScreen());
    $(".road").append(car2.printToScreen());
    $(".road").append(car3.printToScreen());
    $(".road").append(car4.printToScreen());
    
    var myVar = setInterval(() => {
       if(car3.location.x<1300){
        car3.move( car3.location.x + Math.random() * 38 , car3.location.y + 0 );
        car4.move( car4.location.x + Math.random() * 38 , car4.location.y + 0 );
       }else if(car3.location.x >= 1300 && car1.location.x > 150 ){
        car3.move( car3.location.x = 2000, car3.location.y + 0 );
        car4.move( car4.location.x = 2000, car4.location.y + 0 );
        car1.move( car1.location.x - Math.random() * 38 , car1.location.y + 0 );
        car2.move( car2.location.x - Math.random() * 38 , car2.location.y + 0 );
        console.log(car2.location.x)
      }else if(car2.location.x < 150){
        alert("The winner is the red car!!!")
        car1.move( car1.location.x = 0 , car1.location.y + 0 );
        car2.move( car2.location.x = 0 , car2.location.y + 0 );
        myStopFunction()
      }else if(car1.location.x < 150){
        alert("The winner is the green car!!!")
        car1.move( car1.location.x = 0 , car1.location.y + 0 );
        car2.move( car2.location.x = 0 , car2.location.y + 0 );
        myStopFunction()
      }
        printAll(all_objects);
   }, 200);

   function myStopFunction() {
    clearInterval(myVar);
  }
}

function printAll(objects){
    $(".road").html("");
    for( var i = 0; i< objects.length ; i++ ){
        $(".road").append(objects[i].printToScreen());
    }
  
}