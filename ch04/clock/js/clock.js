class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = { currentTime: getCurrentTime() };
    }

    launchClock() {
        setInterval(() => {
            console.log('Updating time...');
            this.setState({
                currentTime: getCurrentTime()
            });
        }, 1000);
    }

    render() {
        console.log('Rendering Clock...');
        return React.createElement(
            'div',
            null,
            this.state.currentTime
        );
    }

    getCurrentTime() {
        return new Date().toLocaleString();
    }
}