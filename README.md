# Perplexity Selection Translator (Firefox)

Extensión para Firefox que traduce texto seleccionado usando Perplexity sin API keys.

## Cómo funciona

1. Selecciona texto en cualquier web.
2. Haz clic derecho y elige **Traducir con Perplexity**.
3. La extensión abre una ventana tipo popup con una URL de Perplexity que contiene el prompt de traducción.

## Configuración del idioma

Tienes dos formas de configurar el idioma:

1. **Configuración rápida**: haz clic en el ícono de la extensión y selecciona el idioma en el desplegable.
2. **Configuración completa**: abre la página de opciones y selecciona el idioma de destino desde la lista desplegable.

El idioma se almacena en `browser.storage.sync`.

## Desarrollo local

1. Abre `about:debugging#/runtime/this-firefox` en Firefox.
2. Clic en **Load Temporary Add-on...** y selecciona `manifest.json`.
3. Prueba la configuración desde el popup del ícono y la opción de menú contextual al seleccionar texto.
