function onError(e) {
  console.error(e);
}

// store theme after it has been updated from preferences page
function handleUpdatedTheme(updateInfo) {
  if (updateInfo.theme) {
    const setting = browser.storage.local.set(updateInfo.theme);
    setting.then(null, onError);
  }
}

// load stored theme at startup
function loadStoredTheme(storedTheme) {
  if (!storedTheme) {
    console.log("there was no stored theme");
    browser.theme.reset();
  }
  browser.theme.update(storedTheme);
}

const getting = browser.storage.local.get();
getting.then(loadStoredTheme, onError);

browser.theme.onUpdated.addListener(handleUpdatedTheme);
