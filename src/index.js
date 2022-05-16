import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './styles/styles.scss'

import {SimpleParallax} from "@/js/simpleParallax";
import {HoverWithImg} from "@/js/hoverWithImg";

gsap.registerPlugin(ScrollTrigger);
SimpleParallax();
HoverWithImg();
