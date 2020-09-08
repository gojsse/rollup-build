let jsApp;

const init = (elementID) => {
  console.log(elementID);
  jsApp = document.getElementById(elementID);

  if (jsApp !== null) {
    app();
    jsApp.innerHTML = `Initialized default javascripts on #${elementID} element.`;
  } else {
    jsApp.innerHTML = `#${elementID} not found. Could not initialize default javascripts.`;
  }
};

const app = () => {
  console.log('JS App complete.');
};

export {
  init
};
