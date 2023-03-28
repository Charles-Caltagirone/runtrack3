// console.log("Hello Javasript!");

// let test = _POST['first'];
let first = 3;
let second = 11;

function sommenombrespremiers(first, second) {
    for(i = 2; i <= first, i <= second; i++){
      if(first%i == 0 ^ second%i == 0){
    return false;
      }else{
        return first + second;
      }
    }
  }

  console.log(sommenombrespremiers(first, second));

//   console.log(first);