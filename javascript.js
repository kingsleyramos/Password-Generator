// Global variable to store generated password
var generatedPassword = "";

function gPassword(){

    // Create global variable of the length of the password
    
    var pLength = document.getElementById("passwordLength").value

    
    // Prompts users of password criteria choices
    
    // Initializes character set to be used to generate password from
    var characterSet = "";


    if (document.getElementById("specialChecked").checked == true){
        characterSet = characterSet + "!@#$%^&*()!@#$%^&*()!@#$%^"
    }
    if (document.getElementById("numericChecked").checked == true){
        characterSet = characterSet + "12345678901234567890123456"
    }
    if (document.getElementById("lowercaseChecked").checked == true){
        characterSet = characterSet + "qwertyuiopasdfghjklzxcvbnm"
    }
    if (document.getElementById("uppercaseChecked").checked == true){
        characterSet = characterSet + "QWERTYUIOPASDFGHJKLZXCVBNM"
    }

    // Initializes character sets to be compared against to within the checks
    var specialSet = "!@#$%^&*()"
    var numericSet =  "1234567890"
    var lowercaseSet = "qwertyuiopasdfghjklzxcvbnm"
    var uppercaseSet = "QWERTYUIOPASDFGHJKLZXCVBNM"
    var passwordCheckarr = [];
    var passwordCheck = [];

    do{
        // Clears all Check arrays and generated password
        passwordCheckarr = [];
        passwordCheck = [];
        generatedPassword = '';

        // Generates the actual password.
        for (var i = 0; i < parseInt(pLength); ++i) {
            generatedPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }

        console.log(generatedPassword);
        
        // ********** STARTS CHARACTER CHECK **********

        // Checks every character in the generated password if it contains at least 1 special character
        if(document.getElementById("specialChecked").checked == true){
            for(let gpwi = 0; gpwi < pLength; gpwi++){
                for(let seti = 0; seti < specialSet.length; seti++){
                    if(generatedPassword.charAt(gpwi) == specialSet.charAt(seti)){
                        passwordCheckarr.push("true");
                    }
                }
            }
            if(passwordCheckarr.includes("true") == true){
                passwordCheck.push("true");
            }
            else{
                passwordCheck.push("false");
            }
        }

        
        console.log(passwordCheck);
        console.log("Special PasswordCheckarr: " + passwordCheckarr);
        console.log("Special PasswordCheck: " + passwordCheck);





        // Checks every character in the generated password if it contains at least 1 numeric character
        if(document.getElementById("numericChecked").checked == true){
            var passwordCheckarr = [];
            for(let gpwi = 0; gpwi < pLength; gpwi++){
                for(let seti = 0; seti < numericSet.length; seti++){
                    if(generatedPassword.charAt(gpwi) == numericSet.charAt(seti)){
                        passwordCheckarr.push("true");
                    }
                }
            }
            if(passwordCheckarr.includes("true") == true){
                passwordCheck.push("true");
            }
            else{
                passwordCheck.push("false");
            }
        }

        console.log(passwordCheck);
        console.log("numeric PasswordCheckarr: " + passwordCheckarr);
        console.log("numeric PasswordCheck: " + passwordCheck);
            





        // Checks every character in the generated password if it contains at least 1 lowercase character
        if(document.getElementById("lowercaseChecked").checked == true){
            var passwordCheckarr = [];
            for(let gpwi = 0; gpwi < pLength; gpwi++){
                for(let seti = 0; seti < lowercaseSet.length; seti++){
                    if(generatedPassword.charAt(gpwi) == lowercaseSet.charAt(seti)){
                        passwordCheckarr.push("true");
                    }
                }
            }
            if(passwordCheckarr.includes("true") == true){
                passwordCheck.push("true");
            }
            else{
                passwordCheck.push("false");
            }
        }

        console.log(passwordCheck);
        console.log("lowercase PasswordCheckarr: " + passwordCheckarr);
        console.log("lowercase PasswordCheck: " + passwordCheck);



        if(document.getElementById("uppercaseChecked").checked == true){
            var passwordCheckarr = [];
            for(let gpwi = 0; gpwi < pLength; gpwi++){
                for(let seti = 0; seti < uppercaseSet.length; seti++){
                    if(generatedPassword.charAt(gpwi) == uppercaseSet.charAt(seti)){ 
                        passwordCheckarr.push("true"); 
                    }
                }
            }
            if(passwordCheckarr.includes("true") == true){
                passwordCheck.push("true");
            }
            else{
                passwordCheck.push("false");
            }
        }

        
        console.log(passwordCheck);
        console.log("uppercase PasswordCheckarr: " + passwordCheckarr);
        console.log("uppercase PasswordCheck: " + passwordCheck);

        
        console.log(passwordCheck.includes("false"));

    }while(passwordCheck.includes("false") == true)

    document.getElementById("displayPassword").value = generatedPassword;




}
function copyToClip(){
    var copyText = document.getElementById("displayPassword");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
}
    