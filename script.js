

function BMI (weight=80, height=1.83) {
    let result = weight / (height * height);
    return result;
}

   console.log(BMI(84, 1.83))
   console.log(BMI())

function Status(bmi) {

  if(bmi < 18.5){
    document.getElementById("result").style.color = "orange"
    document.getElementById("container").style.backgroundColor = "rgb(255, 229, 180)"
    return "لديك نقص في الوزن";
     
     

  }else if (bmi >= 18.5 && bmi < 25) {
    document.getElementById("result").style.color = "green";
    document.getElementById("container").style.backgroundColor = "rgb(154, 255, 154)"
    return "وزنك صحي";
   

  }else{
    document.getElementById("result").style.color = "red"
    document.getElementById("container").style.backgroundColor = "rgb(255, 129, 129)"
    return "لديك زيادة في الوزن";
  }
}


function calculate(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = BMI(weight, height);
    let desc = Status(bmi);
    let div = document.getElementById("result");
    div.innerText= bmi + " == " + desc;
}
