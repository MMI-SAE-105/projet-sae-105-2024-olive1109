    const carouselInner = document.querySelector('.carousel__inner');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let index = 0;

    console.log(carouselInner);
    console.log(prevButton);
    console.log(nextButton);

    function showSlide(index) {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        console.log(`Showing slide ${index}`);
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : carouselInner.children.length - 1;
        showSlide(index);
    });

    nextButton.addEventListener('click', () => {
        index = (index < carouselInner.children.length - 1) ? index + 1 : 0;
        showSlide(index);
    });