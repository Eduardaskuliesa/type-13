console.group('1. Sukurkite funkciją, kuri priima spalvą ir grąžina funkciją, kuri spausdins tekstą išorinei funkcijai perduota spalva');
{
  const createColorfulPrintingFunction = (color) => {
    // ... grąžinti funkciją, kuri priimtų tekstą ir atspausdintų jį spalva <color>
  }

  const printRed = createColorfulPrintingFunction('red');
  const printBlue = createColorfulPrintingFunction('blue');

  // printRed('tekstas'); // konsolėje matosi: 'tekstas'  raudona spalva
  // printBlue('tekstas'); // konsolėje matosi: 'tekstas' mėlyna spalva
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri priima simbolių masyvą ir grąžina funkciją, kuri tikrins ar tekste yra išorinės funkcijos kvietimo metu perduotų simbolių');
{

}
console.groupEnd();

console.group('3. Sukurkite funkciją, kuri priima funkciją priimančią 2 parametrus ir grąžiną perduotą funkciją iškviečiamą su dviem invokacijom');
{
  // funkcija priimanti 2 parametrus
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  const convertBinaryFunctionToUnaryInvocationQueue = (binaryFunction) => {
    // ....
  }

  const addUnaryQueue = convertBinaryFunctionToUnaryInvocationQueue(add);
  const multiplyUnaryQueue = convertBinaryFunctionToUnaryInvocationQueue(multiply);
  // console.log(addUnaryQueue(7)(6)); // 13
  // console.log(multiplyUnaryQueue(7)(6)); // 42
}
console.groupEnd();
