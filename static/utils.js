function get_combined_result(text) {
  text = text.toLowerCase();

  if (
    text.includes("red") ||
    text.includes("laptop") ||
    text.includes("street")
  ) {
    return Math.random() * (100 - 75) + 75; // between 60–100
  } else {
    return Math.random() * (50 - 15) + 15; // between 15–50
  }
}
