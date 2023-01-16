new Vue({
    el: "#app",
    data: {
        startLogin: '@post',
        fio_author: 'Ошибка выводы автора',
        log_author: 'none',
        podpischiki: '0',
        podpiski: '0',
        zapis: '0',
        data_info: data_list
    },
    computed:{
        sortedByauthor: function(){
            let start_login = this.startLogin;
            
            return this.data_info.filter( data => {
                if(start_login === '' || start_login === '@post') {
                    this.fio_author = 'Списко всех постов';
                    this.log_author = '@post';
                    this.podpischiki = 0;
                    this.podpiski = 0;
                    this.zapis = data_list.length;
                    return true;
                }
                else {
                    if (start_login === data.log_author) {
                        Publisher_author.forEach(publisher => {
                            if (data.log_author == publisher.log) {
                                this.fio_author = publisher.fio;
                                this.log_author = publisher.log;
                                this.podpischiki = publisher.podpischik_list;
                                this.podpiski = publisher.podpiski_list;
                                this.zapis = publisher.zapisi_list;
                            }
                        });
                    }
                    return start_login === data.log_author;
                }
            })
        }
    }
});