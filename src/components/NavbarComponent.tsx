import Link from "next/link"
import {useRouter} from "next/router"

const NavbarComponent = () => {
  const router = useRouter()

  return (
    <nav className="flex justify-between px-14 bg-secondary md:h-[120px] items-center ">
      <img src="../assets/images/logo.svg" className="w-[171px] h-[30px]"/>
      <div className="flex gap-[42px]">
        <Link href="/" className="text-primary text-base">
          Home
        </Link>
        <Link href="#section3" className="text-white text-base">
          About
        </Link>
        <Link href="#editorial" className="text-white text-base">
          Editorial
        </Link>
        <Link href="#healthDirectory" className="text-white text-base">
          Health Directory
        </Link>
      </div>
      <button className="bg-primary w-[112px] py-[10px] rounded-lg text-white text-sm">{`Let's Talk`}</button>
    </nav>
  )
}

export default NavbarComponent
