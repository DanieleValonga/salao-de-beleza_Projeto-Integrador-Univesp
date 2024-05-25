const host = ''
let all_burguers = {}

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
const fire_Toast = message => Toast.fire({
    icon: "success",
    title: message
  });

  const add_carrinho = (lanche_name) => {
    $.ajax({
      url:`${host}/api/v1.0/carrinho`,
      method: "POST",
      headers: {
          "Authorization": "123",
          'Content-Type': 'application/json',
      },
      data: JSON.stringify(all_burguers[lanche_name]),
      success: fire_Toast(`${lanche_name} adicionado no carrinho`)
    })
  }

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('menu_button').addEventListener('click', function(){
        const navbar = document.getElementById('menu')

        navbar.classList.toggle('open')
    })

})

// const botao = document.querySelector('#botao');

// botao.onclick = function()

$(document).ready(function() {
    // const host = 'http://192.168.0.201:3001'

    $.ajax({
        url:`${host}/api/v1.0/burgers`,
        method: "GET",
        headers: {"Authorization": "123"},
        success: function(data, status) {
            const lanches = Object.keys(data)
        // console.log(lanches)

        all_burguers = data

        lanches.forEach(lanche_name => {
          const {image, ingredients}  = data [lanche_name]
          const id = `${lanche_name.replace(' ', '_')}-price`
            // adicionando as informações no card e depois dentro do cardapio
          $("#cardapio").append(`
            <article onClick="add_carrinho('${lanche_name}')">
                <h3>${lanche_name}</h3>
                <img src = "${host}${image}">
                <p>Ingredientes: "${ingredients}"</p>
                <p id = "${id}"></p>
            </article>
          `);
          $.ajax({
            url:`${host}/api/v1.0/calculate`,
            method: "POST",
            headers: {
                "Authorization": "123",
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({name: lanche_name}),
            success: response => $(`#${id}`).text(`Á partir de R$ ${response.originalPrice}0`),
            error: error => console.error(error)
          })
        })
    }});
});