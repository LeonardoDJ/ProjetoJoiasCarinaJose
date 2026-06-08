// Floating particles
(function(){
  const c = document.getElementById('particles');
  for(let i=0;i<20;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random()*6+2;
    p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${12+Math.random()*22}s;animation-delay:${-Math.random()*22}s;`;
    c.appendChild(p);
  }
})();

// Nav shrink
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}, {passive:true});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, {threshold: 0.1});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Filter with stagger animation
function filtrar(btn, cat){
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let delay = 0;
  document.querySelectorAll('.product-card').forEach(card => {
    const match = cat === 'todos' || card.dataset.cat === cat;
    if(match){
      card.style.display = '';
      card.style.opacity = '0';
      card.style.transform = 'translateY(28px)';
      const d = delay++ * 65;
      setTimeout(() => {
        card.style.transition = 'opacity 0.55s cubic-bezier(.22,1,.36,1), transform 0.55s cubic-bezier(.22,1,.36,1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, d);
    } else {
      card.style.display = 'none';
    }
  });
}