
const btnflechas = document.querySelector('#btnflechas')
const fotoVoldemort = document.querySelector('.Voldemort')

btnflechas.addEventListener('click', cambiarFoto);

let imageCounter = 0;
function cambiarFoto(){
    imageCounter= imageCounter+1;
    if(imageCounter==4){imageCounter=1}
    fotoVoldemort.src="img_voldemort/" + imageCounter + ".jpg"
    console.log(imageCounter)
}