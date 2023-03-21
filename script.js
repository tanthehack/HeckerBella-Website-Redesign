const allCarousels = document.getElementsByClassName("carousel");
firstCard = document.querySelectorAll(".card")[0];
carouselArrows = document.getElementsByClassName("cards-btn");

let isDragStart = false, prevPageX, prevScrollLeft;
let fistCardWidth = firstCard.clientWidth;

function getCarousel(btn) {
    for (let item = 0; item < allCarousels.length; item++) {
        const carousel = allCarousels[item];

        if ((btn.parentNode.parentNode.isEqualNode(carousel.parentNode))) {
            return carousel;
        } else {
            continue;
        }
    }
}

for (let item = 0; item < allCarousels.length; item++) {
    const carousel = allCarousels[item];

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragStop = () => {
        isDragStart = false;
    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
}

const showHideIcons = () => {
    carousel
    carouselArrows[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
}

for (let index = 0; index < carouselArrows.length; index++) {
    const btn = carouselArrows[index];

    btn.addEventListener("click", () => {
        const carousel = getCarousel(btn);
        carousel.scrollLeft += btn.id == "left" ? -fistCardWidth : fistCardWidth;
    });
}



