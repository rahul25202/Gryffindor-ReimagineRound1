function toggleDescription(id) {
  const element = document.getElementById(id);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

gsap.registerPlugin(ScrollTrigger);

// Create the scroll-triggered animation
gsap.from("#contest1", {
  scrollTrigger: {
    trigger: "#contest1", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  x: -150, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from("#contest2", {
  scrollTrigger: {
    trigger: "#contest2", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  x: -150, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from("#contest3", {
  scrollTrigger: {
    trigger: "#contest3", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  x: -150, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from(".up", {
  scrollTrigger: {
    trigger: ".up", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  y: -50, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from(".down", {
  scrollTrigger: {
    trigger: ".down", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  y: -50, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from("#contest4", {
  scrollTrigger: {
    trigger: "#contest4", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  x: -150, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from("#contest5", {
  scrollTrigger: {
    trigger: "#contest5", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  x: -150, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from("#contest6", {
  scrollTrigger: {
    trigger: "#contest6", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  x: -150, // Initial vertical position
  duration: 1, // Duration of the animation
});
gsap.from(".container", {
  scrollTrigger: {
    trigger: ".container", // The element that triggers the animation
    start: "top 70%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  y: 150, // Initial vertical position
  duration: 1.5, // Duration of the animation
});
gsap.from(".blog", {
  scrollTrigger: {
    trigger: ".blog", // The element that triggers the animation
    start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
    end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
    toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
  },
  opacity: 0, // Initial opacity
  x: -150, // Initial vertical position
  duration: 1.5, // Duration of the animation
});
// gsap.from("#side1", {
//   scrollTrigger: {
//     trigger: "#side1", // The element that triggers the animation
//     start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
//     end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
//     toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
//   },
//   opacity: 0, // Initial opacity
//   x: 150, // Initial vertical position
//   duration: 1, // Duration of the animation
// });
// gsap.from("#side2", {
//   scrollTrigger: {
//     trigger: "#side2", // The element that triggers the animation
//     start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
//     end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
//     toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
//   },
//   opacity: 0, // Initial opacity
//   x: 150, // Initial vertical position
//   duration: 1, // Duration of the animation
// });
// gsap.from("#side3", {
//   scrollTrigger: {
//     trigger: "#side3", // The element that triggers the animation
//     start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
//     end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
//     toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
//   },
//   opacity: 0, // Initial opacity
//   x: 150, // Initial vertical position
//   duration: 1, // Duration of the animation
// });
// gsap.from("#side4", {
//   scrollTrigger: {
//     trigger: "#side4", // The element that triggers the animation
//     start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport height
//     end: "bottom 20%", // End the animation when the bottom of the element reaches 20% of the viewport height
//     toggleActions: "play none none reset", // Actions on enter, leave, enter back, leave back
//   },
//   opacity: 0, // Initial opacity
//   x: 150, // Initial vertical position
//   duration: 1, // Duration of the animation
// });
document.addEventListener("DOMContentLoaded", () => {
  // GSAP animations
  gsap.from(".heading-container", {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 0.5,
  });
  gsap.from(".container1", { duration: 1, x: -50, opacity: 0, delay: 1 });
  gsap.from(".sponsored", { duration: 1, x: 50, opacity: 0, delay: 1.5 });
  gsap.from(".content", { duration: 1, y: 50, opacity: 0, delay: 2 });

  // Custom cursor
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });
    button.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
});
const element1 = document.querySelector("#contest1");
const element2 = document.querySelector("#contest2");
const element3 = document.querySelector("#contest3");
const element4 = document.querySelector("#contest4");
const element5 = document.querySelector("#contest5");
const element6 = document.querySelector("#contest6");

element1.addEventListener("mouseenter", () => {
  gsap.to(element1, {
    scale: 1.0,
    // backgroundColor: "#C70039",
    y: -5,
    duration: 0.3,
  });
});

element1.addEventListener("mouseleave", () => {
  gsap.to(element1, {
    scale: 1,
    backgroundColor: "white",
    y: 0,
    duration: 0.3,
  });
});
element2.addEventListener("mouseenter", () => {
  gsap.to(element2, {
    scale: 1.0,
    // backgroundColor: "#C70039",
    y: -5,
    duration: 0.3,
  });
});

element2.addEventListener("mouseleave", () => {
  gsap.to(element2, {
    scale: 1,
    backgroundColor: "white",
    y: 0,
    duration: 0.3,
  });
});
element3.addEventListener("mouseenter", () => {
  gsap.to(element3, {
    scale: 1.0,
    // backgroundColor: "#C70039",
    y: -5,
    duration: 0.3,
  });
});

element3.addEventListener("mouseleave", () => {
  gsap.to(element3, {
    scale: 1,
    backgroundColor: "white",
    y: 0,
    duration: 0.3,
  });
});
element4.addEventListener("mouseenter", () => {
  gsap.to(element4, {
    scale: 1.0,
    // backgroundColor: "#C70039",
    y: -5,
    duration: 0.3,
  });
});

element4.addEventListener("mouseleave", () => {
  gsap.to(element4, {
    scale: 1,
    backgroundColor: "white",
    y: 0,
    duration: 0.3,
  });
});
element5.addEventListener("mouseenter", () => {
  gsap.to(element5, {
    scale: 1.0,
    // backgroundColor: "#C70039",
    y: -5,
    duration: 0.3,
  });
});

element5.addEventListener("mouseleave", () => {
  gsap.to(element5, {
    scale: 1,
    backgroundColor: "white",
    y: 0,
    duration: 0.3,
  });
});
element6.addEventListener("mouseenter", () => {
  gsap.to(element6, {
    scale: 1.0,
    // backgroundColor: "#C70039",
    y: -5,
    duration: 0.3,
  });
});

element6.addEventListener("mouseleave", () => {
  gsap.to(element6, {
    scale: 1,
    backgroundColor: "white",
    y: 0,
    duration: 0.3,
  });
});