# Perplexity Selection Translator (Firefox)

Firefox extension that translates selected text using Perplexity without API keys.

## How it works

1. Select text on any web page.
2. Right-click and choose **Translate with Perplexity**.
3. The extension opens a popup-style window with a Perplexity URL containing the translation prompt.

## Language Configuration

1. Open the extension's options page.
2. Select the target language from the dropdown list.
3. Save changes.

The language is stored in `browser.storage.sync`.

## Local Development

1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Click **Load Temporary Add-on...** and select `manifest.json`.
3. Test the contextual menu option by selecting text.
