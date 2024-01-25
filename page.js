const selector = (selector) => document.querySelector(selector);
const firstNumberList = new Set();
const secondNumberList = new Set();
const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const sign = ((item) => {
  switch (item) {
    case "add":
      return "+";
    case "sub":
      return "–";
    case "mul":
      return "x";
    case "div":
      return "÷";
  }
})(searchParams.get("sign"));

const getRandomNumber = (start, end) => Math.floor(Math.random() * end) + start;

const startNumber = (item) => {
  switch (item) {
    case 1:
      return 1;
    case 2:
      return 10;
    case 3:
      return 100;
    case 4:
      return 1000;
  }
};

const endNumber = (item) => {
  switch (item) {
    case 1:
      return 9;
    case 10:
      return 90;
    case 100:
      return 900;
    case 1000:
      return 9000;
  }
};

const createRandomNumber = () => {
  const firstStartNumber = startNumber(Number(searchParams.get("item1")));
  const secondStartNumber = startNumber(Number(searchParams.get("item2")));
  const firstEndNumber = endNumber(firstStartNumber);
  const secondEndNumber = endNumber(secondStartNumber);

  if (firstStartNumber < 10) {
    while (firstNumberList.size < 9) {
      firstNumberList.add(getRandomNumber(firstStartNumber, firstEndNumber));
    }
  } else {
    while (firstNumberList.size < 10) {
      firstNumberList.add(getRandomNumber(firstStartNumber, firstEndNumber));
    }
  }

  if (secondStartNumber < 10) {
    while (secondNumberList.size < 9) {
      secondNumberList.add(getRandomNumber(secondStartNumber, secondEndNumber));
    }
  } else {
    while (secondNumberList.size < 10) {
      secondNumberList.add(getRandomNumber(secondStartNumber, secondEndNumber));
    }
  }
};

const layoutSetting = () => {
  for (index = 1; index <= 10; index++) {
    selector(".exam").innerHTML += `
    <div class="exam-item${index}">
      <div>
        <p>${sign}</p>
        <div>
          <p id="number1"></p>
          <p id="number2"></p>
      </div>
    </div>
    <hr />
  </div>
  `;
  }
};

const numbersSetting = () => {
  let index = 1;

  for (let number of firstNumberList) {
    selector(`.exam .exam-item${index} #number1`).innerText = number;
    index++;
  }

  if (index < 11) {
    selector(`.exam .exam-item10 #number1`).innerText = getRandomNumber(1, 9);
  }

  index = 1;

  for (let number of secondNumberList) {
    selector(`.exam .exam-item${index} #number2`).innerText = number;
    index++;
  }

  if (index < 11) {
    selector(`.exam .exam-item10 #number2`).innerText = getRandomNumber(1, 9);
  }
};

const init = () => {
  layoutSetting();
  createRandomNumber();
  numbersSetting();
};

init();

selector(".print").addEventListener("click", () => window.print());