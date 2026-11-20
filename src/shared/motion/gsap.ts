"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Animations run only when the visitor has not asked for reduced motion. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
/** Smooth scrolling is desktop-only; touch keeps native momentum. */
export const DESKTOP_MOTION = "(prefers-reduced-motion: no-preference) and (pointer: fine)";

export { gsap, ScrollTrigger, useGSAP };
