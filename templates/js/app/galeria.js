let cad=`

`
for(elemento of fotos){
    cad=cad+`<div class="gallery-card"><a href="${elemento}" data-lightbox="roadtrip"><img src="${elemento}" alt="img"></a></div>`
}
document.getElementById("galeria").innerHTML=cad
