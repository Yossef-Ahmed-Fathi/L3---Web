const text = document.getElementById("quote");
const change = document.getElementById("btn");
const fav = document.getElementById("favorite");
const reset = document.getElementById("reset");
const quotes = [
  "All that we are is the result of what we have thought",
  "If you judge people, you have no time to love them.",
  "The most courageous act is still to think for yourself. Aloud.",
  "The greatest wealth is to live content with little.",
  "The successful warrior is the average man, with laser-like focus.",
  "Those who dare to fail miserably can achieve greatly.",
  "A great man is always willing to be little.",
  "The root of suffering is attachment.",
  "Wisely, and slow. They stumble that run fast.",
  "Keep calm and carry on.",
  "To be, or not to be, that is the question.",
  "That's one small step for a man, one giant leap for mankind.",
  "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
];

change.onclick = () => {
  let index = Math.floor(Math.random() * quotes.length);
  text.textContent = quotes[index];
};

favorite.onclick = () => {
  change.setAttribute("disabled", "");
  change.style.backgroundColor = "#eee";
  change.style.cursor = "not-allowed";
  text.style.background = "#f63b92";
};

reset.onclick = () => {
  change.removeAttribute("disabled", "");
  change.style.backgroundColor = "#3b82f6";
  change.style.cursor = "pointer";
  text.style.background = "transparent";
};
