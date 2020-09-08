let DOM={
    numbers:['one','two','Three','Four','Five','Six','seven','Eight','Nine','zero','Add','Sub','Mul','Div','dot','Ac'],
};
let Display_String='';
document.querySelector('.text-box').value = '0';

// document.getElementById(DOM.numbers[0]).addEventListener('click',()=>{
//    console.log(typeof document.getElementById(DOM.numbers[0]).value);
// })
let display=(result)=>{
  if(result!='undefined'){
  document.querySelector('.text-box').value = result;
  }else{
  document.querySelector('.text-box').value = '0';
  Display_String='0';
  }
}
//Result opearion
result=()=>{
document.getElementById('Equal').addEventListener('click',()=>{
  try{
  Display_String=eval(Display_String);
  Display_String=Display_String+'';
  display(Display_String);
  }
  catch(e){
  alert(e);
  }
});
};

//back space
backspace=()=>{
document.getElementById('back').addEventListener('click',()=>{
  Display_String = Display_String.substring(0,Display_String.length-1);
  try{
    display(Display_String);

  }catch(e){
    alert(e);
  }
});
};
//input the value
let input = ()=>{
  DOM.numbers.forEach((e,i)=>{
    document.getElementById(DOM.numbers[i]).addEventListener('click',()=>{
      Display_String = Display_String + document.getElementById(DOM.numbers[i]).value;
      if(DOM.numbers[i]=='Ac'){
        Display_String='';
      display(Display_String);
      }else
      display(Display_String);
     })
  })
  result();
  backspace();
};


//Init function
input();