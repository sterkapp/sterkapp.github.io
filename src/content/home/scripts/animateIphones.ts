import { app } from './loadIphones';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
const screenHeight = window.innerHeight;

const iphone = app.findObjectByName("Exercises");
const iphone2 = app.findObjectByName("Statistics");
if (!iphone || !iphone2) 
  throw new Error('Could not find object');

gsap.set(iphone.position, { y: -(screenHeight / 5)});
gsap.set(iphone2.position, { y: -(screenHeight / 5) });