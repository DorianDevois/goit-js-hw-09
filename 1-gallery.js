import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a}from"./assets/vendor-CRihUsbb.js";p();function n(e){const{preview:t,original:r,description:i}=e;return`<li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${i}"
		/>
	</a>
</li>`}function o(e){return e.map(n).join("")}function l(e,t){t.innerHTML=o(e)}function s(e){const t={overlayOpacity:.9,animationSpeed:250,fadeSpeed:300,disableRightClick:!0,captionsData:"alt",captionDelay:250};return new a(e,t)}async function c(){try{const e=await fetch("../data/images.json");if(!e.ok)throw new Error(`Failed to fetch statuses: ${e.status}`);return e.json()}catch(e){return console.error("Error fetching competition statuses:",e),[]}}async function p(){const e=document.querySelector(".js-gallery"),t=await c();e&&(l(t,e),s(".gallery-link"))}
//# sourceMappingURL=1-gallery.js.map
