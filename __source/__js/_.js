const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

HTMLElement.prototype.$ = HTMLElement.prototype.querySelector;
HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll;
HTMLCollection.prototype.forEach = Array.prototype.forEach;
FileList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.slice = Array.prototype.slice;

const de = decodeURI;
const en = encodeURI;
const enc = encodeURIComponent;

export { $, $$, de, en, enc }