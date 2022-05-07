const Personajes = [{
    Nombre: 'Diablo',
    Alineacion: 'Malo',
    Img: "https://cdn.vox-cdn.com/thumbor/aRi5TiKVN3imNZcMThJFwEjU0Qo=/0x0:1920x1080/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/19327423/diablo-3-review-hero.0.jpg",
},
{
    Nombre: 'Sorceress',
    Alineacion: 'Buena',
    Img: "https://sun9-5.userapi.com/impf/toLhagwcmHDryJuMKgWF3Rs8KDWyAz7lJwIGmQ/UMb020TmLsg.jpg?size=0x0&quality=90&proxy=1&sign=903202014f18d3ec8abdeb57400217e2&c_uniq_tag=x9XP1LtDFydSl7tqw9vQbJbcLFH23e5vbKZV6H78-LM&type=video_thumb",
},
{
    Nombre: 'Barbarian',
    Alineacion: 'Neutral',
    Img: "https://st-gdefon.gallery.world/wallpapers_original/380354_gallery.world.jpg",
}]

Personajes.forEach(function(item){
    cards.innerHTML += `
    <div class="card" style="width: 18rem;">
      <img src="${item.Img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Nombre: ${item.Nombre}</h5>
        <h5 class="card-title">Alineacion: ${item.Alineacion}</h5>
      </div>
    </div>
    `
})


let elegirPersonaje = prompt("¿Que quieres ser en esta aventura? 1. Malo, 2. Bueno, 3. Neutral");
switch(elegirPersonaje) {
    case 1:
        alert(`Seras ${Personajes[0].Nombre}`)
        break;
    case 2:
        alert(`Seras ${Personajes[1].Nombre}`)
        break;
    default:
        alert(`Seras ${Personajes[2].Nombre}`)
        break;
}