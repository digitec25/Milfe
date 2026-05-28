window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('up',scrollY>20);
});
function toggleNav(){
  document.getElementById('navMenu').classList.toggle('open');
}
document.querySelectorAll('.nav-menu a').forEach(a=>{
  a.addEventListener('click',()=>document.getElementById('navMenu').classList.remove('open'));
});
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function enviarForm(){
  alert('¡Gracias por tu consulta!\nNos pondremos en contacto a la brevedad.\n\n— Corporación Milfe S.R.L');
}
