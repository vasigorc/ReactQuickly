class Content extends React.Component {
    render() {
        const number = 1
        return (
            <div>
                <Button buttonLabel="Start"/>
                <Button />
                <Button title={number}/>
                <Button />
                <Button email="not-a-valid-email" />
                <Button email="vasigorc@gmail.com" />
            </div>
        )
    }
}