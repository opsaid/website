const languageKey = "opsaid-language";

for (const link of document.querySelectorAll("[data-language]")) {
  link.addEventListener("click", () => localStorage.setItem(languageKey, link.dataset.language));
}

if (document.body.dataset.autoLanguage === "true") {
  const saved = localStorage.getItem(languageKey);
  const browser = navigator.languages?.[0] || navigator.language || "en";
  if (saved === "zh-cn" || (!saved && /^zh(?:-|$)/i.test(browser))) {
    location.replace(`/zh-cn/${location.search}${location.hash}`);
  }
}
