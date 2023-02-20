import { Input } from "../components/Input/Input"

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {handleChange: {action: "handleChange"}}
}

export const Template = args => <Input {...args}/>