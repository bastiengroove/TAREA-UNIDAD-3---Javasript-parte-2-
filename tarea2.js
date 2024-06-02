document.getElementById("textArea").addEventListener("input", function () {
  var charCount = this.value.length;
  document.getElementById("charCount").textContent = charCount;
});
