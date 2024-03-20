import{S as h,i as a}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".inputOfWords"),s=document.querySelector(".buttonForInput"),n=document.querySelector(".userList"),i=document.querySelector(".areaForLoader");let e="";const o=new h(".gallery a",{captionDelay:250,captionsData:"alt"});s.addEventListener("click",t=>{f(),t.preventDefault(),n.innerHTML="",setTimeout(()=>{e=c.value.trim(),l()},2e3)});function l(){d().then(t=>{e===""?a.show({color:"red",message:"Sorry, the input field must be filled in to start the photo search.",position:"topCenter"}):t.length===0?a.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):u(t)}).catch(t=>console.log(t)).finally(()=>p())}function u(t){t.length;const m=t.map(r=>(console.log(r),`<div class="blockForAllElements">
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
        </div>`)).join("");n.insertAdjacentHTML("beforeend",m),o.refresh()}function d(){return fetch(`https://pixabay.com/api/?key=42977219-0f6c9f9217f976d8651793c3a&q=${e}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits)}function f(){const t=document.createElement("span");i.appendChild(t),t.classList.add("loader")}function p(){document.querySelector(".loader").remove()}});
//# sourceMappingURL=commonHelpers.js.map
