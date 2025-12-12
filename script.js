gsap.from(".animationTwo", {
    y: -600,
    ease: "expo",
    duration: 1.5,
    delay: 1,
})

gsap.from(".animationFive", {
    opacity: 0,
    y: -200,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
    }
})

gsap.from(".animationSix" , {
    opacity: 0,
    x: 800,
    duration: 2,
    scrollTrigger: {
        trigger: "#about",
    }
})

gsap.from(".animationSeven" , {
    opacity: 0,
    x: -800,
    delay: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#about",
    }
})


gsap.from(".animationEight" , {
    opacity: 0,
    scale: 2,
    ease: "expo",
    duration: 1.7,
    delay: 2,
    scrollTrigger: {
        trigger: "#about",
    }
})


gsap.from(".animationEleven", {
    opacity: 0,
    y: -200,
    duration: 1,
    delay: 1.5,
    scrollTrigger: {
        trigger: "#books",
    }
})


gsap.from(".animationThirteen", {
    opacity: 0,
    x: -800,
    duration: 1,
    scrollTrigger: {
        trigger: "#contacts",
    }
})


gsap.to (".titleWeb", {
    duration: 3,
    delay: 1.5,
    repeat: -1,
    stagger: 1,
    text: {
    value: "Coloriage Evasion",
    newClass: "newTitleWeb",
    }
})




document.addEventListener("DOMContentLoaded", function () {
    
    const links = {
  
        "discoverXMAS": "https://www.amazon.com/dp/B0G5PXCWMZ",
        "discoverLIC": "https://www.amazon.com/dp/B0F23QK2GG",
        "discoverCM": "https://www.amazon.com/dp/B0DVPSLXJJ",
        "discoverEST": "https://www.amazon.fr/dp/B0F29429KJ",
        "discoverCG": "https://www.amazon.com/dp/B0F23QTL8S"
    };

   
    Object.keys(links).forEach(className => {
        let button = document.querySelector("." + className);
        if (button) {
            button.addEventListener("click", function () {
                window.open(links[className], "_blank");
            });
        }
    });
});

