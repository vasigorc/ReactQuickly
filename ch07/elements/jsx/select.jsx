class Select extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const options = this.props.titles.map(name => {
            return <SelectOption title={name} />
        })
        return <select value={this.props.selectedValue} 
                       onChange={this.handler}
                       multiple={this.isMultiple} >
            {options}
        </select>
    }
}