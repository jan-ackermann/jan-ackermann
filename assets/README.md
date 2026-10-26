# Local site assets

The pages load fonts and icons from this repository; there are no Google Fonts
or Font Awesome CDN requests.

- `fonts/site-fonts.css` embeds the original static Open Sans normal faces at
  weights 300, 400, and 600 from Google Fonts, version 3.003 (API version v44).
  The source request is the Open Sans portion of the previous stylesheet URL:
  <https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap>.
  The TTFs were losslessly converted to WOFF2 with fontTools. Keeping the same
  available weights and synthetic bold/italic behavior preserves the live
  page's typography. Open Sans is licensed under SIL OFL 1.1; see
  `licenses/open-sans.txt`.
- The same stylesheet embeds subsets of the original Font Awesome Free 6.4.0
  solid and brand fonts, copyright 2023 Fonticons, Inc., obtained from
  <https://github.com/FortAwesome/Font-Awesome/tree/6.4.0/webfonts>.
  Only the 11 icon characters used by the site are included. Glyph outlines
  and advance widths are preserved; the subset families are renamed
  `Site Icons Solid` and `Site Icons Brands` in accordance with SIL OFL 1.1.
  See `licenses/font-awesome.txt` and the attribution on the privacy page.
  Font data is embedded in the local CSS so icons and text also work when the
  HTML file is opened directly, without external SVG or font-file requests.
- `jan.webp`: a 400 × 417 display copy of `jan.jpg`, generated with ImageMagick
  using `-auto-orient -resize 400x -strip -quality 82`.
- `jan-preview.jpg`: an 800 × 835 social-preview copy of `jan.jpg`, generated
  with `-auto-orient -resize 800x -strip -sampling-factor 4:2:0 -quality 85`.
  The original `jan.jpg` is retained as the source image.

The provenance of publication thumbnails is recorded in `papers/sources.json`.
