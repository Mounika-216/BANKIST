'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
// PASSING THE movements
const displayMovements=function(movements){
  containerMovements.innerHTML='';
      movements.forEach(function(mov,i){
        const type=mov>0 ?'deposit':'withdrawal';
        const html=`<div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i+1}${type}
          </div>
          <div class="movements__value">${mov}</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin',html);
      });
};
// const user=accounts.map(owner){
//   console.log (owner);
// };
// console.log(user);
// -------tried in my own way-----
// const id=accounts.map(function(i,el){
//  return (`${i.owner}`);
 
// });
// console.log(id);
// const user=id.map(function(i,el){
  
//   return i.toLowerCase().split(' ').map(function(name){
//     return name[0];
//   }).join('');
 
// });
// console.log(user);
// console.log(accounts);
// const UserName=accounts.map(function(acc1,i){
//   acc1.UserName= user[i];
// });
// console.log(accounts);
const createUserName=function(accs){
  accs.forEach(function(acc){
    acc.UserName=acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');

  });
};
createUserName(accounts);
console.log(accounts);
// to filter
const createName=function(accs){
  accs.forEach(function(acc){
const deposit=acc.movements.filter(function(mov){
  return mov>0;
});
console.log(acc.movements);
console.log(deposit);
const withdrawal=acc.movements.filter(function(mov){
  return mov<0;
});
console.log(withdrawal);
});
};
// createName(accounts);

// reduce method
// const create=function(accs){ 
//    accs.forEach(function(acc){
  const create=function(movements){
   const amount=movements.reduce(function(acc,cur){
     return acc+cur;
   });
   labelBalance.textContent=`${amount}EUR`;
   console.log(amount);
 };

 // });};
// making the displayMovements
const eurotoUs=1.1;
const displaySummary=function(accounts)
{
  const displayIn=accounts.movements.filter(mov=>mov>0)
              .reduce((acc,cur)=>acc+cur,0);
             labelSumIn.textContent=displayIn;
const displayOut=accounts.movements.filter(mov=>mov<0)
              .reduce((acc,cur)=>acc+cur,0);
             labelSumOut.textContent=(Math.abs(displayOut));
const intrest=accounts.movements.filter(mov=>mov>0).map(deposit=>((deposit*eurotoUs)*accounts.interestRate)/100)
                     .reduce((acc,cur)=>(acc+cur));
              labelSumInterest.textContent=intrest;    
};
// FIND method
// const displayfind= function(movements){
//   const firstWithDrawl=movements.find(mov => mov<0);
// console.log(movements);
// console.log(firstWithDrawl);
// };
// displayfind(account1.movements);
// const accountfind=accounts.find(acc=>acc.owner==='Jessica Davis');
// console.log(accountfind);
// LOGIN AND CHECK
let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
currentAccount=accounts.find(acc=>acc.UserName===
  inputLoginUsername.value)
console.log(currentAccount);
if(currentAccount.pin===Number(inputLoginPin.value)){
// display ui and print welcome message
labelWelcome.textContent=`welcome back ${currentAccount.owner.split(' ')[0]}`};
containerApp.style.opacity=100;
// CLEAR INPUT FIELDS
 inputLoginUsername.value=inputLoginPin.value='';
// displayMovements
// displayMovements(currentAccount.movements);
// // display balance__value
// create(currentAccount.movements);
// // display displaySummary
// displaySummary(currentAccount);
console.log(currentAccount);
});
// transfer amount to
 btnTransfer.addEventListener('click',function(e){
    e.preventDefault();
  const toAccount= accounts.find(acc=>acc.UserName===(inputTransferTo.value));
  console.log(toAccount);
  toAccount.movements.push(Number(inputTransferAmount.value));
  console.log(toAccount.movements);
 // });
displayMovements(toAccount.movements);
// display balance__value
create(toAccount.movements);
// display displaySummary
displaySummary(toAccount);
});
