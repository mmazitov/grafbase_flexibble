import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constans'
import AuthProviders from './AuthProviders';

const Navbar = () => {
  const session = {};
  return (
    <nav className='flexBetween navbar'>
      <div className='flexStart flex-1 gap-10'>
        <Link href='/'>
        <Image 
          src='/logo.svg' 
          alt='Flexibble Logo' 
          width={115} 
          height={43} 
        />
        </Link>
        <ul className="xl:flex gap-7 hidden text-small">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
          {session ? (
            <>
              
              <Link href='/create-project'>
                share work
              </Link>
            </>
          ) : (
            <AuthProviders />
          )}
      </div>
    </nav>
  )
}

export default Navbar
