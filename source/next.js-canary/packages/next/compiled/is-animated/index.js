(()=>{var e={713:(e,r,t)=>{"use strict";var a=t(641);var i=t(751);var n=t(120);function isAnimated(e){if(a.isGIF(e)){return a.isAnimated(e)}if(i.isPNG(e)){return i.isAnimated(e)}if(n.isWebp(e)){return n.isAnimated(e)}return false}e.exports=isAnimated},641:(e,r)=>{"use strict";function getDataBlocksLength(e,r){var t=0;while(e[r+t]){t+=e[r+t]+1}return t+1}r.isGIF=function(e){var r=e.slice(0,3).toString("ascii");return r==="GIF"};r.isAnimated=function(e){var r,t,a;var i=0;var n=0;a=e.slice(0,3).toString("ascii");if(a!=="GIF"){return false}r=e[10]&128;t=e[10]&7;i+=6;i+=7;i+=r?3*Math.pow(2,t+1):0;while(n<2&&i<e.length){switch(e[i]){case 44:n+=1;r=e[i+9]&128;t=e[i+9]&7;i+=10;i+=r?3*Math.pow(2,t+1):0;i+=getDataBlocksLength(e,i+1)+1;break;case 33:i+=2;i+=getDataBlocksLength(e,i);break;case 59:i=e.length;break;default:i=e.length;break}}return n>1}},751:(e,r)=>{r.isPNG=function(e){var r=e.slice(0,8).toString("hex");return r==="89504e470d0a1a0a"};r.isAnimated=function(e){var r=false;var t=false;var a=false;var i=null;var n=8;while(n<e.length){var s=e.readUInt32BE(n);var u=e.slice(n+4,n+8).toString("ascii");switch(u){case"acTL":r=true;break;case"IDAT":if(!r){return false}if(i!=="fcTL"){return false}t=true;break;case"fdAT":if(!t){return false}if(i!=="fcTL"){return false}a=true;break}i=u;n+=4+4+s+4}return r&&t&&a}},120:(e,r)=>{r.isWebp=function(e){var r=[87,69,66,80];for(var t=0;t<r.length;t++){if(e[t+8]!==r[t]){return false}}return true};r.isAnimated=function(e){var r=[65,78,73,77];for(var t=0;t<e.length;t++){for(var a=0;a<r.length;a++){if(e[t+a]!==r[a]){break}}if(a===r.length){return true}}return false}}};var r={};function __nccwpck_require__(t){var a=r[t];if(a!==undefined){return a.exports}var i=r[t]={exports:{}};var n=true;try{e[t](i,i.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(713);module.exports=t})();