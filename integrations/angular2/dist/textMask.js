!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular2/common"),require("angular2/core")):"function"==typeof define&&define.amd?define(["angular2/common","angular2/core"],t):"object"==typeof exports?exports.textMask=t(require("angular2/common"),require("angular2/core")):e.textMask=t(e.ng.common,e.ng.core)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,u=3>o?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(u=(3>o?a(u):o>3?a(t,r,u):a(t,r))||u);return o>3&&u&&Object.defineProperty(t,r,u),u},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},o=r(3),u=r(9),i=r(8),c=function(){function e(e,t){this.model=t,this.textMaskConfig={mask:""},this.inputElement=e.nativeElement}return e.prototype.ngOnInit=function(e){var t=(void 0===e?{}:e).mask,r=void 0===t?this.textMaskConfig.mask:t;this.conformedInput="",this.placeholder=o.convertMaskToPlaceholder(r)},e.prototype.ngOnChanges=function(e){var t=e.textMaskConfig,r=t.currentValue.mask,n=t.previousValue.mask;r!==n&&(this.ngOnInit({mask:r}),this.model.valueAccessor.writeValue(""))},e.prototype.onInput=function(e){void 0===e&&(e="");var t=this,r=t.textMaskConfig.mask,n=t.placeholder,a=t.conformedInput,u=o.conformToMask(e,r),i=u.output,c=o.adjustCaretPosition({previousInput:a,conformToMaskResults:u,currentCaretPosition:this.inputElement.selectionStart}),s=i===n&&0===c?"":i;this.conformedInput=s,this.model.valueAccessor.writeValue(s),o.safeSetSelection(this.inputElement,c)},e.prototype.updateModel=function(e){this.model.viewToModelUpdate(e)},n([u.Input("textMask"),a("design:type",Object)],e.prototype,"textMaskConfig",void 0),e=n([u.Directive({selector:"input[textMask][ngModel]",host:{"[placeholder]":"placeholder","(input)":"onInput($event.target.value)","(keyup)":"updateModel($event.target.value)"}}),a("design:paramtypes",[u.ElementRef,i.NgModel])],e)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=c,t.Directive=c;var s=r(3);t.conformToMask=s.conformToMask,t.convertMaskToPlaceholder=s.convertMaskToPlaceholder,t.adjustCaretPosition=s.adjustCaretPosition},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).map(function(e){return-1!==l.maskingCharacters.indexOf(e)?l.placeholderCharacter:e}).join("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).reduce(function(e,t){return-1===l.maskingCharacters.indexOf(t)&&-1===e.indexOf(t)&&e.push(t),e},[])}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function u(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.numeric:return c(e);case l.maskingCharactersEnums.uppercase:case l.maskingCharactersEnums.lowercase:case l.maskingCharactersEnums.alphabetic:return s(e);case l.maskingCharactersEnums.alphanumeric:return c(e)||s(e);default:return!0}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.uppercase:return e.toUpperCase();case l.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function c(e){return!isNaN(e)}function s(e){return/^[a-zA-Z]+$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.getDelimiters=a,t.tokenize=o,t.isAcceptableCharacter=u,t.potentiallyTransformCharacter=i;var l=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var o=r(4);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(o).default}});var u=r(7);Object.defineProperty(t,"safeSetSelection",{enumerable:!0,get:function(){return n(u).default}});var i=r(2);Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return i.convertMaskToPlaceholder}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.previousInput,r=void 0===t?"":t,n=e.conformToMaskResults,a=void 0===n?{}:n,i=e.currentCaretPosition,s=void 0===i?0:i;a.input=a.input||"",a.output=a.output||"",a.mask=a.mask||"";var l=(0,o.convertMaskToPlaceholder)(a.mask),f=a.output.length<r.length||a.input.length<r.length;if(f===!1){if(r===a.output||a.output===l){var d=s-1;if(l[d]===u.placeholderCharacter)return d;for(var p=d+1;p<l.length;p++)if(l[p]===u.placeholderCharacter)return p}else{var h=(0,c.default)(r||l,a.output);if(h.indexOfLastChange-s>1)return s;for(var m=h.indexOfLastChange+1;m<l.length;m++)if(l[m]===u.placeholderCharacter)return m}return a.output.length}if(f===!0){if(r===a.output){if(l[s]===u.placeholderCharacter)return s;for(var v=s;v>0;v--)if(l[v]===u.placeholderCharacter)return v+1}else{var g=(0,c.default)(r,a.output);if(g.indexOfFirstChange-s>1)return s;if(l[s-1]===u.placeholderCharacter)return s;for(var C=g.indexOfFirstChange-1;C>0;C--)if(l[C]===u.placeholderCharacter)return C+1}return 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=r(2),u=r(1),i=r(6),c=n(i)},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=(0,a.convertMaskToPlaceholder)(t),n=(0,a.getDelimiters)(t),u=e.length;return{input:e,mask:t,output:(0,a.tokenize)(r).map(function(r,i){if(r===o.placeholderCharacter&&u>0)for(var c=e.length-u;c<e.length;c++){var s=e[c];if(u--,s===o.placeholderCharacter||-1===n.indexOf(s)&&(0,a.isAcceptableCharacter)(s,t[i])===!0)return(0,a.potentiallyTransformCharacter)(s,t[i])}return r}).join("")}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(2),o=r(1)},function(e,t){"use strict";function r(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r={indexOfFirstChange:null,indexOfLastChange:null,numberOfChanges:0},n=0;n<e.length;n++)e[n]!==t[n]&&(null===r.indexOfFirstChange&&(r.indexOfFirstChange=n),r.indexOfLastChange=n,r.numberOfChanges++);return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t){"use strict";function r(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(t,r){t.exports=e},function(e,r){e.exports=t}])});