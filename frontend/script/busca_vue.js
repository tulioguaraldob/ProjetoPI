const app = new Vue({
  el: "#App",
  data: {
    animais: [],
  },
  created() {
    // Obter os animais da API
    axios.get('http://localhost:3001/animais')
      .then(response => {
        this.animais = response.data;
        console.log(this.animais)
      })
      .catch(error => {
        console.error('Erro ao obter os animais:', error);
      });
  },
  methods: {
  }
});
