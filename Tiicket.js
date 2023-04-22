let ticket = document.getElementById('ticket');
let price = 100;
function generateOTP() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
const provideOTP = ()=>{
    let OTP = generateOTP();
    window.alert("One Time Password for the following transaction: ",OTP);
    window.alert(OTP);
    let typedOTP = prompt("Enter the OTP sent to you for further transaction: ");
    if(typedOTP==OTP){
        return true;
    }
    else{
        return false;
    }
}
ticket.addEventListener('click',()=>{
    let quantity = prompt("Enter the number of tickets you want to buy: ");
    quantity =  Number.parseInt(quantity);
    if(quantity>100){
        window.alert("Limit Exceeded!!!");
        return ;
    }
    let choose = prompt("Choose your Bank code: SBI/Canara/PNB/Bandhan ");
    if(choose!="SBI"||choose!="Canara"||choose!="PNB"||choose!="Bandhan"){
        window.alert("Wrong Bank Code Given!!!");
        return ;
    }
    let AC = prompt("Enter your A/C no: ");
    if(AC.length!=11){
        window.alert("Wrong A/C number given!!😔");
        return ;
    }
    let i=0;
    for(i=0;i<3;i++){
        if(provideOTP(quantity)){
            window.alert("Transaction completed!!😃 You have bought "+quantity+"tickets which costs "+quantity*price);
            break;
        }
        else{
            window.alert("Wrong OTP entered try again!!❌");
            provideOTP();
        }
    }
    if(i>=2){
        window.alert("Wrong OTP entered 3 times!!! refresh page for transaction😔")
    }
})
