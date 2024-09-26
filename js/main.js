import mainFunctions from "./modules/mainFunctions.js";

// MAINFUNCTIONS CALLING AND CHOSEN APP CALLER
function initialExe() {
  const mainFunctionsExe = new mainFunctions(
    window.document.documentElement,
    window.document.getElementById("main-title"),
    window.document.getElementById("themes-select")
  );
  mainFunctionsExe.exec();

  // APP BUTTONS CLICK EVENT LISTENERS
  const appButtons = window.document.getElementsByClassName("app-buttons");
  Array.from(appButtons).forEach((element, index) => {
    element.addEventListener("click", () => {
      window.location.href = `../html/app-page-${index}.html`;
    });
  });
}

// INITIAL EXEC AFTER DOMCONTENTLOADED EVENT
window.document.addEventListener("DOMContentLoaded", initialExe);
