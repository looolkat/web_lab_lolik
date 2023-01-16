new Vue({
    el: "#app",
    data: {
        data_info: []
    },
    mounted(){
        axios
            .get('https://isidea.ru/rgups_data.json')
            .then(respose => this.data_info = respose.data)
      } 
  });