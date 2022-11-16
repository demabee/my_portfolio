import React from 'react';

export default function NavBar(){

  return(
    <>
      <nav className="navbar justify-content-center bg-dark">
        <ul>
          <li>
            <a href="/"> about me </a>
          </li>
          <li>
            <a href="/skills">skills</a>
          </li>
          <li>
            <a href="/work">work</a>
          </li>
          <li>
            <a href="/contactme">contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}