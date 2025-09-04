// Diccionario de palabras por letra inicial
const PALABRAS = {
  a: "amor",
  b: "balón",
  c: "cartagena",
  d: "deporte",
  e: "escuela",
  f: "fútbol",
  g: "goles",
  h: "héroe",
  i: "internet",
  j: "juego",
  k: "kilómetro",
  l: "liga",
  m: "madrid",
  n: "nube",
  o: "octavos",
  p: "pelota",
  q: "queso",
  r: "reglamento",
  s: "semifinal",
  t: "torneo",
  u: "universidad",
  v: "victoria",
  w: "wifi",
  x: "xilófono",
  y: "youtube",
  z: "zapato"
};

const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!value) {
    suggestions.style.display = "none";
    return;
  }

  // Tomamos solo la primera letra escrita
  const letra = value[0];
  if (PALABRAS[letra]) {
    suggestions.style.display = "block";
    const div = document.createElement("div");
    div.textContent = PALABRAS[letra];
    div.addEventListener("click", () => {
      search.value = PALABRAS[letra];
      suggestions.style.display = "none";
    });
    suggestions.appendChild(div);
  } else {
    suggestions.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    suggestions.style.display = "none";
  }
});
