class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)

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
        }
    }

    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked
        this.setState({ radioGroup: obj })
    }

    handleCheckbox(event) {
        /**
         * You aren't supposed to change the state directly. To avoid any potential
         * conflicts, it's better to assign by value with Object.assign() (cloning).
         */
        let obj = Object.assign(this.state.checkboxGroup)
        obj[event.target.value] = event.target.checked
        this.setState({checkboxGroup: obj})
    }

    render() {
        return <div className="container">
                <form>
                    <h2>input: radio</h2>
                    <RadioGroup titles={['angular', 'react', 'polymer']}
                                radioGroup={Array.from(this.state.radioGroup)}
                                handler={this.handleRadio} />
                    <hr/>
                    <h2>input: checkbox</h2>
                    <CheckboxGroup titles={['node', 'react', 'express', 'mongodb']}
                                    checkboxGroup={Array.from(this.state.checkboxGroup)}
                                    handler={this.handleCheckbox} />
            </form>
        </div>
    }
}