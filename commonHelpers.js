import{f as b,i as p}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const u=document.getElementById("datetime-picker"),o=document.querySelector("button[data-start]"),d=document.querySelector("span[data-days]"),i=document.querySelector("span[data-hours]"),e=document.querySelector("span[data-minutes]"),t=document.querySelector("span[data-seconds]");let r,l;function a(n){return String(n).padStart(2,"0")}function y(n){const g=Math.floor(n/864e5),S=Math.floor(n%864e5/36e5),v=Math.floor(n%864e5%36e5/6e4),L=Math.floor(n%864e5%36e5%6e4/1e3);return{days:g,hours:S,minutes:v,seconds:L}}function f({days:n,hours:s,minutes:c,seconds:m}){d.textContent=a(n),i.textContent=a(s),e.textContent=a(c),t.textContent=a(m)}function h(){r=setInterval(()=>{const s=l-new Date;if(s<=0)clearInterval(r),f({days:0,hours:0,minutes:0,seconds:0}),p.info({title:"Timer",message:"Time is up!",position:"topRight"});else{const c=y(s);f(c)}},1e3)}b(u,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){const s=n[0];s<=new Date?(p.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),o.disabled=!0):(l=s,o.disabled=!1)}}),o.addEventListener("click",()=>{r&&clearInterval(r),h(),o.disabled=!0})});
//# sourceMappingURL=commonHelpers.js.map
