const ClickCounterButton = (props)=> {
    return <button
        onClick={props.handler}
        className="btn btn-info">
            Desinfect your hands!
        </button>
}