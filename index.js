const passwordBox= document.getElementById('password')
const length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase ="  abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const Symobl ="!@#$%^&*()-_=+[]{}|;:";

const allChars =uppercase + lowercase + number + Symobl

function CreatePassword(){
    let password ="";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password+= lowercase[Math.floor(Math.random() * number.length)];
    password += Symobl[Math.floor(Math.random() * Symobl.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password
    
}

function CopyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}