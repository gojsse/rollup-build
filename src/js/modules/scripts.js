let jsApp;

const init = (elementID) => {
  jsApp = document.getElementById(elementID);

  if (jsApp !== null) {
    jsApp.innerHTML = `Initialized default javascripts on #${elementID} element.`;
  } else {
    jsApp.innerHTML = `#${elementID} not found. Could not initialize default javascripts.`;
  }
};

export {
  init
};
