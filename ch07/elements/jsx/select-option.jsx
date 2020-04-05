const SelectOption = (props)=> {
    return  <option value={props.title}>
            {props.title[0].toUpperCase() + props.title.slice(1)}
        </option>
}