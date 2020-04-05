class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    capitalize(word) {
        if (typeof word != 'string') return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    render() {
        const namedRadioButtons = this.props.titles.map(name => {
            return React.createElement(
                'label',
                null,
                React.createElement(Radio, { title: name,
                    value: this.props.radioGroup[{ name }],
                    handler: this.props.handler }),
                this.capitalize(name)
            );
        });

        return React.createElement(
            'div',
            null,
            namedRadioButtons
        );
    }
}