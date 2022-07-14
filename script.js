//declare each character category as a variable
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characters = "!@#$%^&*";
var numbers = "0123456789";

// ask the user if they want lowercase, upper, numbers, and special characters
var button = document.querySelector("button");
button.addEventListener("click", function (e) {
    var lengthP = window.prompt("How long will your password be?");
    console.log(lengthP);
    lengthP = parseInt(lengthP);
        if (lengthP < 8 || lengthP > 120 || isNaN(lengthP)) {
            console.log(lengthP);
            window.alert("Your password must be between 8 and 128 characters! Try again!");
            return;
            }
            //messages for each character outcome
    var lowercase = window.confirm("Do you want lowercase letters in your password?");
    var uppercase = window.confirm("Do you want uppercase letters in your password?");
    var numbersQ = window.confirm("Do you want numbers in your password?");
    var specialcharacters = window.confirm("Do you want special characters in your password? Ex.!@#$%");
            
    if (!lowercase && !uppercase && !numbers && !specialcharacters) {
        window.alert("Please select at least one type of character");
        return;
    }

    //generate password section
    //use math.floor to round down or up to the nearest whole number
    //26 letters in the alphabet so multiply the equation by 26
    console.log(letters[Math.floor(Math.random() * 26)].toUpperCase());
    console.log(letters[Math.floor(Math.random() * 26)]);
    console.log(Math.floor(Math.random() * 10));
    console.log(characters[Math.floor(Math.random() * characters.length)]
    );

    var characterList = '';
    if (lowercase) {
        characterList = characterList + letters
    } 
    if (uppercase) {
        characterList = characterList + letters.toUpperCase() 
    } 

    if (numbersQ) {
        characterList = characterList + numbers 
    } 
    if (specialcharacters) {
        characterList = characterList + characters 
    }

    var password = ""
    while (lengthP) {
        password = password + characterList[Math.floor(Math.random() *characterList.length)];
        lengthP--;
    } 

        document.querySelector("textarea").innerText = password;
});








