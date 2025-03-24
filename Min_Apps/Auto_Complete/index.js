document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input-text");
  const suggestionContainer = document.getElementById("suggestion-container");
  let suggestions = [];
  let timerID = null;

  const fetchData = async (searchTerm) => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    const data = await response.json();
    suggestions = data.products;
    renderSuggestions();
  };

  const debounce = (callBackfun, wait = 0) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      callBackfun();
    }, wait);
  };

  const highlightMatch = (title) => {
    const regex = new RegExp(`${input.value}`, "gi");
    return title.replace(regex, `<strong>${input.value}</strong>`);
  };

  renderSuggestions = () => {
    suggestionContainer.innerHTML = suggestions
      .map((suggestion) => `<li>${highlightMatch(suggestion.title)}</li>`)
      .join("");
  };
  const updateSuggestions = () => {
    const text = input.value.trim();
    if (!text) {
      suggestionContainer.innerHTML = "";
      return;
    }
    fetchData(text);
  };

  input.addEventListener("input", () => {
    debounce(updateSuggestions, 300);
  });
});
