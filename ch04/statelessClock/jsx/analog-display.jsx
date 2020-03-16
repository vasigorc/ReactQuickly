const AnalogDisplay = function AnalogDisplay(props) {
    /*
        Converts the string date
        into an object so you can parse it later
    */
    let date = new Date(props.time)
    let dialStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        /*
            Use borderRadius(border-radius in regular CSS)
            on a <div> with a high number relative to width,
            to make it a circle
        */
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    }
    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        /*
            Calculates the angle and and rotates the second with
            minus 90to offset for the hand's starting horizontal position

            from mdn: rotate - transform function specifies a rotation by a 
            degrees about a given point.
        */
        transform: 'rotate(' + ((date.getSeconds()/60)*360 - 90).toString() + 'deg)',
        /* 
            Uses tranformOrigin to offset
            the center of the rotation
        */
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    }
    let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((date.getMinutes()/60)*360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    }
    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid grey',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((date.getHours()/12)*360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    }
    return <div>
        <div style={dialStyle}>
            <div style={secondHandStyle} />
            <div style={minuteHandStyle} />
            <div style={hourHandStyle} />
        </div>
    </div>
}