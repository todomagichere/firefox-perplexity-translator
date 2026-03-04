const MENU_ID = "translate-with-perplexity";
const DEFAULT_LANGUAGE = "inglés";

browser.runtime.onInstalled.addListener(async () => {
  browser.contextMenus.create({
    id: MENU_ID,
    title: "Traducir con Perplexity",
    contexts: ["selection"]
  });

  const { targetLanguage } = await browser.storage.sync.get("targetLanguage");
  if (!targetLanguage) {
    await browser.storage.sync.set({ targetLanguage: DEFAULT_LANGUAGE });
  }
});

browser.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== MENU_ID || !info.selectionText) {
    return;
  }

  const { targetLanguage = DEFAULT_LANGUAGE } = await browser.storage.sync.get("targetLanguage");
  const prompt = `Traduce al ${targetLanguage} el siguiente texto y devuelve solo la traducción: ${info.selectionText}`;
  const url = `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`;

  await browser.windows.create({
    url,
    type: "popup",
    width: 920,
    height: 760
  });
});
