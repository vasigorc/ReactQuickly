class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const options = this.props.titles.map(name => {
            return React.createElement(SelectOption, { title: name });
        });
        return React.createElement(
            "select",
            { value: this.props.selectedValue,
                onChange: this.handler,
                multiple: this.isMultiple },
            options
        );
    }
}