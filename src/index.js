import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './styles/styles.scss'

import {SimpleParallax} from "@/js/simple-parallax";

gsap.registerPlugin(ScrollTrigger);
SimpleParallax();
