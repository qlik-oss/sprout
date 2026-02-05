/* global document */

const slider = document.getElementById("font-scale-slider");

// Add event listener to handle slider changes
slider.addEventListener("input", handleSliderChange);

// Function to handle slider changes
function handleSliderChange(event) {
  const { target } = event;
  const sliderValue = target.value;

  // Update the CSS variable using the slider value
  document.documentElement.style.setProperty("--sprout-typography-font-scale", sliderValue);
}

const densitySlider = document.getElementById("density-slider");

// Add event listener to handle slider changes
densitySlider.addEventListener("input", handleDensitySliderChange);

// Function to handle slider changes
function handleDensitySliderChange(event) {
  const { target } = event;
  const sliderValue = target.value;

  // Update the CSS variable using the slider value
  document.documentElement.style.setProperty("--sprout-spacing-density-scale", 1 / sliderValue);
}

const elementCornerSelect = document.getElementById("element-corner-select");

// Add an event listener for the 'change' event
elementCornerSelect.addEventListener("change", () => {
  // Get the selected option's value
  const selectedValue = elementCornerSelect.value;
  const cssVar = selectedValue === "soft" ? "var(--sprout-border-radius-m)" : "var(--sprout-border-radius-round)";
  const propValue = selectedValue === "sharp" ? "0" : cssVar;

  // Update the paragraph to display the selected option
  document.documentElement.style.setProperty("--sprout-border-radius-element-corner", propValue);
});
