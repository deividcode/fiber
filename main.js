import './src/css/reset.css';
import './src/css/styles.css';

// scrollElements.forEach((el) => {
//   console.log(el);
//   el.style.opacity = 0
// })

const elAnimation = document.querySelectorAll('.animate__animated');

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');    
    }
  });
},{
  threshold: 0.3
});

elAnimation.forEach(el => {

  observer.observe(el);  
});

