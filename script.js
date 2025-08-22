  //   const bgImages = [
  //   // 'img1/medical-assistant-consulting-woman-clinic-talking-about-disease-healthcare-checkup-visit-examination-appointment-nurse-patient-doing-consultation-waiting-room.jpg',
  //   // 'img1/black-woman-with-doctor-profession-holding-bottle-pills.jpg',
  //   // 'img1/corridor-1729534_1920.jpg',
  //   // 'img1/full-shot-nurse-walking-hall.jpg'
  // ];

  // let current = 0;
  // const topMain = document.querySelector('.Top-Main');

  // setInterval(() => {
  //   current = (current + 1) % bgImages.length;
  //   topMain.style.backgroundImage = `url('${bgImages[current]}')`;
  // }, 5000); // Changes every 5 seconds


  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-card');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function changeTestimonial(step) {
    currentSlide += step;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
  }

  // Show first testimonial on load
  document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
  });
