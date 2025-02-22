import Link from "next/link"
export default function Header(){
    return(
        <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold 
        text-2xl" href="">PIZZERO
        </Link>
  
        <nav className="flex gap-4 items-center text-gray-500 font-semibold
        ">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
         
        </nav>
        <nav>
          <Link href="">Login</Link>
        <Link href={''} className="bg-primary rounded-full text-white px-8 py-4">Register</Link>
        </nav>
      </header>
    );
}