const Checkbox = (props)=> {
    return  <input type="checkbox"
                name="checkboxGroup"
                value={props.title}
                checked={props.value}
                onChange={props.handler} />  
}