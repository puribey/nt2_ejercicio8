export default {
  name: "Formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 3,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        name: "",
        age: "",
        email: "",
      };
    },
     postUsuario() {
        this.$store.dispatch('crearUsuario', this.formData)
        this.formData = this.getInicialData();
        this.formState._reset();
    },
  },
};
