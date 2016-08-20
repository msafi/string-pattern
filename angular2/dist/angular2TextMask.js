!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/core"),require("@angular/forms")):"function"==typeof define&&define.amd?define(["@angular/core","@angular/forms"],t):"object"==typeof exports?exports.angular2TextMask=t(require("@angular/core"),require("@angular/forms")):e.angular2TextMask=t(e.ng.core,e.ng.forms)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=r(6),a=r(7),u=r(5),l=function(){function e(e,t){this.ngControl=t,this.textMaskConfig={mask:"",guide:!0,placeholderChar:"_",pipe:void 0,keepCharPositions:!1,onReject:void 0,onAccept:void 0},this.inputElement=e.nativeElement}return e.prototype.ngOnInit=function(){var e=this;this.textMaskInputElement=u["default"](Object.assign({inputElement:this.inputElement},this.textMaskConfig)),setTimeout(function(){return e.onInput()})},e.prototype.onInput=function(){this.textMaskInputElement.update(),this.ngControl.viewToModelUpdate(this.inputElement.value),this.formControl&&this.formControl.setValue(this.inputElement.value,{onlySelf:!0,emitModelToViewChange:!1})},n([i.Input("textMask"),o("design:type",Object)],e.prototype,"textMaskConfig",void 0),n([i.Input("formControl"),o("design:type",a.FormControl)],e.prototype,"formControl",void 0),e=n([i.Directive({host:{"(input)":"onInput()"},selector:"input[textMask]"}),o("design:paramtypes",[i.ElementRef,a.NgControl])],e)}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l,t.Directive=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?l:arguments[0],t=arguments.length<=1||void 0===arguments[1]?u.placeholderChar:arguments[1];if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(s),r!==-1;)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isString=o,t.isNumber=i,t.processCaretTraps=a;var u=r(1),l=[],s="[]"},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,s=e.placeholderChar,f=e.placeholder,c=e.indexesOfPipedChars,d=void 0===c?n:c,p=e.caretTrapIndexes,h=void 0===p?n:p;if(0===a)return 0;var v=l.length,m=r.length,g=f.length,C=u.length,y=v-m,b=y>0,x=0===m,k=y>1&&!b&&!x;if(k)return a;var j=b&&(r===u||u===f),O=0;if(j?O=a-y:!function(){for(var e=u.toLowerCase(),t=l.toLowerCase(),r=t.substr(0,a).split(o),n=r.filter(function(t){return e.indexOf(t)!==-1}),i=n[n.length-1],c=d.map(function(t){return e[t]}),p=c.filter(function(e){return e===i}).length,h=n.filter(function(e){return e===i}).length,v=f.substr(0,f.indexOf(s)).split(o).filter(function(e,t){return e===i&&l[t]!==e}).length,m=v+h+p,g=0,y=0;y<C;y++){var b=e[y];if(O=y+1,b===i&&g++,g>=m)break}}(),b){for(var P=O,M=O;M<=g;M++)if(f[M]===s&&(P=M),f[M]===s||h.indexOf(M)!==-1||M===g)return P}else for(var T=O;T>=0;T--)if(f[T-1]===s||h.indexOf(T)!==-1||0===T)return T}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var n=[],o=""},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?a:arguments[0],t=arguments.length<=1||void 0===arguments[1]?a:arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,u=void 0===n||n,l=r.previousConformedValue,s=void 0===l?a:l,f=r.placeholderChar,c=void 0===f?i.placeholderChar:f,d=r.placeholder,p=void 0===d?(0,o.convertMaskToPlaceholder)(t,c):d,h=r.currentCaretPosition,v=r.keepCharPositions,m=u===!1&&void 0!==s,g=e.length,C=s.length,y=p.length,b=t.length,x=g-C,k=x>0,j=h+(k?-x:0),O=j+Math.abs(x);if(v===!0&&!k){for(var P=a,M=j;M<O;M++)p[M]===c&&(P+=c);e=e.slice(0,j)+P+e.slice(j,g)}for(var T=e.split(a).map(function(e,t){return{"char":e,isNew:t>=j&&t<O}}),_=g-1;_>=0;_--){var w=T[_]["char"];if(w!==c){var V=_>=j&&C===b;w===p[V?_-x:_]&&T.splice(_,1)}}var R=a,S=!1;e:for(var E=0;E<y;E++){var N=p[E];if(N===c){if(T.length>0)for(;T.length>0;){var I=T.shift(),q=I["char"],A=I.isNew;if(q===c&&m!==!0){R+=c;continue e}if(t[E].test(q)){if(v===!0&&A!==!1&&s!==a&&u!==!1&&k){for(var D=T.length,J=null,L=0;L<D;L++){var W=T[L];if(W["char"]!==c&&W.isNew===!1)break;if(W["char"]===c){J=L;break}}null!==J?(R+=q,T.splice(J,1)):E--}else R+=q;continue e}S=!0}m===!1&&(R+=p.substr(E,y));break}R+=N}if(m&&k===!1){for(var F=null,U=0;U<R.length;U++)p[U]===c&&(F=U);R=null!==F?R.substr(0,F+1):a}return{conformedValue:R,meta:{someCharsRejected:S}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(2),i=r(1),a=""},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.inputElement,r=e.mask,n=e.guide,o=e.pipe,s=e.placeholderChar,c=void 0===s?h.placeholderChar:s,C=e.onAccept,y=e.onReject,b=e.keepCharPositions,x=void 0!==b&&b;"object"===("undefined"==typeof r?"undefined":l(r))&&void 0!==r.pipe&&void 0!==r.mask&&(o=r.pipe,r=r.mask);var k={previousConformedValue:g},j=void 0,O=void 0;return r instanceof Array&&(j=(0,p.convertMaskToPlaceholder)(r,c)),t.placeholder===g&&t.setAttribute(v,j),{state:k,update:function(){var e=arguments.length<=0||void 0===arguments[0]?t.value:arguments[0];if(e!==k.previousConformedValue){var s=a(e),h=t.selectionStart,v=k.previousConformedValue,b=void 0;if(("undefined"==typeof r?"undefined":l(r))===m){O=r(s,{currentCaretPosition:h,previousConformedValue:v,placeholderChar:c});var P=(0,p.processCaretTraps)(O),M=P.maskWithoutCaretTraps,T=P.indexes;O=M,b=T,j=(0,p.convertMaskToPlaceholder)(O,c)}else O=r;var _={previousConformedValue:v,guide:n,placeholderChar:c,pipe:o,placeholder:j,currentCaretPosition:h,keepCharPositions:x},w=(0,d["default"])(s,O,_),V=w.conformedValue,R=w.meta.someCharsRejected,S=("undefined"==typeof o?"undefined":l(o))===m,E={};S&&(E=o(V,u({rawValue:s},_)),E===!1?E={value:v,rejected:!0}:(0,p.isString)(E)&&(E={value:E}));var N=S?E.value:V,I=(0,f["default"])({previousConformedValue:v,conformedValue:N,placeholder:j,rawValue:s,currentCaretPosition:h,placeholderChar:c,indexesOfPipedChars:E.indexesOfPipedChars,caretTrapIndexes:b}),q=N===j&&0===I,A=q?g:N;t.value=A,i(t,I),k.previousConformedValue=A,("undefined"==typeof C?"undefined":l(C))===m&&A!==v&&C();var D=s.length<v.length;("undefined"==typeof y?"undefined":l(y))===m&&(R||E.rejected)&&D===!1&&y({conformedValue:N,pipeRejection:E.rejected,maskRejection:R})}}}}function i(e,t){document.activeElement===e&&e.setSelectionRange(t,t,C)}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return g;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=o;var s=r(3),f=n(s),c=r(4),d=n(c),p=r(2),h=r(1),v="placeholder",m="function",g="",C=""},function(t,r){t.exports=e},function(e,r){e.exports=t}])});