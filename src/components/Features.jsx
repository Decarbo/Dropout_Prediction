import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip } from 'recharts';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export default function StudentRiskOverview() {
	const data = [
		{ name: 'Safe', value: 70, color: '#4ade80', icon: 'mdi:check-circle-outline' },
		{ name: 'At Risk', value: 20, color: '#facc15', icon: 'mdi:alert-circle-outline' },
		{ name: 'Critical', value: 10, color: '#f87171', icon: 'mdi:alert-outline' },
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6 text-center">
				<motion.h2
					className="text-3xl font-bold mb-12"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					Student Risk Overview
				</motion.h2>

				<div className="flex flex-col md:flex-row justify-center items-center gap-12">
					{/* Description */}
					<motion.div
						className="md:w-1/2 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						<p className="text-gray-600 mb-6">The system analyzes attendance, scores, and fees. Students are flagged into categories to help mentors act early.</p>
						<ul className="text-left space-y-3 text-gray-700">
							{data.map((d, i) => (
								<li
									key={i}
									className="flex items-center gap-3 bg-[#8884d8]/20 rounded-xl p-1">
									<Icon
										icon={d.icon}
										className="w-6 h-6 ml-4 "
										style={{ color: d.color }}
									/>
									<span className=''>
										<strong>{d.name}</strong>: {d.value}%
									</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Radial Chart */}
					<motion.div
						className="md:w-1/2 h-64 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg flex items-center justify-center"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}>
						<ResponsiveContainer
							width="100%"
							height="100%">
							<RadialBarChart
								innerRadius="20%"
								outerRadius="90%"
								data={data}
								startAngle={180}
								endAngle={0}>
								<RadialBar
									minAngle={15}
									background
									clockWise
									dataKey="value"
									cornerRadius={10}
									fill="#8884d8"
									label={({ name, cx, cy }) => (
										<text
											x={cx}
											y={cy}
											textAnchor="middle">
											{name}
										</text>
									)}
								/>
								<Tooltip />
							</RadialBarChart>
						</ResponsiveContainer>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
