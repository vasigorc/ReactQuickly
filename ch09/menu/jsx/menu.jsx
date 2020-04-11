import { Link } from './link'

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { menuItems: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3000/menus')
            .then((response) => response.json())
            .then(menus => {
                console.log(menus)
                this.setState({ menuItems: menus })
            }).catch(error => console.log(error))
    }

    render() {
        return <div>
            {this.state.menuItems.map((v, i) => {
                return <div key={i}><Link label={v} /></div>
            })}
        </div>
    }
}

export { Menu }