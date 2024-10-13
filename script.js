// //navbar start

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
// //navbar end


