import{i as v,a as h,Y as E,x as l,o as M,$ as N,aL as D,m as _,r as j,c as T,aM as c,A,h as U,d as y,g as x,f as $,W as R,S as P,R as k}from"./index-_67RewZc.js";import{r as p,c as f,n as g,o as z}from"./if-defined-GEwSvcck.js";import{N as H}from"./index-CNoQxV4i.js";import{e as V,n as F}from"./ref-EiHVRVMX.js";import"./index-8KKiFTZZ.js";import"./index-CQ7uAow1.js";import"./index-yh9xYMEm.js";import"./index-CF1Ad5j7.js";import"./index-CG3FMzwZ.js";import"./index-CSvJ2pJK.js";import"./index-BWC_UOCa.js";import"./index-CwHcNAbV.js";const B=v`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var W=function(s,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(i=(r<3?o(i):r>3?o(e,t,i):o(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};const S=600,I=360,Y=64;let b=class extends h{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(E.subscribeKey("open",e=>{e||this.onHideIframe()}),E.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(t=>{const r=t?.[0]?.contentBoxSize?.[0]?.inlineSize;this.iframe.style.height=`${S}px`,e.style.height=`${S}px`,r&&r<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width=`${I}px`,this.iframe.style.left=`calc(50% - ${I/2}px)`,this.iframe.style.top=`calc(50% - ${S/2}px + ${Y/2}px)`,this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return l`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=M.getAuthConnector();if(e){const t=N.getSnapshot().themeMode,n=N.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:D(n,t)})}}};b.styles=B;W([p()],b.prototype,"ready",void 0);b=W([f("w3m-approve-transaction-view")],b);var G=function(s,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(i=(r<3?o(i):r>3?o(e,t,i):o(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let O=class extends h{render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${_.SECURE_SITE_DASHBOARD}
          imageSrc=${_.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};O=G([f("w3m-upgrade-wallet-view")],O);const L=v`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var w=function(s,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(i=(r<3?o(i):r>3?o(e,t,i):o(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let d=class extends h{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return l`
      <wui-input-text
        value=${z(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return l`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${T.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?l`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};d.styles=[j,L];w([g()],d.prototype,"errorMessage",void 0);w([g({type:Boolean})],d.prototype,"disabled",void 0);w([g()],d.prototype,"value",void 0);w([g({type:Boolean})],d.prototype,"loading",void 0);d=w([f("wui-ens-input")],d);const K=v`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    padding: var(--wui-spacing-m);
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    outline: 1px solid var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggestion:hover:not(:disabled) {
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 26px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var m=function(s,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(i=(r<3?o(i):r>3?o(e,t,i):o(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let u=class extends h{constructor(){super(),this.formRef=V(),this.usubscribe=[],this.name="",this.error="",this.loading=c.state.loading,this.suggestions=c.state.suggestions,this.profileName=A.state.profileName,this.onDebouncedNameInputChange=U.debounce(e=>{c.validateName(e)?(this.error="",this.name=e,c.getSuggestions(e)):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(c.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),A.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${F(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const e=this.suggestions.find(n=>n.name?.split(".")?.[0]===this.name&&n.registered);if(this.loading)return l`<wui-loading-spinner
        class="input-loading-spinner"
        color="fg-200"
      ></wui-loading-spinner>`;const t=`${this.name}${T.WC_NAME_SUFFIX}`;return l`
      <wui-icon-link
        .disabled=${e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"fg-200":"accent-100"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(e){return this.loading?l`<wui-loading-spinner color="fg-200"></wui-loading-spinner>`:e.registered?l`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:l`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:l`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      ${this.suggestions.map(e=>l`<button
            .disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            class="suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          >
            <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
              ${e.name}</wui-text
            >${this.nameSuggestionTagTemplate(e)}
          </button>`)}
    </wui-flex>`}isAllowedToSubmit(e){const t=e.split(".")?.[0],n=this.suggestions.find(r=>r.name?.split(".")?.[0]===t&&r.registered);return!this.loading&&!this.error&&!this.profileName&&t&&c.validateName(t)&&!n}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;y.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await c.registerName(e),y.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){P.showError(t.message),y.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:x($.state.activeChain)===R.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:t?.message||"Unknown error"}})}}onEnterKey(e){if(e.key==="Enter"&&this.name&&this.isAllowedToSubmit(this.name)){const t=`${this.name}${T.WC_NAME_SUFFIX}`;this.onSubmitName(t)}}};u.styles=K;m([g()],u.prototype,"errorMessage",void 0);m([p()],u.prototype,"name",void 0);m([p()],u.prototype,"error",void 0);m([p()],u.prototype,"loading",void 0);m([p()],u.prototype,"suggestions",void 0);m([p()],u.prototype,"profileName",void 0);u=m([f("w3m-register-account-name-view")],u);const X=v`
  .continue-button-container {
    width: 100%;
  }
`;var q=function(s,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(i=(r<3?o(i):r>3?o(e,t,i):o(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let C=class extends h{render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{U.openHref(H.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){k.replace("Account")}};C.styles=X;C=q([f("w3m-register-account-name-success-view")],C);export{b as W3mApproveTransactionView,C as W3mRegisterAccountNameSuccess,u as W3mRegisterAccountNameView,O as W3mUpgradeWalletView};
