/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})


function setupCarouselText(carouselId, textClass, texts) {
    const carousel = document.querySelector(carouselId);
    const textBox = document.querySelector(textClass);

    carousel.addEventListener('slid.bs.carousel', function (e) {
        let index = e.to;
        textBox.innerText = texts[index];
    });
}

/// Beauty & Skincare
setupCarouselText('#beautyCarousel', '.beauty-text', [
    "Enhance your natural beauty and keep your skin glowing ✨",
    "Discover makeup and skincare essentials for a radiant look 💄",
    "Glow up your skincare routine and let your inner beauty shine through ✨",
    "Find your perfect products to nourish your skin and boost your confidence 💖"
]);

// Fitness
setupCarouselText('#productCarousel2', '.fitness-text', [
    "Level up your fitness journey and feel your best 💪",
    "Stay active, stay strong, and build your dream routine",
    "Consistency creates confidence — start your glow-up today"
]);

// Fashion
setupCarouselText('#productCarousel3', '.fashion-text', [
    "Style your confidence with trendy fashion picks 👗",
    "From casual chic to bold looks, elevate your wardrobe",
    "Dress like your best self every single day ✨"
]);

// Self-improvement
setupCarouselText('#productCarousel4', '.self-text', [
    "Become your best version with daily habits ✨",
    "Small changes create powerful transformations",
    "Glow up mentally, physically, and emotionally 💫"
]);