import{S as a}from"./assets/vendor-874053e3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const c=document.querySelector(".userList"),u=document.querySelector(".areaForLoader"),d=new a(".gallery a",{captionDelay:250,captionsData:"alt"});function f(e){e.length;const s=e.map(r=>(console.log(r),`<div class="blockForAllElements">
          <li>
          <a href=${r.largeImageURL} download="false">
          <img src=${r.webformatURL} alt = "${r.tags}" class = "imgOfUser">
          </a>
          </li>
          <div class = "divForDescription"> 
          <ul class="blockOfInfo"> 
            <li class="title">Likes</li>
            <li class="info">${r.likes}</li>
          </ul>
          <ul class="block">
            <li class="title">Views</li>
            <li class="info">${r.views}</li>
          </ul>
          <ul class="block">
            <li class="title">Comments</li>
            <li class="info">${r.comments}</li>
          </ul>
          <ul class="block">
            <li class="title">Downloads</li>
            <li class="info">${r.downloads}</li>
          </ul>
          </div>
        </div>`)).join("");c.insertAdjacentHTML("beforeend",s),d.refresh()}function p(){const e=document.createElement("span");u.appendChild(e),e.classList.add("loader")}function m(){document.querySelector(".loader").remove()}const h=document.querySelector(".inputOfWords"),y=document.querySelector(".buttonForInput");let n="";y.addEventListener("click",e=>{p(),e.preventDefault(),c.innerHTML="",setTimeout(()=>{n=h.value.trim(),g()},2e3)});function g(){L().then(e=>{n===""?iziToast.show({color:"red",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter"}):e.length===0?iziToast.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):f(e)}).catch(e=>console.log(e)).finally(()=>m())}function L(){return fetch(`https://pixabay.com/api/?key=42977219-0f6c9f9217f976d8651793c3a&q=${n}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits)}
//# sourceMappingURL=commonHelpers.js.map
