function createAccount(pin, amount = 0) {
  let balance = amount;

  return {
    checkBalance(pinEntered) {
      if (pinEntered === pin) {
        return `$${balance}`;
      }
      return "Invalid PIN.";
    },
    deposit(pinEntered, num) {
      if (pinEntered === pin) {
        balance += num;
        return `Successfully deposited $${num}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    },
    withdraw(pinEntered, num) {
      if (pinEntered === pin) {
        if (balance < num) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= num;
        return `Successfully withdrew $${num}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    },
    changePin(pinEntered, newPin) {
      if (pinEntered === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    },
  };
}

module.exports = { createAccount };

let account = createAccount("1234", 100);
console.log(account.checkBalance("1234"));
console.log(account.deposit("1234", 250));
console.log(account.deposit("oops", 250));
console.log(account.withdraw("1234", 300));
console.log(account.withdraw("1234", 60));
console.log(account.changePin("1234", "5678"));
