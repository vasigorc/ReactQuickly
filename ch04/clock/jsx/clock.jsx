class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {currentTime: getCurrentTime()}
    }

    launchClock() {
        setInterval(()=>{
            console.log('Updating time...')
            this.setState({
                currentTime: getCurrentTime()
            })
        }, 1000)
    }

    render() {
        console.log('Rendering Clock...')
        return <div>{this.state.currentTime}</div>
    }

    getCurrentTime() {
        return (new Date()).toLocaleString()
    }
}