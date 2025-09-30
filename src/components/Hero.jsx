'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AssignmentsGuides from './Assignments&Guides';
import Features from './Features';
import Footer from './Footer';
import ForStudents from './ForStudents';
import ForTeachers from './ForTeachers';
import HowItWorks from './HowItWorks';
import NotificationsPreview from './NotificationsPreview';
import StudentResources from './StudentResources';
import StudyMaterials from './StudyMaterials';
import VideoLectures from './VideoLectures';
import { Link } from 'react-router-dom';
export default function Hero() {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const { clientX, clientY, currentTarget } = e;
		const rect = currentTarget.getBoundingClientRect();
		const x = ((clientX - rect.left) / rect.width - 0.5) * 20;
		const y = ((clientY - rect.top) / rect.height - 0.5) * 20;
		setPos({ x, y });
	};

	const handleMouseLeave = () => setPos({ x: 0, y: 0 });

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
			{/* Animated Background Blobs */}
			<div className="absolute top-10 left-1/4 w-56 h-56 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
			<div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
			<div className="absolute bottom-10 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
			{/* Hero Content */}
			<section className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
				{/* Text Section */}
				<motion.div
					className="flex-1 space-y-6 text-center md:text-left"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.2 },
						},
					}}>
					<motion.h1
						className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight"
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						Catch struggles early.
						<br />
						Support success together.
					</motion.h1>

					<motion.p
						className="text-gray-600 text-lg sm:text-xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9 }}>
						Siksha Setu unifies attendance, assessments, and fee records into one simple dashboard. It highlights at-risk students using transparent rules and timely alerts—so teachers can guide, and students can recover before it’s too late.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, delay: 0.3 }}>
						<Link to="/login">
							<button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300">Login Now</button>
						</Link>
					</motion.div>
				</motion.div>
				<div
					className="flex-1 flex justify-center md:justify-end items-center"
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}>
					<motion.img
						src="https://i.ibb.co/GfFFTJzH/unnamed.png"
						alt="Dashboard Illustration"
						className="w-72 sm:w-80 md:w-96 rounded-xl drop-shadow-2xl"
						animate={{ x: pos.x, y: pos.y }}
						transition={{ type: 'spring', stiffness: 80, damping: 15 }}
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
					/>
				</div>
			</section>
			<ForTeachers /> <ForStudents /> <StudentResources /> <StudyMaterials /> <VideoLectures /> <AssignmentsGuides /> <HowItWorks /> <NotificationsPreview /> <Features />
		</div>
	);
}
