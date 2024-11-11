class App8 {
  constructor(
    inputAddFiles,
    paragraphMaxFilesUploaded,
    buttonStartCarousel,
    buttonEraseAndRestart,
    divGallery
  ) {
    this.inputAddFiles = inputAddFiles;
    this.paragraphMaxFilesUploaded = paragraphMaxFilesUploaded;
    this.buttonStartCarousel = buttonStartCarousel;
    this.buttonEraseAndRestart = buttonEraseAndRestart;
    this.divGallery = divGallery;
  }

  maxFilesAllowed = 10;
  intervalTimer = null;
  allPicturesCount = 0;
  arrayAllPictures = [];

  exec() {
    this.buttonEraseAndRestart.disabled = true;
    this.buttonEraseAndRestart.style.backgroundColor = "gray";
    this.buttonEraseAndRestart.style.cursor = "initial";

    this.eventsListener(this.inputAddFiles, "change", (event) => {
      const imageFiles = Array.from(event.target.files);
      const currentFilesCount = this.divGallery.querySelectorAll("img").length;
      if (imageFiles.length + currentFilesCount <= 10) {
        this.addFilesToCarousel(imageFiles, this.divGallery);
      } else {
        window.alert(
          `O limite máximo de ${this.maxFilesAllowed} imagens foi atingido!`
        );
      }
    });

    this.eventsListener(
      this.buttonStartCarousel,
      "click",
      this.startCarousel.bind(this)
    );

    this.eventsListener(
      this.buttonEraseAndRestart,
      "click",
      this.eraseAndRestart.bind(this)
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  updateFilesCount(gallery) {
    const filesCount = gallery.querySelectorAll("img").length;
    this.paragraphMaxFilesUploaded.innerText = `${filesCount} de 10 imagens carregadas`;
  }

  addFilesToCarousel(array, gallery) {
    array.forEach((element, index) => {
      const newFileObject = new FileReader();
      newFileObject.onload = function (eventObject) {
        const newImgTag = window.document.createElement("img");
        newImgTag.alt = `image-0${index}`;
        newImgTag.classList.add("pictures");
        newImgTag.src = eventObject.target.result;
        gallery.appendChild(newImgTag);
        this.updateFilesCount(gallery);
      }.bind(this);
      newFileObject.readAsDataURL(element);
    });
  }

  startCarousel() {
    if (this.divGallery.children.length > 0) {
      this.arrayAllPictures = Array.from(
        window.document.getElementsByClassName("pictures")
      );
      this.arrayAllPictures[this.allPicturesCount].style.display = "block";
      this.arrayAllPictures[this.allPicturesCount].style.animation =
        "loading-dom 1s ease-in-out";

      if (this.intervalTimer !== null) {
        clearInterval(this.intervalTimer);
      }

      this.intervalTimer = setInterval(() => {
        this.arrayAllPictures[this.allPicturesCount].style.display = "none";
        this.allPicturesCount =
          (this.allPicturesCount + 1) % this.arrayAllPictures.length;
        this.arrayAllPictures[this.allPicturesCount].style.display = "block";
        this.arrayAllPictures[this.allPicturesCount].style.animation =
          "loading-dom 1s ease-in-out";
      }, 3000);
      this.buttonStartCarousel.disabled = true;
      this.buttonStartCarousel.style.backgroundColor = "gray";
      this.buttonStartCarousel.style.cursor = "initial";
      this.buttonEraseAndRestart.disabled = false;
      this.buttonEraseAndRestart.style.backgroundColor =
        "var(--main-color-dark)";
      this.buttonEraseAndRestart.style.cursor = "pointer";
    } else {
      window.alert("Adicione imagens ao carrossel!");
    }
  }

  eraseAndRestart() {
    const confirmPrompt = window.confirm(
      "Deseja realmente parar o carrossel e apagar as imagens dentro dele?"
    );
    if (confirmPrompt) {
      this.allPicturesCount = 0;
      this.arrayAllPictures = [];
      clearInterval(this.intervalTimer);

      while (this.divGallery.firstChild) {
        this.divGallery.removeChild(this.divGallery.firstChild);
      }

      this.buttonStartCarousel.disabled = false;
      this.buttonStartCarousel.style.backgroundColor = "var(--main-color-dark)";
      this.buttonStartCarousel.style.cursor = "pointer";

      this.buttonEraseAndRestart.disabled = true;
      this.buttonEraseAndRestart.style.backgroundColor = "gray";
      this.buttonEraseAndRestart.style.cursor = "initial";

      this.updateFilesCount(this.divGallery);
    }
  }
}

const app8Exe = new App8(
  window.document.querySelector('input[type="file"]'),
  window.document.querySelector(
    "#app-div > div:nth-of-type(1) > p:nth-last-of-type(1)"
  ),
  window.document.querySelector(
    "#app-div > div:nth-of-type(2) > button:nth-of-type(1)"
  ),
  window.document.querySelector(
    "#app-div > div:nth-of-type(2) > button:nth-of-type(2)"
  ),
  window.document.querySelector("#gallery")
);
app8Exe.exec();
