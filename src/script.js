const slideLeftBtn = document.getElementById("slide-left-btn");
const slideRightBtn = document.getElementById("slide-right-btn");
const slider = document.getElementById("slider");

function setInitialSliderPosition() {
  if (slider.offsetWidth >= 640) {
    slider.scrollLeft = 2 * (500 + (slider.offsetWidth - 500) / 4);
  } else {
    slider.scrollLeft = 2 * slider.offsetWidth * 0.85;
  }
}
setInitialSliderPosition();

slideLeftBtn.addEventListener("click", () => {
  if (slider.offsetWidth >= 640) {
    slider.scrollLeft -= 500 + (slider.offsetWidth - 500) / 4;
  } else {
    slider.scrollLeft -= slider.offsetWidth * 0.85;
  }
});
slideRightBtn.addEventListener("click", () => {
  if (slider.offsetWidth >= 640) {
    slider.scrollLeft += 500 + (slider.offsetWidth - 500) / 4;
  } else {
    slider.scrollLeft += slider.offsetWidth * 0.85;
  }
});
