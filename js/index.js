var str ="";
var result;
$("#seven").click(function(){
  str += '7';
  document.getElementById("in1").innerHTML = str; 
});
$("#eight").click(function(){
  str += '8';
  document.getElementById("in1").innerHTML = str; 
});
$("#nine").click(function(){
  str += '9';
  document.getElementById("in1").innerHTML = str; 
});
$("#four").click(function(){
  str += '4';
  document.getElementById("in1").innerHTML = str; 
});
$("#five").click(function(){
  str += '5';
  document.getElementById("in1").innerHTML = str; 
  });
$("#six").click(function(){
  str += '6';
  document.getElementById("in1").innerHTML = str;   
});
 $("#one").click(function(){
   str += '1';
   document.getElementById("in1").innerHTML = str; 
  
 });  
$("#two").click(function(){
  str += '2';
  document.getElementById("in1").innerHTML = str;  
  });
$("#three").click(function(){
  str += '3';
  document.getElementById("in1").innerHTML = str; 
  });
$("#zero").click(function(){
  str += '0';
  document.getElementById("in1").innerHTML = str; 
  });
$("#decimal").click(function(){
  str += '.';
  document.getElementById("in1").innerHTML = str;
  });
$("#divide").click(function(){
  str += ' / ';
  document.getElementById("in1").innerHTML = str; 
  });
$("#multiply").click(function(){
   str += ' * ';
  document.getElementById("in1").innerHTML = str; 
  });
$("#plus").click(function(){
  str += ' + ';
  document.getElementById("in1").innerHTML = str; 
});
$("#minus").click(function(){
  str += ' - ';
  document.getElementById("in1").innerHTML = str; 
});
$("#equal").click(function(){
  document.getElementById("in1").innerHTML = str+'='; 
  result = eval(str);
  console.log(result);
  document.getElementById("in2").innerHTML = result ; 
});  
$("#fullclear").click(function(){
  document.getElementById("in1").innerHTML = ""; 
  document.getElementById("in2").innerHTML = ""; 
  str = "";
});
$("#clear").click(function(){
  str = str.slice(0, -1);
  document.getElementById("in1").innerHTML = str; 
  document.getElementById("in2").innerHTML = ""; 
});