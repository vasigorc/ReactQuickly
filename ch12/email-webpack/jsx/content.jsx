const React = require('react')
const ReactDOM = require('react-dom')

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(event) {
        const emailAddress = this.refs.emailAddress
        const comments = this.refs.comments
        console.log(`Email address: ${ReactDOM.findDOMNode(emailAddress).value}`)
        console.log(`Comments: ${ReactDOM.findDOMNode(comments).value}`)
    }

    render() {
        const prompt = 'Please enter your email to win a Sublime Text license'
        return (
            <div className="well">
                <p>{prompt}</p>
                <div className="form-group">
                    Email: <input ref="emailAddress" className="form-control" type="text"
                    placeholder="v.gorcinschi@samsung.com" />
                </div>
                <div className="form-group">
                    Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!" />
                </div>
                <div className="form-group">
                    <a className="btn btn-primary" onClick={this.submit}>Submit</a>
                </div>
            </div>
        )
    }
}

module.exports = Content