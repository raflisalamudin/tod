const DEFAULT_STATE = {};

const App = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      names: [
        "Kapan terakhir kali kamu menangis?",
        "Apa ketakutan terbesarmu?",
        "Kapan terakhir kali kamu berbohong?",
        "Siapa selebriti yang pertama kali bikin kamu naksir?",
        "Apa hal paling memalukan yang pernah kamu lakukan? Kapan?",
        "Apa pendapatmu tentang perselingkuhan?",
        "Pernahkah kamu selingkuh?",
        "Kirimkan foto wajah paling terbaru ke aku.",
        "Kenapa kamu putus dengan mantan yang sebelumnya?",
        "Cobalah tiru 5 emoji yang menurutmu paling mudah.",
        "Siapa mantan terindah?",
        "Siapa orang yang terakhir kamu stalk di media sosial?",
        "Buat story dengan wajah aku.",
        "Buatkan pantun tentang tema cinta.",
        "Tirukan gaya youtuber favoritmu.",
      ],
      error: "",
      showError: false,
      result: "",
    };
  },
  computed: {
    isReady() {
      return this.names.length > 1;
    },
  },
  methods: {
    addNameToList() {
      const userName = this.inputName;
      if (this.validate(userName)) {
        this.names.push(userName);
        this.inputName = "";
        console.log(this.names);
      } else {
        this.showError = true;
      }
    },

    validate(value) {
      this.error = "";
      if (value === "") {
        this.error = "Name can't empty";
        return false;
      }

      if (this.names.includes(value)) {
        this.error = "Name must be unique";
        return false;
      }

      return true;
    },

    removeName(index) {
      this.names.splice(index, 1);
    },

    showResult() {
      this.generateResult();
      this.state = false;
    },

    getRandomName() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    },

    generateResult() {
      let randomName = this.getRandomName();
      if (this.result !== "") {
        while (randomName === this.result) {
          randomName = this.getRandomName();
        }
      }
      this.result = randomName;
    },

    resetApp() {
      this.state = true;
      this.inputName = "";
      this.names = [
        "Kapan terakhir kali kamu berbohong?",
        "Kapan terakhir kali kamu menangis?",
        "Apa ketakutan terbesarmu?",
        "Apa pendapatmu tentang perselingkuhan?",
        "Apa hal paling memalukan yang pernah kamu lakukan? Kapan?",
        "Pernahkah kamu selingkuh?",
        "Siapa selebriti yang pertama kali bikin kamu naksir?",
        "Kenapa kamu putus dengan mantan yang sebelumnya?",
        "Siapa mantan terindah?",
        "Siapa orang yang terakhir kamu stalk di media sosial?",
        "Buat story dengan wajah aku.",
        "Cobalah tiru 5 emoji yang menurutmu paling mudah.",
        "Kirimkan foto wajah paling terbaru ke aku.",
        "Buatkan pantun tentang tema cinta.",
        "Tirukan gaya youtuber favoritmu.",
      ];
      this.error = "";
      this.showError = false;
      this.result = "";
    },

    getNewResult() {
      this.generateResult();
    },
  },
}).mount("#app");
