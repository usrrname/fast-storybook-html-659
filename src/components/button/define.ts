import { buttonTemplate } from '@microsoft/fast-foundation';

export default Button.define({
  name: 'fast-button',
  template: buttonTemplate(),
  shadowOptions: {
    delegatesFocus: true,
  },
});
