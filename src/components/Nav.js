import logo from '../assets/logo.png'

const Nav = () => {
    const Links = [
        { name: 'Home' },
        { name: 'Como Funciona' },
        { name: 'Interface' },
        { name: 'Integração' },
        { name: 'Benefícios' },
    ]
    return (
        <nav className='flex items-center justify-between pt-5 shadow-lg'>
            
                <img className='h-14 ml-6 mb-3' src={logo} alt="logo dayback" />

                <ul className="mr-10">
                    {
                        Links.map((link, index) => (
                            <li key={index} className="md:inline-block md:ml-10 ml-5">
                                <a href="#" className="text-purple-900 text-sm">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            
        </nav>
    )
}

export default Nav