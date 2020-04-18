const React = require('react')

module.exports = class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hash: window.location.hash }
        this.updateHash = this.updateHash.bind(this)
    }

    updateHash(event) {
        this.setState({ hash: window.location.hash })
    }

    componentDidMount() {
        // the third option `false` is for eventCapture - a good explanation is available here: 
        // https://stackoverflow.com/questions/17564323/what-does-the-third-parameter-false-indicate-in-document-addeventlistenerdev
        window.addEventListener('hashchange', this.updateHash, false)
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.updateHash, false)
    }

    render() {
        if (this.props.mapping.get(this.state.hash)) {
            return this.props.mapping.get(this.state.hash)
        } else {
            return this.props.mapping.get('*')
        }
    }
}