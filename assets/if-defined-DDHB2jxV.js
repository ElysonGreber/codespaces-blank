const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-DxBbk08x.js","assets/index-OYqh5SEA.js","assets/index-CqAZNr7Q.css","assets/all-wallets-DPdc-_rv.js","assets/arrow-bottom-circle-CtZ0JYdp.js","assets/app-store-Db29Xlnh.js","assets/apple-vGvh7jhS.js","assets/arrow-bottom-DaCF5DWQ.js","assets/arrow-left-DU6GYn1p.js","assets/arrow-right-DnUWpkQe.js","assets/arrow-top-Bdz6yV1P.js","assets/bank-wakOz4bm.js","assets/browser-DMb6I6w4.js","assets/bin-Dcpg0Vdr.js","assets/bitcoin-DfG-r7nA.js","assets/card-CL0HiCpF.js","assets/checkmark-B9Fn_ApV.js","assets/checkmark-bold-DpyB9QyF.js","assets/chevron-bottom-ChgL9_h_.js","assets/chevron-left-B77XNi8N.js","assets/chevron-right-FvwDko3D.js","assets/chevron-top-BtA6R8ti.js","assets/chrome-store-wgTlf8lg.js","assets/clock-DD9zkJS8.js","assets/close-C398rB04.js","assets/compass-C6wz3DS8.js","assets/coinPlaceholder-BgKYbiCA.js","assets/copy-Cs1nz5uV.js","assets/cursor-DkbEW0Cn.js","assets/cursor-transparent-Ci2vUKRy.js","assets/circle-BMfcQqvR.js","assets/desktop-B_m6BBmd.js","assets/disconnect-DRWGN2pC.js","assets/discord-CKcJ6d0y.js","assets/ethereum-CuyD-1xd.js","assets/etherscan-DDGlyR13.js","assets/extension-pFIztt6c.js","assets/external-link-D_BmUTCK.js","assets/facebook-CyHvenEr.js","assets/farcaster-CqRM6GbO.js","assets/filters-ClMz-Kc_.js","assets/github-DUKEtTPV.js","assets/google-D_LCYrFB.js","assets/help-circle-Ac8GabiD.js","assets/image-DRS2sQDY.js","assets/id-DtwStBJu.js","assets/info-circle-uNylcLn6.js","assets/lightbulb-BxJI6jvK.js","assets/mail-B14wofiI.js","assets/mobile-DzwJJHnU.js","assets/more-BcE3yqFl.js","assets/network-placeholder-B47o2bW8.js","assets/nftPlaceholder-Ca_vjzpS.js","assets/off-DQPRjPB3.js","assets/play-store-BElPE9gt.js","assets/plus-DmT_CCoo.js","assets/qr-code-CmZ2Y9n6.js","assets/recycle-horizontal-CFcO0cdY.js","assets/refresh-B7fsXUVO.js","assets/search-DeGYAWqu.js","assets/send-BzEP3eDl.js","assets/swapHorizontal-C5nqvxMd.js","assets/swapHorizontalMedium-DQRtlchE.js","assets/swapHorizontalBold-B8hz7G6K.js","assets/swapHorizontalRoundedBold-C1jYfUTb.js","assets/swapVertical-R5Ty4yMy.js","assets/solana-DrcOcoa1.js","assets/telegram-BzYbQShu.js","assets/three-dots-BWkFB72j.js","assets/twitch-DcjBiwQ2.js","assets/x-C_748nT2.js","assets/twitterIcon-yLGiY3nA.js","assets/user-DSf_i-J-.js","assets/verify-DbD3Bxr2.js","assets/verify-filled-BExLU9bI.js","assets/wallet-C2lsD7VH.js","assets/walletconnect-DZeAtCEr.js","assets/wallet-placeholder-BCInzXDu.js","assets/warning-circle-CQq-bnqd.js","assets/info-CicD3gVL.js","assets/exclamation-triangle-1cA65H64.js","assets/reown-logo-yjgKai73.js","assets/x-mark-CvDNVR07.js"])))=>i.map(i=>d[i]);
import{b7 as z,b8 as B,b9 as T,i as P,r as R,u as M,a as I,x as S,_ as r,E as j}from"./index-OYqh5SEA.js";const g={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:a}){return t.length<=e+i?t:a==="end"?`${t.substring(0,e)}...`:a==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),c=100-3*Number(o?.replace("px","")),s=`${c}% ${c}% at 65% 40%`,_=[];for(let h=0;h<5;h+=1){const v=this.tintColor(a,.15*h);_.push(`rgb(${v[0]}, ${v[1]}, ${v[2]})`)}return`
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
`;var y=function(t,e,i,a){var o=arguments.length,n=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(n=(o<3?c(n):o>3?c(e,i,n):c(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const D={add:async()=>(await r(async()=>{const{addSvg:t}=await import("./add-DxBbk08x.js");return{addSvg:t}},__vite__mapDeps([0,1,2]))).addSvg,allWallets:async()=>(await r(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-DPdc-_rv.js");return{allWalletsSvg:t}},__vite__mapDeps([3,1,2]))).allWalletsSvg,arrowBottomCircle:async()=>(await r(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-CtZ0JYdp.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([4,1,2]))).arrowBottomCircleSvg,appStore:async()=>(await r(async()=>{const{appStoreSvg:t}=await import("./app-store-Db29Xlnh.js");return{appStoreSvg:t}},__vite__mapDeps([5,1,2]))).appStoreSvg,apple:async()=>(await r(async()=>{const{appleSvg:t}=await import("./apple-vGvh7jhS.js");return{appleSvg:t}},__vite__mapDeps([6,1,2]))).appleSvg,arrowBottom:async()=>(await r(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-DaCF5DWQ.js");return{arrowBottomSvg:t}},__vite__mapDeps([7,1,2]))).arrowBottomSvg,arrowLeft:async()=>(await r(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-DU6GYn1p.js");return{arrowLeftSvg:t}},__vite__mapDeps([8,1,2]))).arrowLeftSvg,arrowRight:async()=>(await r(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-DnUWpkQe.js");return{arrowRightSvg:t}},__vite__mapDeps([9,1,2]))).arrowRightSvg,arrowTop:async()=>(await r(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-Bdz6yV1P.js");return{arrowTopSvg:t}},__vite__mapDeps([10,1,2]))).arrowTopSvg,bank:async()=>(await r(async()=>{const{bankSvg:t}=await import("./bank-wakOz4bm.js");return{bankSvg:t}},__vite__mapDeps([11,1,2]))).bankSvg,browser:async()=>(await r(async()=>{const{browserSvg:t}=await import("./browser-DMb6I6w4.js");return{browserSvg:t}},__vite__mapDeps([12,1,2]))).browserSvg,bin:async()=>(await r(async()=>{const{binSvg:t}=await import("./bin-Dcpg0Vdr.js");return{binSvg:t}},__vite__mapDeps([13,1,2]))).binSvg,bitcoin:async()=>(await r(async()=>{const{bitcoinSvg:t}=await import("./bitcoin-DfG-r7nA.js");return{bitcoinSvg:t}},__vite__mapDeps([14,1,2]))).bitcoinSvg,card:async()=>(await r(async()=>{const{cardSvg:t}=await import("./card-CL0HiCpF.js");return{cardSvg:t}},__vite__mapDeps([15,1,2]))).cardSvg,checkmark:async()=>(await r(async()=>{const{checkmarkSvg:t}=await import("./checkmark-B9Fn_ApV.js");return{checkmarkSvg:t}},__vite__mapDeps([16,1,2]))).checkmarkSvg,checkmarkBold:async()=>(await r(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-DpyB9QyF.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([17,1,2]))).checkmarkBoldSvg,chevronBottom:async()=>(await r(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-ChgL9_h_.js");return{chevronBottomSvg:t}},__vite__mapDeps([18,1,2]))).chevronBottomSvg,chevronLeft:async()=>(await r(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-B77XNi8N.js");return{chevronLeftSvg:t}},__vite__mapDeps([19,1,2]))).chevronLeftSvg,chevronRight:async()=>(await r(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-FvwDko3D.js");return{chevronRightSvg:t}},__vite__mapDeps([20,1,2]))).chevronRightSvg,chevronTop:async()=>(await r(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-BtA6R8ti.js");return{chevronTopSvg:t}},__vite__mapDeps([21,1,2]))).chevronTopSvg,chromeStore:async()=>(await r(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-wgTlf8lg.js");return{chromeStoreSvg:t}},__vite__mapDeps([22,1,2]))).chromeStoreSvg,clock:async()=>(await r(async()=>{const{clockSvg:t}=await import("./clock-DD9zkJS8.js");return{clockSvg:t}},__vite__mapDeps([23,1,2]))).clockSvg,close:async()=>(await r(async()=>{const{closeSvg:t}=await import("./close-C398rB04.js");return{closeSvg:t}},__vite__mapDeps([24,1,2]))).closeSvg,compass:async()=>(await r(async()=>{const{compassSvg:t}=await import("./compass-C6wz3DS8.js");return{compassSvg:t}},__vite__mapDeps([25,1,2]))).compassSvg,coinPlaceholder:async()=>(await r(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-BgKYbiCA.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([26,1,2]))).coinPlaceholderSvg,copy:async()=>(await r(async()=>{const{copySvg:t}=await import("./copy-Cs1nz5uV.js");return{copySvg:t}},__vite__mapDeps([27,1,2]))).copySvg,cursor:async()=>(await r(async()=>{const{cursorSvg:t}=await import("./cursor-DkbEW0Cn.js");return{cursorSvg:t}},__vite__mapDeps([28,1,2]))).cursorSvg,cursorTransparent:async()=>(await r(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-Ci2vUKRy.js");return{cursorTransparentSvg:t}},__vite__mapDeps([29,1,2]))).cursorTransparentSvg,circle:async()=>(await r(async()=>{const{circleSvg:t}=await import("./circle-BMfcQqvR.js");return{circleSvg:t}},__vite__mapDeps([30,1,2]))).circleSvg,desktop:async()=>(await r(async()=>{const{desktopSvg:t}=await import("./desktop-B_m6BBmd.js");return{desktopSvg:t}},__vite__mapDeps([31,1,2]))).desktopSvg,disconnect:async()=>(await r(async()=>{const{disconnectSvg:t}=await import("./disconnect-DRWGN2pC.js");return{disconnectSvg:t}},__vite__mapDeps([32,1,2]))).disconnectSvg,discord:async()=>(await r(async()=>{const{discordSvg:t}=await import("./discord-CKcJ6d0y.js");return{discordSvg:t}},__vite__mapDeps([33,1,2]))).discordSvg,ethereum:async()=>(await r(async()=>{const{ethereumSvg:t}=await import("./ethereum-CuyD-1xd.js");return{ethereumSvg:t}},__vite__mapDeps([34,1,2]))).ethereumSvg,etherscan:async()=>(await r(async()=>{const{etherscanSvg:t}=await import("./etherscan-DDGlyR13.js");return{etherscanSvg:t}},__vite__mapDeps([35,1,2]))).etherscanSvg,extension:async()=>(await r(async()=>{const{extensionSvg:t}=await import("./extension-pFIztt6c.js");return{extensionSvg:t}},__vite__mapDeps([36,1,2]))).extensionSvg,externalLink:async()=>(await r(async()=>{const{externalLinkSvg:t}=await import("./external-link-D_BmUTCK.js");return{externalLinkSvg:t}},__vite__mapDeps([37,1,2]))).externalLinkSvg,facebook:async()=>(await r(async()=>{const{facebookSvg:t}=await import("./facebook-CyHvenEr.js");return{facebookSvg:t}},__vite__mapDeps([38,1,2]))).facebookSvg,farcaster:async()=>(await r(async()=>{const{farcasterSvg:t}=await import("./farcaster-CqRM6GbO.js");return{farcasterSvg:t}},__vite__mapDeps([39,1,2]))).farcasterSvg,filters:async()=>(await r(async()=>{const{filtersSvg:t}=await import("./filters-ClMz-Kc_.js");return{filtersSvg:t}},__vite__mapDeps([40,1,2]))).filtersSvg,github:async()=>(await r(async()=>{const{githubSvg:t}=await import("./github-DUKEtTPV.js");return{githubSvg:t}},__vite__mapDeps([41,1,2]))).githubSvg,google:async()=>(await r(async()=>{const{googleSvg:t}=await import("./google-D_LCYrFB.js");return{googleSvg:t}},__vite__mapDeps([42,1,2]))).googleSvg,helpCircle:async()=>(await r(async()=>{const{helpCircleSvg:t}=await import("./help-circle-Ac8GabiD.js");return{helpCircleSvg:t}},__vite__mapDeps([43,1,2]))).helpCircleSvg,image:async()=>(await r(async()=>{const{imageSvg:t}=await import("./image-DRS2sQDY.js");return{imageSvg:t}},__vite__mapDeps([44,1,2]))).imageSvg,id:async()=>(await r(async()=>{const{idSvg:t}=await import("./id-DtwStBJu.js");return{idSvg:t}},__vite__mapDeps([45,1,2]))).idSvg,infoCircle:async()=>(await r(async()=>{const{infoCircleSvg:t}=await import("./info-circle-uNylcLn6.js");return{infoCircleSvg:t}},__vite__mapDeps([46,1,2]))).infoCircleSvg,lightbulb:async()=>(await r(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-BxJI6jvK.js");return{lightbulbSvg:t}},__vite__mapDeps([47,1,2]))).lightbulbSvg,mail:async()=>(await r(async()=>{const{mailSvg:t}=await import("./mail-B14wofiI.js");return{mailSvg:t}},__vite__mapDeps([48,1,2]))).mailSvg,mobile:async()=>(await r(async()=>{const{mobileSvg:t}=await import("./mobile-DzwJJHnU.js");return{mobileSvg:t}},__vite__mapDeps([49,1,2]))).mobileSvg,more:async()=>(await r(async()=>{const{moreSvg:t}=await import("./more-BcE3yqFl.js");return{moreSvg:t}},__vite__mapDeps([50,1,2]))).moreSvg,networkPlaceholder:async()=>(await r(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-B47o2bW8.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([51,1,2]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-Ca_vjzpS.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([52,1,2]))).nftPlaceholderSvg,off:async()=>(await r(async()=>{const{offSvg:t}=await import("./off-DQPRjPB3.js");return{offSvg:t}},__vite__mapDeps([53,1,2]))).offSvg,playStore:async()=>(await r(async()=>{const{playStoreSvg:t}=await import("./play-store-BElPE9gt.js");return{playStoreSvg:t}},__vite__mapDeps([54,1,2]))).playStoreSvg,plus:async()=>(await r(async()=>{const{plusSvg:t}=await import("./plus-DmT_CCoo.js");return{plusSvg:t}},__vite__mapDeps([55,1,2]))).plusSvg,qrCode:async()=>(await r(async()=>{const{qrCodeIcon:t}=await import("./qr-code-CmZ2Y9n6.js");return{qrCodeIcon:t}},__vite__mapDeps([56,1,2]))).qrCodeIcon,recycleHorizontal:async()=>(await r(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-CFcO0cdY.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([57,1,2]))).recycleHorizontalSvg,refresh:async()=>(await r(async()=>{const{refreshSvg:t}=await import("./refresh-B7fsXUVO.js");return{refreshSvg:t}},__vite__mapDeps([58,1,2]))).refreshSvg,search:async()=>(await r(async()=>{const{searchSvg:t}=await import("./search-DeGYAWqu.js");return{searchSvg:t}},__vite__mapDeps([59,1,2]))).searchSvg,send:async()=>(await r(async()=>{const{sendSvg:t}=await import("./send-BzEP3eDl.js");return{sendSvg:t}},__vite__mapDeps([60,1,2]))).sendSvg,swapHorizontal:async()=>(await r(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-C5nqvxMd.js");return{swapHorizontalSvg:t}},__vite__mapDeps([61,1,2]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-DQRtlchE.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([62,1,2]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-B8hz7G6K.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([63,1,2]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-C1jYfUTb.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([64,1,2]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-R5Ty4yMy.js");return{swapVerticalSvg:t}},__vite__mapDeps([65,1,2]))).swapVerticalSvg,solana:async()=>(await r(async()=>{const{solanaSvg:t}=await import("./solana-DrcOcoa1.js");return{solanaSvg:t}},__vite__mapDeps([66,1,2]))).solanaSvg,telegram:async()=>(await r(async()=>{const{telegramSvg:t}=await import("./telegram-BzYbQShu.js");return{telegramSvg:t}},__vite__mapDeps([67,1,2]))).telegramSvg,threeDots:async()=>(await r(async()=>{const{threeDotsSvg:t}=await import("./three-dots-BWkFB72j.js");return{threeDotsSvg:t}},__vite__mapDeps([68,1,2]))).threeDotsSvg,twitch:async()=>(await r(async()=>{const{twitchSvg:t}=await import("./twitch-DcjBiwQ2.js");return{twitchSvg:t}},__vite__mapDeps([69,1,2]))).twitchSvg,twitter:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-C_748nT2.js");return{xSvg:t}},__vite__mapDeps([70,1,2]))).xSvg,twitterIcon:async()=>(await r(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-yLGiY3nA.js");return{twitterIconSvg:t}},__vite__mapDeps([71,1,2]))).twitterIconSvg,user:async()=>(await r(async()=>{const{userSvg:t}=await import("./user-DSf_i-J-.js");return{userSvg:t}},__vite__mapDeps([72,1,2]))).userSvg,verify:async()=>(await r(async()=>{const{verifySvg:t}=await import("./verify-DbD3Bxr2.js");return{verifySvg:t}},__vite__mapDeps([73,1,2]))).verifySvg,verifyFilled:async()=>(await r(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-BExLU9bI.js");return{verifyFilledSvg:t}},__vite__mapDeps([74,1,2]))).verifyFilledSvg,wallet:async()=>(await r(async()=>{const{walletSvg:t}=await import("./wallet-C2lsD7VH.js");return{walletSvg:t}},__vite__mapDeps([75,1,2]))).walletSvg,walletConnect:async()=>(await r(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-DZeAtCEr.js");return{walletConnectSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectSvg,walletConnectLightBrown:async()=>(await r(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-DZeAtCEr.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-DZeAtCEr.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([76,1,2]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-BCInzXDu.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([77,1,2]))).walletPlaceholderSvg,warningCircle:async()=>(await r(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-CQq-bnqd.js");return{warningCircleSvg:t}},__vite__mapDeps([78,1,2]))).warningCircleSvg,x:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-C_748nT2.js");return{xSvg:t}},__vite__mapDeps([70,1,2]))).xSvg,info:async()=>(await r(async()=>{const{infoSvg:t}=await import("./info-CicD3gVL.js");return{infoSvg:t}},__vite__mapDeps([79,1,2]))).infoSvg,exclamationTriangle:async()=>(await r(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-1cA65H64.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([80,1,2]))).exclamationTriangleSvg,reown:async()=>(await r(async()=>{const{reownSvg:t}=await import("./reown-logo-yjgKai73.js");return{reownSvg:t}},__vite__mapDeps([81,1,2]))).reownSvg,"x-mark":async()=>(await r(async()=>{const{xMarkSvg:t}=await import("./x-mark-CvDNVR07.js");return{xMarkSvg:t}},__vite__mapDeps([82,1,2]))).xMarkSvg};async function rt(t){if(A.has(t))return A.get(t);const i=(D[t]??D.copy)();return A.set(t,i),i}let d=class extends I{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
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
