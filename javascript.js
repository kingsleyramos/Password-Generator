// Global variable to store generated password
var generatedPassword = "";

function gPassword(){

    // Pulls value attribute from password length
    var pLength = document.getElementById("passwordLength").value

    
    // Initializes character set to be used to generate password from
    var characterSet = "";


    // Create a string of characters for the generator to choose from
    // This will add special characters to the set
    if (document.getElementById("specialChecked").checked == true){
        characterSet = characterSet + "!@#$%^&*()!@#$%^&*()!@#$%^"
    }
    // this will add numeric characters to the set
    if (document.getElementById("numericChecked").checked == true){
        characterSet = characterSet + "12345678901234567890123456"
    }
    //this will add lowercase characters to this set
    if (document.getElementById("lowercaseChecked").checked == true){
        characterSet = characterSet + "qwertyuiopasdfghjklzxcvbnm"
    }
    // this will add uppercase characters to the set
    if (document.getElementById("uppercaseChecked").checked == true){
        characterSet = characterSet + "QWERTYUIOPASDFGHJKLZXCVBNM"
    }

    // Initializes character sets to be compared against the generated password
    var specialSet = "!@#$%^&*()"
    var numericSet =  "1234567890"
    var lowercaseSet = "qwertyuiopasdfghjklzxcvbnm"
    var uppercaseSet = "QWERTYUIOPASDFGHJKLZXCVBNM"

    // Arrays reserved to check every character within the generated password 
    var passwordCheckarr = [];
    // Array initialized to if each criteria passes
    var passwordCheck = [];

    // Do-while loop will be used to go through the this loop at least once.
    do{

        // Clears all Check arrays and generated password if looped
        passwordCheckarr = [];
        passwordCheck = [];
        generatedPassword = '';

        // Generates the actual password.
        for (var i = 0; i < parseInt(pLength); ++i) {
            generatedPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }

        console.log(generatedPassword);
        
        // ********** STARTS CHARACTER CHECKS **********

        // Checks every character in the generated password if it contains at least 1 special character
        if(document.getElementById("specialChecked").checked == true){
            // Goes through each character in Generated Password (gpwi = GeneratedPassWordIterator)
            for(let gpwi = 0; gpwi < pLength; gpwi++){
                // Goes through each character in the character set
                for(let seti = 0; seti < specialSet.length; seti++){
                    //compares the generated password character with the character set character
                    if(generatedPassword.charAt(gpwi) == specialSet.charAt(seti)){
                        // If any of the characters in the generated password matches
                        // with any of ther characters within the character set,
                        // this will add "true" to the passwordCheckerarr array.
                        passwordCheckarr.push("true");
                    }
                }
            }
            // If is there are any "true"s in the array, mark this section as TRUE
            if(passwordCheckarr.includes("true") == true){
                passwordCheck.push("true");
            }
            else{
                // If it does not contain the needed charater, mark this section as FALSE
                passwordCheck.push("false");
            }
        }

        // Used to troubleshoot each array if working properly
        console.log(passwordCheck);
        console.log("Check Results of Generated Password: " + passwordCheckarr);
        console.log("Current Results of all checks: " + passwordCheck);



        // --------- Each section below is a check for their own character set -----------


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
        console.log("Check Results of Generated Password: " + passwordCheckarr);
        console.log("Current Results of all checks: " + passwordCheck);



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
        console.log("Check Results of Generated Password: " + passwordCheckarr);
        console.log("Current Results of all checks: " + passwordCheck);



        // Checks every character in the generated password if it contains at least 1 uppercase character
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
        console.log("Check Results of Generated Password: " + passwordCheckarr);
        console.log("Current Results of all checks: " + passwordCheck);

        
        // To log if any of the checks above is false
        console.log(passwordCheck.includes("false"));


        // If any of the checks throws a false, it will loop back to the top and regenerate the password until all checks are true.
    }while(passwordCheck.includes("false") == true)

    // Output generated password to HTML
    document.getElementById("displayPassword").value = generatedPassword;
}

//Fuction to copy to clipboard
function copyToClip(){
    var copyText = document.getElementById("displayPassword");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
}
    