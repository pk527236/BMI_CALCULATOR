const form=document.querySelector("form");
// console.log(form);
// const button=document.querySelector("#button");
// console.log(button)
form.addEventListener("submit",function(e){
    e.preventDefault();
    const height=(document.querySelector("#height").value);
    const weight=(document.querySelector("#weight").value);
    const results=document.querySelector("#result");
    const conclusion=document.querySelector(".conclusion");
    // console.log(conclusion)
    if(height==="" ||height<=0||isNaN(height)){
        results.innerHTML="please give a valid height";
    }
    else if(weight==="" ||weight<=0||isNaN(weight)){
        results.innerHTML="please give a valid weight";
    }
    else{

       const heightInCm = parseInt(height);
        const weightInKg = parseInt(weight);
        const bmi = (weightInKg / ((heightInCm * heightInCm) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi>=18.6 && bmi<=24.9){
            conclusion.innerHTML="you are in normal range";
        }
        else if(bmi<=18.6){
            conclusion.innerHTML="you are under weight";
        }
        else if(bmi>=24.9){
            conclusion.innerHTML="you are overweight";
        }
        else{
            conclusion.innerHTML="please enter valid input ";
        }
    }
   

})
