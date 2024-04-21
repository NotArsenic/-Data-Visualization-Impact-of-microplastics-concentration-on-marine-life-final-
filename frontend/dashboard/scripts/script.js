function updateContent(topic) {
  var contentDiv = document.getElementById("content");

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        contentDiv.innerHTML = xhr.responseText;

        window.scrollTo(0, 0);
      } else {
        contentDiv.innerHTML = "Failed to load content";
      }
    }
  };

  var htmlFile;
  switch (topic) {
    case "home":
      htmlFile = "home.html";
      break;

    case "coral":
      htmlFile = "coral.html";
      break;

    case "microplastics":
      htmlFile = "microplastics.html";
      break;

    case "pollution":
      htmlFile = "pollution.html";
      break;

    default:
      htmlFile = "home.html";
  }

  xhr.open("GET", htmlFile, true);
  xhr.send();
}
