import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {

const slides = [
{
title: "Innovate The Future",
text: "NextGenOera builds AI driven digital solutions",
button: "Explore Services"
},
{
title: "Smart AI Solutions",
text: "Transforming business with modern technology",
button: "Learn More"
},
{
title: "Automation & Data Intelligence",
text: "Building scalable technology systems",
button: "Contact Us"
}
]

const [index,setIndex] = useState(0)
const [displayText,setDisplayText] = useState("")
const [charIndex,setCharIndex] = useState(0)

const currentText = slides[index].title

/* Typing Effect */

useEffect(()=>{

if(charIndex < currentText.length){

const timeout = setTimeout(()=>{
setDisplayText(prev => prev + currentText.charAt(charIndex))
setCharIndex(prev => prev + 1)
},80)

return ()=>clearTimeout(timeout)

}else{

setTimeout(()=>{
setDisplayText("")
setCharIndex(0)
setIndex((prev)=>(prev+1)%slides.length)
},2000)

}

},[charIndex,currentText,index])

return(

<section className="hero">

<div className="hero-content">

<div className="typing">{displayText}</div>

<p>{slides[index].text}</p>

<button>{slides[index].button}</button>

</div>

</section>

)

}

export default Hero