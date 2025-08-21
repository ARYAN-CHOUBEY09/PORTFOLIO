function locomotiveScrollTriggerSetup() {

  gsap.registerPlugin(ScrollTrigger);

  

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
 
  locoScroll.on("scroll", ScrollTrigger.update);

 
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });

  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  
  ScrollTrigger.refresh();

}


function rotatingArrow() {

  gsap.to("nav svg", {
    rotate: 90,
    duration: 1,
    backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav svg",
      scroller: "main",
      start: "top -5%",
      end: "top -6%",
      scrub: 1
    }
  })
  gsap.to("nav svg", {
    backgroundColor: "#111",
    scrollTrigger: {
      trigger: "nav svg",
      scroller: "main",
      start: "top -15%",
      end: "top -400%",
      scrub: 3
    }
  })
}


function scrollingNamediv() {

  gsap.to("#name-div h1", {
    transform: "translateX(calc(-100% - 2vw - 4px))",
    scrollTrigger: {
      trigger: "#name-div h1",
      scroller: "main",
      scrub: 0.7
    }
  })



  gsap.from("#intro-div h1:nth-child(1)", {
    scrollTrigger: {
      trigger: "#intro-div h1:nth-child(1)",
      scroller: "main",
      start: "top 70%"
    },
    opacity: 0
  })
  gsap.from("#intro-div h1:nth-child(2)", {

    scrollTrigger: {
      trigger: "#intro-div h1:nth-child(2)",
      scroller: "main",
      start: "top 60%"
    },
    duration: 1,
    opacity: 0
  })
  gsap.from("#intro-div h1:nth-child(3)", {
    scrollTrigger: {
      trigger: "#intro-div h1:nth-child(3)",
      scroller: "main",
      start: "top 60%",
    },
    opacity: 0,
    duration: 1,
  })

  gsap.from(".box h4", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".box h4",
      scroller: "main",
      start: "top 70%"
    },
    stagger: 0.5
  })

  gsap.from(".dev-box img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".dev-box img",
      scroller: "main",
      start: "top 80%"
    },
    y: 20,
    stagger: {
      amount: 2
    }

  })
  gsap.from(".des-box img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".des-box img",
      scroller: "main",
      start: "top 80%"
    },
    y: 20,
    stagger: {
      amount: 1
    }

  })
}

function disableContextMenu() {

  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  
  document.addEventListener("keydown", (e) => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

    
    const key = e.key.toLowerCase();

    if (
      key === "f12" ||
      (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) || 
      (e.ctrlKey && ["u", "s"].includes(key)) ||                   
      (isMac && e.metaKey && e.altKey && ["i", "j", "c"].includes(key)) 
    ) {
      e.preventDefault();
      return false;
    }
  });

}



locomotiveScrollTriggerSetup()
rotatingArrow()
scrollingNamediv()
disableContextMenu()

