// add daynamic active class to links 
let links = document.querySelectorAll('.navbar-nav li a');
links.forEach((li)=>{
    li.addEventListener('click',remove_ac)
})
function remove_ac(li){
  links.forEach((li)=>{
    li.classList.remove('active')
    this.classList.add('active');
  })
}
//portfolio part 
let myul = document.querySelectorAll('.port-container ul li');
let myimages = Array.from(document.images);
myul.forEach(ul => {
    ul.addEventListener('click',myadd);
    ul.addEventListener('click',filt);
})

function myadd() {
    myul.forEach(li => {
        li.classList.remove('act');
        this.classList.add('act');
    })
}

function filt() {
    myimages.forEach(img => {
        img.style.display = 'none';

    })
    document.querySelectorAll(this.dataset.cat).forEach(el => {
        el.style.display = 'block';
    })
}