document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const starRatingValue = document.getElementById("rating-value");
  let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      highlightStars(index);
    });

    star.addEventListener("mouseleave", () => {
      highlightStars(selectedRating - 1);
    });

    star.addEventListener("click", () => {
      toggleRating(index);
    });
  });

  const highlightStars = (index) => {
    stars.forEach((star, i) => {
      star.classList.toggle("active", i <= index);
    });
  };

  const setRating = (rating) => {
    selectedRating = rating;
    updateRatingText();
    stars.forEach((star, index) => {
      star.classList.toggle("selected", index < rating);
    });
  };
  const toggleRating = (index) => {
    if (selectedRating - 1 === index) {
      stars[index].classList.remove("selected");
      selectedRating--;
      updateRatingText();
    } else {
      setRating(index + 1);
    }
  };

  const updateRatingText = () => {
    starRatingValue.textContent = selectedRating;
  };
});
