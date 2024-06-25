 
 const btn = document.getElementById("btn");
 const reset = document.getElementById("reset");
 const pas =document.getElementById("pas");

 let passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

let password = '';
btn.addEventListener("click", function (){
    
    let characters = '';
    if(includeLowercase){
        characters += 'abcdefghijklmnopqrstuvwxyz';
        }
    if(includeUppercase){
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
     if(includeNumbers){
                characters += '0123456789';
                }
     if(includeSymbols){
                    characters += '!@#$%^&*()_+~'; 
                    }
    for(let i = 0; i < passwordLength; i++){ 
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        pas.textContent = password;
                       

        });
 reset.addEventListener("click", function(){
            password = '';
            pas.textContent = password; 
            });

