const form = document.getElementById("settings-form");
const languageSelect = document.getElementById("targetLanguage");
const status = document.getElementById("status");
const heading = document.getElementById("heading");
const description = document.getElementById("description");
const languageLabel = document.getElementById("languageLabel");
const saveButton = document.getElementById("saveButton");

function hasLanguageOption(language) {
  return Array.from(languageSelect.options).some((option) => option.value === language);
}

function applyLocalizedTexts(language) {
  const localeKey = getLocaleKey(language);
  const texts = getTranslationTexts(language);

  document.documentElement.lang = localeKey;
  document.title = texts.optionsTitle;
  heading.textContent = texts.optionsHeading;
  description.textContent = texts.optionsDescription;
  languageLabel.textContent = texts.languageLabel;
  saveButton.textContent = texts.saveButton;
}

async function restoreSettings() {
  const { targetLanguage = DEFAULT_LANGUAGE } = await browser.storage.sync.get("targetLanguage");
  const selectedLanguage = hasLanguageOption(targetLanguage) ? targetLanguage : DEFAULT_LANGUAGE;
  languageSelect.value = selectedLanguage;
  applyLocalizedTexts(selectedLanguage);
}

languageSelect.addEventListener("change", () => {
  applyLocalizedTexts(languageSelect.value);
  status.textContent = "";
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const targetLanguage = languageSelect.value;
  await browser.storage.sync.set({ targetLanguage });
  status.textContent = getTranslationTexts(targetLanguage).savedMessage;
});

restoreSettings();
