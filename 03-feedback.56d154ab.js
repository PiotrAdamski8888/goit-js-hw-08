!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n,a=o("1WSnx"),l="feedback-form-state",i=document.querySelector(".feedback-form"),u=document.querySelector(".feedback-form input"),d=document.querySelector(".feedback-form textarea");(n=JSON.parse(localStorage.getItem(l)))&&(u.value=n.email,d.value=n.message),i.addEventListener("input",(0,a.throttle)((function(){var e={email:u.value,message:d.value};localStorage.setItem(l,JSON.stringify(e))}),500)),i.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(localStorage.getItem(l)),localStorage.removeItem(l)}))}();
//# sourceMappingURL=03-feedback.56d154ab.js.map
