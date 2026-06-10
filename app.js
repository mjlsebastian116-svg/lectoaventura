const STORAGE_KEY = "lectoaventura:v1";
const DAILY_GOAL = 60;

const activityMeta = {
  vowels: {
    title: "Encuentra la vocal",
    eyebrow: "Vocales",
    icon: "🔤",
    tone: "sun",
    description: "Relaciona imágenes con A, E, I, O, U.",
  },
  syllables: {
    title: "Elige la sílaba",
    eyebrow: "Sílabas",
    icon: "🧩",
    tone: "sky",
    description: "Practica sonidos como ma, pa, sa y lu.",
  },
  build: {
    title: "Forma la palabra",
    eyebrow: "Palabras",
    icon: "✋",
    tone: "leaf",
    description: "Une sílabas para crear palabras cortas.",
  },
  listen: {
    title: "Escucha y lee",
    eyebrow: "Lectura",
    icon: "👂",
    tone: "coral",
    description: "Oye una palabra y selecciona cómo se escribe.",
  },
};

const activities = {
  vowels: [
    { visual: "✈️", word: "avión", answer: "A", options: ["A", "E", "I"] },
    { visual: "⭐", word: "estrella", answer: "E", options: ["E", "O", "U"] },
    { visual: "🧲", word: "imán", answer: "I", options: ["A", "I", "O"] },
    { visual: "🍳", word: "olla", answer: "O", options: ["O", "U", "E"] },
    { visual: "🍇", word: "uva", answer: "U", options: ["A", "U", "I"] },
  ],
  syllables: [
    { visual: "🗺️", word: "mapa", answer: "ma", options: ["ma", "me", "mi"] },
    { visual: "🏠", word: "casa", answer: "ca", options: ["co", "ca", "cu"] },
    { visual: "☀️", word: "sol", answer: "so", options: ["sa", "se", "so"] },
    { visual: "🌙", word: "luna", answer: "lu", options: ["la", "lu", "le"] },
    { visual: "☕", word: "taza", answer: "ta", options: ["te", "ti", "ta"] },
    { visual: "🍞", word: "pan", answer: "pa", options: ["pa", "pe", "po"] },
  ],
  build: [
    { visual: "🏠", word: "casa", parts: ["ca", "sa"], bank: ["ca", "sa", "ma", "lu"] },
    { visual: "🗺️", word: "mapa", parts: ["ma", "pa"], bank: ["pa", "me", "ma", "so"] },
    { visual: "🌙", word: "luna", parts: ["lu", "na"], bank: ["na", "la", "lu", "sa"] },
    { visual: "☕", word: "taza", parts: ["ta", "za"], bank: ["za", "ta", "pa", "mi"] },
    { visual: "🍲", word: "sopa", parts: ["so", "pa"], bank: ["pa", "se", "so", "lu"] },
  ],
  listen: [
    { visual: "📖", word: "libro", options: ["libro", "lobo", "labio"] },
    { visual: "🏠", word: "casa", options: ["casa", "masa", "cama"] },
    { visual: "🌼", word: "flor", options: ["flor", "faro", "fruta"] },
    { visual: "🚂", word: "tren", options: ["tren", "tres", "taza"] },
    { visual: "🍇", word: "uva", options: ["uva", "uno", "ola"] },
  ],
};

const writingItems = [
  "A",
  "E",
  "I",
  "O",
  "U",
  "ma",
  "pa",
  "sa",
  "casa",
  "luna",
  "mesa",
  "sol",
];

const storySteps = [
  {
    text: "Lía mira la ___ por la ventana.",
    answer: "luna",
    options: ["luna", "taza", "mapa"],
    speak: "Lía mira la luna por la ventana.",
  },
  {
    text: "En la mesa hay pan y ___.",
    answer: "uva",
    options: ["uva", "tren", "sol"],
    speak: "En la mesa hay pan y uva.",
  },
  {
    text: "Luego Lía lee su ___.",
    answer: "libro",
    options: ["libro", "sopa", "flor"],
    speak: "Luego Lía lee su libro.",
  },
];

const defaultState = {
  points: 0,
  streak: 0,
  badges: {},
  completed: {},
  childName: "",
  lastDay: "",
  sound: true,
};

const state = loadState();
let activeActivity = "vowels";
let activeQuestion = 0;
let buildSelection = [];
let toastTimer;
let speechText = "";
let penColor = "#2d9cdb";
let penSize = 9;
let isDrawing = false;
let canvas;
let ctx;
let canvasRect;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
  buildModules();
  buildActivityButtons();
  initNavigation();
  initSound();
  initWriting();
  initStory();
  initGrownup();
  renderActivity("vowels");
  updateDashboard();
});

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
    navigate("practice");
    renderActivity(card.dataset.activity);
  });
}

function buildActivityButtons() {
  const container = $("#activityButtons");
  container.innerHTML = Object.entries(activityMeta)
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
    if (button) renderActivity(button.dataset.activity);
  });
}

function initNavigation() {
  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) navigate(routeButton.dataset.route);
  });

  $("#startRoutine").addEventListener("click", () => {
    navigate("practice");
    renderActivity("vowels");
    showToast("Muy bien. Empezamos suave con vocales.");
  });
}

function navigate(route) {
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.dataset.view === route));
  $$(".nav-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.route === route));
  if (route === "writing") resizeCanvas();
  if (route === "story") renderStory();
}

function initSound() {
  const soundToggle = $("#soundToggle");
  soundToggle.setAttribute("aria-pressed", String(state.sound));
  soundToggle.addEventListener("click", () => {
    state.sound = !state.sound;
    soundToggle.setAttribute("aria-pressed", String(state.sound));
    soundToggle.querySelector("span").textContent = state.sound ? "🔊" : "🔇";
    saveState();
  });

  $("#speakPrompt").addEventListener("click", () => speak(speechText));
  soundToggle.querySelector("span").textContent = state.sound ? "🔊" : "🔇";
}

function renderActivity(type) {
  activeActivity = type;
  activeQuestion = 0;
  buildSelection = [];

  const meta = activityMeta[type];
  $("#activityEyebrow").textContent = meta.eyebrow;
  $("#activityTitle").textContent = meta.title;
  $$(".activity-pill").forEach((button) =>
    button.classList.toggle("is-active", button.dataset.activity === type),
  );

  if (type === "vowels") renderChoiceActivity("vowels", "¿Con qué vocal empieza?");
  if (type === "syllables") renderChoiceActivity("syllables", "¿Qué sílaba suena al inicio?");
  if (type === "build") renderBuildActivity();
  if (type === "listen") renderListenActivity();
}

function getCurrentItem(type) {
  const list = activities[type];
  return list[activeQuestion % list.length];
}

function renderChoiceActivity(type, prompt) {
  const item = getCurrentItem(type);
  speechText = `${prompt} ${item.word}`;
  $("#activityArea").innerHTML = `
    <div class="prompt-card">
      <div class="big-visual" aria-hidden="true">${item.visual}</div>
      <div>
        <p class="eyebrow">${prompt}</p>
        <div class="target-word">${highlightStart(item.word)}</div>
      </div>
      <div class="option-grid">
        ${shuffle(item.options)
          .map((option) => `<button class="option-button" type="button" data-answer="${option}">${option}</button>`)
          .join("")}
      </div>
    </div>
  `;

  $("#activityArea").querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(button, button.dataset.answer === item.answer, type));
  });
}

function renderBuildActivity() {
  const item = getCurrentItem("build");
  speechText = `Forma la palabra ${item.word}`;
  $("#activityArea").innerHTML = `
    <div class="prompt-card">
      <div class="big-visual" aria-hidden="true">${item.visual}</div>
      <p class="eyebrow">Forma la palabra</p>
      <div class="target-word">${item.word}</div>
      <div class="slot-row" id="slotRow">
        ${item.parts.map((_, index) => `<span class="word-slot" data-slot="${index}"></span>`).join("")}
      </div>
      <div class="chip-row">
        ${shuffle(item.bank)
          .map((part) => `<button class="syllable-chip" type="button" data-part="${part}">${part}</button>`)
          .join("")}
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
          markSuccess("build", `¡Sí! Formaste ${item.word}.`);
          nextActivityQuestion("build");
        } else {
          showToast("Casi. Mira la palabra y prueba otra vez.");
          setTimeout(() => {
            buildSelection = [];
            renderBuildActivity();
          }, 850);
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

function renderListenActivity() {
  const item = getCurrentItem("listen");
  speechText = item.word;
  $("#activityArea").innerHTML = `
    <div class="prompt-card">
      <div class="big-visual" aria-hidden="true">${item.visual}</div>
      <p class="eyebrow">Escucha y elige</p>
      <button class="primary-action" type="button" id="listenWord">Reproducir</button>
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
    markSuccess(type, "¡Excelente lectura!");
    nextActivityQuestion(type);
    return;
  }

  button.classList.add("is-miss");
  showToast("Buen intento. Mira despacio y vuelve a elegir.");
}

function nextActivityQuestion(type) {
  setTimeout(() => {
    activeQuestion += 1;
    buildSelection = [];
    if (type === "vowels") renderChoiceActivity("vowels", "¿Con qué vocal empieza?");
    if (type === "syllables") renderChoiceActivity("syllables", "¿Qué sílaba suena al inicio?");
    if (type === "build") renderBuildActivity();
    if (type === "listen") renderListenActivity();
  }, 850);
}

function markSuccess(type, message) {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastDay !== today) {
    state.streak += 1;
    state.lastDay = today;
  }

  state.points += 5;
  state.completed[type] = (state.completed[type] || 0) + 1;

  const completedCount = Object.values(state.completed).reduce((sum, value) => sum + value, 0);
  if (completedCount >= 5) state.badges.firstSteps = true;
  if ((state.completed.writing || 0) >= 3) state.badges.handPower = true;
  if ((state.completed.story || 0) >= 2) state.badges.reader = true;

  saveState();
  updateDashboard();
  showToast(message);
  speak(message);
}

function highlightStart(word) {
  const first = word.slice(0, 1);
  const rest = word.slice(1);
  return `<span>${first}</span>${rest}`;
}

function speak(text) {
  if (!state.sound || !("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.86;
  utterance.pitch = 1.05;
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("es"));
  if (spanishVoice) utterance.voice = spanishVoice;
  window.speechSynthesis.speak(utterance);
}

function updateDashboard() {
  const progress = Math.min(100, Math.round((state.points / DAILY_GOAL) * 100));
  $("#scoreValue").textContent = state.points;
  $("#badgeValue").textContent = Object.values(state.badges).filter(Boolean).length;
  $("#streakValue").textContent = state.streak;
  $("#progressPercent").textContent = `${progress}%`;
  $("#progressCircle").style.strokeDashoffset = 314 - (314 * progress) / 100;

  const name = state.childName ? `${state.childName}, hoy` : "Hoy";
  $("#dailyMessage").textContent = `${name} puedes practicar vocales, sílabas, palabras y trazos en una rutina corta.`;
  updateDetails();
}

function initWriting() {
  canvas = $("#traceCanvas");
  ctx = canvas.getContext("2d");

  $("#writingSelect").innerHTML = writingItems
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");

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
  $("#saveTrace").addEventListener("click", () => {
    markSuccess("writing", "¡Trazo guardado!");
  });

  canvas.addEventListener("pointerdown", startDrawing);
  canvas.addEventListener("pointermove", draw);
  canvas.addEventListener("pointerup", stopDrawing);
  canvas.addEventListener("pointercancel", stopDrawing);
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}

function resizeCanvas() {
  if (!canvas || !ctx) return;
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
  ctx.fillStyle = "#f4f8fb";
  ctx.fillRect(0, 0, canvasRect.width, canvasRect.height);

  ctx.strokeStyle = "#dceaf5";
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 12]);
  const guideLines = [0.28, 0.5, 0.72];
  guideLines.forEach((line) => {
    const y = canvasRect.height * line;
    ctx.beginPath();
    ctx.moveTo(28, y);
    ctx.lineTo(canvasRect.width - 28, y);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  const fontSize = model.length <= 2 ? Math.min(240, canvasRect.width * 0.34) : Math.min(160, canvasRect.width * 0.2);
  ctx.font = `900 ${fontSize}px "Segoe UI", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#d8e7f2";
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
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
}

function draw(event) {
  if (!isDrawing) return;
  const point = pointerPosition(event);
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
    // Some browsers release pointer capture automatically.
  }
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
          <span aria-hidden="true">▶</span>
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
        markSuccess("story", "¡Cuento completo!");
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
    state.childName = input.value.trim();
    saveState();
    updateDashboard();
    showToast("Nombre guardado.");
  });

  $("#printProgress").addEventListener("click", () => window.print());
  $("#resetProgress").addEventListener("click", () => {
    const keepName = state.childName;
    Object.assign(state, { ...defaultState, childName: keepName, sound: state.sound });
    saveState();
    updateDashboard();
    showToast("Progreso reiniciado.");
  });
}

function updateDetails() {
  const detailGrid = $("#detailGrid");
  if (!detailGrid) return;

  const rows = [
    ["Vocales", state.completed.vowels || 0],
    ["Sílabas", state.completed.syllables || 0],
    ["Palabras", state.completed.build || 0],
    ["Escucha", state.completed.listen || 0],
    ["Trazos", state.completed.writing || 0],
    ["Cuento", state.completed.story || 0],
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
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}
