const account = {
    accountName: "Pınar",
    balance: 1000000,
    getBalance: function () {
        console.log("Total Balance : " + this.balance + "$")
    },
    deposit: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            console.log("Invalid Amount")
        } else {
            this.balance = this.balance + amount
            console.log(amount + " $ deposited. New balance= " + this.balance)
        }
    },
    withdrawal: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            console.log("invalid Amount")
        } else {
            this.balance = this.balance - amount
            console.log(amount + "$ witdraw. New balance= " + this.balance)
        }
    },
    getAccountName: function(){
        console.log("Account Name "+ this.getAccountName)
    },
    accountError : function(errorMessage){
        console.log("Error : " + errorMessage)
    },
    exitAccount: function(){
        console.log("Exit")
    }
}

function atm () {
    const message = parseFloat(prompt("Select a choice\n1.) See balance\n2.) Make a deposit\n3.)Make a withdrawal\n4.) Get account Name\n5.) Exit"))

    switch (message) {
        case 1 :
            account.getBalance()
            break;
        case 2 :
            const depositAmount = parseFloat(prompt ("Enter Amount to deposit"))
            account.deposit(depositAmount)
            break;
        case 3 :
            const withdrawalAmount= parseFloat(prompt ("Enter your Amount to withdrawal"))
            account.withdrawal(withdrawalAmount)
            break;
        case 4 :
             account.getAccountName()
             break;
        case 5 :
            account.exitAccount()
            break;
        default :
            account.accountError("Invalid Selection. Please try again")
    }

}

atm ()
