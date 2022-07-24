let output = document.querySelector("output");

btn.addEventListener("click", () => {
  let hours = document.querySelector("#hours").value;
  document.querySelector("#output").innerHTML = hours;
});
