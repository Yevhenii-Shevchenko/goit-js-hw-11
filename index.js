import{a as m,S as p,i as n}from"./assets/vendor-DF5lYoi4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="54321560-f6f3fd1bbb688b32de8acdaed";async function h(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(g,{params:o})).data}catch(a){throw new Error(`Failed to fetch images: ${a.message}`)}}const b=new p(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),f=document.querySelector(".loader-container");function L(s){const o=s.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${r}" class="gallery-link">
          <img src="${a}" alt="${e}" loading="lazy" class="gallery-image"/>
        </a>
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b>
            ${t}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${i}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${u}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${d}
          </p>
        </div>
          
      </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){c.innerHTML=""}function P(){f.style.display="flex"}function l(){f.style.display="none"}const S=document.querySelector(".form");S.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"],a=o.value.trim();if(o.value="",!a){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}w(),P(),h(a).then(r=>{if(l(),!r.hits||r.hits.length===0){n.info({title:"info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}).catch(r=>{l(),n.warning({title:"Error",message:r.message||"Failed to fetch images. Please try again.",position:"topRight",progressBarColor:"#B51B1B"}),console.error(r)})});
//# sourceMappingURL=index.js.map
