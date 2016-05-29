# [![Text Mask](assets/logo.png)](https://github.com/msafi/text-mask/#readme)

[![Build Status](https://travis-ci.org/msafi/text-mask.svg?branch=master)](https://travis-ci.org/msafi/text-mask)

Text Mask let's you turn a plain `<input />`, into one that conforms
any user input, as they type, to a given mask pattern. For example:

With mask `(111) 111-1111` and user input `5845739`, the output would be `(584) 573-9___`

## Live demo

To see Text Mask in action, [checkout the demo page](https://msafi.github.io/text-mask/).

## Installation and usage

* [React](react#readme)
* [Angular 2](angular2#readme)
* [Vanilla JS](vanilla#readme)

## Features

### Expected to work with...

IE9+, Android, Samsung Internet, Windows Phone, iOS, Opera, Firefox, Safari, and Chrome

### Guide mode

<p align="center">
<img src="assets/guideMode.gif"/>
</p>

Guide mode prints out placeholder characters and the mask itself as the user types

### No-guide mode

<p align="center">
<img src="assets/noGuideMode.gif"/>
</p>

No-guide mode doesn't print out placeholder characters and only adds mask characters when the
user reaches them

### Masking characters

Character | Description
--- | ---
`1` | Any number
`A` | Any letter
`?` | Any number or letter
`U` | Any letter (will be transformed to uppercase)
`L` | Any letter (will be transformed to lowercase)

The mask also supports escaping, so you can use masking character *in* the mask. For example,
`+\1 (111) 111-1111`. For more information, see the
[documentation here](https://github.com/msafi/text-mask/blob/master/componentDocumentation.md#readme).

### Other features

* Supports pasting
* Supports browser auto-fill
* It is small, around *3KB* gzipped

## Support

For support or questions, please
[file an issue](https://github.com/msafi/text-mask/issues).

## License

Public domain - [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
