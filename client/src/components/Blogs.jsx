import React from "react";
import BlogCard from "./cards/BlogCard";
import img1 from "../assets/Bimg1.png";
import img2 from "../assets/Bimg2.png";
import img3 from "../assets/Bimg3.png";
import img4 from "../assets/Bimg4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



function Blogs() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,

     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="overflow-hidden" id="Blogs">
      <span className="flex justify-center items-center md:text-5xl text-2xl text-medium-light-shade-magenta my-14">Check out our latest article</span>
      <Carousel
        responsive={responsive}
        arrows={true}
        partialVisible={true}
      
        
      >
        <BlogCard
          title="Causes of Autism Spectrum Disorder"
          img={img1}
          description="The “causes of Autism Spectrum Disorder” is a question that has sparked much research and ignited countless conversations. While there isn’t a single, definitive answer, scientists have made significant strides…"
          link="https://blog.leeza.app/causes-of-autism-spectrum-disorder/"
        />
        <BlogCard
          title="Stimming Meaning"
          img={img2}
          description="Stimming Meaning: Understanding and Embracing Repetitive Behaviors in Autism Have you ever seen someone rhythmically tapping their foot, twirling their hair, or flapping their hands? These repetitive behaviors, often referred…"
          link="https://blog.leeza.app/stimming-meaning-stimming-in-autism-vocal-stimming-visual-stimming/"
        />
        <BlogCard
          title="Autism and its Myths: Understanding the Spectrum"
          img={img3}
          description="Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects how a person interacts with the world around them. It’s characterized by challenges in social communication, repetitive behaviors, and…"
          link="https://blog.leeza.app/autism-and-its-myths-understanding-the-spectrum/"
        />
        <BlogCard
          title="Autism in Babies: Early Signs"
          img={img4}
          description="The first few years of a child’s life are filled with incredible milestones. As parents, we eagerly watch our babies gurgle, coo, smile, and reach for connection. But sometimes, development…"
          link="https://leeza.suhail.app/blog4.html"
        />
      </Carousel>
    </div>
  );
}

export default Blogs;
