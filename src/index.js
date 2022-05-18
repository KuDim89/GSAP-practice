import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './styles/styles.scss'

import {SimpleParallax} from "@/js/simpleParallax";
import {HoverWithImg} from "@/js/hoverWithImg";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  SimpleParallax();
  HoverWithImg();
});
