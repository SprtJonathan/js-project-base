let isRotating = false;

function rotateImage() {
  const image = document.getElementById("title-image");
  if (!isRotating) {
    image.classList.add("rotating");
    isRotating = true;
  } else {
    image.classList.remove("rotating");
    isRotating = false;
  }
}
