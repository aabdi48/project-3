const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

if (sliderImage && prevBtn && nextBtn) {
  const images = [
    "media/6b4aa15f-7841-44d1-94ff-e7f0ac69c2a6.JPG",
    "media/184a1be5-42fa-4ab4-bf7c-c6338fc02d62.JPG",
    "media/trio44.JPG"
  ];

  const altText = [
    "Beach view",
    "Playing soccer indoors",
    "Holding a TRIO certificate"
  ];

  let currentIndex = 0;

  function showImage(index) {
    sliderImage.src = images[index];
    sliderImage.alt = altText[index];
  }

  nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  });
}