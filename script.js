var skills = document.querySelectorAll("#skillList li");
var skillInfo = document.getElementById("skillInfo");

skills.forEach(function (skill) {
  skill.addEventListener("click", function () {
    skillInfo.textContent = skill.dataset.info;
  });
});

document.getElementById("greetButton").addEventListener("click", function () {
  document.getElementById("greeting").textContent = "Hello! Thanks for visiting my portfolio.";
});