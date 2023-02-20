// import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from "../components/Button/Button"

export default {
  title: "Components/Button",
  component: Button
} /*as ComponentMeta<typeof Button>;*/

const Template/*: ComponentStory<typeof Button>*/ = (args) => <Button {...args}/>;

export const Red/*: ComponentStory<typeof Button>*/ = Template.bind({})
Red.args = {
  label: "Add contact",
  backgroundColor: "red",
  color: "green",
  size: "md"
}

export const Green = Template.bind({})
Green.args = {
  label: "Add contact",
  backgroundColor: "green",
  color: 'red',
  size: "md"
}

export const Small = Template.bind({})
Small.args = {
  label: "Add contact",
  backgroundColor: "red",
  size: "sm"
}

export const Large = Template.bind({})
Large.args = {
  label: "Add contact",
  backgroundColor: "red",
  size: "lg"
}