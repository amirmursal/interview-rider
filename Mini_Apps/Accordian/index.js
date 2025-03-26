document.addEventListener("DOMContentLoaded", () => {
  const accordians = document.querySelectorAll(".accordion-item");

  accordians.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      accordians.forEach((accordian) => {
        accordian.classList.remove("active");
        accordian.querySelector(".accordion-content").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
