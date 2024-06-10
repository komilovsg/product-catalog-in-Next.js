import Link from "next/link"

const Header = () => {
  return (
    <header>
      <strong>Komilov-Code</strong>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}

export default Header
