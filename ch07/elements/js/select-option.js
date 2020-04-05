const SelectOption = props => {
    return React.createElement(
        "option",
        { value: props.title },
        props.title[0].toUpperCase() + props.title.slice(1)
    );
};