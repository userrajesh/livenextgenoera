import { useState, useEffect } from "react";
import "./Hero.css";
import Particles from "../Particles/Particles";

function Hero() {

const slides = [
{
title: "Innovate The Future",
text: "NextGenOera builds AI-driven digital solutions for modern businesses.",
button: "Explore Services"
},
{
title: "Smart AI Solutions",
text: "Transforming businesses with intelligent automation.",
button: "Learn More"
},
{
title: "Automation & Data Intelligence",
text: "Building scalable systems powered by data.",
button: "Contact Us"
}
];

const [slideIndex,setSlideIndex] = useState(0);
const [typedText,setTypedText] = useState("");
const [charIndex,setCharIndex] = useState(0);

const currentTitle = slides[slideIndex].title;

/* typing animation */

useEffect(()=>{

if(charIndex < currentTitle.length){

const typing = setTimeout(()=>{
setTypedText(prev => prev + currentTitle.charAt(charIndex));
setCharIndex(prev => prev + 1);
},70);

return ()=>clearTimeout(typing);

}else{

setTimeout(()=>{
setTypedText("");
setCharIndex(0);
setSlideIndex((prev)=>(prev+1)%slides.length);
},2000);

}

},[charIndex,currentTitle,slideIndex]);

return(

<section className="hero">

{/* PARTICLES BACKGROUND */}

<div className="particles-wrapper">

<Particles
particleColors={["#ffffff"]}
particleCount={200}
particleSpread={10}
speed={0.1}
particleBaseSize={90}
moveParticlesOnHover
alphaParticles={false}
disableRotation={false}
/>

</div>

{/* HERO CONTENT */}

<div className="hero-content">

<h1 className="hero-title">
{typedText}
<span className="cursor">|</span>
</h1>

<p className="hero-text">
{slides[slideIndex].text}
</p>

<button className="hero-btn">
{slides[slideIndex].button}
</button>

</div>

</section>

);

}

export default Hero;