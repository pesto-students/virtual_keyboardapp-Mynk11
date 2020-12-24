//import onButtonClick from "virtual_keyboardapp-Mynk11/Project_VIrtualKeyboard/buttonEvent.js";
const keysArray = [
  { 0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { 1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"] },
  { 2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"] },
  {
    3: ["CAPSKEY", "Z", "X", "C", "V", "B", "N", "M", "ERASEBYONE"]
  },
  { 4: ["SPACE"] }
];

const createKeyboardKeys = () => {
  let parentRowOne = document.getElementById("grid_row_1");
  let parentRowTwo = document.getElementById("grid_row_2");
  let parentRowThree = document.getElementById("grid_row_3");
  let parentRowFour = document.getElementById("grid_row_4");
  let parentRowFive = document.getElementById("grid_row_5");

  console.log("keysArray[0]", keysArray[0], parentRowOne);
  let columnArray = [];
  keysArray.forEach((key, index) => {
    columnArray[index] = keysArray[index][index].map(key => {
      let button = document.createElement("button");

      if (key === "CAPSKEY") {
        let img = document.createElement("img");
        img.setAttribute("src", "./icons/caps-lock-on-64.png");
        img.addEventListener("click", onButtonClick);
        img.setAttribute("value", key);
        img.setAttribute("capskey", true);
        button.appendChild(img);
      } else if (key === "ERASEBYONE") {
        let img = document.createElement("img");
        img.addEventListener("click", onButtonClick);
        img.setAttribute("src", "./icons/left-arrow-100.png");
        img.setAttribute("value", key);
        button.appendChild(img);
      } else if (key === "SPACE") {
        let img = document.createElement("img");
        img.addEventListener("click", onButtonClick);
        img.setAttribute("value", key);
        img.setAttribute("src", "./icons/space-key-48.png");
        img.setAttribute("spaceKey", true);
        button.appendChild(img);
      } else {
        button.innerText = key;
        button.addEventListener("click", onButtonClick);
        button.setAttribute("value", key);
        if (isNaN(key)) {
          button.classList.add("alphabet");
        }
      }
      return button;
    });
  });

  console.log("columnArray", columnArray);
  columnArray.forEach((column, index) => {
    columnArray[index].forEach(button => {
      if (index === 0) {
        parentRowOne.appendChild(button);
      }
      if (index === 1) {
        parentRowTwo.appendChild(button);
      }
      if (index === 2) {
        parentRowThree.appendChild(button);
      }
      if (index === 3) {
        parentRowFour.appendChild(button);
      }
      if (index === 4) {
        parentRowFive.appendChild(button);
      }
    });
  });
};
createKeyboardKeys();
