function showContent(buttonNumber) {
    if (buttonNumber === 1) {
      document.getElementById("fist-content").style.display = "grid";
      document.getElementById("second-content").style.display = "none";
    } else if (buttonNumber === 2) {
      document.getElementById("first-content").style.display = "none";
      document.getElementById("second-content").style.display = "grid";
    }
  }
  