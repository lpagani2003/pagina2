function togglePopup(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
      element.style.display = "block";
      window.scrollTo(0, 0);
    } else {
      element.style.display = "none";
    }
  }