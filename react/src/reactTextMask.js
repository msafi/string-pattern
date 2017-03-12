import React, {PropTypes} from 'react'
import createTextMaskInputElement from '../../core/src/createTextMaskInputElement'

export const MaskedInput = React.createClass({
  propTypes: {
    mask: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.func,
      PropTypes.shape({
        mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
        pipe: PropTypes.func
      })
    ]).isRequired,
    guide: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pipe: PropTypes.func,
    placeholderChar: PropTypes.string,
    keepCharPositions: PropTypes.bool
  },

  componentDidMount() {
    this.textMaskInputElement = createTextMaskInputElement()
    this.update()
  },

  update(value) {
    const textMaskConfig = Object.assign({inputElement: this.inputElement}, this.props)
    this.textMaskInputElement.update(value || this.props.value, textMaskConfig)
  },

  componentDidUpdate() {
    this.update()
  },

  render() {
    const props = {...this.props}

    delete props.mask
    delete props.guide
    delete props.pipe
    delete props.placeholderChar
    delete props.keepCharPositions
    delete props.value
    delete props.onChange

    return (
      <input
        {...props}
        onInput={this.onChange}
        defaultValue={this.props.value}
        ref={(inputElement) => (this.inputElement = inputElement)}
      />
    )
  },

  onChange(event) {
    this.update()

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  }
})

export default MaskedInput
export {default as conformToMask} from '../../core/src/conformToMask.js'
