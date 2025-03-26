document.addEventListener("DOMContentLoaded", () => {
  const parentCheckbox = document.querySelector(".parent-checkbox");
  const childCheckboxes = document.querySelectorAll(".child-checkbox");

  // Parent checkbox toggles all children
  parentCheckbox.addEventListener("change", () => {
    childCheckboxes.forEach((child) => {
      child.checked = parentCheckbox.checked;
    });
    parentCheckbox.indeterminate = false;
  });

  // Update parent checkbox state when children change
  childCheckboxes.forEach((child) => {
    child.addEventListener("change", () => {
      const total = childCheckboxes.length;
      const checkedCount = document.querySelectorAll(
        ".child-checkbox:checked"
      ).length;

      if (checkedCount === 0) {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = false;
      } else if (checkedCount === total) {
        parentCheckbox.checked = true;
        parentCheckbox.indeterminate = false;
      } else {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = true;
      }
    });
  });
});
