import React from 'react';

import { Button, Navbar, Dropdown, Menu } from 'react-daisyui';

export const Header = () => {

    return (
        <div>
            <Navbar>
                <Navbar.Start>
                    <Dropdown>
                    <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </Button>
                    <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
                        <Dropdown.Item>Item 1</Dropdown.Item>
                        <Dropdown.Item>Item 2</Dropdown.Item>
                        {/* <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li>
                            <a>Submenu 1</a>
                            </li>
                            <li>
                            <a>Submenu 2</a>
                            </li>
                        </ul>
                        </li> */}
                        <Dropdown.Item>Item 3</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </Navbar.Start>
                <Navbar.Center className="hidden lg:flex">
                    <Menu horizontal className="px-1">
                    <Menu.Item>
                        <a>Item 1</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a>Item 2</a>
                    </Menu.Item>
                    {/* <Menu.Item>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <Menu.Item>
                            <a>Submenu 1</a>
                            </Menu.Item>
                            <Menu.Item>
                            <a>Submenu 2</a>
                            </Menu.Item>
                        </ul>
                        </details>
                    </Menu.Item> */}
                    <Menu.Item>
                        <a>Item 3</a>
                    </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Button tag="a">Button</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
};

export default Header;
