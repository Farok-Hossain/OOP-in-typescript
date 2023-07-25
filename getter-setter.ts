class BankAccount2 {
  id: number;
  name: string;
  private _balance: number; // private property use korle     property er age _(undersqure) dite hoi.._balance private hoya te ata k class er bahire use kora jai na

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
    // console.log(_balance);
  }

  // getter
  get balance(): number {
    return this._balance;
  }
  getBalance(): number {
    return this._balance;
  }

  // setter
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
    console.log(`my new balance is: ${this._balance}`);
  }
}

const myAccount2 = new BankAccount2(172, "farok", 200);
// myAccount.balance = 0; // private use korar karone balance change kora jabe na
// console.log(myAccount2);
// console.log(myAccount._balance);
// myAccount2.getBalance();
// myAccount2.addDeposit(150);
// console.log(myAccount2.getBalance());
console.log("balance:", myAccount2.balance);
myAccount2.deposit = 300;
console.log("new balance: ", myAccount2.balance);
