class Timer extends React.Component {
    render() {
        if (this.props.timeLeft == 0) {
            document.getElementById('end-of-time').play()
        }
        if (this.props.timeLeft == null || this.props.timeLeft == 0)
            return <div />
        return <h1>Time left: {this.props.timeLeft}</h1>
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.startTimer = this.startTimer.bind(this)
    }
    /**
     * Triggers the new timer (reset) from
     * a user click. Calls startTimer
     * from @TimerWrapper
     */
    startTimer(event) {
        return this.props.startTimer(this.props.time)
    }

    render() {
        return <button type="button" className='btn-default btn'
            onClick={this.startTimer}>
            {this.props.time} seconds
                </button>
    }
}

class TimerWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = { timeLeft: null, timer: null }
        this.startTimer = this.startTimer.bind(this)
    }

    // triggers the new timer (reset)
    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft == 0) clearInterval(timer)
            this.setState({ timeLeft: timeLeft })
        }, 1000)
        return this.setState({ timeLeft: timeLeft, timer: timer })
    }

    render() {
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group">
                    <Button time="5" startTimer={this.startTimer} />
                    <Button time="10" startTimer={this.startTimer} />
                    <Button time="15" startTimer={this.startTimer} />
                </div>
                <Timer timeLeft={this.state.timeLeft} />
                <audio id="end-of-time" src="resources/flute_c_long_01.wav" preload="auto"></audio>
            </div>
        )
    }
}

ReactDOM.render(
    <TimerWrapper />,
    document.getElementById('timer-app')
)