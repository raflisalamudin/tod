const DEFAULT_STATE = {};

const App = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      names: [
        "Apa yang membuatmu tertarik kepada seseorang?",
        "Apa kamu pernah selingkuh?",
        "Apa kenangan terindahmu bersama mantan?",
        "Apa pengalaman seru yang pernah kamu lalui?",
        "Telepon temanmu secara acak lalu katakan, ada yang bisa kami bantu?",
        "Siapa orang yang tidak ingin kamu lupakan?",
        "Ganti nama profil media sosialmu menjadi sesuatu yang aneh dan biarkan selama satu jam.",
        "Siapa temanmu yang paling menjengkelkan?",
        "Apa cerita masa kecilmu yang paling lucu?",
        "Apa kesan pertama yang terlintas saat kamu bertemu dengan kami semua?",
        "Nyanyikan lagu karaoke yang hits dengan nada tinggi.",
        "Relakan wajahmu untuk dirias secara acak.",
        "Siapa di antara kami semua yang pernah membuatmu kesal?",
        "Lakukan jalan jongkok di sekitar ruangan selama 1 menit.",
        "Jilat sikumu tanpa bantuan dari tangan lainnya.",
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
        "Apa yang membuatmu tertarik kepada seseorang?",
        "Apa kamu pernah selingkuh?",
        "Apa kenangan terindahmu bersama mantan?",
        "Apa pengalaman seru yang pernah kamu lalui?",
        "Telepon temanmu secara acak lalu katakan, ada yang bisa kami bantu?",
        "Siapa orang yang tidak ingin kamu lupakan?",
        "Ganti nama profil media sosialmu menjadi sesuatu yang aneh dan biarkan selama satu jam.",
        "Siapa temanmu yang paling menjengkelkan?",
        "Apa cerita masa kecilmu yang paling lucu?",
        "Apa kesan pertama yang terlintas saat kamu bertemu dengan kami semua?",
        "Nyanyikan lagu karaoke yang hits dengan nada tinggi.",
        "Relakan wajahmu untuk dirias secara acak.",
        "Siapa di antara kami semua yang pernah membuatmu kesal?",
        "Lakukan jalan jongkok di sekitar ruangan selama 1 menit.",
        "Jilat sikumu tanpa bantuan dari tangan lainnya.",
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
