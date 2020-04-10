export default class Link extends React.Component {
    render() {
        const url = '/' + this.props.label.toLowercase().trim().replace(' ', '-')
        return <div>
            <a href={url}>{this.props.label}</a>
            <br/>
        </div>
    }
}