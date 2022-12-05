
const tl = gsap.timeline({
  defaults: {
    ease: 'power1.out'
  }
});


tl.to('.intro__logo', {
  width: '100px',
  duration: 1
});
tl.to('.intro__contet-title', {
  width: '200px',
  duration: 0.5,
  delay: 0.5
});
tl.to('.intro', {
  top: '-100%',
  delay: 1,
  duration: 1
});