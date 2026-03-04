const languageSelect = document.getElementById("targetLanguage");
const saveButton = document.getElementById("saveButton");
const status = document.getElementById("status");
const openOptions = document.getElementById("openOptions");
const heading = document.getElementById("heading");
const languageLabel = document.getElementById("languageLabel");

function hasLanguageOption(language) {
  return Array.from(languageSelect.options).some((option) => option.value === language);
}

function applyLocalizedTexts(language) {
  const localeKey = getLocaleKey(language);
  const texts = getTranslationTexts(language);

  document.documentElement.lang = localeKey;
  document.title = texts.optionsTitle;
  heading.textContent = texts.quickTitle;
  languageLabel.textContent = texts.quickLabel;
  saveButton.textContent = texts.saveButton;
  openOptions.textContent = texts.openOptions;
}

async function restoreLanguage() {
  const { targetLanguage = DEFAULT_LANGUAGE } = await browser.storage.sync.get("targetLanguage");
  const selectedLanguage = hasLanguageOption(targetLanguage) ? targetLanguage : DEFAULT_LANGUAGE;
  languageSelect.value = selectedLanguage;
  applyLocalizedTexts(selectedLanguage);
}

languageSelect.addEventListener("change", () => {
  applyLocalizedTexts(languageSelect.value);
  status.textContent = "";
});

saveButton.addEventListener("click", async () => {
  const targetLanguage = languageSelect.value;
  await browser.storage.sync.set({ targetLanguage });
  status.textContent = getTranslationTexts(targetLanguage).quickSavedMessage;
});

openOptions.addEventListener("click", async (event) => {
  event.preventDefault();
  await browser.runtime.openOptionsPage();
});

restoreLanguage();
