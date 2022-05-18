import {gsap} from "gsap";

export const HoverWithImg = () => {
  const menuItem = document.querySelectorAll(".menu__item-text");
  const menuImg = document.querySelectorAll(".menu__item-img");

  menuItem.forEach((el, i) => {
    const tween = gsap.to(menuImg[i], {
      opacity: 1,
      duration: 0.2,
      scale: 1,
      ease: 'ease-in-out'
    })

    menuItem[i].addEventListener('mouseenter',() => tween.play());
    menuItem[i].addEventListener('mouseleave',() => tween.reverse());

    tween.reverse();
  });

  const moveImg = e => {
    gsap.to([...menuImg], {
      css: {
        left: e.pageX + 50,
        top: e.pageY,
      },
      duration: .3,
    });
  }

  menuItem.forEach(el => {
    el.addEventListener('mousemove', moveImg)
  })
}

