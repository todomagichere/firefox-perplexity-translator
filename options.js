const DEFAULT_LANGUAGE = "inglés";

const form = document.getElementById("settings-form");
const languageSelect = document.getElementById("targetLanguage");
const status = document.getElementById("status");

function hasLanguageOption(language) {
  return Array.from(languageSelect.options).some((option) => option.value === language);
}

async function restoreSettings() {
  const { targetLanguage = DEFAULT_LANGUAGE } = await browser.storage.sync.get("targetLanguage");
  languageSelect.value = hasLanguageOption(targetLanguage) ? targetLanguage : DEFAULT_LANGUAGE;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const targetLanguage = languageSelect.value;
  await browser.storage.sync.set({ targetLanguage });
  status.textContent = "Configuración guardada.";
});

restoreSettings();
