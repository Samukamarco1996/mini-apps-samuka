import mainFunctions from "./modules/mainFunctions.js";

// MODULES CALLINGS
function modulesCallings() {
  const mainFunctionsExe = new mainFunctions(
    window.document.documentElement,
    window.document.getElementById("main-title"),
    window.document.getElementById("themes-select")
  );
  mainFunctionsExe.exe();
}

// INITIAL EXEC AFTER DOMCONTENTLOADED EVENT
window.document.addEventListener("DOMContentLoaded", modulesCallings);
