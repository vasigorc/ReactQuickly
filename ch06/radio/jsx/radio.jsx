class Radio extends React.Component {
    constructor(props) {
        super(props)
        // bind to `this` instance of the Radio class
        this.handleResize = this.handleResize.bind(this)
        let order = props.order
        let i = 1
        this.state = {
            outerStyle: this.getStyle(4, i),
            innerStyle: this.getStyle(1, i),
            selectedStyle: this.getStyle(2, i),
            taggerStyle: {top: order*20, width: 25, height: 25}
        }
    }

    getStyle(i, m) {
        let value = i*m
        return {
            top: value,
            bottom: value,
            left: value,
            right: value
        }
    }

    // Happens after mountig and rendering
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    // Make sure nothing is left after this component is gone from the DOM
    componentWillMount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize(event) {
        let w = 1 + Math.round(window.innerWidth / 300)
        this.setState({
            taggerStyle: {top: this.props.order*w*10, width: w*10, height: w*10},
            textStyle: {left: w*13, fontSize: 7*w}
        })
    }

    // render one radio button <div />
    render() {
        return <div>
            <div className="radio-tagger" style={this.state.taggerStyle}>
                <input type="radio" name={this.props.name} id={this.props.id}></input>
                <label htmlFor={this.props.id}>
                    <div className="radio-outer" style={this.state.textStyle}>
                        <div className="radio-inner" style={this.state.innerStyle}>
                            <div className className="rado-selected" style={this.state.selectedStyle}></div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    }
}