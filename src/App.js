import Oncall from "./controller/oncall.js";

class App {
  async run() {
    await new Oncall().init();
  }
}

export default App;
