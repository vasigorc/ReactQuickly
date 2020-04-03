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
                    <label>
                        <input type="radio"
                            name="radioGroup"
                            value='angular'
                            checked={this.state.radioGroup['angular']}
                            onChange={this.handleRadio} />
                        Angular
                    </label>
                    <label>
                        <input type="radio"
                            name="radioGroup"
                            value='react'
                            checked={this.state.radioGroup['react']}
                            onChange={this.handleRadio} />
                        React
                    </label>
                    <label>
                        <input type="radio"
                            name="radioGroup"
                            value="polymer"
                            checked={this.state.radioGroup['polymer']}
                            onChange={this.handleRadio} />
                        Polymer
                    </label>
                    <hr/>
                    <h2>input: checkbox</h2>
                    <label>
                        <input type="checkbox"
                            name="checkboxGroup"
                            value='node'
                            checked={this.state.checkboxGroup['node']}
                            onChange={this.handleCheckbox} />
                        Node
                    </label>
                    <label>
                        <input type="checkbox"
                            name="checkboxGroup"
                            value='react'
                            checked={this.state.checkboxGroup['react']}
                            onChange={this.handleCheckbox} />
                        React
                    </label>
                    <label>
                        <input type="checkbox"
                            name="checkboxGroup"
                            value="express"
                            checked={this.state.checkboxGroup['express']}
                            onChange={this.handleCheckbox} />
                        Express
                    </label>
                    <label>
                        <input type="checkbox"
                            name="checkboxGroup"
                            value='mongodb'
                            checked={this.state.checkboxGroup['mongodb']}
                            onChange={this.handleCheckbox} />
                        MongoDB
                    </label>
            </form>
        </div>
    }
}