if (document.getElementById("app1")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                pasantes: [],
                errored: false,
                loading: true,
                url: "http://lpagani2003.pythonanywhere.com/pasantes"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.pasantes = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(pasante) {
                const url = 'http://lpagani2003.pythonanywhere.com/pasantes/' + pasante;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app1')
}
if (document.getElementById("app2")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                postulantes: [],
                errored: false,
                loading: true,
                url: "http://lpagani2003.pythonanywhere.com/postulantes"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.postulantes = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(postulante) {
                const url = 'http://lpagani2003.pythonanywhere.com/postulantes' + postulante;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app2')
}
function postulante() {
    var radio = document.getElementById("post");
    var div1 = document.getElementById("s1");
    var div2 = document.getElementById("s2");
    if (radio.checked == true) {
      div1.style.display = "none";
      div2.style.display = "block";
    } else {
      div1.style.display = "block";
      div2.style.display = "none";
    }
  }
  function pasante() {
    var radio = document.getElementById("pasa");
    var div1 = document.getElementById("s1");
    var div2 = document.getElementById("s2");
    if (radio.checked == true) {
      div1.style.display = "block";
      div2.style.display = "none";
    } else {
      div1.style.display = "none";
      div2.style.display = "block";
    }
  }
