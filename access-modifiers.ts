class BankAccount {
  id: number;
  name: string;
  private _balance: number; // private property use korle     property er age _(undersqure) dite hoi.._balance private hoya te ata k class er bahire use kora jai na

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
    // console.log(_balance);
  }

  getBalance() {
    console.log(`My current balance is: ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
    console.log(`my new balance is: ${this._balance}`);
  }
}

const myAccount = new BankAccount(172, "farok", 100);
// myAccount.balance = 0; // private use korar karone balance change kora jabe na
console.log(myAccount);
// console.log(myAccount._balance);
myAccount.getBalance();
myAccount.addDeposit(50);
