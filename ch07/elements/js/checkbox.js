const Checkbox = props => {
            return React.createElement("input", { type: "checkbox",
                        name: "checkboxGroup",
                        value: props.title,
                        checked: props.value,
                        onChange: props.handler });
};