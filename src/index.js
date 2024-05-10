export default function showButton() {
  console.log("showButton()");
  var elem = document.createElement("button");
  elem.innerHTML = "HI!";
  elem.style.cssText =
    "width: 135px; height: 35px; color: rgb(255, 255, 255); background: rgb(3, 155, 229); font-size: 14px; font-family: sans-serif; cursor: pointer; border: 1px solid rgb(19 59 78);";
  document.body.appendChild(elem);

  elem.addEventListener("click", function (e) {
    alert("HI!");
  });
}
