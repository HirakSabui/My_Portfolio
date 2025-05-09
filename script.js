
document.getElementById("year").textContent = new Date().getFullYear();

function toggleProjects() {
  const list = document.getElementById("projectList");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
