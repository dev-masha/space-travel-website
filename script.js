function showPlanet(name) {
  let planets = document.querySelectorAll(".planet");
  planets.forEach(p => p.classList.remove("active"));

  let tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(name).classList.add("active");
  event.target.classList.add("active");
}