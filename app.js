let scrollpos = window.scrollY

const aboutTitle = document.getElementById('about-title')
const aboutContent = document.getElementById('image-content')
const aboutText = document.getElementById('about-text')
function addClasses(){
  aboutTitle.classList.add('title-anim')
  aboutContent.classList.add('image-content-anim')
  aboutText.classList.add('text-anim')
}

function removeClasses(){
  aboutTitle.classList.remove('title-anim')
  aboutContent.classList.remove('image-content-anim')
  aboutText.classList.remove('text-anim')
}

document.addEventListener('scroll', e => {
  scrollpos = window.scrollY
  
  if(scrollpos >= 200 && scrollpos <= 1400){
    addClasses()
  }else{
    removeClasses()
  }
})