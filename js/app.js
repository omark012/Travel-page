const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".navLinks li");

menuIcon.addEventListener('click', () => {
  // Toggle Nav
  nav.classList.toggle('nav-active');

  //Toggle Icon
  menuIcon.classList.toggle("fa-times");

  // Animate nav Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    }
    else {
      link.style.animation = 'navLinksFadeIn 1 2s ease forwards';
    }
  });

})

// Video Slider  slider-navigation  nav-btn

const navBtns=document.querySelectorAll('.nav-btn');
const videos=document.querySelectorAll('.video-slide');
const contexts=document.querySelectorAll('.context');
console.log(navBtns);

navBtns.forEach((btn,index)=>{
  btn.addEventListener('click',()=>{
     sliderNav(index);
  });
});

const sliderNav=(index)=>{
    navBtns.forEach((btn)=>btn.classList.remove('active')); //remove extra active
    navBtns[index].classList.add('active'); //add active to clicked only nav-btn  

    videos.forEach((video)=>video.classList.remove('active'));  
    videos[index].classList.add('active');

    contexts.forEach((content)=>content.classList.remove('active'));  
    contexts[index].classList.add('active');
}


//Individual function 


// const showNav=()=>{
//     slide();
//     nav.style.transform="translateX(0)";
//     menuIcon.style.display="none";
//     crossIcon.style.display="block";
// }

// const hideNav=()=>{
//     nav.style.transform="translateX(100%)";
//     menuIcon.style.display="block";
//     crossIcon.style.display="none";
//     link.style.animation=` `;
//     slide();
// }

// const slide=()=>{
//     navLinks.forEach((link,index)=>{
//         if(link.style.animation){
//             link.style.animation='';
//         }
//         else{
//             link.style.animation=`navLinksFadeIn 0.5s ease forwards ${index / 7 +1.5}s`;
//         }
//     });
// }

