// Get element
let IntroText = document.querySelector('.introText')
let introcontainer = document.querySelector('.intro-container')
let SearchButton = document.querySelector('.search-button')
let SearchDetalis = document.querySelector('.search-detalis')
let CloseButton = document.querySelector('.close-button')
    // Write and use timeline
const tl = new TimelineMax({ delay: 2 });
tl.fromTo(IntroText, 2, { x: '50', opacity: 0 }, { x: '0', opacity: 1 })
tl.fromTo(introcontainer, 1, { y: '0', opacity: 1 }, { y: '-600', opacity: 0, display: 'none' })
    // When click click in search button
SearchButton.addEventListener('click', function() {
        SearchDetalis.style.zIndex = "1";
        tl.fromTo(SearchDetalis, 0.5, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
    })
    // When click click in close button
CloseButton.addEventListener('click', function() {
    SearchDetalis.style.zIndex = "0";
    tl.fromTo(SearchDetalis, 0.5, { scale: 1, opacity: 1 }, { scale: 0, opacity: 0 })
})