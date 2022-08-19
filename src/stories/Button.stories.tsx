import Button from "../components/Button/Button";
import { Meta, Story } from "@storybook/react";

export default {
    title: "Button",
    component: Button,
    argTypes: { pressed: { action: "Handle click" } }
} as Meta;

const Template: Story = args => <Button label="Template" pressed={() => console.log("template")} {...args} />

export const Red = Template.bind({});
Red.args = {
    color: "#D61C4E",
    label: "Press me",
    pressed: () => console.log("Pressed")
}

export const Blue = Template.bind({});
Blue.args = {
    label: "Press me",
    pressed: () => console.log("Pressed")
}