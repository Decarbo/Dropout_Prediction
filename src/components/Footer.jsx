import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-white/70 backdrop-blur-xl border-t border-white/30 py-12 relative">
			<div className="max-w-7xl mx-auto px-6">
				{/* Top Section */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
					{/* Logo & Brand */}
					<div className="flex flex-col items-start">
						<h1 className="text-2xl font-bold text-indigo-600 mb-2">Siksha Setu</h1>
						<p className="text-gray-600 max-w-xs">Catch struggles early. Support success together. Siksha Setu empowers teachers, students, and guardians.</p>
					</div>

					{/* Quick Links */}
					<div className="flex flex-col md:flex-row gap-8 mt-6 md:mt-0">
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-gray-800">Links</h3>
							<a
								href="#features"
								className="text-gray-600 hover:text-indigo-600 transition">
								Features
							</a>
							<a
								href="#how"
								className="text-gray-600 hover:text-indigo-600 transition">
								How It Works
							</a>
							<a
								href="#teachers"
								className="text-gray-600 hover:text-indigo-600 transition">
								For Teachers
							</a>
							<a
								href="#students"
								className="text-gray-600 hover:text-indigo-600 transition">
								For Students
							</a>
						</div>

						{/* Contact */}
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-gray-800">Contact</h3>
							<a
								href="mailto:contact@Siksha Setu.com"
								className="text-gray-600 hover:text-indigo-600 transition">
								contact@Siksha Setu.com
							</a>
							<a
								href="tel:+911234567890"
								className="text-gray-600 hover:text-indigo-600 transition">
								+91 123 456 7890
							</a>
						</div>

						{/* Social */}
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-gray-800">Follow Us</h3>
							<div className="flex gap-4 mt-1">
								<a
									href="#"
									className="text-gray-600 hover:text-blue-600 transition">
									<Facebook className="w-5 h-5" />
								</a>
								<a
									href="#"
									className="text-gray-600 hover:text-blue-400 transition">
									<Twitter className="w-5 h-5" />
								</a>
								<a
									href="#"
									className="text-gray-600 hover:text-pink-500 transition">
									<Instagram className="w-5 h-5" />
								</a>
								<a
									href="#"
									className="text-gray-600 hover:text-blue-700 transition">
									<Linkedin className="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-12 border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
					<p>© 2025 Siksha Setu. All rights reserved.</p>
					<p className="mt-2 md:mt-0">Developed by Team Siksha Setu</p>
				</div>
			</div>
		</footer>
	);
}
