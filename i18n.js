const DEFAULT_LANGUAGE = "English";

const LANGUAGE_TO_LOCALE = {
  English: "en",
  Español: "es",
  Français: "fr",
  Deutsch: "de",
  Italiano: "it",
  "Português": "pt",
  Nederlands: "nl",
  "日本語": "ja",
  "中文": "zh"
};

const TRANSLATIONS = {
  en: {
    menuTitle: "Translate with Perplexity",
    promptTemplate: "Translate the following text into {language} and return only the translation: {text}",
    optionsTitle: "Translation settings",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "Choose the language you want selected text translated into.",
    languageLabel: "Target language",
    saveButton: "Save settings",
    savedMessage: "Settings saved.",
    quickTitle: "Translation language",
    quickLabel: "Select language",
    quickSavedMessage: "Language saved.",
    openOptions: "Open full settings"
  },
  es: {
    menuTitle: "Traducir con Perplexity",
    promptTemplate: "Traduce el siguiente texto al idioma {language} y devuelve solo la traducción: {text}",
    optionsTitle: "Configuración de traducción",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "Elige el idioma al que quieres traducir el texto seleccionado.",
    languageLabel: "Idioma de destino",
    saveButton: "Guardar configuración",
    savedMessage: "Configuración guardada.",
    quickTitle: "Idioma de traducción",
    quickLabel: "Selecciona el idioma",
    quickSavedMessage: "Idioma guardado.",
    openOptions: "Abrir configuración completa"
  },
  fr: {
    menuTitle: "Traduire avec Perplexity",
    promptTemplate: "Traduisez le texte suivant en {language} et retournez uniquement la traduction : {text}",
    optionsTitle: "Paramètres de traduction",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "Choisissez la langue vers laquelle traduire le texte sélectionné.",
    languageLabel: "Langue cible",
    saveButton: "Enregistrer",
    savedMessage: "Paramètres enregistrés.",
    quickTitle: "Langue de traduction",
    quickLabel: "Sélectionnez la langue",
    quickSavedMessage: "Langue enregistrée.",
    openOptions: "Ouvrir les paramètres complets"
  },
  de: {
    menuTitle: "Mit Perplexity übersetzen",
    promptTemplate: "Übersetze den folgenden Text in {language} und gib nur die Übersetzung zurück: {text}",
    optionsTitle: "Übersetzungseinstellungen",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "Wähle die Sprache, in die der markierte Text übersetzt werden soll.",
    languageLabel: "Zielsprache",
    saveButton: "Einstellungen speichern",
    savedMessage: "Einstellungen gespeichert.",
    quickTitle: "Übersetzungssprache",
    quickLabel: "Sprache auswählen",
    quickSavedMessage: "Sprache gespeichert.",
    openOptions: "Vollständige Einstellungen öffnen"
  },
  it: {
    menuTitle: "Traduci con Perplexity",
    promptTemplate: "Traduci il seguente testo in {language} e restituisci solo la traduzione: {text}",
    optionsTitle: "Impostazioni di traduzione",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "Scegli la lingua in cui tradurre il testo selezionato.",
    languageLabel: "Lingua di destinazione",
    saveButton: "Salva impostazioni",
    savedMessage: "Impostazioni salvate.",
    quickTitle: "Lingua di traduzione",
    quickLabel: "Seleziona la lingua",
    quickSavedMessage: "Lingua salvata.",
    openOptions: "Apri impostazioni complete"
  },
  pt: {
    menuTitle: "Traduzir com Perplexity",
    promptTemplate: "Traduza o texto a seguir para {language} e retorne apenas a tradução: {text}",
    optionsTitle: "Configurações de tradução",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "Escolha o idioma para o qual deseja traduzir o texto selecionado.",
    languageLabel: "Idioma de destino",
    saveButton: "Salvar configurações",
    savedMessage: "Configurações salvas.",
    quickTitle: "Idioma de tradução",
    quickLabel: "Selecione o idioma",
    quickSavedMessage: "Idioma salvo.",
    openOptions: "Abrir configurações completas"
  },
  nl: {
    menuTitle: "Vertalen met Perplexity",
    promptTemplate: "Vertaal de volgende tekst naar {language} en geef alleen de vertaling terug: {text}",
    optionsTitle: "Vertaalinstellingen",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "Kies de taal waarnaar je geselecteerde tekst wilt vertalen.",
    languageLabel: "Doeltaal",
    saveButton: "Instellingen opslaan",
    savedMessage: "Instellingen opgeslagen.",
    quickTitle: "Vertaaltaal",
    quickLabel: "Selecteer taal",
    quickSavedMessage: "Taal opgeslagen.",
    openOptions: "Volledige instellingen openen"
  },
  ja: {
    menuTitle: "Perplexityで翻訳",
    promptTemplate: "次のテキストを{language}に翻訳し、翻訳結果のみを返してください: {text}",
    optionsTitle: "翻訳設定",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "選択したテキストを翻訳する言語を選択してください。",
    languageLabel: "翻訳先の言語",
    saveButton: "設定を保存",
    savedMessage: "設定を保存しました。",
    quickTitle: "翻訳言語",
    quickLabel: "言語を選択",
    quickSavedMessage: "言語を保存しました。",
    openOptions: "詳細設定を開く"
  },
  zh: {
    menuTitle: "使用 Perplexity 翻译",
    promptTemplate: "将以下文本翻译为{language}，并且只返回译文：{text}",
    optionsTitle: "翻译设置",
    optionsHeading: "Perplexity Selection Translator",
    optionsDescription: "选择要将已选文本翻译成的语言。",
    languageLabel: "目标语言",
    saveButton: "保存设置",
    savedMessage: "设置已保存。",
    quickTitle: "翻译语言",
    quickLabel: "选择语言",
    quickSavedMessage: "语言已保存。",
    openOptions: "打开完整设置"
  }
};

function getLocaleKey(language) {
  return LANGUAGE_TO_LOCALE[language] || LANGUAGE_TO_LOCALE[DEFAULT_LANGUAGE];
}

function getTranslationTexts(language) {
  return TRANSLATIONS[getLocaleKey(language)] || TRANSLATIONS.en;
}
