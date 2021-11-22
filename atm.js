console.log("WEL COME TO ATM");
balance =1000000
console.log("1.Balance\n","2.Withdraw\n","3.Deposit\n","4.quit");
readline = require("readline-sync")
var option = readline.question("ente the option  1,2,3,4: \n")
if (option ==1){
    console.log(balance ," is your balance");
}
if(option==2){
    console.log(balance);
    withdraw = readline.question("enter the withdraw amount")
    if (withdraw>0){
        forwardBalance = balance-withdraw
        console.log(`after withdraw your amount  ${forwardBalance}`)
    }else if(withdraw<balance){
        console.log("no amount in account");
    }else{
        console.log("none withdrwan");
    }
}if(option==3){
    console.log(balance);
    deposit = readline.question("enter the deposit amount")
    if(deposit>0){
        forwardbalance = balance+deposit
        console.log(`now your balance ${forwardbalance}`);
    }else{
        console.log("no deposit made");
    }
}if(option==4){
    console.log("exit");
}