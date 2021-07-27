let tl = gsap.timeline();
let tl2 = gsap.timeline();

gsap.from("#usage path", {
  duration: 1,
  ease: "back.out(1.5)",
  yoyo: true,
  repeat: -1,
  repeatDelay: 1,
  scale: 0,
  transformOrigin: "center center",
  stagger: 0.15,
});

gsap.from("#acc", {
  duration: 1,
  ease: "back.out(1.5)",
  yoyo: true,
  repeat: -1,
  repeatDelay: 1,
  scale: 0,
  transformOrigin: "center center",
  stagger: 0.15,
});

gsap.from("#applications line", {
  duration: 1,
  ease: "ease.out",
  yoyo: true,
  repeat: -1,
  repeatDelay: 1,
  scale: 0,
  transformOrigin: "center center",
  stagger: 0.15,
});

gsap.from("#outage", {
  duration: 1,
  ease: "back.out(1)",
  yoyo: true,
  repeat: -1,
  repeatDelay: 1,
  scale: 0,
  transformOrigin: "center center",
  stagger: 0.15,
});

tl.to("#bill", {
  duration: 1,
  ease: "linear",
  yoyo: true,
  repeat: -1,
  rotation: 6,
}).to("#bill", {
  duration: 1,
  ease: "linear",
  yoyo: true,
  repeat: -1,
  rotation: -6,
});

gsap.from("#illustration path", {
  duration: 1,
  ease: "back.out(1.5)",
  yoyo: true,
  repeat: -1,
  repeatDelay: 1,
  scale: 0,
  transformOrigin: "center center",
  stagger: 0.1,
});

tl2
  .to("#features-phone", {
    duration: 2.5,
    ease: "linear",
    yoyo: true,
    repeat: -1,
    rotation: 3,
  })
  .to("#features-phone", {
    duration: 2.5,
    ease: "linear",
    yoyo: true,
    repeat: -1,
    rotation: -3,
  });

// gsap.to("#logo", {
//   duration: 2,
//   ease: "linear",
//   yoyo: true,
//   repeat: -1,
//   transformOrigin: "center",
//   rotation: -180,
// });
