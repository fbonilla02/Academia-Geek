import React from 'react'


export default function NavBar() {
  return (
    <>
    <div className="navbar  bg-amarillito ">
  <div className="navbar-start">
    <div className="dropdown">
      <label  className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='a'>Categories</a></li>
        <li >
          <a className="justify-between"  href='a'>
            About
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-white">
            <li><a href='a'>Submenu 1</a></li>
            <li><a href='a'>Submenu 2</a></li>
          </ul>
        </li>
        <li><a href='a'>Shop</a></li>
        <li><a href='a'>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl" href='/'>J-Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a href='a'>Categories</a></li>
      <li >
        <a  href='a'>
        About
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-amarillito border">
          <li><a  href='a'>Submenu 1</a></li>
          <li><a  href='a'>Submenu 2</a></li>
        </ul>
      </li>
      <li><a  href='a'>Shop</a></li>
      <li><a  href='a'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </div>
    </button>
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path  d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
</div>
    </>
  )
}
