const ClickCounterButton = props => {
    return React.createElement(
        "button",
        {
            onClick: props.handler,
            className: "btn btn-info" },
        "Desinfect your hands!"
    );
};