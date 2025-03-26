document.addEventListener("DOMContentLoaded", () => {
  const lights = document.querySelectorAll(".traffic-light");
  let currentIndex = 0;

  const changeLights = () => {
    lights.forEach((light) => light.classList.remove("active"));
    lights[currentIndex].classList.add("active");
    currentIndex = (currentIndex + 1) % lights.length;
  };

  setInterval(changeLights, 2000);
});
