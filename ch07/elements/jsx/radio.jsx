const Radio = (props)=> {
    return  <input type="radio"
                name="radioGroup"
                value={props.title}
                checked={props.value}
                onChange={props.handler} />
}