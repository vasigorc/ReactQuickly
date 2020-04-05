class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props)
    }

    capitalize(word) {
        if (typeof word != 'string') return ''
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    render() {
        const namedCheckboxes = this.props.titles.map(name => {
            return <label>
                <Checkbox title={name}
                    value={this.props.checkboxGroup[{ name }]}
                    handler={this.props.handler} />
                       {this.capitalize(name)}
                    </label>
        })

        return <div>{namedCheckboxes}</div>
    }
}