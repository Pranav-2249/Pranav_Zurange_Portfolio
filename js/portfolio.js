document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  const counters=document.querySelectorAll('.counter');
  const counterObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const target=Number(el.dataset.target);let n=0;const step=Math.max(1,Math.ceil(target/35));const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer)}el.textContent=n},35);counterObserver.unobserve(el)}),{threshold:.8});
  counters.forEach(el=>counterObserver.observe(el));
  document.getElementById('year').textContent=new Date().getFullYear();
  const portrait=document.querySelector('.portrait-frame');
  portrait?.addEventListener('pointermove',e=>{if(window.innerWidth<900)return;const r=portrait.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;portrait.style.transform=`perspective(700px) rotateY(${x*8}deg) rotateX(${y*-8}deg)`});
  portrait?.addEventListener('pointerleave',()=>portrait.style.transform='');
});
