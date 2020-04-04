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
                    <label>
                        <Checkbox title="node"
                                        value={this.state.checkboxGroup['node']}
                                        handler= {this.handleCheckbox} />
                        Node
                    </label>
                    <label>
                        <Checkbox title="react"
                                            value={this.state.checkboxGroup['react']}
                                            handler= {this.handleCheckbox} />
                        React
                    </label>
                    <label>
                        <Checkbox title="express"
                                            value={this.state.checkboxGroup['express']}
                                            handler= {this.handleCheckbox} />
                        Express
                    </label>
                    <label>
                        <Checkbox title="mongodb"
                                            value={this.state.checkboxGroup['mongodb']}
                                            handler= {this.handleCheckbox} />
                        MongoDB
                    </label>
            </form>
        </div>
    }
}