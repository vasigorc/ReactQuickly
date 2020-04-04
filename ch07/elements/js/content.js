class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

        this.state = {
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
            }
        };
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

    render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "form",
                null,
                React.createElement(
                    "h2",
                    null,
                    "input: radio"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement(Radio, { title: "angular",
                        value: this.state.radioGroup['angular'],
                        handler: this.handleRadio }),
                    "Angular"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement(Radio, { title: "react",
                        value: this.state.radioGroup['react'],
                        handler: this.handleRadio }),
                    "React"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement(Radio, { title: "polymer",
                        value: this.state.radioGroup['polymer'],
                        handler: this.handleRadio }),
                    "Polymer"
                ),
                React.createElement("hr", null),
                React.createElement(
                    "h2",
                    null,
                    "input: checkbox"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement(Checkbox, { title: "node",
                        value: this.state.checkboxGroup['node'],
                        handler: this.handleCheckbox }),
                    "Node"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement(Checkbox, { title: "react",
                        value: this.state.checkboxGroup['react'],
                        handler: this.handleCheckbox }),
                    "React"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement(Checkbox, { title: "express",
                        value: this.state.checkboxGroup['express'],
                        handler: this.handleCheckbox }),
                    "Express"
                ),
                React.createElement(
                    "label",
                    null,
                    React.createElement(Checkbox, { title: "mongodb",
                        value: this.state.checkboxGroup['mongodb'],
                        handler: this.handleCheckbox }),
                    "MongoDB"
                )
            )
        );
    }
}