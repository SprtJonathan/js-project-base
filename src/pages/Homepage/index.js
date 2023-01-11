import { createElementFromTemplate } from "../../components/helpers.js";

let isRotating = false;

/**
 * It creates a page with a title, a paragraph, and a button. When the button is clicked, the image
 * rotates.
 * @returns The pageContent element.
 */
export function Homepage() {
  const pageContent = createElementFromTemplate(
    "main",
    { class: "page-content" },
    "",
    ""
  );

  const titleContent = createElementFromTemplate(
    "div",
    { class: "title-content" },
    "",
    pageContent
  );

  const rotatingImage = createElementFromTemplate(
    "img",
    {
      src: "/src/assets/img/Unofficial_JavaScript_logo_2.svg",
      alt: "JavaScript logo",
      id: "title-image",
      class: "title-image",
      width: "40px",
      height: "40px",
    },
    "",
    titleContent
  );

  const title = createElementFromTemplate(
    "h1",
    { class: "title" },
    "Vanilla project base (Component based)",
    titleContent
  );

  const introText = createElementFromTemplate(
    "p",
    {},
    "This is a basic project to get started with a new vanilla JS project.",
    titleContent
  );

  const imageAnimationButton = createElementFromTemplate(
    "button",
    { class: "rotate-button" },
    "Rotate image",
    titleContent
  );

  imageAnimationButton.addEventListener("click", () => {
    rotateImage();
  });

  function rotateImage() {
    const image = rotatingImage;
    if (!isRotating) {
      image.classList.add("rotating");
      isRotating = true;
    } else {
      image.classList.remove("rotating");
      isRotating = false;
    }
  }

  return pageContent;
}
