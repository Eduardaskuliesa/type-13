/*
Jūsų praktikos darbo esmė, sukurti metodą vienodu pavadinimu skirtingose klasėse. Kiekviena konkreti klasė (SelfEmployedPerson, WorkPerson ir BuisnessLicencePerson) turi savaip apskaičiuoti užmokestį:

<<<<<<< HEAD
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get perimeter(){
    return 2 * this.x + 2 * this.y;
  }
  get area(){
    return this.x * this.y;
  }
}
class Circle {
  r;

  constructor(r) {
    this.r = r;
  }
  get perimeter(){
    return 2 * Math.PI * this.r;
  }
  get area(){
   return Math.PI * (this.r ** 2)
  }
}

const shapes = [
  new Rectangle(5, 10),
  new Rectangle(7, 7),
  new Circle(5),
  new Circle(7),
  new Circle(9)
];

console.group('1. Sukurkite figūroms perimetro apskaičiavimo funkciją ir panaudokite ją polimorfiškai');
{
shapes.forEach((shape) => console.log(shape.perimeter));
}
console.groupEnd();

console.group('2. Sukurkite figūroms ploto apskaičiavimo funkciją ir panaudokite ją polimorfiškai');
{
 shapes.forEach((shape) =>   console.log(shape.area));
=======
Turime 3 darbuotojų tipus:
  * self-employed-person - darbuotojas dirbantis pagal individualią veiklą, kuris gauna pinigus už išdirbtas valandas ir valandinį užmokestį;
  * work-person - žmogus kuri gauna atlygį vieną kart per mėnesį už kiekvieną darbo dieną;
  * business-license-person - žmogus kuris gauna atlygį už atliktus darbus;

  KLASĖS:
    * Person - bendros visų darbuotojų savybės
      * name
      * surname

    * WorkPerson - pagal darbo dienas mėnesyje
      * hourPay
      * fullTimeEquivalent
      * calcPay()

    * SelfEmployedPerson - pagal išdirbtas valandas
      * hourPay
      * hoursWorked
      * calcPay()

    * BuisnessLicencePerson - pagal atliktus darbus (Job)
      * jobs
      * calcPay()

    * Job - klasė kurią naudos BuisnessLicencePerson
      * id
      * finished
      * payed
>>>>>>> dad15a360644042546e3b5f1c1d9565666b6c446

  Darbui atlikti galite sukurti papildomas savo savybes ir metodus

  Išsaugokite visus darbuotojus viename masyve ir atspausdinkite visų darbuotojų atlyginimus naudodami metodą calcPay()
*/

// const people = [...];
// const pays = people.map(p => p.calcPay); // Array<number>;
