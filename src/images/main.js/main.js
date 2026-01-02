const navToggle = document.querySelector("#navToggle");
const mobilePanel = document.querySelector("#mobilePanel");

function closeMenu() {
  navToggle.setAttribute("aria-expanded", "false");
  mobilePanel.hidden = true;
}
function openMenu() {
  navToggle.setAttribute("aria-expanded", "true");
  mobilePanel.hidden = false;
}

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  expanded ? closeMenu() : openMenu();
});

document.querySelectorAll(".panel-link, .panel-cta").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

const cookieBanner = document.querySelector("#cookieBanner");
const cookieAccept = document.querySelector("#cookieAccept");
const cookieReject = document.querySelector("#cookieReject");

const COOKIE_KEY = "cookies_consent_v1";

function hideCookies() {
  cookieBanner.style.display = "none";
}
function showCookies() {
  cookieBanner.style.display = "block";
}

const saved = localStorage.getItem(COOKIE_KEY);
if (saved) hideCookies();
else showCookies();

cookieAccept.addEventListener("click", () => {
  localStorage.setItem(COOKIE_KEY, "accepted");
  hideCookies();
});

cookieReject.addEventListener("click", () => {
  localStorage.setItem(COOKIE_KEY, "rejected");
  hideCookies();
});
