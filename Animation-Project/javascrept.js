 

//   site title animation
gsap.fromTo("#title",{
     y:-180,
     scale:2.5
},{
    scale:1,
     y:0,
    duration:1,
   scrollTrigger:{
    trigger:"#title",
    end:"bottom top",
    invalidateOnRefresh:true,
    scrub:2,
    ease:"expoScale(0.5,7,none)"
   }
})

// Discover section
  const discoverTl=gsap.timeline({
    scrollTrigger:{
        trigger:".slide",
        start:"top 30%",
        // markers:true,
        scrub:2,
        ease:"ease"
    }
  })
  discoverTl.to(".slide1",{
    y:90
  })
  discoverTl.to(".slide2",{
    y:90
  })
  discoverTl.to(".slide3",{
    y:90
  })
  discoverTl.to(".slide4",{
    y:90
  })

  // image section

  gsap.to("#first-img",{
    clipPath:"circle(100% at 50% 50%)",
    scrollTrigger:{
      trigger:"#image-section > .container",
      start:"top top",
      end:"bottom bottom",
      scrub:2,
      pin:true,
      // markers:true,
      onEnter : ()=>{
        document.body.classList.add("dark-theme");
      },
      onLeaveBack : ()=>{
        document.body.classList.remove("dark-theme");

      }
    }
  })

  // furniture section

  // select all image items

  const allImages=gsap.utils.toArray(".fur-img");
   allImages.forEach(images=>{
           const boxes=images.querySelectorAll('.box');

          //  create gsap animaion with box element

          boxes.forEach(box=>{
            gsap.from(box,{
              y:500,
              duration:0.5,
              scrollTrigger:{
                trigger:box,
                start:"top bottom",
                end:"bottom top",
                scrub:4
              }
            })
          })
   })

  //  change text of furiture section

  // const heading=document.querySelector(".furniture-title h2");
  // const sections=gsap.utils.toArray(".grid-wrapper");
  
  // let text_h2=gsap.timeline({
  //   scrollTrigger:{
  //     trigger:"#furniture-section > .container",
  //     start:"top 50%",
  //     end:"top 50%",
  //     scrub:2,
  //     ease:"ease",
  //     markers:true,
  //     onEnter:()=>{
  //       gsap.set(heading,{position:"fixed",bottom:0,zIndex:-1000})

  //     },
  //     OnEnterBack:()=>{
  // gsap.set(heading,{position:"relative",bottom:0,})

    
  //     }
  //   }
  // })

  // // change text on scroll
  // sections.forEach((section,i)=>{
  //   // create gsap animation
  //   scrollTrigger.create({
  //     trigger:section,
  //     start:"bottom-=20% bottom",
  //     end:"bottom top",
  //     onEnter:()=>{
  //       updateHeading(i)
  //       // add dark theme
  //       if(i==0){
  //         document.body.classList.remove("dark-theme")
  //       }

  //     },
  //     OnEnterBack:()=>{
  // updateHeading(i)

  // if(i==0){
  //   document.body.classList.add("dark-theme")
  // }
  //     }



  //   })
  // })
  // // Update the heading based on the index
  // function updateHeading(index){
  //   const headingTexts=['Furniture','Decore','Office','Tech'];
  //   heading.textContent=headingTexts[index]
  // }
  // updateHeading(0)


// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Cache DOM elements
const heading = document.querySelector(".furniture-title h2");
const sections = gsap.utils.toArray(".grid-wrapper");

// Create the GSAP timeline for heading
const text_h2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#furniture-section > .container",
    start: "top 50%",
    end: "top 50%",
    scrub: 2,
    markers: true,
    onEnter: () => {
      gsap.set(heading, { position: "fixed", bottom: 0, zIndex: -1000 });
    },
    onEnterBack: () => {
      gsap.set(heading, { position: "relative", bottom: 0 });
    }
  }
});

// Function to update heading text
function updateHeading(index) {
  const headingTexts = ['Furniture', 'Decor', 'Office', 'Tech'];
  heading.textContent = headingTexts[index];
}

// Create scroll triggers for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "bottom-=20% bottom",
    end: "bottom top",
    onEnter: () => {
      updateHeading(i);
      // Add dark theme if necessary
      if (i === 0) {
        document.body.classList.remove("dark-theme");
      }
    },
    onEnterBack: () => {
      updateHeading(i);
      if (i === 0) {
        document.body.classList.add("dark-theme");
      }
    }
  });
});

// Initialize heading text
updateHeading(0);

 

