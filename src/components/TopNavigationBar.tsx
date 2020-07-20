import * as React from 'react';
import { useState } from 'react';
import { SECTION_LABELS, SECTIONS } from '../../content/ordering';
import { Link } from 'gatsby';
import Logo from './Logo';

export default function TopNavigationBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const links = [
    {
      label: 'Dashboard',
      url: '/dashboard/',
    },
    ...SECTIONS.map(section => ({
      label: SECTION_LABELS[section],
      url: `/${section}/`,
    })),
  ];
  return (
    <nav className="bg-white shadow relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <Link to="/" className="flex-shrink-0 flex items-center">
              {/*<img*/}
              {/*  className="block sm:hidden h-8 w-auto"*/}
              {/*  src={logoSquare}*/}
              {/*  alt="USACO Guide"*/}
              {/*/>*/}
              {/*<img*/}
              {/*  className="hidden sm:block h-12 w-auto"*/}
              {/*  src={logo}*/}
              {/*  alt="USACO Guide"*/}
              {/*/>*/}
              <Logo className="block" />
            </Link>
            <div className="hidden lg:ml-6 xl:ml-12 lg:flex space-x-8">
              {links.map((link, idx) => (
                <Link
                  key={link.url}
                  to={link.url}
                  getProps={({ isCurrent }) => ({
                    className: isCurrent
                      ? 'inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
                      : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
                  })}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 md:px-0 lg:ml-6 lg:justify-end">
            {/*<div className="max-w-lg w-full lg:max-w-xs">*/}
            {/*  <label htmlFor="search" className="sr-only">*/}
            {/*    Search*/}
            {/*  </label>*/}
            {/*  <div className="relative">*/}
            {/*    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">*/}
            {/*      <svg*/}
            {/*        className="h-5 w-5 text-gray-400"*/}
            {/*        fill="currentColor"*/}
            {/*        viewBox="0 0 20 20"*/}
            {/*      >*/}
            {/*        <path*/}
            {/*          fillRule="evenodd"*/}
            {/*          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/}
            {/*          clipRule="evenodd"*/}
            {/*        />*/}
            {/*      </svg>*/}
            {/*    </div>*/}
            {/*    <input*/}
            {/*      id="search"*/}
            {/*      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"*/}
            {/*      placeholder="Search"*/}
            {/*      type="search"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`${isMobileNavOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`${isMobileNavOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      */}
      <div className={`${isMobileNavOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {links.map((link, idx) => (
            <Link
              key={link.url}
              to={link.url}
              getProps={({ isCurrent }) => ({
                className: isCurrent
                  ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out'
                  : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out',
              })}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}