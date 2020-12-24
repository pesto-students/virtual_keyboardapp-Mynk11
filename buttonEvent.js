const onButtonClick = e => {
  let type = e.target.getAttribute("value");
  let textElement = document.getElementById("textArea");
  let textValue = textElement.value;

  switch (type) {
    case "ERASEBYONE":
      let text = textValue.substring(0, textValue.length - 1);
      console.log("text----->", text, textValue);
      textElement.value = text;
      break;
    case "SPACE":
      textElement.value = textValue + " ";
      break;
    case "CAPSKEY":
      setCapsKeyFunctionality(e.target);
      break;
    default:
      textElement.value = textValue + type;
  }
};
const setCapsKeyFunctionality = element => {
  console.log("element--->", element);
  let capsKeyActive = element.getAttribute("capskey");
  const alphabets = document.getElementsByClassName("alphabet");

  //smallcase
  if (element.getAttribute("value") === "CAPSKEY") {
    if (capsKeyActive != "false") {
      element.setAttribute("capskey", false);
      element.setAttribute("src", "./icons/caps-lock-off-64.png");
    } else {
      element.setAttribute("capskey", true);
      element.setAttribute("src", "./icons/caps-lock-on-64.png");
    }
  }
  for (button in alphabets) {
    if (button < 26 && alphabets[button].getAttribute("value") !== "CAPSKEY") {
      let value = "";
      if (capsKeyActive != "false") {
        value = alphabets[button].innerText.toLowerCase();
      } else {
        value = alphabets[button].innerText.toUpperCase();
      }
      alphabets[button].innerText = value;
      alphabets[button].setAttribute("value", value);
    }
  }
};

//export default onButtonClick;
