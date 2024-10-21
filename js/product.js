
function productGallery(){const galleries=document.querySelectorAll('[data-gallery]');galleries.forEach(gallery=>{const imgs=gallery.querySelectorAll('[data-gallery-img]');const result=gallery.querySelector('[data-gallery-result]');const buttonLeft=gallery.querySelector('[data-gallery-left-button]');const buttonRight=gallery.querySelector('[data-gallery-right-button]');let active=1;imgs.forEach((img,index)=>{img.dataset.order=index+1;if(active==index+1){img.classList.add('_active');}
img.addEventListener('click',()=>{imgs.forEach(i=>{i.classList.remove('_active');});result.src=img.querySelector('img').src;img.classList.add('_active');});});buttonRight.addEventListener('click',()=>{const img=gallery.querySelector(`[data-order='${active + 1}']`);if(img){active=active+1;imgs.forEach(i=>{i.classList.remove('_active');});result.src=img.querySelector('img').src;img.classList.add('_active');}});buttonLeft.addEventListener('click',()=>{const img=gallery.querySelector(`[data-order='${active - 1}']`);if(img){active=active-1;imgs.forEach(i=>{i.classList.remove('_active');});result.src=img.querySelector('img').src;img.classList.add('_active');}});});}
productGallery();