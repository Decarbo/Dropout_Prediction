'use client';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
function Hero() {
	const { logout } = useAuth0();
	const { loginWithRedirect } = useAuth0();
	// Track mouse for parallax

	const [pos, setPos] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const { clientX, clientY, currentTarget } = e;
		const rect = currentTarget.getBoundingClientRect();

		// Calculate position relative to center
		const x = ((clientX - rect.left) / rect.width - 0.5) * 20; // max ±10px
		const y = ((clientY - rect.top) / rect.height - 0.5) * 20; // max ±10px
		setPos({ x, y });
	};

	const handleMouseLeave = () => {
		setPos({ x: 0, y: 0 });
	};
	return (
		<div
			className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 relative overflow-hidden"
			onMouseMove={handleMouseMove}>
			{/* Navbar */}
			<header className="w-full bg-white/60 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto flex justify-between items-center p-4">
					<h1 className="text-2xl font-extrabold text-blue-600 drop-shadow-sm">EduAlert</h1>
					<nav className="space-x-6 hidden md:flex text-gray-700 font-medium">
						<a
							href="#features"
							className="hover:text-blue-600 transition">
							Features
						</a>
						<a
							href="#how"
							className="hover:text-blue-600 transition">
							How It Works
						</a>
						<a
							href="#teachers"
							className="hover:text-blue-600 transition">
							For Teachers
						</a>
						<a
							href="#students"
							className="hover:text-blue-600 transition">
							For Students
						</a>
					</nav>
					<div>
						<button
							onClick={() => loginWithRedirect()}
							className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-lg hover:shadow-blue-300 hover:bg-blue-700 transition">
							Login
						</button>
						<button
							onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
							className="bg-blue-600 mx-2 text-white px-5 py-2 rounded-xl shadow-lg hover:shadow-blue-300 hover:bg-blue-700 transition">
							Log Out
						</button>
					</div>
					<Profile />
				</div>
			</header>

			{/* Hero Section */}
			<section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6 gap-10">
				<motion.div
					className="max-w-lg space-y-6"
					initial={{ opacity: 0, x: -60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.9 }}>
					<motion.h2
						className="text-5xl font-extrabold leading-tight text-slate-900"
						initial={{ y: -40, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						Catch struggles early.
						<br /> Support success together.
					</motion.h2>

					<motion.p
						className="text-lg text-gray-600"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.9, delay: 0.5 }}>
						EduAlert unifies attendance, assessments, and fee records into one simple dashboard. It highlights at-risk students using transparent rules and timely alerts—so teachers can guide, and students can recover before it’s too late.
					</motion.p>

					<motion.div
						className="space-x-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.9 }}>
						<button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">Login as Teacher</button>
						<button
							className="bg-gray-200 text-gray-800 px-6 py-3 rounded-2xl shadow hover:bg-gray-300 transition"
							onClick={() => loginWithRedirect()}>
							Login as Student
						</button>
					</motion.div>
				</motion.div>

				{/* Hero Image with Parallax */}
				<div
					className="w-full flex justify-center items-center"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}>
					<motion.img
						src="https://i.ibb.co/GfFFTJzH/unnamed.png"
						alt="Dashboard Illustration"
						className="w-80 md:w-96 aspect-square rounded-xl drop-shadow-xl"
						animate={{ x: pos.x, y: pos.y }}
						transition={{ type: 'spring', stiffness: 80, damping: 15 }}
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
					/>
				</div>
			</section>

			{/* Features Section */}
			<section
				id="features"
				className="relative py-20">
				<div className="max-w-6xl mx-auto px-4">
					<motion.h2
						className="text-4xl font-bold text-center text-slate-900 mb-6"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						Powerful Features for Educational Success
					</motion.h2>
					<motion.p
						className="text-center text-slate-600 mb-12 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.2 }}>
						Comprehensive tools designed to identify risk factors early and enable timely interventions
					</motion.p>

					<div className="grid md:grid-cols-3 gap-10">
						{[
							{
								title: 'Risk Assessment',
								desc: 'AI-powered analysis of attendance, grades, and payment patterns',
								icon: 'mdi:shield-check-outline',
								gradient: 'from-blue-500/20 to-indigo-500/20',
								color: 'text-blue-600',
							},
							{
								title: 'Early Alerts',
								desc: "Automated notifications to teachers and parents before it's too late",
								icon: 'mdi:bell-alert-outline',
								gradient: 'from-emerald-500/20 to-green-500/20',
								color: 'text-emerald-600',
							},
							{
								title: 'Analytics Dashboard',
								desc: 'Visual insights and trends to track student progress over time',
								icon: 'mdi:chart-bar',
								gradient: 'from-purple-500/20 to-pink-500/20',
								color: 'text-purple-600',
							},
						].map((f, i) => (
							<motion.div
								key={i}
								className="relative text-center p-8 rounded-3xl shadow-lg bg-white/60 backdrop-blur-xl border border-white/20 overflow-hidden group"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, delay: i * 0.2 }}
								viewport={{ once: true }}>
								{/* Gradient Glow */}
								<div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl -z-10`}></div>

								<div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mx-auto mb-4">
									<Icon
										icon={f.icon}
										className={`w-7 h-7 ${f.color}`}
									/>
								</div>
								<h3 className="text-lg font-semibold mb-2">{f.title}</h3>
								<p className="text-gray-600">{f.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
