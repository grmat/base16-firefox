# base16-firefox

[base16][1] themes for [Mozilla Firefox][2]. Using (still) WIP [WebExtensions Themes][3], so the theme will have to be loaded temporarily.

![screenshot](screenshot.png)

Example screenshot with [Materia][4] by [Defman21][5]

## Usage

Use a [builder][6] to generate the theme files as usual (or take the pre-generated from this repo). You'll have to rename (or symlink) the desired theme to `manifest.json`. Then visit `about:debugging` in Firefox, click the button `Load Temporary Add-on` and navigate to the `manifest.json` file.

[1]: http://chriskempson.com/projects/base16/
[2]: https://www.mozilla.org/firefox/
[3]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/theme
[4]: https://github.com/Defman21/base16-materia
[5]: https://github.com/Defman21
[6]: https://github.com/chriskempson/base16#builder-repositories
