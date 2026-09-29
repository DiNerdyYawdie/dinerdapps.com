(()=>{const chips=document.querySelectorAll('.chip'),apps=document.querySelectorAll('.app');
chips.forEach(c=>c.addEventListener('click',()=>{const f=c.dataset.filter;
chips.forEach(x=>{const on=x===c;x.classList.toggle('is-on',on);x.setAttribute('aria-pressed',on)});
apps.forEach(a=>{a.hidden=!(f==='all'||a.dataset.cat===f)})}));
const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();})();
