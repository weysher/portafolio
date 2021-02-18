gsap
    .timeline({
        defaults: {
            duration: 3
        }
    }
    )
    .add('start')
    .to('.title-header',
        {
            delay:1,
            text: "Bienvenido a mi Portafolio",
            color:'var(--red)'
        }
        , 'start-=0.1'
    )
    .to('p.brand span a', {
        delay: 0.2,
        text: "por Cesar Julian",        
    })
    /* .to('ul',{
        delay:0.2,
        opacity:1
    }) */

/*

*/ 








/* gsap.to('.box', {
  duration:3,
  delay:0.5,
  x:300,
  rotation:360,
  borderRadius: 50,
  scale:2,
  ease:'slow',
  ease:'bounce'
}) */





/* gsap
  /* .timeline({
    defaults: {
      duration: 2,
      delay:0.5,
      repeat: -1,
      stagger: 0.05,
      ease: 'elastic'
    }
  }) */
  /* .to('.box',{
    opacity:1,
    rotation:360,
    scale:1,
    borderRadius: '50%',
    y:300 */
    /* gsap.from('.box',{
      opacity:0,
      duration:1,
       y:-50}
       ); */
