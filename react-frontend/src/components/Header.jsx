import React from 'react';

const Header = () => {
    return (
        <header className="bg-white dark:bg-slate-800 text-white">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <div className="text-xl font-semibold">MyPortfolio</div>
                <div>
                    <a href="#home" className="px-4 hover:text-gray-300 transition-colors">Home</a>
                    <a href="#about" className="px-4 hover:text-gray-300 transition-colors">About</a>
                    <a href="#projects" className="px-4 hover:text-gray-300 transition-colors">Projects</a>
                    <a href="#contact" className="px-4 hover:text-gray-300 transition-colors">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;

