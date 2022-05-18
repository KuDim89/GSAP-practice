import {gsap} from "gsap";

export const SimpleParallax = () => {
  gsap.utils.toArray("section.parallax").forEach((section, i) => {
    section.bg = section.querySelector(".bg");

    // Give the backgrounds some random images
    //section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

    // Do the parallax effect on each section
    if (i) {
      console.log(section)
      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true
        }
      });
    }

    // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
    else {
      section.bg.style.backgroundPosition = "50% 0px";

      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }
  });

  gsap.to(".parallax h1", {
    xPercent:-50,
    left:"50%",
    opacity: 1,
    ease: 'slow(0.7, 0.7, false)',
    duration: 2
  })
}