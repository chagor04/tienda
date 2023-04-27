const producto=document.getElementById('producto')
const regresar=document.querySelector('.btn_regresar')
async function confirmo(){

    let dato=localStorage.getItem('producto')
    let dato_infinito=JSON.parse(dato)
    console.log(dato_infinito)

    producto.innerHTML=`<div class="producto">
    <div class="card">
    <h3 class="card_title">${dato_infinito[0].title}</h3>
    <div class="card_image">
    <img src="${dato_infinito[0].image}">
    </div>
    <p class="card_price">${dato_infinito[0].price}</p>
    </div>`

    regresar.addEventListener('click',()=>{
        location.assign("./principal.html")
    } )


}
confirmo()
