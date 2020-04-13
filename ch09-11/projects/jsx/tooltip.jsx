class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        /**
         * Using the opacity CSS @property 
         * you can change the transparency of elements,
         * value is between 0 and 1 (default)
         */
        this.state = { opacity: false }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        /**
         * offsetLet and offsetTop are DOM Node properties from HTML standard:
         * https://developer.mozilla.org/en-US/docs/Web/API/Node
         */
        const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this)

        this.setState({
            opacity: !this.state.opacity,
            top,
            left
        })
    }

    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        }
        return (
            <div style={{display: 'inline'}}>
                <span style={{colo: 'blue'}}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}>
                    {this.props.children}
                    </span>
                    <div className="tooltip bottom"
                        style={style}
                        role="tooltip">
                            <div className="tooltip-arrow"></div>
                            <div className="tooltip-inner">
                                {this.props.text}
                            </div>
                        </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        The tooltip or infotip or a hint is a common <Tooltip text=" form of user interface that allows users to interact with electronic devices">
            graphical user interface</Tooltip> element. It is used in conjunction with a <Tooltip text="current position for user interaction on a computer monitor">
             cursor</Tooltip>, usually a pointer.
    </div>,
    document.getElementById('tooltip')
)