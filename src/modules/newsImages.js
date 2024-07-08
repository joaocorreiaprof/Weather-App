import ImageOne from "../images/news1.jpg";
import ImageTwo from "../images/news2.jpg";
import ImageThree from "../images/news3.jpg";

function displayImages() {
  const containerOne = document.getElementById("news1");
  const myImage1 = new Image();
  myImage1.src = ImageOne;
  myImage1.classList.add("style-news-image");
  containerOne.appendChild(myImage1);

  const containerTwo = document.getElementById("news2");
  const myImage2 = new Image();
  myImage2.src = ImageTwo;
  myImage2.classList.add("style-news-image");
  containerTwo.appendChild(myImage2);

  const containerThree = document.getElementById("news3");
  const myImage3 = new Image();
  myImage3.src = ImageThree;
  myImage3.classList.add("style-news-image");
  containerThree.appendChild(myImage3);
}

export { displayImages };
