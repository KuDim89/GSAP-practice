import {gsap} from "gsap";

export const HoverWithImg = () => {
  const menuItem = document.querySelectorAll(".menu__item-text");
  const menuImg = document.querySelectorAll(".menu__item-img");


  console.log(menuItem);

  menuItem.forEach((el, i) => {
    const animation = gsap.to(menuImg[i], {
      opacity: 1,
      duration: 0.2,
      scale: 1,
      ease: 'ease-in-out'
    })

    menuItem[i].addEventListener('mouseenter',() => animation.play());
    menuItem[i].addEventListener('mouseleave',() => animation.reverse());

    animation.reverse();
  });
}


/*

  */