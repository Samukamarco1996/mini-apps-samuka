class App10 {
  constructor(p1) {
    this.p1 = p1;
  }

  exec() {}

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }
}

const app10Exe = new App10();
app10Exe.exec();
