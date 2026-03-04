const MENU_ID = "translate-with-perplexity";

async function getTargetLanguage() {
  const { targetLanguage = DEFAULT_LANGUAGE } = await browser.storage.sync.get("targetLanguage");
  return targetLanguage;
}

async function ensureDefaultLanguage() {
  const { targetLanguage } = await browser.storage.sync.get("targetLanguage");
  if (!targetLanguage) {
    await browser.storage.sync.set({ targetLanguage: DEFAULT_LANGUAGE });
    return DEFAULT_LANGUAGE;
  }

  return targetLanguage;
}

async function upsertContextMenu(language) {
  const texts = getTranslationTexts(language);

  try {
    await browser.contextMenus.update(MENU_ID, { title: texts.menuTitle });
  } catch (_error) {
    browser.contextMenus.create({
      id: MENU_ID,
      title: texts.menuTitle,
      contexts: ["selection"]
    });
  }
}

browser.runtime.onInstalled.addListener(async () => {
  const language = await ensureDefaultLanguage();
  await upsertContextMenu(language);
});

browser.runtime.onStartup.addListener(async () => {
  const language = await getTargetLanguage();
  await upsertContextMenu(language);
});

browser.storage.onChanged.addListener(async (changes, areaName) => {
  if (areaName !== "sync" || !changes.targetLanguage) {
    return;
  }

  await upsertContextMenu(changes.targetLanguage.newValue || DEFAULT_LANGUAGE);
});

browser.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== MENU_ID || !info.selectionText) {
    return;
  }

  const targetLanguage = await getTargetLanguage();
  const texts = getTranslationTexts(targetLanguage);
  const prompt = texts.promptTemplate
    .replace("{language}", targetLanguage)
    .replace("{text}", info.selectionText);
  const url = `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`;

  await browser.windows.create({
    url,
    type: "popup",
    width: 920,
    height: 760
  });
});
