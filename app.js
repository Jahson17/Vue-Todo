var study = new Vue({
  el: "#vue-app",
  data: {
   disp:true,
   show:true,
   input:'',
   todos:[],
  },
  methods: {
    btn() {
      this.todos.push({
        title: this.input,
      })
      this.input=''
      
    },
  }
});
