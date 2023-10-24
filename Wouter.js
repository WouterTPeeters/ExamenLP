function doTheMagic(arr) {
  const filterdArr = arr.filter(function (num) {
    for (let i = 0; i < arr.length; i++) {
      if ((i + 1) % 4 === 0) {
        return arr[i];
      }
    }
  });
  const nthPower = filterdArr.map(function (num) {
    return num.Math.pow(num, 3);
  });
  const sum = nthPower.reduce(function (total, current) {
    total + current;
  });
  return sum;
}

// -------------------------------------------------------------

function sumOfPosNum(num) {
  const arrNum = Array.from(String(num), Number);
  if (arrNum.length !== 1) {
    return arrNum.reduce(function (total, current) {
      return total + current;
    }, 0);
  } else {
    return arrNum;
  }
}

// ------------------------------------------------------------

function evenOrOdd(arr) {
  const evenNr = [];
  const oddNr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNr.push(arr[i]);
    } else {
      oddNr.push(arr[i]);
    }
  }
  const averageEven = calcAverage(evenNr);
  const averageOdd = calcAverage(oddNr);
  return [averageEven, averageOdd];
}
function calcAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce(function (total, current) {
    total + current;
  }, 0);
  const average = sum / arr.length;
  return Math.round(average * 100) / 100;
}

// -----------------------------------------------------------------

class Gift {
  constructor(id, name, price) {
    (this.id = id), (this.name = name), (this.price = price);
  }
}

class Giftlist {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.giftList = [];
  }
  addGift(gift) {
    this.giftList.push(gift);
  }
  removeGift(name) {
    this.giftList = this.giftList.filter(function (gift) {
      return gift !== gift.name;
    });
  }
  getListOfAllGifts() {
    return this.giftList;
  }
  getTotalPrice() {
    const totalPrice = this.giftList.reduce(function (total, current) {
      return (total += current.price);
    }, 0);
    return totalPrice;
  }
}
