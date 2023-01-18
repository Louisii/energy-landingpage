import logo from '../assets/logo.png'

const Nav = () => {
    return(
        <nav className='flex items-center justify-between pt-5'>

            <img className='h-14 ml-6' src={logo} alt="logo dayback" />

            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
            </ul>

        </nav>
    )
}

export default Nav