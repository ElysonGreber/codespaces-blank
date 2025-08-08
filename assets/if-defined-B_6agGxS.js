const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-BVcGki-Y.js","assets/index-DY_mj09W.js","assets/index-CqAZNr7Q.css","assets/all-wallets-BcKw6jQU.js","assets/arrow-bottom-circle-CeEA9U6l.js","assets/app-store-3qUlao8E.js","assets/apple-Bb9754tX.js","assets/arrow-bottom-DKtGwTSl.js","assets/arrow-left-BpaZVtwR.js","assets/arrow-right-DFhMaIrM.js","assets/arrow-top-CdrzJRCG.js","assets/bank-36hEWWKK.js","assets/browser-D1k-KrQc.js","assets/bin-D4He6gDP.js","assets/bitcoin-BTKZjXYS.js","assets/card-DLMcrAvk.js","assets/checkmark-bRFZ4L4_.js","assets/checkmark-bold-Cyd0Ss79.js","assets/chevron-bottom-5BY4GS4v.js","assets/chevron-left-D_T5Nlt2.js","assets/chevron-right-BwimSLMQ.js","assets/chevron-top-C3OtGVOi.js","assets/chrome-store-CJy3ftnO.js","assets/clock-CWTAG71S.js","assets/close-Y9saAebz.js","assets/compass-C2Yx2KRx.js","assets/coinPlaceholder-DNrQrSzm.js","assets/copy-DDzq6yUt.js","assets/cursor-CseRxiCK.js","assets/cursor-transparent-oYJB6sxM.js","assets/circle-Be2Vmvbz.js","assets/desktop-C1v5ouFL.js","assets/disconnect-CVCB6twc.js","assets/discord-CRaMoH_X.js","assets/ethereum-DH978ouz.js","assets/etherscan-DRL9OlZ5.js","assets/extension-CQgr309m.js","assets/external-link-U5ojE7Af.js","assets/facebook-DR5JnKW5.js","assets/farcaster-BpD3OrtK.js","assets/filters-CRJxue6W.js","assets/github-B7Yr64Mx.js","assets/google-CjxmeUXF.js","assets/help-circle-CKcdvWmN.js","assets/image-Diuhlr1a.js","assets/id-SOogzo8z.js","assets/info-circle-C7OxN63w.js","assets/lightbulb-CB6_b2Hm.js","assets/mail-C-urO1Da.js","assets/mobile-Clo3-pRS.js","assets/more-BtzC6vtE.js","assets/network-placeholder-C7065XW5.js","assets/nftPlaceholder-BcXIph_H.js","assets/off-CwWWJywM.js","assets/play-store-Dw6ilhSu.js","assets/plus-DtYWImVT.js","assets/qr-code-Crb9fAbS.js","assets/recycle-horizontal-Bx7OOh2J.js","assets/refresh-D9ceSJ4W.js","assets/search-DdVTBewD.js","assets/send-iHb8qg4o.js","assets/swapHorizontal-DuFXpJd_.js","assets/swapHorizontalMedium-dP3XiG-9.js","assets/swapHorizontalBold-Ck2uT6n0.js","assets/swapHorizontalRoundedBold-Dzw8Ytmk.js","assets/swapVertical-DtkMtlYM.js","assets/solana-GRp9qY3I.js","assets/telegram-B8vmwE9P.js","assets/three-dots-lsLoHGb_.js","assets/twitch-CjCDOztB.js","assets/x-D1cmEqeT.js","assets/twitterIcon-BlUUEwil.js","assets/user-CmrJpeYZ.js","assets/verify-D9t6yTbt.js","assets/verify-filled-B7iKGD5I.js","assets/wallet-q7mhvDUJ.js","assets/walletconnect-DYDHQtLL.js","assets/wallet-placeholder-CSd3aHcT.js","assets/warning-circle-BIofX6aw.js","assets/info-CV3cs3w6.js","assets/exclamation-triangle-DPEaBzEU.js","assets/reown-logo-Cd4w76sG.js","assets/x-mark-Dv3OFPSl.js"])))=>i.map(i=>d[i]);
import{b7 as z,b8 as B,b9 as T,i as P,r as R,u as M,a as I,x as S,_ as r,E as j}from"./index-DY_mj09W.js";const g={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:a}){return t.length<=e+i?t:a==="end"?`${t.substring(0,e)}...`:a==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),c=100-3*Number(o?.replace("px","")),s=`${c}% ${c}% at 65% 40%`,_=[];for(let h=0;h<5;h+=1){const v=this.tintColor(a,.15*h);_.push(`rgb(${v[0]}, ${v[1]}, ${v[2]})`)}return`
    --local-color-1: ${_[0]};
    --local-color-2: ${_[1]};
    --local-color-3: ${_[2]};
    --local-color-4: ${_[3]};
    --local-color-5: ${_[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,a=e>>8&255,o=e&255;return[i,a,o]},tintColor(t,e){const[i,a,o]=t,n=Math.round(i+(255-i)*e),c=Math.round(a+(255-a)*e),s=Math.round(o+(255-o)*e);return[n,c,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t}};function H(t,e){const{kind:i,elements:a}=e;return{kind:i,elements:a,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function U(t,e){return customElements.get(t)||customElements.define(t,e),e}function L(t){return function(i){return typeof i=="function"?U(t,i):H(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:z},N=(t=G,e,i)=>{const{kind:a,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),a==="accessor"){const{name:c}=i;return{set(s){const _=e.get.call(this);e.set.call(this,s),this.requestUpdate(c,_,t)},init(s){return s!==void 0&&this.C(c,void 0,t,s),s}}}if(a==="setter"){const{name:c}=i;return function(s){const _=this[c];e.call(this,s),this.requestUpdate(c,_,t)}}throw Error("Unsupported decorator location: "+a)};function l(t){return(e,i)=>typeof i=="object"?N(t,e,i):((a,o,n)=>{const c=o.hasOwnProperty(n);return o.constructor.createProperty(n,a),c?Object.getOwnPropertyDescriptor(o,n):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=t=>t===null||typeof t!="object"&&typeof t!="function",F=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},C=t=>(...e)=>({_$litDirective$:t,values:e});let x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,a){this._$Ct=e,this._$AM=i,this._$Ci=a}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const a of i)a._$AO?.(e,!1),f(a,e);return!0},E=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},k=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),X(e)}};function q(t){this._$AN!==void 0?(E(this),this._$AM=t,k(this)):this._$AM=t}function K(t,e=!1,i=0){const a=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(a))for(let n=i;n<a.length;n++)f(a[n],!1),E(a[n]);else a!=null&&(f(a,!1),E(a));else f(this,t)}const X=t=>{t.type==V.CHILD&&(t._$AP??=K,t._$AQ??=q)};class Y extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,a){super._$AT(e,i,a),k(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(f(this,e),E(this))}setValue(e){if(F(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Q{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=t=>!W(t)&&typeof t.then=="function",b=1073741823;class J extends Y{constructor(){super(...arguments),this._$Cwt=b,this._$Cbt=[],this._$CK=new Z(this),this._$CX=new Q}render(...e){return e.find(i=>!O(i))??T}update(e,i){const a=this._$Cbt;let o=a.length;this._$Cbt=i;const n=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<i.length&&!(s>this._$Cwt);s++){const _=i[s];if(!O(_))return this._$Cwt=s,_;s<o&&_===a[s]||(this._$Cwt=b,o=0,Promise.resolve(_).then(async h=>{for(;c.get();)await c.get();const v=n.deref();if(v!==void 0){const $=v._$Cbt.indexOf(_);$>-1&&$<v._$Cwt&&(v._$Cwt=$,v.setValue(h))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const A=new et,it=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var y=function(t,e,i,a){var o=arguments.length,n=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(n=(o<3?c(n):o>3?c(e,i,n):c(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const D={add:async()=>(await r(async()=>{const{addSvg:t}=await import("./add-BVcGki-Y.js");return{addSvg:t}},__vite__mapDeps([0,1,2]))).addSvg,allWallets:async()=>(await r(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-BcKw6jQU.js");return{allWalletsSvg:t}},__vite__mapDeps([3,1,2]))).allWalletsSvg,arrowBottomCircle:async()=>(await r(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-CeEA9U6l.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([4,1,2]))).arrowBottomCircleSvg,appStore:async()=>(await r(async()=>{const{appStoreSvg:t}=await import("./app-store-3qUlao8E.js");return{appStoreSvg:t}},__vite__mapDeps([5,1,2]))).appStoreSvg,apple:async()=>(await r(async()=>{const{appleSvg:t}=await import("./apple-Bb9754tX.js");return{appleSvg:t}},__vite__mapDeps([6,1,2]))).appleSvg,arrowBottom:async()=>(await r(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-DKtGwTSl.js");return{arrowBottomSvg:t}},__vite__mapDeps([7,1,2]))).arrowBottomSvg,arrowLeft:async()=>(await r(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-BpaZVtwR.js");return{arrowLeftSvg:t}},__vite__mapDeps([8,1,2]))).arrowLeftSvg,arrowRight:async()=>(await r(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-DFhMaIrM.js");return{arrowRightSvg:t}},__vite__mapDeps([9,1,2]))).arrowRightSvg,arrowTop:async()=>(await r(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-CdrzJRCG.js");return{arrowTopSvg:t}},__vite__mapDeps([10,1,2]))).arrowTopSvg,bank:async()=>(await r(async()=>{const{bankSvg:t}=await import("./bank-36hEWWKK.js");return{bankSvg:t}},__vite__mapDeps([11,1,2]))).bankSvg,browser:async()=>(await r(async()=>{const{browserSvg:t}=await import("./browser-D1k-KrQc.js");return{browserSvg:t}},__vite__mapDeps([12,1,2]))).browserSvg,bin:async()=>(await r(async()=>{const{binSvg:t}=await import("./bin-D4He6gDP.js");return{binSvg:t}},__vite__mapDeps([13,1,2]))).binSvg,bitcoin:async()=>(await r(async()=>{const{bitcoinSvg:t}=await import("./bitcoin-BTKZjXYS.js");return{bitcoinSvg:t}},__vite__mapDeps([14,1,2]))).bitcoinSvg,card:async()=>(await r(async()=>{const{cardSvg:t}=await import("./card-DLMcrAvk.js");return{cardSvg:t}},__vite__mapDeps([15,1,2]))).cardSvg,checkmark:async()=>(await r(async()=>{const{checkmarkSvg:t}=await import("./checkmark-bRFZ4L4_.js");return{checkmarkSvg:t}},__vite__mapDeps([16,1,2]))).checkmarkSvg,checkmarkBold:async()=>(await r(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-Cyd0Ss79.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([17,1,2]))).checkmarkBoldSvg,chevronBottom:async()=>(await r(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-5BY4GS4v.js");return{chevronBottomSvg:t}},__vite__mapDeps([18,1,2]))).chevronBottomSvg,chevronLeft:async()=>(await r(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-D_T5Nlt2.js");return{chevronLeftSvg:t}},__vite__mapDeps([19,1,2]))).chevronLeftSvg,chevronRight:async()=>(await r(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-BwimSLMQ.js");return{chevronRightSvg:t}},__vite__mapDeps([20,1,2]))).chevronRightSvg,chevronTop:async()=>(await r(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-C3OtGVOi.js");return{chevronTopSvg:t}},__vite__mapDeps([21,1,2]))).chevronTopSvg,chromeStore:async()=>(await r(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-CJy3ftnO.js");return{chromeStoreSvg:t}},__vite__mapDeps([22,1,2]))).chromeStoreSvg,clock:async()=>(await r(async()=>{const{clockSvg:t}=await import("./clock-CWTAG71S.js");return{clockSvg:t}},__vite__mapDeps([23,1,2]))).clockSvg,close:async()=>(await r(async()=>{const{closeSvg:t}=await import("./close-Y9saAebz.js");return{closeSvg:t}},__vite__mapDeps([24,1,2]))).closeSvg,compass:async()=>(await r(async()=>{const{compassSvg:t}=await import("./compass-C2Yx2KRx.js");return{compassSvg:t}},__vite__mapDeps([25,1,2]))).compassSvg,coinPlaceholder:async()=>(await r(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-DNrQrSzm.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([26,1,2]))).coinPlaceholderSvg,copy:async()=>(await r(async()=>{const{copySvg:t}=await import("./copy-DDzq6yUt.js");return{copySvg:t}},__vite__mapDeps([27,1,2]))).copySvg,cursor:async()=>(await r(async()=>{const{cursorSvg:t}=await import("./cursor-CseRxiCK.js");return{cursorSvg:t}},__vite__mapDeps([28,1,2]))).cursorSvg,cursorTransparent:async()=>(await r(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-oYJB6sxM.js");return{cursorTransparentSvg:t}},__vite__mapDeps([29,1,2]))).cursorTransparentSvg,circle:async()=>(await r(async()=>{const{circleSvg:t}=await import("./circle-Be2Vmvbz.js");return{circleSvg:t}},__vite__mapDeps([30,1,2]))).circleSvg,desktop:async()=>(await r(async()=>{const{desktopSvg:t}=await import("./desktop-C1v5ouFL.js");return{desktopSvg:t}},__vite__mapDeps([31,1,2]))).desktopSvg,disconnect:async()=>(await r(async()=>{const{disconnectSvg:t}=await import("./disconnect-CVCB6twc.js");return{disconnectSvg:t}},__vite__mapDeps([32,1,2]))).disconnectSvg,discord:async()=>(await r(async()=>{const{discordSvg:t}=await import("./discord-CRaMoH_X.js");return{discordSvg:t}},__vite__mapDeps([33,1,2]))).discordSvg,ethereum:async()=>(await r(async()=>{const{ethereumSvg:t}=await import("./ethereum-DH978ouz.js");return{ethereumSvg:t}},__vite__mapDeps([34,1,2]))).ethereumSvg,etherscan:async()=>(await r(async()=>{const{etherscanSvg:t}=await import("./etherscan-DRL9OlZ5.js");return{etherscanSvg:t}},__vite__mapDeps([35,1,2]))).etherscanSvg,extension:async()=>(await r(async()=>{const{extensionSvg:t}=await import("./extension-CQgr309m.js");return{extensionSvg:t}},__vite__mapDeps([36,1,2]))).extensionSvg,externalLink:async()=>(await r(async()=>{const{externalLinkSvg:t}=await import("./external-link-U5ojE7Af.js");return{externalLinkSvg:t}},__vite__mapDeps([37,1,2]))).externalLinkSvg,facebook:async()=>(await r(async()=>{const{facebookSvg:t}=await import("./facebook-DR5JnKW5.js");return{facebookSvg:t}},__vite__mapDeps([38,1,2]))).facebookSvg,farcaster:async()=>(await r(async()=>{const{farcasterSvg:t}=await import("./farcaster-BpD3OrtK.js");return{farcasterSvg:t}},__vite__mapDeps([39,1,2]))).farcasterSvg,filters:async()=>(await r(async()=>{const{filtersSvg:t}=await import("./filters-CRJxue6W.js");return{filtersSvg:t}},__vite__mapDeps([40,1,2]))).filtersSvg,github:async()=>(await r(async()=>{const{githubSvg:t}=await import("./github-B7Yr64Mx.js");return{githubSvg:t}},__vite__mapDeps([41,1,2]))).githubSvg,google:async()=>(await r(async()=>{const{googleSvg:t}=await import("./google-CjxmeUXF.js");return{googleSvg:t}},__vite__mapDeps([42,1,2]))).googleSvg,helpCircle:async()=>(await r(async()=>{const{helpCircleSvg:t}=await import("./help-circle-CKcdvWmN.js");return{helpCircleSvg:t}},__vite__mapDeps([43,1,2]))).helpCircleSvg,image:async()=>(await r(async()=>{const{imageSvg:t}=await import("./image-Diuhlr1a.js");return{imageSvg:t}},__vite__mapDeps([44,1,2]))).imageSvg,id:async()=>(await r(async()=>{const{idSvg:t}=await import("./id-SOogzo8z.js");return{idSvg:t}},__vite__mapDeps([45,1,2]))).idSvg,infoCircle:async()=>(await r(async()=>{const{infoCircleSvg:t}=await import("./info-circle-C7OxN63w.js");return{infoCircleSvg:t}},__vite__mapDeps([46,1,2]))).infoCircleSvg,lightbulb:async()=>(await r(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-CB6_b2Hm.js");return{lightbulbSvg:t}},__vite__mapDeps([47,1,2]))).lightbulbSvg,mail:async()=>(await r(async()=>{const{mailSvg:t}=await import("./mail-C-urO1Da.js");return{mailSvg:t}},__vite__mapDeps([48,1,2]))).mailSvg,mobile:async()=>(await r(async()=>{const{mobileSvg:t}=await import("./mobile-Clo3-pRS.js");return{mobileSvg:t}},__vite__mapDeps([49,1,2]))).mobileSvg,more:async()=>(await r(async()=>{const{moreSvg:t}=await import("./more-BtzC6vtE.js");return{moreSvg:t}},__vite__mapDeps([50,1,2]))).moreSvg,networkPlaceholder:async()=>(await r(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-C7065XW5.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([51,1,2]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-BcXIph_H.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([52,1,2]))).nftPlaceholderSvg,off:async()=>(await r(async()=>{const{offSvg:t}=await import("./off-CwWWJywM.js");return{offSvg:t}},__vite__mapDeps([53,1,2]))).offSvg,playStore:async()=>(await r(async()=>{const{playStoreSvg:t}=await import("./play-store-Dw6ilhSu.js");return{playStoreSvg:t}},__vite__mapDeps([54,1,2]))).playStoreSvg,plus:async()=>(await r(async()=>{const{plusSvg:t}=await import("./plus-DtYWImVT.js");return{plusSvg:t}},__vite__mapDeps([55,1,2]))).plusSvg,qrCode:async()=>(await r(async()=>{const{qrCodeIcon:t}=await import("./qr-code-Crb9fAbS.js");return{qrCodeIcon:t}},__vite__mapDeps([56,1,2]))).qrCodeIcon,recycleHorizontal:async()=>(await r(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-Bx7OOh2J.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([57,1,2]))).recycleHorizontalSvg,refresh:async()=>(await r(async()=>{const{refreshSvg:t}=await import("./refresh-D9ceSJ4W.js");return{refreshSvg:t}},__vite__mapDeps([58,1,2]))).refreshSvg,search:async()=>(await r(async()=>{const{searchSvg:t}=await import("./search-DdVTBewD.js");return{searchSvg:t}},__vite__mapDeps([59,1,2]))).searchSvg,send:async()=>(await r(async()=>{const{sendSvg:t}=await import("./send-iHb8qg4o.js");return{sendSvg:t}},__vite__mapDeps([60,1,2]))).sendSvg,swapHorizontal:async()=>(await r(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-DuFXpJd_.js");return{swapHorizontalSvg:t}},__vite__mapDeps([61,1,2]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-dP3XiG-9.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([62,1,2]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-Ck2uT6n0.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([63,1,2]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-Dzw8Ytmk.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([64,1,2]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-DtkMtlYM.js");return{swapVerticalSvg:t}},__vite__mapDeps([65,1,2]))).swapVerticalSvg,solana:async()=>(await r(async()=>{const{solanaSvg:t}=await import("./solana-GRp9qY3I.js");return{solanaSvg:t}},__vite__mapDeps([66,1,2]))).solanaSvg,telegram:async()=>(await r(async()=>{const{telegramSvg:t}=await import("./telegram-B8vmwE9P.js");return{telegramSvg:t}},__vite__mapDeps([67,1,2]))).telegramSvg,threeDots:async()=>(await r(async()=>{const{threeDotsSvg:t}=await import("./three-dots-lsLoHGb_.js");return{threeDotsSvg:t}},__vite__mapDeps([68,1,2]))).threeDotsSvg,twitch:async()=>(await r(async()=>{const{twitchSvg:t}=await import("./twitch-CjCDOztB.js");return{twitchSvg:t}},__vite__mapDeps([69,1,2]))).twitchSvg,twitter:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-D1cmEqeT.js");return{xSvg:t}},__vite__mapDeps([70,1,2]))).xSvg,twitterIcon:async()=>(await r(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-BlUUEwil.js");return{twitterIconSvg:t}},__vite__mapDeps([71,1,2]))).twitterIconSvg,user:async()=>(await r(async()=>{const{userSvg:t}=await import("./user-CmrJpeYZ.js");return{userSvg:t}},__vite__mapDeps([72,1,2]))).userSvg,verify:async()=>(await r(async()=>{const{verifySvg:t}=await import("./verify-D9t6yTbt.js");return{verifySvg:t}},__vite__mapDeps([73,1,2]))).verifySvg,verifyFilled:async()=>(await r(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-B7iKGD5I.js");return{verifyFilledSvg:t}},__vite__mapDeps([74,1,2]))).verifyFilledSvg,wallet:async()=>(await r(async()=>{const{walletSvg:t}=await import("./wallet-q7mhvDUJ.js");return{walletSvg:t}},__vite__mapDeps([75,1,2]))).walletSvg,walletConnect:async()=>(await r(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-DYDHQtLL.js");return{walletConnectSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectSvg,walletConnectLightBrown:async()=>(await r(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-DYDHQtLL.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-DYDHQtLL.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-CSd3aHcT.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([77,1,2]))).walletPlaceholderSvg,warningCircle:async()=>(await r(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-BIofX6aw.js");return{warningCircleSvg:t}},__vite__mapDeps([78,1,2]))).warningCircleSvg,x:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-D1cmEqeT.js");return{xSvg:t}},__vite__mapDeps([70,1,2]))).xSvg,info:async()=>(await r(async()=>{const{infoSvg:t}=await import("./info-CV3cs3w6.js");return{infoSvg:t}},__vite__mapDeps([79,1,2]))).infoSvg,exclamationTriangle:async()=>(await r(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-DPEaBzEU.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([80,1,2]))).exclamationTriangleSvg,reown:async()=>(await r(async()=>{const{reownSvg:t}=await import("./reown-logo-Cd4w76sG.js");return{reownSvg:t}},__vite__mapDeps([81,1,2]))).reownSvg,"x-mark":async()=>(await r(async()=>{const{xMarkSvg:t}=await import("./x-mark-Dv3OFPSl.js");return{xMarkSvg:t}},__vite__mapDeps([82,1,2]))).xMarkSvg};async function rt(t){if(A.has(t))return A.get(t);const i=(D[t]??D.copy)();return A.set(t,i),i}let d=class extends I{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,S`${tt(rt(this.name),S`<div class="fallback"></div>`)}`}};d.styles=[R,M,it];y([l()],d.prototype,"size",void 0);y([l()],d.prototype,"name",void 0);y([l()],d.prototype,"color",void 0);y([l()],d.prototype,"aspectRatio",void 0);d=y([L("wui-icon")],d);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=C(class extends x{constructor(t){if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!this.nt?.has(a)&&this.st.add(a);return this.render(e)}const i=t.element.classList;for(const a of this.st)a in e||(i.remove(a),this.st.delete(a));for(const a in e){const o=!!e[a];o===this.st.has(a)||this.nt?.has(a)||(o?(i.add(a),this.st.add(a)):(i.remove(a),this.st.delete(a)))}return T}}),nt=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var m=function(t,e,i,a){var o=arguments.length,n=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(n=(o<3?c(n):o>3?c(e,i,n):c(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let p=class extends I{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,S`<slot class=${at(e)}></slot>`}};p.styles=[R,nt];m([l()],p.prototype,"variant",void 0);m([l()],p.prototype,"color",void 0);m([l()],p.prototype,"align",void 0);m([l()],p.prototype,"lineClamp",void 0);p=m([L("wui-text")],p);const ot=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var w=function(t,e,i,a){var o=arguments.length,n=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(n=(o<3?c(n):o>3?c(e,i,n):c(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends I{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&g.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&g.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&g.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&g.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&g.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&g.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&g.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&g.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};u.styles=[R,ot];w([l()],u.prototype,"flexDirection",void 0);w([l()],u.prototype,"flexWrap",void 0);w([l()],u.prototype,"flexBasis",void 0);w([l()],u.prototype,"flexGrow",void 0);w([l()],u.prototype,"flexShrink",void 0);w([l()],u.prototype,"alignItems",void 0);w([l()],u.prototype,"justifyContent",void 0);w([l()],u.prototype,"columnGap",void 0);w([l()],u.prototype,"rowGap",void 0);w([l()],u.prototype,"gap",void 0);w([l()],u.prototype,"padding",void 0);w([l()],u.prototype,"margin",void 0);u=w([L("wui-flex")],u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=t=>t??j;export{g as U,at as a,L as c,C as e,Y as f,l as n,vt as o,ct as r};
