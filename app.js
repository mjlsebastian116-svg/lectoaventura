const STORAGE_KEY = "lectoaventura:v2";
const DAILY_GOAL = 180;
const TOTAL_LEVELS = 50;

const baseWords = [
  { word: "mama", parts: ["ma", "ma"], clue: "persona" },
  { word: "papa", parts: ["pa", "pa"], clue: "persona" },
  { word: "mapa", parts: ["ma", "pa"], clue: "viaje" },
  { word: "mesa", parts: ["me", "sa"], clue: "casa" },
  { word: "masa", parts: ["ma", "sa"], clue: "cocina" },
  { word: "misa", parts: ["mi", "sa"], clue: "lugar" },
  { word: "casa", parts: ["ca", "sa"], clue: "hogar" },
  { word: "cama", parts: ["ca", "ma"], clue: "dormir" },
  { word: "sapo", parts: ["sa", "po"], clue: "animal" },
  { word: "sopa", parts: ["so", "pa"], clue: "comida" },
  { word: "pato", parts: ["pa", "to"], clue: "animal" },
  { word: "pala", parts: ["pa", "la"], clue: "jardin" },
  { word: "pelo", parts: ["pe", "lo"], clue: "cuerpo" },
  { word: "pila", parts: ["pi", "la"], clue: "objeto" },
  { word: "polo", parts: ["po", "lo"], clue: "ropa" },
  { word: "luna", parts: ["lu", "na"], clue: "cielo" },
  { word: "lima", parts: ["li", "ma"], clue: "fruta" },
  { word: "lupa", parts: ["lu", "pa"], clue: "objeto" },
  { word: "taza", parts: ["ta", "za"], clue: "cocina" },
  { word: "tapa", parts: ["ta", "pa"], clue: "objeto" },
  { word: "tela", parts: ["te", "la"], clue: "ropa" },
  { word: "tina", parts: ["ti", "na"], clue: "casa" },
  { word: "toro", parts: ["to", "ro"], clue: "animal" },
  { word: "dado", parts: ["da", "do"], clue: "juego" },
  { word: "dedo", parts: ["de", "do"], clue: "cuerpo" },
  { word: "duna", parts: ["du", "na"], clue: "arena" },
  { word: "nube", parts: ["nu", "be"], clue: "cielo" },
  { word: "nido", parts: ["ni", "do"], clue: "animal" },
  { word: "niña", parts: ["ni", "ña"], clue: "persona" },
  { word: "niño", parts: ["ni", "ño"], clue: "persona" },
  { word: "mano", parts: ["ma", "no"], clue: "cuerpo" },
  { word: "mono", parts: ["mo", "no"], clue: "animal" },
  { word: "mina", parts: ["mi", "na"], clue: "lugar" },
  { word: "rosa", parts: ["ro", "sa"], clue: "flor" },
  { word: "risa", parts: ["ri", "sa"], clue: "emocion" },
  { word: "rama", parts: ["ra", "ma"], clue: "arbol" },
  { word: "remo", parts: ["re", "mo"], clue: "agua" },
  { word: "rio", parts: ["ri", "o"], clue: "agua" },
  { word: "gato", parts: ["ga", "to"], clue: "animal" },
  { word: "goma", parts: ["go", "ma"], clue: "escuela" },
  { word: "gota", parts: ["go", "ta"], clue: "agua" },
  { word: "gula", parts: ["gu", "la"], clue: "palabra" },
  { word: "foca", parts: ["fo", "ca"], clue: "animal" },
  { word: "foto", parts: ["fo", "to"], clue: "familia" },
  { word: "fila", parts: ["fi", "la"], clue: "escuela" },
  { word: "faro", parts: ["fa", "ro"], clue: "mar" },
  { word: "vaca", parts: ["va", "ca"], clue: "animal" },
  { word: "vela", parts: ["ve", "la"], clue: "luz" },
  { word: "vino", parts: ["vi", "no"], clue: "palabra" },
  { word: "vivo", parts: ["vi", "vo"], clue: "palabra" },
  { word: "boca", parts: ["bo", "ca"], clue: "cuerpo" },
  { word: "bota", parts: ["bo", "ta"], clue: "ropa" },
  { word: "bebe", parts: ["be", "be"], clue: "persona" },
  { word: "bola", parts: ["bo", "la"], clue: "juego" },
  { word: "queso", parts: ["que", "so"], clue: "comida" },
  { word: "quiso", parts: ["qui", "so"], clue: "palabra" },
  { word: "yema", parts: ["ye", "ma"], clue: "comida" },
  { word: "yoyo", parts: ["yo", "yo"], clue: "juego" },
  { word: "chile", parts: ["chi", "le"], clue: "comida" },
  { word: "leche", parts: ["le", "che"], clue: "bebida" },
  { word: "perro", parts: ["pe", "rro"], clue: "animal" },
  { word: "carro", parts: ["ca", "rro"], clue: "transporte" },
  { word: "barco", parts: ["bar", "co"], clue: "transporte" },
  { word: "balon", parts: ["ba", "lon"], clue: "juego" },
  { word: "bolsa", parts: ["bol", "sa"], clue: "objeto" },
  { word: "raton", parts: ["ra", "ton"], clue: "animal" },
  { word: "melon", parts: ["me", "lon"], clue: "fruta" },
  { word: "limon", parts: ["li", "mon"], clue: "fruta" },
  { word: "zapato", parts: ["za", "pa", "to"], clue: "ropa" },
  { word: "camisa", parts: ["ca", "mi", "sa"], clue: "ropa" },
  { word: "maleta", parts: ["ma", "le", "ta"], clue: "viaje" },
  { word: "pelota", parts: ["pe", "lo", "ta"], clue: "juego" },
  { word: "tomate", parts: ["to", "ma", "te"], clue: "comida" },
  { word: "paloma", parts: ["pa", "lo", "ma"], clue: "animal" },
  { word: "banana", parts: ["ba", "na", "na"], clue: "fruta" },
  { word: "conejo", parts: ["co", "ne", "jo"], clue: "animal" },
  { word: "amigo", parts: ["a", "mi", "go"], clue: "persona" },
  { word: "abuela", parts: ["a", "bue", "la"], clue: "familia" },
  { word: "abuelo", parts: ["a", "bue", "lo"], clue: "familia" },
  { word: "escuela", parts: ["es", "cue", "la"], clue: "lugar" },
  { word: "familia", parts: ["fa", "mi", "lia"], clue: "personas" },
  { word: "semilla", parts: ["se", "mi", "lla"], clue: "planta" },
  { word: "camino", parts: ["ca", "mi", "no"], clue: "lugar" },
  { word: "molino", parts: ["mo", "li", "no"], clue: "objeto" },
  { word: "mariposa", parts: ["ma", "ri", "po", "sa"], clue: "animal" },
  { word: "caramelo", parts: ["ca", "ra", "me", "lo"], clue: "dulce" },
  { word: "bicicleta", parts: ["bi", "ci", "cle", "ta"], clue: "transporte" },
  { word: "chocolate", parts: ["cho", "co", "la", "te"], clue: "dulce" },
];

const vowelWords = [
  { word: "ala", answer: "A", options: ["A", "E", "I"] },
  { word: "avion", answer: "A", options: ["A", "O", "U"] },
  { word: "arbol", answer: "A", options: ["A", "E", "O"] },
  { word: "estrella", answer: "E", options: ["E", "A", "I"] },
  { word: "elefante", answer: "E", options: ["E", "O", "U"] },
  { word: "escuela", answer: "E", options: ["E", "I", "A"] },
  { word: "isla", answer: "I", options: ["I", "A", "O"] },
  { word: "iglesia", answer: "I", options: ["I", "E", "U"] },
  { word: "oso", answer: "O", options: ["O", "A", "E"] },
  { word: "ojo", answer: "O", options: ["O", "U", "I"] },
  { word: "uva", answer: "U", options: ["U", "A", "I"] },
  { word: "uno", answer: "U", options: ["U", "O", "E"] },
];

const activityMeta = {
  vowels: {
    title: "Vocal inicial",
    eyebrow: "Vocales",
    icon: "Aa",
    tone: "sun",
    description: "Escucha y marca A, E, I, O o U.",
  },
  syllables: {
    title: "Sílaba inicial",
    eyebrow: "Sílabas",
    icon: "ma",
    tone: "sky",
    description: "Reconoce el sonido con que empieza cada palabra.",
  },
  build: {
    title: "Armar palabras",
    eyebrow: "Palabras",
    icon: "Armar",
    tone: "leaf",
    description: "Une sílabas y forma palabras completas.",
  },
  listen: {
    title: "Escucha y lee",
    eyebrow: "Lectura",
    icon: "lee",
    tone: "coral",
    description: "Escucha una palabra y escoge como se escribe.",
  },
    letterImages: {
    title: "Juego de imágenes",
    eyebrow: "Juego",
    icon: "ABC",
    tone: "mint",
    description: "Escoge las imágenes que empiezan con la letra indicada.",
  },
  paper: {
    title: "Copiar en hoja",
    eyebrow: "Escritura",
    icon: "ESC",
    tone: "plum",
    description: "Copia varias palabras en una hoja real.",
  },
  dictation: {
    title: "Dictado",
    eyebrow: "Dictado",
    icon: "voz",
    tone: "mint",
    description: "Escucha, escribe en hoja y revisa.",
  },
};

const activityLabels = {
  vowels: "Vocales",
  syllables: "Sílabas",
  build: "Palabras",
  listen: "Escucha",
  letterImages: "Imágenes",
  writing: "Escritura",
  paper: "Hoja",
  dictation: "Dictado",
  story: "Cuento",
};

const alphabetImageGame = [
  { letter: "A", correct: [["avión", "✈️"], ["árbol", "🌳"]] },
  { letter: "B", correct: [["barco", "⛵"], ["bota", "🥾"]] },
  { letter: "C", correct: [["casa", "🏠"], ["cama", "🛏️"]] },
  { letter: "D", correct: [["dado", "🎲"], ["dedo", "☝️"]] },
  { letter: "E", correct: [["estrella", "⭐"], ["elefante", "🐘"]] },
  { letter: "F", correct: [["foca", "🦭"], ["flor", "🌼"]] },
  { letter: "G", correct: [["gato", "🐱"], ["gota", "💧"]] },
  { letter: "H", correct: [["helado", "🍦"], ["hoja", "🍃"]] },
  { letter: "I", correct: [["isla", "🏝️"], ["iglesia", "⛪"]] },
  { letter: "J", correct: [["jirafa", "🦒"], ["jugo", "🧃"]] },
  { letter: "K", correct: [["koala", "🐨"], ["kilo", "⚖️"]] },
  { letter: "L", correct: [["luna", "🌙"], ["libro", "📖"]] },
  { letter: "M", correct: [["mesa", "🪑"], ["mano", "✋"]] },
  { letter: "N", correct: [["nube", "☁️"], ["nido", "🪺"]] },
  { letter: "Ñ", correct: [["ñandú", "🐦"], ["ñoqui", "🍝"]] },
  { letter: "O", correct: [["oso", "🐻"], ["ojo", "👁️"]] },
  { letter: "P", correct: [["pato", "🦆"], ["pan", "🍞"]] },
  { letter: "Q", correct: [["queso", "🧀"], ["quena", "🎶"]] },
  { letter: "R", correct: [["rana", "🐸"], ["rosa", "🌹"]] },
  { letter: "S", correct: [["sol", "☀️"], ["sapo", "🐸"]] },
  { letter: "T", correct: [["taza", "☕"], ["toro", "🐂"]] },
  { letter: "U", correct: [["uva", "🍇"], ["uno", "1️⃣"]] },
  { letter: "V", correct: [["vaca", "🐄"], ["vela", "🕯️"]] },
  { letter: "W", correct: [["wifi", "📶"], ["waffle", "🧇"]] },
  { letter: "X", correct: [["xilófono", "🎼"], ["xolo", "🐕"]] },
  { letter: "Y", correct: [["yoyo", "🪀"], ["yema", "🥚"]] },
  { letter: "Z", correct: [["zapato", "👞"], ["zorro", "🦊"]] },
];

const lessonSchedule = {
  1: {
    title: "Lunes: sonidos fuertes",
    focus: "vocales, sílabas y palabras cortas",
    tasks: [
      { label: "10 vocales", type: "vowels", route: "practice", threshold: 10 },
      { label: "10 sílabas", type: "syllables", route: "practice", threshold: 10 },
      { label: "8 trazos", type: "writing", route: "writing", threshold: 8 },
      { label: "8 palabras en hoja", type: "paper", route: "writing", threshold: 8 },
    ],
  },
  2: {
    title: "Martes: formar palabras",
    focus: "sílabas, armado y lectura",
    tasks: [
      { label: "12 sílabas", type: "syllables", route: "practice", threshold: 12 },
      { label: "10 palabras armadas", type: "build", route: "practice", threshold: 10 },
      { label: "8 lecturas", type: "listen", route: "practice", threshold: 8 },
      { label: "8 copias en hoja", type: "paper", route: "writing", threshold: 8 },
    ],
  },
  3: {
    title: "Miércoles: escritura clara",
    focus: "trazos, copia y frases cortas",
    tasks: [
      { label: "12 trazos", type: "writing", route: "writing", threshold: 12 },
      { label: "10 copias en hoja", type: "paper", route: "writing", threshold: 10 },
      { label: "8 palabras escuchadas", type: "listen", route: "practice", threshold: 8 },
      { label: "1 cuento", type: "story", route: "story", threshold: 1 },
    ],
  },
  4: {
    title: "Jueves: dictado",
    focus: "escuchar, escribir y revisar",
    tasks: [
      { label: "12 dictados", type: "dictation", route: "dictation", threshold: 12 },
      { label: "8 palabras armadas", type: "build", route: "practice", threshold: 8 },
      { label: "8 trazos", type: "writing", route: "writing", threshold: 8 },
      { label: "1 cuento", type: "story", route: "story", threshold: 1 },
    ],
  },
  5: {
    title: "Viernes: repaso largo",
    focus: "lectura, dictado y escritura",
    tasks: [
      { label: "10 lecturas", type: "listen", route: "practice", threshold: 10 },
      { label: "10 palabras armadas", type: "build", route: "practice", threshold: 10 },
      { label: "10 dictados", type: "dictation", route: "dictation", threshold: 10 },
      { label: "12 copias en hoja", type: "paper", route: "writing", threshold: 12 },
    ],
  },
  review: {
    title: "Repaso libre",
    focus: "elige juegos suaves y celebra el esfuerzo",
    tasks: [
      { label: "6 lecturas", type: "listen", route: "practice", threshold: 6 },
      { label: "6 trazos", type: "writing", route: "writing", threshold: 6 },
      { label: "6 dictados", type: "dictation", route: "dictation", threshold: 6 },
      { label: "1 cuento", type: "story", route: "story", threshold: 1 },
    ],
  },
};

const storySteps = [
  {
    text: "Samuel mira la ___ por la ventana.",
    answer: "luna",
    options: ["luna", "taza", "mapa"],
    speak: "Samuel mira la luna por la ventana.",
  },
  {
    text: "En la mesa hay ___ y sopa.",
    answer: "pan",
    options: ["pan", "tren", "sol"],
    speak: "En la mesa hay pan y sopa.",
  },
  {
    text: "El gato salta sobre la ___.",
    answer: "cama",
    options: ["cama", "lima", "pala"],
    speak: "El gato salta sobre la cama.",
  },
  {
    text: "La abuela lee un ___.",
    answer: "libro",
    options: ["libro", "balon", "toro"],
    speak: "La abuela lee un libro.",
  },
  {
    text: "Samuel copia la palabra ___ en su hoja.",
    answer: "casa",
    options: ["casa", "sapo", "nube"],
    speak: "Samuel copia la palabra casa en su hoja.",
  },
];

const motivationMessages = [
  "Muy bien, SAMUEL. Tu lectura esta creciendo.",
  "Excelente, SAMUEL. Lo hiciste con atencion.",
  "Gran trabajo. Una palabra mas para tu mente.",
  "Sigue asi, campeon lector.",
  "Eso estuvo claro y fuerte. Buen esfuerzo.",
  "SAMUEL, cada intento te hace mejor.",
  "Perfecto. Ahora tu mano y tus ojos trabajan juntos.",
  "Bravo, SAMUEL. Vamos por la siguiente palabra.",
  "Muy buen avance. Respira y sigue con calma.",
  "Lectura poderosa. Tu progreso se nota.",
];

const defaultState = {
  childName: "SAMUEL",
  sound: true,
  activeLevel: 1,
  highestUnlockedLevel: 1,
  points: 0,
  streak: 0,
  badges: {},
  completed: {},
  daily: {},
  lastDay: "",
};

const state = loadState();
let activeActivity = "vowels";
let activeQuestion = 0;
let buildSelection = [];
let dictationIndex = 0;
let dictationRevealed = false;
let letterGameScore = 0;
let activeExam = [];
let activeExamIndex = 0;
let activeExamCorrect = 0;
let toastTimer;
let speechText = "";
let penColor = "#2d9cdb";
let penSize = 9;
let isDrawing = false;
let canvas;
let ctx;
let canvasRect;
let drawnPoints = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function initApp() {
  normalizeState();
  buildModules();
  buildActivityButtons();
  buildLevelGrid();
  initNavigation();
  initSectionGuide();
  initWelcomeFloat();
  initSound();
  initWriting();
  initDictation();
  initStory();
  initGrownup();
  renderActivity("vowels");
  renderDailyLesson();
  renderDictation();
  updateDashboard();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return { ...defaultState };
  }
}

function normalizeState() {
  if (!state.childName) state.childName = "SAMUEL";
  state.activeLevel = clamp(Number(state.activeLevel) || 1, 1, TOTAL_LEVELS);
  state.highestUnlockedLevel = clamp(
    Number(state.highestUnlockedLevel) || state.activeLevel || 1,
    1,
    TOTAL_LEVELS,
  );
  if (state.activeLevel > state.highestUnlockedLevel) state.activeLevel = state.highestUnlockedLevel;
  state.badges = state.badges || {};
  state.completed = state.completed || {};
  state.daily = state.daily || {};
  saveState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function initWelcomeFloat() {
  const welcome = $("#welcomeFloat");
  const closeButton = $("#closeWelcomeFloat");
  if (!welcome || !closeButton) return;

  let welcomeTimer;
  const hideWelcome = () => {
    welcome.classList.add("is-hidden");
    clearTimeout(welcomeTimer);
    setTimeout(() => {
      welcome.hidden = true;
    }, 180);
  };

  closeButton.addEventListener("click", hideWelcome);
  welcomeTimer = setTimeout(hideWelcome, 10000);
}

function todayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayRecord() {
  const key = todayKey();
  if (!state.daily[key]) {
    state.daily[key] = {
      points: 0,
      completed: {},
      correct: 0,
      level: state.activeLevel,
      words: [],
      exam: {
        passed: false,
        attempts: 0,
        score: 0,
      },
    };
  }
  state.daily[key].completed = state.daily[key].completed || {};
  state.daily[key].words = state.daily[key].words || [];
  state.daily[key].points = Number(state.daily[key].points) || 0;
  state.daily[key].correct = Number(state.daily[key].correct) || 0;
  state.daily[key].exam = state.daily[key].exam || { passed: false, attempts: 0, score: 0 };
  return state.daily[key];
}

function getCurrentLesson() {
  const day = new Date().getDay();
  return lessonSchedule[day] || lessonSchedule.review;
}

function buildModules() {
  const grid = $("#moduleGrid");
  grid.innerHTML = Object.entries(activityMeta)
    .map(
      ([key, meta]) => `
        <button class="module-card" type="button" data-activity="${key}" data-tone="${meta.tone}">
          <span class="module-icon" aria-hidden="true">${meta.icon}</span>
          <h3>${meta.title}</h3>
          <p>${meta.description}</p>
        </button>
      `,
    )
    .join("");

  grid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-activity]");
    if (!card) return;
    if (card.dataset.activity === "dictation") {
      navigate("dictation");
      return;
    }
    if (card.dataset.activity === "paper") {
      navigate("writing");
      return;
    }
    navigate("practice");
    renderActivity(card.dataset.activity);
  });
}

function buildActivityButtons() {
  const container = $("#activityButtons");
  const practiceEntries = Object.entries(activityMeta).filter(([key]) => key !== "dictation");
  container.innerHTML = practiceEntries
    .map(
      ([key, meta]) => `
        <button class="activity-pill" type="button" data-activity="${key}">
          <span>${meta.title}</span>
          <span aria-hidden="true">${meta.icon}</span>
        </button>
      `,
    )
    .join("");

  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-activity]");
    if (!button) return;
    if (button.dataset.activity === "paper") {
      navigate("writing");
      return;
    }
    renderActivity(button.dataset.activity);
  });
}

function buildLevelGrid() {
  const grid = $("#levelGrid");
  grid.innerHTML = Array.from({ length: TOTAL_LEVELS }, (_, index) => {
    const level = index + 1;
    const locked = level > state.highestUnlockedLevel;
    return `
      <button class="level-button${locked ? " is-locked" : ""}" type="button" data-level="${level}" aria-disabled="${locked}">
        ${level}
        ${locked ? '<span class="level-lock" aria-hidden="true">🔒</span>' : ""}
      </button>
    `;
  }).join("");

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level]");
    if (!button) return;
    const requestedLevel = Number(button.dataset.level);
    if (requestedLevel > state.highestUnlockedLevel) {
      showToast("SAMUEL debe aprobar el examen del día para desbloquear ese nivel.");
      return;
    }
    state.activeLevel = requestedLevel;
    saveState();
    syncLevelLabels();
    renderWritingOptions();
    renderPaperPractice();
    renderDictation();
    renderActivity(activeActivity);
    updateDashboard();
    showToast(`SAMUEL paso al nivel ${state.activeLevel}.`);
  });
  syncLevelLabels();
}

function syncLevelLabels() {
  $$(".level-button").forEach((button) => {
    const level = Number(button.dataset.level);
    const locked = level > state.highestUnlockedLevel;
    const lockLabel = button.querySelector(".level-lock");
    button.classList.toggle("is-active", level === state.activeLevel);
    button.classList.toggle("is-locked", locked);
    button.setAttribute("aria-disabled", String(locked));
    if (locked && !lockLabel) {
      button.insertAdjacentHTML("beforeend", '<span class="level-lock" aria-hidden="true">Bloq.</span>');
    }
    if (!locked && lockLabel) lockLabel.remove();
  });
  $("#practiceLevel").textContent = state.activeLevel;
  $("#writingLevel").textContent = state.activeLevel;
  $("#dictationLevel").textContent = state.activeLevel;
}

function initNavigation() {
  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");

    if (routeButton) {
      navigate(routeButton.dataset.route);
      showSectionGuide(routeButton.dataset.route);
    }
  });

  $("#startRoutine").addEventListener("click", () => {
    const lesson = getCurrentLesson();
    const firstTask = lesson.tasks[0];

    startTask(firstTask);
    showToast(`${lesson.title}. Empezamos con ${firstTask.label}.`);
  });
}

const sectionGuides = {
  home: {
    title: "Inicio",
    text: "Aquí SAMUEL ve su lección del día, su progreso y los niveles. Debe empezar por Lección de hoy y seguir el plan con calma.",
  },
  practice: {
    title: "Practicar",
    text: "Aquí SAMUEL practica lectura. Debe escuchar, mirar la palabra, decirla en voz alta y escoger la respuesta correcta.",
  },
  writing: {
    title: "Trazar",
    text: "Aquí SAMUEL practica la forma de las letras y palabras. Primero traza en pantalla y después copia varias palabras en una hoja.",
  },
  dictation: {
    title: "Dictado",
    text: "Aquí SAMUEL escucha una palabra y la escribe en una hoja. Después puede mostrar la palabra para revisar si la escribió bien.",
  },
  story: {
    title: "Cuento",
    text: "Aquí SAMUEL lee frases cortas y completa las palabras que faltan. Debe leer despacio y elegir la palabra que tenga sentido.",
  },
  grownup: {
    title: "Adulto",
    text: "Aquí el adulto revisa el avance diario de SAMUEL, mira los puntos, actividades hechas y puede imprimir o reiniciar el progreso.",
  },
};

function showSectionGuide(route) {
  const guide = sectionGuides[route];
  if (!guide) return;

  $("#sectionGuideTitle").textContent = guide.title;
  $("#sectionGuideText").textContent = guide.text;
  $("#sectionGuide").hidden = false;
}

function initSectionGuide() {
  $("#closeSectionGuide").addEventListener("click", () => {
    $("#sectionGuide").hidden = true;
  });
}

function navigate(route) {
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.dataset.view === route));
  $$(".nav-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.route === route));
  if (route === "writing") resizeCanvas();
  if (route === "dictation") renderDictation();
  if (route === "story") renderStory();
}

function initSound() {
  const soundToggle = $("#soundToggle");
  soundToggle.setAttribute("aria-pressed", String(state.sound));
  soundToggle.textContent = state.sound ? "Audio" : "Silencio";
  soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    soundToggle.setAttribute("aria-pressed", String(state.sound));
    soundToggle.textContent = state.sound ? "Audio" : "Silencio";
    saveState();
  });

  $("#speakPrompt").addEventListener("click", () => speak(speechText));
}

function renderActivity(type) {
  if (type === "paper") {
    navigate("writing");
    return;
  }

  activeActivity = type;
  activeQuestion = 0;
  buildSelection = [];
  if (type === "letterImages") letterGameScore = 0;

  const meta = activityMeta[type];
  $("#activityEyebrow").textContent = meta.eyebrow;
  $("#activityTitle").textContent = meta.title;
  $$(".activity-pill").forEach((button) =>
    button.classList.toggle("is-active", button.dataset.activity === type),
  );

  if (type === "vowels") renderChoiceActivity("vowels", "Elige la vocal inicial");
  if (type === "syllables") renderChoiceActivity("syllables", "Elige la sílaba inicial");
  if (type === "build") renderBuildActivity();
  if (type === "listen") renderListenActivity();
  if (type === "letterImages") renderLetterImageGame();
}

function getLevelWords(count = 12) {
  const level = state.activeLevel;
  const start = (level - 1) * 3;
  return Array.from({ length: count }, (_, index) => baseWords[(start + index) % baseWords.length]);
}

function getQuestionList(type) {
  if (type === "vowels") {
    const start = (state.activeLevel - 1) % vowelWords.length;
    return Array.from({ length: 12 }, (_, index) => vowelWords[(start + index) % vowelWords.length]);
  }

  const words = getLevelWords(14);
  if (type === "syllables") {
    const syllables = unique(baseWords.flatMap((item) => item.parts)).slice(0, 36);
    return words.map((item) => {
      const answer = item.parts[0];
      const options = unique([answer, ...shuffle(syllables).filter((part) => part !== answer)]).slice(0, 3);
      return { ...item, answer, options };
    });
  }

  if (type === "listen") {
    return words.map((item, index) => {
      const distractors = getLevelWords(20)
        .map((entry) => entry.word)
        .filter((word) => word !== item.word);
      return {
        ...item,
        options: unique([item.word, ...shuffle(distractors).slice(index % 3, index % 3 + 2)]).slice(0, 3),
      };
    });
  }

  return words;
}

function getCurrentItem(type) {
  const list = getQuestionList(type);
  return list[activeQuestion % list.length];
}

function renderChoiceActivity(type, prompt) {
  const item = getCurrentItem(type);
  const answer = type === "vowels" ? item.answer : item.parts[0];
  speechText = `${prompt}. ${item.word}`;
  $("#activityArea").innerHTML = `
    <div class="prompt-card prompt-${type}">
      <div class="word-badge" aria-hidden="true">${item.word.slice(0, 2).toUpperCase()}</div>
      <div>
        <p class="eyebrow">${prompt}</p>
        <div class="target-word">${highlightStart(item.word, type === "syllables" ? answer.length : 1)}</div>
      </div>
      <div class="option-grid">
        ${shuffle(item.options)
          .map((option) => `<button class="option-button" type="button" data-answer="${option}">${option}</button>`)
          .join("")}
      </div>
      <p class="practice-note">Di la palabra en voz alta antes de responder.</p>
    </div>
  `;

  $("#activityArea").querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(button, button.dataset.answer === answer, type));
  });
}

function renderBuildActivity() {
  const item = getCurrentItem("build");
  const extraParts = shuffle(baseWords.flatMap((word) => word.parts)).filter((part) => !item.parts.includes(part));
  const bank = shuffle(unique([...item.parts, ...extraParts.slice(0, Math.max(2, 5 - item.parts.length))]));
  speechText = `Forma la palabra ${item.word}`;
  $("#activityArea").innerHTML = `
    <div class="prompt-card prompt-build">
      <div class="word-badge" aria-hidden="true">${item.word.slice(0, 2).toUpperCase()}</div>
      <p class="eyebrow">Forma la palabra</p>
      <div class="target-word">${item.word}</div>
      <div class="slot-row" id="slotRow">
        ${item.parts.map((_, index) => `<span class="word-slot" data-slot="${index}"></span>`).join("")}
      </div>
      <div class="chip-row">
        ${bank.map((part) => `<button class="syllable-chip" type="button" data-part="${part}">${part}</button>`).join("")}
      </div>
      <button class="secondary-action" type="button" id="retryBuild">Borrar</button>
    </div>
  `;

  $("#activityArea").querySelectorAll("[data-part]").forEach((button) => {
    button.addEventListener("click", () => {
      if (buildSelection.length >= item.parts.length) return;
      buildSelection.push(button.dataset.part);
      button.disabled = true;
      updateSlots();
      if (buildSelection.length === item.parts.length) {
        const isCorrect = buildSelection.join("") === item.parts.join("");
        if (isCorrect) {
          markSuccess("build", `SAMUEL armo ${item.word}. Muy bien.`);
          nextActivityQuestion("build");
        } else {
          showToast("Casi. Mira la palabra y prueba otra vez.");
          setTimeout(() => {
            buildSelection = [];
            renderBuildActivity();
          }, 900);
        }
      }
    });
  });

  $("#retryBuild").addEventListener("click", () => {
    buildSelection = [];
    renderBuildActivity();
  });
}

function updateSlots() {
  $$("#slotRow .word-slot").forEach((slot, index) => {
    slot.textContent = buildSelection[index] || "";
  });
}

function renderLetterImageGame() {
  const round = alphabetImageGame[activeQuestion % alphabetImageGame.length];
  const wrongPool = alphabetImageGame
    .filter((item) => item.letter !== round.letter)
    .flatMap((item) => item.correct.map(([word, image]) => ({ word, image, correct: false })));
  const cards = shuffle([
    ...round.correct.map(([word, image]) => ({ word, image, correct: true })),
    ...shuffle(wrongPool).slice(0, 2),
  ]);

  speechText = `Busca dos imágenes que empiezan con la letra ${round.letter}`;
  $("#activityEyebrow").textContent = "Juego";
  $("#activityTitle").textContent = "Encuentra las imágenes";
  let correctSelected = 0;
  let wrongAttempts = 0;

  $("#activityArea").innerHTML = `
    <div class="prompt-card prompt-letter-game">
      <div class="letter-target" aria-label="Letra ${round.letter}">${round.letter}</div>
      <div class="letter-game-scoreboard" aria-live="polite">
        <span>Puntaje</span>
        <strong id="letterGameScore">${letterGameScore}</strong>
        <small id="letterGameAttempt">Intento extra disponible</small>
      </div>
      <div>
        <p class="eyebrow">Toca dos imágenes</p>
        <div class="letter-game-title">Empiezan con ${round.letter}</div>
      </div>
      <div class="image-choice-grid">
        ${cards
          .map(
            (card) => `
              <button class="image-choice-card" type="button" data-correct="${card.correct}">
                <span class="image-choice-visual" aria-hidden="true">${card.image}</span>
                <strong>${card.word}</strong>
              </button>
            `,
          )
          .join("")}
      </div>
      <p class="practice-note">SAMUEL debe decir el nombre de cada imagen antes de tocarla.</p>
    </div>
  `;

  const updateGameScoreboard = (message) => {
    $("#letterGameScore").textContent = letterGameScore;
    $("#letterGameAttempt").textContent = message;
  };

  const goToNextLetter = () => {
    setTimeout(() => {
      activeQuestion += 1;
      renderLetterImageGame();
    }, 950);
  };

  $("#activityArea").querySelectorAll(".image-choice-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;

      if (button.dataset.correct === "true") {
        button.classList.add("is-correct");
        button.disabled = true;
        correctSelected += 1;
        letterGameScore += 5;
        updateGameScoreboard("Muy bien. Sigue buscando.");

        if (correctSelected === 2) {
          markSuccess("letterImages", `¡Excelente, SAMUEL! Encontraste las imágenes con ${round.letter}.`);
          goToNextLetter();
        } else {
          showToast("Muy bien. Falta una imagen más.");
        }
        return;
      }

      button.classList.add("is-miss");
      button.disabled = true;
      wrongAttempts += 1;
      letterGameScore = Math.max(0, letterGameScore - 3);

      if (wrongAttempts === 1) {
        updateGameScoreboard("Te queda un intento.");
        showToast(`Casi, SAMUEL. Esa imagen no empieza con ${round.letter}. Te queda un intento.`);
        return;
      }

      updateGameScoreboard("Pasamos a la siguiente letra.");
      showToast(`Esa tampoco empieza con ${round.letter}. Pasamos a la siguiente letra.`);
      $("#activityArea").querySelectorAll(".image-choice-card").forEach((card) => {
        card.disabled = true;
      });
      goToNextLetter();
    });
  });
}

function renderListenActivity() {
  const item = getCurrentItem("listen");
  speechText = item.word;
  $("#activityArea").innerHTML = `
    <div class="prompt-card prompt-listen">
      <div class="word-badge" aria-hidden="true">VOZ</div>
      <p class="eyebrow">Escucha y elige</p>
      <button class="primary-action" type="button" id="listenWord">Reproducir palabra</button>
      <div class="option-grid">
        ${shuffle(item.options)
          .map((option) => `<button class="option-button" type="button" data-answer="${option}">${option}</button>`)
          .join("")}
      </div>
    </div>
  `;

  $("#listenWord").addEventListener("click", () => speak(item.word));
  $("#activityArea").querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(button, button.dataset.answer === item.word, "listen"));
  });

  setTimeout(() => speak(item.word), 250);
}

function checkAnswer(button, isCorrect, type) {
  if (isCorrect) {
    button.classList.add("is-correct");
    markSuccess(type);
    nextActivityQuestion(type);
    return;
  }

  button.classList.add("is-miss");
  showToast("Buen intento, SAMUEL. Mira despacio y vuelve a elegir.");
}

function nextActivityQuestion(type) {
  setTimeout(() => {
    activeQuestion += 1;
    buildSelection = [];
    if (type === "vowels") renderChoiceActivity("vowels", "Elige la vocal inicial");
    if (type === "syllables") renderChoiceActivity("syllables", "Elige la sílaba inicial");
    if (type === "build") renderBuildActivity();
    if (type === "listen") renderListenActivity();
    if (type === "letterImages") renderLetterImageGame();
  }, 900);
}

function markSuccess(type, customMessage) {
  const key = todayKey();
  const today = getTodayRecord();
  const points = type === "story" ? 12 : type === "dictation" || type === "paper" ? 7 : 5;

  if (state.lastDay !== key) {
    state.streak = state.lastDay && isYesterday(state.lastDay, key) ? state.streak + 1 : 1;
    state.lastDay = key;
  }

  state.points += points;
  state.completed[type] = (state.completed[type] || 0) + 1;
  today.points += points;
  today.correct += 1;
  today.level = Math.max(today.level || 1, state.activeLevel);
  const dailyThreshold = getDailyTaskThreshold(type);
  const dailyDone = (today.completed[type] || 0) + 1;
  today.completed[type] = dailyThreshold ? Math.min(dailyDone, dailyThreshold) : dailyDone;

  const item = getCurrentWordForType(type);
  if (item && !today.words.includes(item)) today.words.push(item);

  updateBadges();
  saveState();
  updateDashboard();
  renderDailyLesson();

  const message = customMessage || randomMotivation();
  showToast(message);
  speak(message);
}

function getCurrentWordForType(type) {
  if (type === "vowels") return getCurrentItem("vowels").word;
  if (type === "syllables") return getCurrentItem("syllables").word;
  if (type === "build") return getCurrentItem("build").word;
  if (type === "listen") return getCurrentItem("listen").word;
  if (type === "letterImages") return alphabetImageGame[activeQuestion % alphabetImageGame.length].letter;
  if (type === "dictation") return getDictationWords()[dictationIndex % getDictationWords().length].word;
  return "";
}

function getDailyTaskThreshold(type) {
  const task = getCurrentLesson().tasks.find((item) => item.type === type);
  return task ? task.threshold : 0;
}

function updateBadges() {
  const totalDone = Object.values(state.completed).reduce((sum, value) => sum + value, 0);
  const today = getTodayRecord();
  if (totalDone >= 20) state.badges.first20 = true;
  if (state.activeLevel >= 10) state.badges.level10 = true;
  if (state.activeLevel >= 25) state.badges.level25 = true;
  if (state.activeLevel >= 50) state.badges.level50 = true;
  if ((state.completed.writing || 0) >= 30) state.badges.handPower = true;
  if ((state.completed.dictation || 0) >= 25) state.badges.dictationPower = true;
  if (today.points >= DAILY_GOAL) state.badges.dailyGoal = true;
}

function renderDailyLesson() {
  const lesson = getCurrentLesson();
  const today = getTodayRecord();
  const allComplete = lesson.tasks.every((task) => (today.completed[task.type] || 0) >= task.threshold);
  $("#todayLabel").textContent = lesson.title;
  $("#dailyLessonTitle").textContent = lesson.title;
  $("#dailyLessonBoard").innerHTML = lesson.tasks
    .map((task) => {
      const done = today.completed[task.type] || 0;
      const isComplete = done >= task.threshold;
      const shownDone = Math.min(done, task.threshold);
      const percent = Math.min(100, Math.round((done / task.threshold) * 100));
      return `
        <article class="lesson-card${isComplete ? " is-complete" : ""}">
          <div>
            <p class="eyebrow">${activityLabels[task.type] || task.type}</p>
            <h3>${task.label}</h3>
          </div>
          <div class="mini-progress" aria-label="${percent}% completado">
            <span style="width: ${percent}%"></span>
          </div>
          <p class="lesson-status">${isComplete ? "Leccion completada" : `${shownDone}/${task.threshold} completado`}</p>
          <button
            class="secondary-action"
            type="button"
            data-task-type="${task.type}"
            data-task-route="${task.route}"
            ${isComplete ? "disabled" : ""}
          >
            ${isComplete ? "Completada" : "Practicar"}
          </button>
        </article>
      `;
    })
    .join("");

  const completeMessage = $("#dailyCompleteMessage");
  if (completeMessage) {
    completeMessage.hidden = !allComplete;
    completeMessage.textContent = allComplete
      ? "Leccion del dia completada. SAMUEL ya puede presentar el examen."
      : "";
  }

  $("#adultPlan").innerHTML = lesson.tasks
    .map((task) => `<li>${task.label}: hacer con lectura en voz alta, copia lenta y celebración.</li>`)
    .join("");

  $("#dailyLessonBoard").querySelectorAll("[data-task-type]").forEach((button) => {
    button.addEventListener("click", () =>
      startTask({ type: button.dataset.taskType, route: button.dataset.taskRoute }),
    );
  });

  renderDailyExam();
}

function isDailyLessonComplete() {
  const lesson = getCurrentLesson();
  const today = getTodayRecord();
  return lesson.tasks.every((task) => (today.completed[task.type] || 0) >= task.threshold);
}

function getDailyLessonProgressText() {
  const lesson = getCurrentLesson();
  const today = getTodayRecord();
  return lesson.tasks
    .map((task) => {
      const done = Math.min(today.completed[task.type] || 0, task.threshold);
      return `${activityLabels[task.type] || task.type}: ${done}/${task.threshold}`;
    })
    .join(" - ");
}

function renderDailyExam() {
  const examContainer = $("#dailyExam");
  if (!examContainer) return;

  const today = getTodayRecord();
  const exam = today.exam || { passed: false, attempts: 0, score: 0 };
  const lessonComplete = isDailyLessonComplete();

  if (exam.passed) {
    examContainer.innerHTML = `
      <article class="exam-card is-passed">
        <div>
          <p class="eyebrow">Examen del dia</p>
          <h3>Aprobado por SAMUEL</h3>
          <p class="exam-copy">Resultado: ${exam.score || 0}/5. El siguiente nivel ya quedo desbloqueado.</p>
        </div>
        <span class="exam-status">Listo</span>
      </article>
    `;
    return;
  }

  if (!lessonComplete) {
    examContainer.innerHTML = `
      <article class="exam-card is-locked">
        <div>
          <p class="eyebrow">Examen del dia</p>
          <h3>Bloqueado hasta terminar la leccion</h3>
          <p class="exam-copy">${getDailyLessonProgressText()}</p>
        </div>
        <span class="exam-status">Pendiente</span>
      </article>
    `;
    return;
  }

  examContainer.innerHTML = `
    <article class="exam-card">
      <div>
        <p class="eyebrow">Examen del dia</p>
        <h3>Comprueba lo que aprendio hoy</h3>
        <p class="exam-copy">Debe responder 4 de 5 preguntas para pasar al siguiente nivel.</p>
        <p class="exam-copy">Intentos: ${exam.attempts || 0}. Ultimo resultado: ${exam.score || 0}/5.</p>
      </div>
      <button class="primary-action" type="button" id="startDailyExam">Empezar examen</button>
    </article>
  `;

  $("#startDailyExam").addEventListener("click", startDailyExam);
}

function startDailyExam() {
  activeExam = buildDailyExamQuestions();
  activeExamIndex = 0;
  activeExamCorrect = 0;
  renderExamQuestion();
}

function buildDailyExamQuestions() {
  const today = getTodayRecord();
  const usedWords = today.words
    .filter((word) => word && word.length > 1)
    .filter((word) => baseWords.some((entry) => entry.word === word));
  const levelWords = getLevelWords(18).map((entry) => entry.word);
  const words = unique([...usedWords, ...levelWords]).slice(0, 8);
  const wordEntries = words
    .map((word) => baseWords.find((entry) => entry.word === word))
    .filter(Boolean);
  const source = wordEntries.length >= 5 ? wordEntries : getLevelWords(8);
  const allWords = baseWords.map((entry) => entry.word);
  const allSyllables = unique(baseWords.flatMap((entry) => entry.parts));

  return shuffle(source)
    .slice(0, 5)
    .map((entry, index) => {
      if (index % 2 === 0) {
        const options = unique([
          entry.word,
          ...shuffle(allWords).filter((word) => word !== entry.word),
        ]).slice(0, 4);
        return {
          prompt: `Escoge la palabra: ${entry.word}`,
          speak: entry.word,
          answer: entry.word,
          options: shuffle(options),
        };
      }

      const answer = entry.parts[0];
      const options = unique([
        answer,
        ...shuffle(allSyllables).filter((part) => part !== answer),
      ]).slice(0, 4);
      return {
        prompt: `Con que silaba empieza "${entry.word}"?`,
        speak: `Con que silaba empieza ${entry.word}`,
        answer,
        options: shuffle(options),
      };
    });
}

function renderExamQuestion() {
  const question = activeExam[activeExamIndex];
  if (!question) {
    finishDailyExam();
    return;
  }

  $("#dailyExam").innerHTML = `
    <article class="exam-card exam-active">
      <div>
        <p class="eyebrow">Pregunta ${activeExamIndex + 1} de ${activeExam.length}</p>
        <h3>${question.prompt}</h3>
        <p class="exam-copy">Aciertos: ${activeExamCorrect}/${activeExam.length}</p>
      </div>
      <div class="exam-options">
        ${question.options
          .map((option) => `<button class="exam-option" type="button" data-exam-answer="${option}">${option}</button>`)
          .join("")}
      </div>
    </article>
  `;

  speak(question.speak);

  $("#dailyExam").querySelectorAll("[data-exam-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = button.dataset.examAnswer === question.answer;
      $("#dailyExam").querySelectorAll("[data-exam-answer]").forEach((option) => {
        option.disabled = true;
        if (option.dataset.examAnswer === question.answer) option.classList.add("is-correct");
      });

      if (isCorrect) {
        activeExamCorrect += 1;
        showToast("Muy bien, SAMUEL. Esa respuesta fue correcta.");
      } else {
        button.classList.add("is-miss");
        showToast(`Casi. La respuesta correcta era ${question.answer}.`);
      }

      setTimeout(() => {
        activeExamIndex += 1;
        renderExamQuestion();
      }, 900);
    });
  });
}

function finishDailyExam() {
  const today = getTodayRecord();
  const passed = activeExamCorrect >= 4;
  today.exam = {
    passed,
    attempts: (today.exam?.attempts || 0) + 1,
    score: activeExamCorrect,
  };

  if (passed) {
    const completedLevel = state.activeLevel;
    const nextLevel = Math.min(TOTAL_LEVELS, completedLevel + 1);
    state.highestUnlockedLevel = Math.max(state.highestUnlockedLevel, nextLevel);
    state.activeLevel = nextLevel;
    today.level = completedLevel;
    showToast(`Examen aprobado. SAMUEL desbloqueo el nivel ${nextLevel}.`);
    speak("Examen aprobado. Excelente trabajo, SAMUEL.");
  } else {
    showToast("Todavia no pasa el nivel. Repasa y vuelve a intentar el examen.");
    speak("Buen intento, SAMUEL. Repasa un poco y vuelve a intentarlo.");
  }

  saveState();
  syncLevelLabels();
  renderWritingOptions();
  renderDictation();
  renderActivity(activeActivity);
  renderDailyLesson();
  updateDashboard();
}

function startTask(task) {
  if (task.route === "writing") {
    navigate("writing");
    return;
  }
  if (task.route === "dictation") {
    navigate("dictation");
    return;
  }
  if (task.route === "story") {
    navigate("story");
    return;
  }
  navigate("practice");
  renderActivity(task.type);
}

function highlightStart(word, length = 1) {
  const first = word.slice(0, length);
  const rest = word.slice(length);
  return `<span>${first}</span>${rest}`;
}

function speak(text) {
  if (!state.sound || !("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.82;
  utterance.pitch = 1.05;
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("es"));
  if (spanishVoice) utterance.voice = spanishVoice;
  window.speechSynthesis.speak(utterance);
}

function updateDashboard() {
  const today = getTodayRecord();
  const progress = Math.min(100, Math.round((today.points / DAILY_GOAL) * 100));
  $("#scoreValue").textContent = today.points;
  $("#levelValue").textContent = `${state.activeLevel}/50`;
  $("#badgeValue").textContent = Object.values(state.badges).filter(Boolean).length;
  $("#streakValue").textContent = state.streak;
  $("#progressPercent").textContent = `${progress}%`;
  $("#progressCircle").style.strokeDashoffset = 314 - (314 * progress) / 100;
  $("#dailyMessage").textContent = `${state.childName}, hoy vas en el nivel ${state.activeLevel}. Lee, copia en hoja y termina con dictado.`;
  $("#motivationStrip").textContent = today.exam?.passed
    ? "Examen aprobado. SAMUEL ya puede trabajar el siguiente nivel."
    : isDailyLessonComplete()
      ? "Meta diaria completa. Ahora falta aprobar el examen para subir de nivel."
      : "Cada respuesta correcta queda guardada en el progreso de hoy.";
  updateDetails();
  syncLevelLabels();
}

function initWriting() {
  canvas = $("#traceCanvas");
  ctx = canvas.getContext("2d");

  renderWritingOptions();
  $("#writingSelect").addEventListener("change", resizeCanvas);
  $("#strokeSize").addEventListener("input", (event) => {
    penSize = Number(event.target.value);
  });

  $$(".swatch").forEach((button) => {
    button.addEventListener("click", () => {
      penColor = button.dataset.color;
      $$(".swatch").forEach((swatch) => swatch.classList.toggle("is-active", swatch === button));
    });
  });

  $("#clearCanvas").addEventListener("click", resizeCanvas);
  $("#saveTrace").addEventListener("click", checkTrace);

  canvas.addEventListener("pointerdown", startDrawing);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}

function renderWritingOptions() {
  const basics = ["A", "E", "I", "O", "U", "ma", "pa", "sa", "la", "ta", "ca", "me", "mi", "mo", "mu"];
  const levelWords = getLevelWords(28).map((item) => item.word);
  const sentenceOptions = [
    "Samuel lee.",
    "Mi mama me ama.",
    "La luna sale.",
    "La casa es mia.",
    "El gato toma sopa.",
  ];
  $("#writingSelect").innerHTML = unique([...basics, ...levelWords, ...sentenceOptions])
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");
  renderPaperPractice();
  setTimeout(resizeCanvas, 0);
}

function renderPaperPractice() {
  const words = getLevelWords(18);
  $("#paperPractice").innerHTML = `
    <div class="paper-heading">
      <div>
        <p class="eyebrow">Escritura en hoja</p>
        <h3>Copia estas palabras</h3>
      </div>
      <button class="primary-action" type="button" id="paperDone">Hoja completa</button>
    </div>
    <div class="copy-grid">
      ${words
        .map(
          (item) => `
            <button class="copy-word" type="button" data-copy-word="${item.word}">
              <strong>${item.word}</strong>
              <span>${item.parts.join(" - ")}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;

  $("#paperDone").addEventListener("click", () =>
    markSuccess("paper", "Hoja completa. SAMUEL escribió con esfuerzo y calma."),
  );
  $("#paperPractice").querySelectorAll("[data-copy-word]").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-done");
      markSuccess("paper", `Muy bien, SAMUEL. Copiaste ${button.dataset.copyWord}.`);
    });
  });
}

function resizeCanvas() {
  if (!canvas || !ctx) return;
  drawnPoints = [];
  updateTraceFeedback("Traza la letra y toca Trazo listo.", "neutral");
  canvasRect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(canvasRect.width * ratio));
  canvas.height = Math.max(1, Math.floor(canvasRect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawGuide();
}

function drawGuide() {
  const model = $("#writingSelect").value || "A";
  ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(0, 0, canvasRect.width, canvasRect.height);

  ctx.strokeStyle = "#f2c7a7";
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 12]);
  [0.28, 0.5, 0.72].forEach((line) => {
    const y = canvasRect.height * line;
    ctx.beginPath();
    ctx.moveTo(28, y);
    ctx.lineTo(canvasRect.width - 28, y);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  const fontSize = model.length <= 2 ? Math.min(230, canvasRect.width * 0.32) : Math.min(150, canvasRect.width * 0.15);
  ctx.font = `900 ${fontSize}px "Segoe UI", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#e0d4ff";
  ctx.fillText(model, canvasRect.width / 2, canvasRect.height / 2 + fontSize * 0.04);
}

function pointerPosition(event) {
  canvasRect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - canvasRect.left,
    y: event.clientY - canvasRect.top,
  };
}

function startDrawing(event) {
  isDrawing = true;
  canvas.setPointerCapture(event.pointerId);
  const point = pointerPosition(event);
  drawnPoints.push(point);
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
}

function draw(event) {
  if (!isDrawing) return;
  const point = pointerPosition(event);
  drawnPoints.push(point);
  ctx.lineTo(point.x, point.y);
  ctx.strokeStyle = penColor;
  ctx.lineWidth = penSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function stopDrawing(event) {
  if (!isDrawing) return;
  isDrawing = false;
  try {
    canvas.releasePointerCapture(event.pointerId);
  } catch {
    // Pointer capture can already be released by the browser.
  }
}

function checkTrace() {
  if (drawnPoints.length < 8) {
    const message = "Aun falta trazar mas. Sigue la letra despacio, SAMUEL.";
    updateTraceFeedback(message, "miss");
    showToast(message);
    speak(message);
    return;
  }

  const result = evaluateTrace();
  if (result.correct) {
    const model = $("#writingSelect").value || "A";
    const message = `Correcto, SAMUEL. Muy buen trazo de ${model}.`;
    updateTraceFeedback(`${message} Pasamos al siguiente.`, "correct");
    markSuccess("writing", message);
    setTimeout(selectNextWritingModel, 950);
    return;
  }

  const message = "Todavia no. Cubre mejor la letra morada y vuelve a tocar Trazo listo.";
  updateTraceFeedback(message, "miss");
  showToast(message);
  speak(message);
}

function evaluateTrace() {
  const model = $("#writingSelect").value || "A";
  const width = Math.max(1, Math.floor(canvasRect.width));
  const height = Math.max(1, Math.floor(canvasRect.height));
  const modelCanvas = document.createElement("canvas");
  const traceCanvas = document.createElement("canvas");
  modelCanvas.width = width;
  modelCanvas.height = height;
  traceCanvas.width = width;
  traceCanvas.height = height;

  const modelCtx = modelCanvas.getContext("2d");
  const traceCtx = traceCanvas.getContext("2d");
  drawTraceModel(modelCtx, model, width, height, "#000");

  traceCtx.strokeStyle = "#000";
  traceCtx.lineWidth = Math.max(16, penSize + 14);
  traceCtx.lineCap = "round";
  traceCtx.lineJoin = "round";
  traceCtx.beginPath();
  drawnPoints.forEach((point, index) => {
    if (index === 0) traceCtx.moveTo(point.x, point.y);
    else traceCtx.lineTo(point.x, point.y);
  });
  traceCtx.stroke();

  const modelData = modelCtx.getImageData(0, 0, width, height).data;
  const traceData = traceCtx.getImageData(0, 0, width, height).data;
  let modelPixels = 0;
  let coveredPixels = 0;
  let tracePixels = 0;
  let offModelPixels = 0;

  for (let index = 3; index < modelData.length; index += 4) {
    const hasModel = modelData[index] > 12;
    const hasTrace = traceData[index] > 12;
    if (hasModel) modelPixels += 1;
    if (hasTrace) tracePixels += 1;
    if (hasModel && hasTrace) coveredPixels += 1;
    if (hasTrace && !hasModel) offModelPixels += 1;
  }

  const coverage = modelPixels ? coveredPixels / modelPixels : 0;
  const outside = tracePixels ? offModelPixels / tracePixels : 1;
  const minCoverage = model.length <= 2 ? 0.28 : 0.2;
  const maxOutside = model.length <= 2 ? 0.72 : 0.82;
  return {
    coverage,
    outside,
    correct: coverage >= minCoverage && outside <= maxOutside,
  };
}

function drawTraceModel(targetCtx, model, width, height, color) {
  const fontSize = model.length <= 2 ? Math.min(230, width * 0.32) : Math.min(150, width * 0.15);
  targetCtx.clearRect(0, 0, width, height);
  targetCtx.font = `900 ${fontSize}px "Segoe UI", sans-serif`;
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  targetCtx.fillStyle = color;
  targetCtx.fillText(model, width / 2, height / 2 + fontSize * 0.04);
}

function updateTraceFeedback(message, type = "neutral") {
  const feedback = $("#traceFeedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.dataset.state = type;
}

function selectNextWritingModel() {
  const select = $("#writingSelect");
  if (!select) return;
  const nextIndex = (select.selectedIndex + 1) % select.options.length;
  select.selectedIndex = nextIndex;
  resizeCanvas();
  const nextValue = select.value;
  const message = `Ahora traza ${nextValue}.`;
  updateTraceFeedback(message, "neutral");
  showToast(message);
  speak(message);
}

function initDictation() {
  $("#playDictation").addEventListener("click", () => speak(getCurrentDictationWord().word));
  $("#showDictationWord").addEventListener("click", () => {
    dictationRevealed = true;
    renderDictation();
  });
  $("#nextDictation").addEventListener("click", () => {
    dictationIndex += 1;
    dictationRevealed = false;
    renderDictation();
  });
  $("#finishDictation").addEventListener("click", () => {
    const word = getCurrentDictationWord().word;
    markSuccess("dictation", `Dictado de ${word} guardado. Excelente, SAMUEL.`);
    dictationIndex += 1;
    dictationRevealed = false;
    renderDictation();
  });
}

function getDictationWords() {
  return getLevelWords(16);
}

function getCurrentDictationWord() {
  const words = getDictationWords();
  return words[dictationIndex % words.length];
}

function renderDictation() {
  const words = getDictationWords();
  const current = getCurrentDictationWord();
  $("#dictationLevel").textContent = state.activeLevel;
  $("#dictationArea").innerHTML = `
    <div class="dictation-card">
      <p class="eyebrow">Palabra ${dictationIndex % words.length + 1} de ${words.length}</p>
      <div class="dictation-secret">${dictationRevealed ? current.word : "Escucha y escribe"}</div>
      <p class="practice-note">Primero escucha. Luego escribe la palabra en una hoja. Después revisa.</p>
    </div>
  `;

  $("#dictationWordList").innerHTML = words
    .map((item, index) => `<span class="${index === dictationIndex % words.length ? "is-current" : ""}">${index + 1}. ${dictationRevealed ? item.word : item.parts.join("-")}</span>`)
    .join("");

}

function initStory() {
  renderStory();
}

function renderStory() {
  const area = $("#storyArea");
  area.innerHTML = storySteps
    .map(
      (step, index) => `
      <article class="story-card" data-story-index="${index}">
        <p class="story-text">${step.text.replace("___", '<span class="blank-word">___</span>')}</p>
        <div class="option-grid">
          ${shuffle(step.options)
            .map((option) => `<button class="option-button" type="button" data-story-answer="${option}">${option}</button>`)
            .join("")}
        </div>
        <button class="icon-text-button" type="button" data-story-speak="${index}">
          Leer
        </button>
      </article>
    `,
    )
    .join("");

  area.querySelectorAll("[data-story-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-story-index]");
      const step = storySteps[Number(card.dataset.storyIndex)];
      if (button.dataset.storyAnswer === step.answer) {
        card.querySelector(".blank-word").textContent = step.answer;
        button.classList.add("is-correct");
        markSuccess("story", "Cuento completado. SAMUEL leyo con atencion.");
      } else {
        button.classList.add("is-miss");
        showToast("Lee la frase otra vez y mira qué palabra encaja.");
      }
    });
  });

  area.querySelectorAll("[data-story-speak]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = storySteps[Number(button.dataset.storySpeak)];
      speak(step.speak);
    });
  });
}

function initGrownup() {
  const input = $("#childName");
  input.value = state.childName;

  $("#nameForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.childName = input.value.trim() || "SAMUEL";
    saveState();
    renderDictation();
    updateDashboard();
    showToast("Nombre guardado.");
  });

  $("#printProgress").addEventListener("click", () => window.print());
  $("#resetProgress").addEventListener("click", () => {
    const keepName = state.childName || "SAMUEL";
    Object.assign(state, { ...defaultState, childName: keepName, sound: state.sound });
    saveState();
    buildLevelGrid();
    renderWritingOptions();
    renderDictation();
    renderActivity("vowels");
    renderDailyLesson();
    updateDashboard();
    showToast("Progreso reiniciado.");
  });
}

function updateDetails() {
  const detailGrid = $("#detailGrid");
  if (!detailGrid) return;

  const today = getTodayRecord();
  const rows = [
    ["Niño", state.childName],
    ["Fecha", todayKey()],
    ["Nivel actual", `${state.activeLevel}/50`],
    ["Nivel desbloqueado", `${state.highestUnlockedLevel}/50`],
    ["Examen diario", today.exam?.passed ? `Aprobado ${today.exam.score || 0}/5` : `Pendiente ${today.exam?.score || 0}/5`],
    ["Puntos de hoy", today.points],
    ["Vocales", today.completed.vowels || 0],
    ["Sílabas", today.completed.syllables || 0],
    ["Palabras armadas", today.completed.build || 0],
    ["Lecturas", today.completed.listen || 0],
    ["Imágenes", today.completed.letterImages || 0],
    ["Trazos", today.completed.writing || 0],
    ["Copias en hoja", today.completed.paper || 0],
    ["Dictados", today.completed.dictation || 0],
    ["Cuentos", today.completed.story || 0],
  ];

  detailGrid.innerHTML = rows
    .map(
      ([label, value]) => `
        <div>
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>
      `,
    )
    .join("");

  const history = Object.entries(state.daily)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 7);
  $("#historyList").innerHTML = history
    .map(
      ([date, record]) => `
        <div class="history-item">
          <strong>${date}</strong>
          <span>${record.points} puntos - nivel ${record.level || 1}</span>
        </div>
      `,
    )
    .join("");
}

function randomMotivation() {
  return motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
}

function unique(items) {
  return [...new Set(items)];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function isYesterday(previous, current) {
  const previousDate = new Date(`${previous}T00:00:00`);
  const currentDate = new Date(`${current}T00:00:00`);
  return Math.round((currentDate - previousDate) / 86400000) === 1;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}
