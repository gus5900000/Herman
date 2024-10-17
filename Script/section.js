const elementScroll = ['section1', 'section2', 'section3']
let currentSection = 0
let Autorise_Wheel = true


document.addEventListener('wheel', function(event) {
    if(Autorise_Wheel) {
        Autorise_Wheel = false
        event.preventDefault();
        if (event.deltaY > 0) {
            console.log("Scroll Down")
            if (currentSection < elementScroll.length - 1) {
                currentSection++;
            }
        } else {
            console.log("Scroll UP")
            if (currentSection > 0) {
                currentSection--;
            }
        }
        let element = document.getElementById(elementScroll[currentSection])
        element.scrollIntoView({
            behavior: "smooth", 
            block: "start",
            inline: "nearest"
        });
        console.log(`Scroll to ${elementScroll[currentSection]}`);
        setTimeout(function() {
            Autorise_Wheel = true;
        }, 800)
    }
},  {passive: false });