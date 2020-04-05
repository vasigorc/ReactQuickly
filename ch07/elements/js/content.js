class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);

        this.state = {
            title: '',
            radioGroup: {
                angular: false,
                // set the default checked radio button
                react: true,
                polymer: false
            }, checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            }, selectedValue: 'node'
        };
    }

    handleInput(event) {
        this.setState({ title: event.target.value });
    }

    handleRadio(event) {
        let obj = {}; // erase other radios
        obj[event.target.value] = event.target.checked;
        this.setState({ radioGroup: obj });
    }

    handleCheckbox(event) {
        /**
         * You aren't supposed to change the state directly. To avoid any potential
         * conflicts, it's better to assign by value with Object.assign() (cloning).
         */
        let obj = Object.assign(this.state.checkboxGroup);
        obj[event.target.value] = event.target.checked;
        this.setState({ checkboxGroup: obj });
    }

    handleSelectChange(event) {
        this.setState({ selectedValue: event.target.value });
    }

    render() {
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'form',
                null,
                React.createElement(
                    'h2',
                    null,
                    'input: input'
                ),
                React.createElement('input', { type: 'text', name: 'title', value: this.state.title,
                    onChange: this.handleInput }),
                React.createElement('hr', null),
                React.createElement(
                    'h2',
                    null,
                    'input: radio'
                ),
                React.createElement(RadioGroup, { titles: ['angular', 'react', 'polymer'],
                    radioGroup: Array.from(this.state.radioGroup),
                    handler: this.handleRadio }),
                React.createElement('hr', null),
                React.createElement(
                    'h2',
                    null,
                    'input: checkbox'
                ),
                React.createElement(CheckboxGroup, { titles: ['node', 'react', 'express', 'mongodb'],
                    checkboxGroup: Array.from(this.state.checkboxGroup),
                    handler: this.handleCheckbox }),
                React.createElement('hr', null),
                React.createElement(
                    'h2',
                    null,
                    'input: single select'
                ),
                React.createElement(Select, { titles: ['ruby', 'node', 'python'],
                    selectedValue: this.state.selectedValue,
                    handler: this.handleSelectChange,
                    isMultiple: false })
            )
        );
    }
}