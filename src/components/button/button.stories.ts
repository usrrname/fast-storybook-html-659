import { html } from '@microsoft/fast-element';
import type { Meta, Story, StoryArgs } from '../__test__/helpers.js';
import { renderComponent } from '../__test__/helpers.js';
import type { Button } from './button.js';
import { ButtonType } from '@microsoft/fast-foundation';
import './define.js';
import ButtonMDX from './button.doc.mdx';

const storyTemplate = html<StoryArgs<Button>>`
    <fast-button
        id="${x => x.id}"
        autofocus="${(x) => x.autofocus}"
        ?disabled="${(x) => x.disabled}"
        formnovalidate="${(x) => x.formnovalidate}"
        form="${(x) => x.formId}"
        formaction="${(x) => x.formaction}"
        formenctype="${(x) => x.formenctype}"
        formmethod="${(x) => x.formmethod}"
        formtarget="${(x) => x.formtarget}"
        name="${(x) => x.name}"
        type="${(x) => x.type}"
        value="${(x) => x.value}"
        :ariaAtomic="${(x) => x.ariaAtomic}"
        :ariaBusy="${(x) => x.ariaBusy}"
        :ariaControls="${(x) => x.ariaControls}"
        :ariaCurrent="${(x) => x.ariaCurrent}"
        :ariaDescribedby="${(x) => x.ariaDescribedby}"
        :ariaDetails="${(x) => x.ariaDetails}"
        :ariaDisabled="${(x) => x.ariaDisabled}"
        :ariaErrormessage="${(x) => x.ariaErrormessage}"
        :ariaExpanded="${(x) => x.ariaExpanded}"
        :ariaFlowto="${(x) => x.ariaFlowto}"
        :ariaHaspopup="${(x) => x.ariaHaspopup}"
        :ariaHidden="${(x) => x.ariaHidden}"
        :ariaInvalid="${(x) => x.ariaInvalid}"
        :ariaKeyshortcuts="${(x) => x.ariaKeyshortcuts}"
        :ariaLabel="${(x) => x.ariaLabel}"
        :ariaLabelledby="${(x) => x.ariaLabelledby}"
        :ariaLive="${(x) => x.ariaLive}"
        :ariaOwns="${(x) => x.ariaOwns}"
        :ariaPressed="${(x) => x.ariaPressed}"
        :ariaRelevant="${(x) => x.ariaRelevant}"
        :ariaRoledescription="${(x) => x.ariaRoledescription}"
    >
        ${(x) => x.storyContent}
    </fast-button>
`;

export default {
  title: 'Button',
  args: {
    id: 'example',
    autofocus: false,
    disabled: false,
    formnovalidate: false,
    storyContent: 'Button',
  },
  argTypes: {
    autofocus: { control: 'boolean' },
    disabled: { control: 'boolean' },
    formaction: { control: 'text' },
    formenctype: { control: 'text' },
    formId: { control: 'text' },
    formmethod: { control: 'text' },
    formnovalidate: { control: 'boolean' },
    formtarget: { control: 'text' },
    inputValue: { table: { disable: true } },
    name: { control: 'text' },
    type: { control: 'select', options: Object.values(ButtonType) },
    value: { control: 'text' },
    storyContent: { table: { disable: true } }
  },
  excludeStories: ['storyTemplate', 'storyContent'],
} as Meta<Button>;

export const Basic: Story<Button> = renderComponent(storyTemplate).bind({});

Basic.args = {
  ...Basic.args,
}

Basic.parameters = {
  docs: {
    page: ButtonMDX
  }
}

export const WithStartSlot: Story<Button> = renderComponent(storyTemplate).bind({});

WithStartSlot.args = {
  id: 'with-start-slot',
  storyContent: html`
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" slot="start"><path d="M5.65 3.15a.5.5 0 0 0 0 .7L9.79 8l-4.14 4.15a.5.5 0 0 0 .7.7l4.5-4.5a.5.5 0 0 0 0-.7l-4.5-4.5a.5.5 0 0 0-.7 0Z"/></svg> Button
  `
}

export const Disabled: Story<Button> = renderComponent(storyTemplate).bind({});

Disabled.args = {
  disabled: true
}