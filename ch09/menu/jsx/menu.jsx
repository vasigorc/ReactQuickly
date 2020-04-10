import Link from './link'

class Menu extends React.Component {
    render() {
        const menuItems = [
            'Home', 'About', 'Services', 'Portfolio', 'Contact Us'
        ]
        return <div>
            {menuItems.map((v, i) => {
                return <div key={i}>
                    <Link label={v}/>
                </div>
            })}
        </div>
    }
}

export { Menu }