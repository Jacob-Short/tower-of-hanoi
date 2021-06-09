let firstBar = document.querySelector("#first-bar");
let secondBar = document.querySelector("#second-bar");
let thirdBar = document.querySelector("#third-bar");
let base = document.querySelector(".base");
let discInHand = document.querySelector("#picked");
//
let rackClick = function (event) {
  let selectedRack = event.currentTarget;
  let count = discInHand.childElementCount;
  let topDisc = selectedRack.lastElementChild;

  //if there is a disc in the hand put the disc in some position
  if (count === 1) {
    let selectedRackWidth = selectedRack.lastElementChild.clientWidth;
    let discInHandWidth = discInHand.lastElementChild.clientWidth;
    if (selectedRackWidth > discInHandWidth) {
      selectedRack.append(discInHand.firstElementChild);
    } else {
      alert(" please put disc on bigger");
    }

    if (thirdBar.childElementCount === 5) {
      alert(" You won the game");
    }

    return;
  } else {
    if (selectedRack.childElementCount <= 1) {
      return;
    } else {
      selectedRack.style.border = "red 1px solid";
      discInHand.prepend(topDisc);
    }
  }
};

firstBar.addEventListener("click", rackClick);
secondBar.addEventListener("click", rackClick);
thirdBar.addEventListener("click", rackClick);