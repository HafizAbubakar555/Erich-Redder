//navbar start

const navBtn = document.querySelector('.bar');
const mainNav = document.querySelector('.all-nav');
let height = true;
navBtn.addEventListener("click" ,()=>{
    if (height === true){
        mainNav.style.height='250px';
        height = false;
        navBtn.innerHTML = `<i class="fa-solid fa-x"></i>`
    }else{
        height = true;
        mainNav.style.height= '0px';
        navBtn.innerHTML=`<i class="fa-solid fa-bars"></i>`
    }
})
//navbar end

// carousel start


const slider = document.querySelector('.main-content');
const preBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');
const content = document.querySelectorAll('.content-1')

let slideridx=0;

content[slideridx].classList.add("active");

nextBtn.addEventListener('click',()=>{
    content[slideridx].classList.remove('active');
    if(slideridx===content.length-1){
        slideridx=1;
    }else{
        slideridx++;
    }
    content[slideridx].classList.add("active");
})

preBtn.addEventListener('click',()=>{
    content[slideridx].classList.remove('active');
    if(slideridx===0){
        slideridx= content.length-1;
    }else{
        slideridx--;
    }
    content[slideridx].classList.add("active");
})


// carousel end