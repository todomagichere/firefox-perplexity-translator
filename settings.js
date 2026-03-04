const DEFAULT_LANGUAGE = "English";

const languageSelect = document.getElementById("targetLanguage");
const saveButton = document.getElementById("saveButton");
const status = document.getElementById("status");
const openOptions = document.getElementById("openOptions");

function hasLanguageOption(language) {
  return Array.from(languageSelect.options).some((option) => option.value === language);
}

async function restoreLanguage() {
  const { targetLanguage = DEFAULT_LANGUAGE } = await browser.storage.sync.get("targetLanguage");
  languageSelect.value = hasLanguageOption(targetLanguage) ? targetLanguage : DEFAULT_LANGUAGE;
}

saveButton.addEventListener("click", async () => {
  await browser.storage.sync.set({ targetLanguage: languageSelect.value });
  status.textContent = "Idioma guardado.";
});

openOptions.addEventListener("click", async (event) => {
  event.preventDefault();
  await browser.runtime.openOptionsPage();
});

restoreLanguage();
