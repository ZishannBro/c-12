var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
 createCanvas(400,400);
 var num=34
 for (let  i= 0;  i< marks.length; i++) {
    if (num===marks[i]) {
      console.log(num+" is present in the array at "+i)
    }
   else{
     console.log("number not present")
   }

 }

}

function draw() 
{
  background(30);
}

 

