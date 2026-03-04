# Perplexity Selection Translator (Firefox)

Extensión para Firefox que traduce texto seleccionado usando Perplexity sin API keys.

## Cómo funciona

1. Selecciona texto en cualquier web.
2. Haz clic derecho y elige **Traducir con Perplexity**.
3. La extensión abre una ventana tipo popup con una URL de Perplexity que contiene el prompt de traducción.

## Configuración del idioma

1. Abre la página de opciones de la extensión.
2. Selecciona el idioma de destino desde la lista desplegable (por ejemplo: `Español`, `English`, `Français`).
3. Guarda los cambios.

El idioma se almacena en `browser.storage.sync`.

## Desarrollo local

1. Abre `about:debugging#/runtime/this-firefox` en Firefox.
2. Clic en **Load Temporary Add-on...** y selecciona `manifest.json`.
3. Prueba la opción de menú contextual al seleccionar texto.
