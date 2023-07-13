

// 1. Vote Eligibiility assignment

function VoteEligibility(){
  let age = document.getElementById("age").value;

  if (age >= 18) {
    document.getElementById('result').innerHTML = "You are eligible to vote";
  }
  else{
    document.getElementById('result').innerHTML = "You are not eligible to vote";
  }
}


// 2. Displaying table

function TableDisplay(){
  let table = document.getElementById("table").value; 
  for (let i=1; i<=10; i++)
  {
    let res = table * i;
    
    console.log(res);

  }  
 
}



// Assignment 3 - Dollars to rupees conversion

function dollToRup(){
  let dollars = document.getElementById("dollars")
  let rupees = dollars.value * 74.5;
  document.getElementById('demo').innerText = rupees;
}

