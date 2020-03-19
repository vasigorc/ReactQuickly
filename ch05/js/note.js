class Note extends React.Component {
    confirmLeave(e) {
        let confirmationMessage = 'Do you really want to close?';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }

    componentDidMount() {
        console.log('Attaching confirmLeave event listener to beforeunload');
        window.addEventListener('beforeunload', this.confirmLeave);
    }

    componentWillMount() {
        console.log('Detaching confirmLeave event listener from beforeunload');
        window.removeEventListener('beforeunload', this.confirmLeave);
    }

    render() {
        console.log('Render');
        return React.createElement(
            'div',
            null,
            'Here will be our input field for notes (parent will remove in ',
            this.props.secondsLeft,
            ' seconds)'
        );
    }
}