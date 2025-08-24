
let style = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',
        marginBottom: '20px',
    },
    links: {
        display: 'flex', 
        alignItems: 'center', 
        listStyle: 'none',
        marginRight: '20px',
        gap: '20px', 
        padding: '0',
        marginBlockStart: '0',
        marginBlockEnd: '0', 
        fontSize: '20px',                                                                                                                                                                                                                           
    }
}
const Header = () => {
    return (
        <header style={style.header}>
            <img src="https://img.icons8.com/?size=64&id=J2jsusRzJPrR&format=png" alt="Logo" className="logo" />
                <ul style={style.links }>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
        </header>
    )
}
export default Header;