class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {currentTime: this.getCurrentTime()}
    }

    launchClock() {
        setInterval(()=>{
            console.log('Updating time...')
            this.setState({
                currentTime: this.getCurrentTime()
            })
        }, 1000)
    }

    render() {
        console.log('Rendering Clock...')
        return <div>
                <AnalogDisplay time={this.state.currentTime}/>
                <DigitalDisplay time={this.state.currentTime} />
            </div>
    }

    getCurrentTime() {
        return (new Date()).toLocaleString()
    }
}