const elements = document.querySelectorAll('section');

const toggleElementsVisibility = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 760) {
    elements.forEach(element => {
      element.classList.add('hide');
    });
  } else {
    elements.forEach(element => {
      element.classList.remove('hide');
    });
  }
};
toggleElementsVisibility();
window.addEventListener('resize', toggleElementsVisibility);


function togglePopup(id) {
  const element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
function togglePopdown(id) {
  const element = document.getElementById(id);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function toggleDisplay(element) {
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function togglePopdownx2(id1, id2) {
  const element1 = document.getElementById(id1);
  const element2 = document.getElementById(id2);
  toggleDisplay(element1);
  toggleDisplay(element2);
}