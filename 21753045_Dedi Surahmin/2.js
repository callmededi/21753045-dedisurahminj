expression = ""
expressionShow = ""

function add_to_exp(s){
  expression+=s;
  //console.log(expression);
}

function add_to_expShow(){
  expressionShow = "";
  if(expression.includes('.') && !expression.includes('+') && !expression.includes('-') && !expression.includes('*') &&
    !expression.includes('/'))
  {
     var tempEx = expression.split('.');
     expression = tempEx[0]+'.';
     expression+=tempEx[1].substring(0, 5);
  }
  for(var i=0; i<expression.length; i+=1){
    if(expression[i] == '/'){
      expressionShow+="÷";
    }
    else if(expression[i] == '*'){
      expressionShow+="×";
    }
    else{
      expressionShow+=expression[i];
    }
  }
  
  var CalcArea = document.getElementById("Calc_Area");
  Calc_Area.innerHTML = expressionShow;
}

function clearLast()
{
  expression = expression.substring(0, expression.length - 1);
}

function clearAll()
{
  expression = "";
}

function solve(){
  expression = eval(expression);
  expression = expression.toString();
}

window.onload = function(){
  setInterval(add_to_expShow, 00);
}