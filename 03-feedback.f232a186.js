var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");const n=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form input"),f=document.querySelector(".feedback-form textarea");!function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(l.value=e.email,f.value=e.message)}(),n.addEventListener("input",(0,a.throttle)((function(){const e={email:l.value,message:f.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),n.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.f232a186.js.map