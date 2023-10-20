import React from 'react';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Header = () => {
    const { data: session } = useSession();
    const router = useRouter();
    console.log(router.pathname)


    return (
        <Navbar rounded className='bg-black text-white'>


            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl lg:text-2xl font-bold text-primary">
                    MoonTech
                </span>
            </Navbar.Brand>


            <div className="flex gap-2 md:order-2">
                <Link href={'/pc-builder'}>
                    <Button color="failure" className="py-0.5 px-1 lg:py-1 lg:px-5 text-sm lg:text-base">
                        PC Builder
                    </Button>
                </Link>

                {
                    session?.user ?
                        <Button color="info" className="py-0.5 px-1 lg:py-1 lg:px-2 text-sm lg:text-base hidden lg:block" onClick={() => signOut()}> Logout </Button>
                        :
                        <Link href={'/login'} className='hidden lg:block'>
                            <Button color="info" className="py-0.5 px-1 lg:py-1 lg:px-3 text-sm lg:text-base">
                                Login
                            </Button>
                        </Link>
                }

                <Navbar.Toggle />
            </div>


            <Navbar.Collapse className='text-white'>
                <Navbar.Link active={router.pathname == "/"} className='text-white'><Link href={'/'}> Home </Link> </Navbar.Link>
                <Navbar.Link active={router.pathname == "/Products"} className='text-white'>
                    <Link href={'/Products'}> Products </Link>
                </Navbar.Link>

                <Navbar.Link className='text-white'>
                    <Dropdown inline label="Categories" >
                        <Dropdown.Item><Link href={'/categories/Processor'}> Processor </Link> </Dropdown.Item>
                        <Dropdown.Item>  <Link href={'/categories/Motherboard'}> Motherboard </Link> </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/categories/RAM'}> RAM </Link> </Dropdown.Item>
                        <Dropdown.Item><Link href={'/categories/PowerSupply'}> Power Supply Unit </Link>  </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/categories/StorageDevice'}> Storage Device </Link>  </Dropdown.Item>
                        <Dropdown.Item> <Link href={'/categories/Monitor'}> Monitor </Link> </Dropdown.Item>
                        <Dropdown.Item><Link href={'/categories/accesorries'}> Others </Link> </Dropdown.Item>

                    </Dropdown>
                </Navbar.Link>

                <Navbar.Link active={router.pathname == "/about-us"} className='text-white' >
                    <Link href={'/about-us'}> About Us</Link>
                </Navbar.Link>

                <Navbar.Link className='text-white' active={router.pathname == "/contacts"}>
                    <Link href={'/contacts'}> Contacts </Link>
                </Navbar.Link>


                {
                    session?.user ?
                        <Navbar.Link className='text-white bg-blue-600 w-full text-center px-3 py-1 block lg:hidden' onClick={() => signOut()}>Logout</Navbar.Link>
                        :
                        <Link href={'/login'}>
                            <Navbar.Link className='text-white bg-blue-600 w-full text-center px-3 py-1 block lg:hidden'>
                                Login
                            </Navbar.Link>
                        </Link>

                }




            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;