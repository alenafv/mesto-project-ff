(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{o:()=>I});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-27",headers:{authorization:"5911d125-9aee-4893-86db-13fee99a57df","Content-Type":"application/json"}},o=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))},r=function(e,o,r){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(o),{method:r?"DELETE":"PUT",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(t){e.target.classList.toggle("card__like-button_is-active"),e.target.closest(".card").querySelector(".card__likes-count").textContent=t.likes.length})).catch((function(e){console.error(e)}))},n=function(e,o){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status));o.remove()})).catch((function(e){console.error(e)}))},c=function(e,t,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o.inputErrorClass),r.textContent="",r.classList.remove(o.errorClass)},u=function(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(o)):(t.disabled=!0,t.classList.add(o))},a=function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);o.forEach((function(o){c(e,o,t)})),u(o,r,t.inactiveButtonClass)},i=document.querySelector("#card-template").content;function l(e,t,o,r,n){var c=i.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__image");u.src=e.link,u.alt=e.name,c.querySelector(".card__title").textContent=e.name;var a=c.querySelector(".card__delete-button");e.owner&&e.owner._id===n?a.addEventListener("click",(function(t){return I(0,e._id,0,c)})):a.remove();var l=c.querySelector(".card__like-button");return c.querySelector(".card__likes-count").textContent=e.likes.length||0,e.likes.some((function(e){return e._id===n}))&&l.classList.add("card__like-button_is-active"),l.addEventListener("click",(function(t){var r=l.classList.contains("card__like-button_is-active");o(t,e._id,r),t.target.blur()})),u.addEventListener("click",(function(){return r(e)})),c}function s(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",d)}function p(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d)}function d(e){var t=document.querySelector(".popup_is-opened");"Escape"===e.key&&t&&p(t)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}document.querySelector(".popup");var f,m,y=document.querySelector(".places__list"),v=document.querySelector(".popup__input_type_name"),h=document.querySelector(".popup__input_type_description"),b=document.querySelector(".profile__title"),S=document.querySelector(".profile__description");f={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(f.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);u(o,r,t.inactiveButtonClass),o.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?c(e,t,o):function(e,t,o,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),n.textContent=o,n.classList.add(r.errorClass)}(e,t,t.validationMessage,o)}(e,n,t),u(o,r,t.inactiveButtonClass)}))}))}(e,f)})),Promise.all([o(),fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})).catch((function(e){console.log(e)}))]).then((function(e){var t,o,n=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,c,u,a=[],i=!0,l=!1;try{if(c=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;i=!1}else for(;!(i=(r=c.call(o)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,n=e}finally{try{if(!i&&null!=o.return&&(u=o.return(),Object(u)!==u))return}finally{if(l)throw n}}return a}}(t,o)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=n[0],u=n[1];m=c._id,b.textContent=c.name,S.textContent=c.about,u.forEach((function(e){var t=l(e,0,r,O,m);y.append(t)}))})).catch((function(e){console.error("Error:",e)}));var q=document.querySelector(".popup_type_avatar");document.querySelector(".profile__avatar").addEventListener("click",(function(){q.querySelector(".popup__button").textContent="Сохранить",s(q),a(q,{inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"})}));var C=document.querySelector('.popup__form[name="avatar"]'),E=document.querySelector(".profile__image");C.addEventListener("submit",(function(e){var o;e.preventDefault(),C.querySelector(".popup__button").textContent="Сохранение...",(o=document.querySelector(".popup__input_type_avatar-link").value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))).then((function(e){E.style.backgroundImage="url('".concat(e.avatar,"')"),p(q),C.reset()})).catch((function(e){console.log(e)}))}));var g=document.querySelector(".profile__edit-button"),k=document.querySelector(".popup_type_edit"),L=document.querySelector(".profile__add-button"),j=document.querySelector(".popup_type_new-card");g.addEventListener("click",(function(){o().then((function(e){var t=e.name,o=e.about;k.querySelector(".popup__button").textContent="Сохранить",v.value=t,h.value=o,s(k),a(k,{inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"})})).catch((function(e){return console.error("Error fetching user data:",e)}))})),L.addEventListener("click",(function(){j.querySelector(".popup__button").textContent="Сохранить",s(j),a(j,{inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"})})),document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",(function(){p(this.closest(".popup"))}))})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){t.target===e&&p(this.closest(".popup"))}))}));var x=document.querySelector('.popup__form[name="edit-profile"]');x.addEventListener("submit",(function(e){var o,r;e.preventDefault(),x.querySelector(".popup__button").textContent="Сохранение...",(o=v.value,r=h.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:o,about:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))).then((function(e){var t=e.name,o=e.about;b.textContent=t,S.textContent=o,p(k)})).catch((function(e){console.log(e)}))}));var A=document.querySelector('.popup__form[name="new-place"]');A.addEventListener("submit",(function(e){var o,n;e.preventDefault(),A.querySelector(".popup__button").textContent="Сохранение...",(o=document.querySelector(".popup__input_type_card-name").value,n=document.querySelector(".popup__input_type_url").value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:o,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))).then((function(e){var t=l(e,0,r,O,m);y.prepend(t),p(j),A.reset()})).catch((function(e){console.log(e)}))}));var P=document.querySelector(".popup_type_image"),B=document.querySelector(".popup__image"),w=document.querySelector(".popup__caption");function O(e){B.src=e.link,B.alt=e.name,w.textContent=e.name,s(P)}var T=document.querySelector(".popup_type_confirm"),U=null,D=null;function I(e,t,o,r){U=r,D=t,s(T)}document.querySelector(".popup__button_type_confirm").addEventListener("click",(function(){D&&U&&(n(D,U),p(T))}))})();