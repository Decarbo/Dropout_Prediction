'use client';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import { useState } from 'react';

export default function Navbar() {
	const { loginWithRedirect, logout } = useAuth0();
	const [menuOpen, setMenuOpen] = useState(false);

	const links = [
		{ label: 'Home', href: '#' },
		{ label: 'For Teachers', href: '#teachers' },
		{ label: 'For Students', href: '#students' },
	];

	return (
		<header className="w-full bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center p-4">
				<h1 className="text-2xl font-extrabold text-blue-600 drop-shadow-sm">Siksha Setu</h1>

				{/* Desktop Links */}
				<nav className="hidden md:flex space-x-6 align-middle text-center justify-center  text-gray-700 font-medium">
					{links.map((link, idx) => (
						<a
							key={idx}
							href={link.href}
							className="hover:text-blue-600 flex  justify-center items-center transition">
							{link.label}
						</a>
					))}
					<Profile />
				</nav>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden">
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="text-gray-700 m-4 focus:outline-none">
						{menuOpen ? '✖' : '☰'}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
					<nav className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
						<Profile />
						{links.map((link, idx) => (
							<a
								key={idx}
								href={link.href}
								className="hover:text-blue-600 transition"
								onClick={() => setMenuOpen(false)}>
								{link.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
