

   var t1=gsap.timeline();

  t1.from('.parts',{stagger: .2,duration:1,x: 30,opacity: 0,ease:'expo.inout'})
 .from("#svgs h3",{duration: 1,scale: 1.9,y: 50,opacity: 0,ease:'expo.inout' })


   .to('#svgs',{duration:1,opacity:0,y:-150,ease:'expo.inout'})
  .to('.parts',{stagger:0.2,duration:1,opacity:0,y:'-100%',opacity:0,ease:'expo.inout'})
   .to('#overlay',{duration: 2,y:'-100%',opacity:0,ease:'expo.inout'})
//   .from("#smallimage",{duration: 1 ,opacity: 0,y:30,ease:'expo.inout'})





.from('#left h4',{
    duration:0.8,
     opacity:0,
     x:30,     ease:'expo.inout'
  })
 .from('#left a,#right i',{
      stagger: 0.2,
    //   delay:-0.6,
      duration:0.5,
    opacity:0,
    x:30,
    ease:'expo.inout'
  })
  .from('#scroll',{
    stagger: 0.2,
    //  delay:-0.2,
      duration:0.5,
      opacity:0,
    y:30,
     ease:'expo.inout'
  })
  .from('#middletext h1,#middletext h4',{
     stagger: 0.2,
    //  delay:1,
     duration:0.5,
      opacity:0,
      y:'-30%',
     ease:'expo.inout'
  })
  .from('#dets p',{
      stagger: 0.2,
    //   delay:-0.2,
      duration:0.5,
      opacity:0,
      y:'30',
      ease:'expo.inout'
  })
  .from('#links a',{
      stagger: 0.2,
    //   delay:-0.2,
      duration:0.3,
      opacity:0,
      x:30,
     ease:'expo.inout'
 })


 .from('#smallimage,#bottom',{
     duratio: 1,
    //  delay:0.2,
    opacity:0,
     y:60,
     ease:'expo.inout'
 })