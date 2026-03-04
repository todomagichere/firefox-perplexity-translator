# Perplexity Selection Translator (Firefox)

Firefox extension that translates selected text using Perplexity without API keys.

## How it works

1. Select text on any webpage.
2. Right-click and choose **Translate with Perplexity**.
3. The extension opens a popup window with a Perplexity URL containing the translation prompt.

## Language configuration

You can configure the target language in two ways:

1. **Quick settings**: click the extension icon and choose the language in the dropdown.
2. **Full settings**: open the extension options page and choose the target language.

The selected language is saved in `browser.storage.sync`.

### UI localization behavior

- Default language is **English**.
- When the user selects another language, extension texts are shown in that language (context menu title, settings labels/messages, and prompt wording).


## Documentation by language

Detailed extension description and usage instructions for each available language are in `docs/languages/`.

## Local development

1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Click **Load Temporary Add-on...** and choose `manifest.json`.
3. Test language changes from the extension popup and then translate selected text from the context menu.
