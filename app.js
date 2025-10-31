

var modal = document.getElementById('mymodal')
var overlay = document.getElementById('overlay')
var main = document.getElementById('main')


function mymodalon() {
    overlay.style.opacity = 1
    modal.style.opacity = 1
    main.style.zIndex = 0
    modal.style.zIndex = 1
    modal.classList.add('animate__animated','animate__zoomIn')

setTimeout(()=>{

    modal.classList.remove('animate__animated','animate__zoomIn')
},600)
  
    
}
function mymodaloff() {

    overlay.style.opacity = 0
    modal.style.opacity = 0
     main.style.zIndex = 1
    modal.style.zIndex = 0

}

