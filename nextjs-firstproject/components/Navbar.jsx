import Link from 'next/link'

function Navbar() {
    return(
        <nav>
            <Link href="/home">
                Home
            </Link>
            <ul>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;