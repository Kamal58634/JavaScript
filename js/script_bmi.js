// const $=document
const weightInput=$.getElementById('weight')
const heightInput=$.getElementById('height')
const weightElem=$.getElementById('weight-val')
const heightElem=$.getElementById('height-val')
const bmiResult=$.getElementById('result')
const categoryResult=$.getElementById('category')





function bmiCalculator(){
    
    let weightInputValue=weightInput.value
    let heightInputValue=heightInput.value

    weightElem.innerHTML=weightInputValue+' kg'
    heightElem.innerHTML=heightInputValue+' cm'

    let bmiValue=(weightInputValue / Math.pow(heightInputValue/100,2)).toFixed(1)  
    bmiResult.innerHTML=bmiValue

    if(bmiValue<18.5){ //لاغر
        categoryResult.innerHTML='underWeight'
        bmiResult.style.color='#ffc44d'
    }else if(bmiValue>= 18.5 && bmiValue <= 24.9){//نرمال
         categoryResult.innerHTML='Normal weight'
         bmiResult.style.color='#0be881'
    }else if(bmiValue>= 25 && bmiValue <= 29.9){//اضافه وزن
         categoryResult.innerHTML='OverWeight'
         bmiResult.style.color='#ff884d'
    }else{//چاق
         categoryResult.innerHTML='obese'
         bmiResult.style.color='#ff5e4d'
    }

    // console.log(weightInputValue,heightInputValue,bmiValue)
}



weightInput.addEventListener('input',bmiCalculator)
heightInput.addEventListener('input',bmiCalculator)