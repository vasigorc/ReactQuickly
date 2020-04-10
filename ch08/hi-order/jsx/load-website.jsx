const LoadWebsite = (Component) => {
    class _LoadWebsite extends React.Component {
        constructor(props) {
            super(props)
            this.state = {label: 'Run'}
            /**
             * Make sure that in this method, "this" is always an instance
             * of this component.
             */
            this.state.handleClick = this.handleClick.bind(this)
        }
        getUrl() {
            return 'https://caniuse.com/#feat=x-frame-options'
        }
        handleClick(event) {
            var iframe = document.getElementById('frame').src = this.getUrl()
        }
        componentDidMount() {
            console.log(ReactDOM.findDOMNode(this))
        }
        render() {
            console.log(this.state)
            /**
             * Passes state and props as properties using spread
             */
            return <Component {...this.state} {...this.props} />
        }
    }
    /**
     * Defines a display name for the Higher-Order Component
     */
    _LoadWebsite.displayName = 'EnhancedComponent'
    return _LoadWebsite
}

export { LoadWebsite }