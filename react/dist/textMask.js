!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.textMask=t(require("react")):e.textMask=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=t.conformToMask=t.MaskedInput=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=r(1);Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return i.convertMaskToPlaceholder}});var s=r(6),u=n(s),c=r(5),l=t.MaskedInput=u.default.createClass({displayName:"MaskedInput",propTypes:{mask:s.PropTypes.string.isRequired,guide:s.PropTypes.bool,value:s.PropTypes.string},componentWillMount:function(){var e=this.props,t=e.mask,r=e.value,n=e.placeholderCharacter;this.textMaskState=(0,c.getComponentInitialState)({mask:t,placeholderChar:n,value:r})},componentDidUpdate:function(){(0,c.safeSetSelection)(this.inputElement,this.textMaskState.adjustedCaretPosition)},render:function(){var e=this,t=this.props,r=this.onChange,n=this.processComponentChanges,o=this.textMaskState,i=o.conformedInput,s=o.componentPlaceholder,c=this.props,l=c.value,d=void 0===l?i:l,p=c.type,h=void 0===p?"text":p,f=c.placeholder,v=void 0===f?s:f,m=d!==i?n(d,!0).conformedInput:d;return this.textMaskState.conformedInput=m,u.default.createElement("input",a({},t,{type:h,onChange:r,value:m,placeholder:v,ref:function(t){return e.inputElement=t}}))},onChange:function d(e){var t=e.target.value,r=this.processComponentChanges,d=this.props.onChange,n=r(t),a=n.conformedInput,o=n.adjustedCaretPosition;this.textMaskState.conformedInput=a,this.textMaskState.adjustedCaretPosition=o,this.forceUpdate(),e.target.value=a,"function"==typeof d&&d(e)},processComponentChanges:function(e,t){var r=this.inputElement,n=this.props,a=n.mask,o=n.guide,i=n.placeholderCharacter,s=n.validator,u=this.textMaskState,l=u.conformedInput,d=u.componentPlaceholder,p=t===!0?void 0:r.selectionStart,h=(0,c.processComponentChanges)({userInput:e,componentPlaceholder:d,previousConformedInput:l,mask:a,validator:s,guide:o,placeholderChar:i,currentCaretPosition:p}),f=h.conformedInput,v=h.adjustedCaretPosition;return{conformedInput:f,adjustedCaretPosition:v}}});t.default=l},function(e,t,r){"use strict";function n(e){var t=e.mask,r=void 0===t?"":t,n=e.placeholderChar,a=void 0===n?h.placeholderCharacter:n;if(-1!==r.indexOf(a))throw console.log("Text Mask received placeholder character: ",a),console.log("Text Mask received mask: ",r),new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.");for(var o=!1,i="",s=0;s<r.length;s++){var u=r[s];"\\"!==u||o===!0?o!==!0?i+=-1!==h.maskingCharacters.indexOf(u)?a:u:(o=!1,i+=u):(o=!0,i+="")}return i}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case h.maskingCharactersEnums.numeric:return u(e);case h.maskingCharactersEnums.uppercase:case h.maskingCharactersEnums.lowercase:case h.maskingCharactersEnums.alphabetic:return c(e);case h.maskingCharactersEnums.alphanumeric:return u(e)||c(e);case h.maskingCharactersEnums.any:return!0;default:return!1}}function s(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case h.maskingCharactersEnums.uppercase:return e.toUpperCase();case h.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&" "!==e}function c(e){return/^[a-zA-Z]+$/.test(e)}function l(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}function d(e){return"string"==typeof e||e instanceof String}function p(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.unescapeMask=a,t.tokenize=o,t.isAcceptableCharacter=i,t.potentiallyTransformCharacter=s,t.getIndexOfFirstChange=l,t.isString=d,t.isNumber=p;var h=r(3)},function(e,t,r){"use strict";function n(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,s=void 0===n?!0:n,u=r.previousConformedInput,c=void 0===u?"":u,l=r.placeholderChar,d=void 0===l?i.placeholderCharacter:l,p=r.validator,h=void 0===p?a:p,f=(0,o.convertMaskToPlaceholder)({mask:t,placeholderChar:d}),v=s===!1&&void 0!==c,m=(0,o.getIndexOfFirstChange)(c,e),g=e.length-c.length,C=(0,o.tokenize)(e),k=v&&!(e.length<c.length),y=(0,o.unescapeMask)(t),M=0,P=0;P<f.length&&C.length>0;P++){var b=P>=m&&""!==c,x=(b?P+g:P)-M;f[P]===C[x]&&C[x]!==d&&(C.splice(x,1),M++)}var I="";e:for(var T=0;T<f.length;T++){var j=f[T];if(j===d){if(C.length>0)for(;C.length>0;){var S=C.shift();if(S===d&&v!==!0){I+=d;continue e}if((0,o.isAcceptableCharacter)(S,y[T])){I+=(0,o.potentiallyTransformCharacter)(S,y[T]);continue e}}v===!1&&(I+=f.substr(T,f.length));break}I+=j}if(v&&k===!1){for(var _=null,E=0;E<I.length;E++)f[E]===d&&(_=E);I=null!==_?I.substr(0,_+1):""}return{output:h(I)?I:c,meta:{input:e,mask:t,guide:s,placeholderChar:d,placeholder:f}}}function a(){return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(1),i=r(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(e){var t=e.previousConformedInput,r=void 0===t?"":t,n=e.conformToMaskResults,o=void 0===n?{}:n,i=e.currentCaretPosition,s=void 0===i?0:i;if(0===s)return 0;var u=o.output,c=void 0===u?"":u,l=o.meta,d=void 0===l?{}:l,p=d.input,h=void 0===p?"":p,f=d.placeholderChar,v=d.placeholder,m=(0,a.getIndexOfFirstChange)(r,h),g=m-s>1;if(g)return s;var C=!(h.length<r.length),k=Math.abs(r.length-h.length)>1,y=1===h.length,M=k&&!C&&!y,P=C&&(r===c||c===v),b=""===r&&c===v,x=k||y?c:v,I=v[m]!==f,T=s;if(M)return s;if(k||y)T=0;else if(P)T--;else if(C)for(var j=s;j<v.length;j++){var S=I&&!b;if(v[j]===f){T=j+(S?1:0);break}}if(C||y){for(var _=T;_<=x.length;_++)if(x[_]===f||_===x.length)return _>c.length?c.length:_}else for(var E=T;E>=0;E--)if(x[E-1]===f||0===E)return E}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.userInput,r=void 0===t?"":t,n=e.componentPlaceholder,a=void 0===n?"":n,o=e.previousConformedInput,i=void 0===o?"":o,s=e.mask,u=void 0===s?"":s,l=e.guide,p=void 0===l?"":l,h=e.validator,f=e.currentCaretPosition,v=e.placeholderCharacter,m=(0,d.default)(r,u,{previousConformedInput:i,guide:p,placeholderChar:v,validator:h}),g=m.output,C=void 0!==f?(0,c.default)({previousConformedInput:i,conformToMaskResults:m,currentCaretPosition:f,placeholderChar:v}):void 0,k=g===a&&0===C,y=k?"":g;return{conformedInput:y,adjustedCaretPosition:C}}function o(e){var t=e.mask,r=e.placeholderChar,n=e.value;return void 0!==n&&s(n),{conformedInput:"",adjustedCaretPosition:0,componentPlaceholder:(0,p.convertMaskToPlaceholder)({mask:t,placeholderChar:r})}}function i(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}function s(e){if(!(0,p.isString)(e))throw console.log("Text Mask received",e),new Error("The `value` provided to Text Mask needs to be of type string.")}Object.defineProperty(t,"__esModule",{value:!0}),t.processComponentChanges=a,t.getComponentInitialState=o,t.safeSetSelection=i,t.checkInputValueType=s;var u=r(4),c=n(u),l=r(2),d=n(l),p=r(1)},function(t,r){t.exports=e}])});