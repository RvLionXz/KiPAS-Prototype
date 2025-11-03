import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, UserCog } from "lucide-react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import dummyData from "../data/db.json";

const HomePage = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim() === "") return;
		navigate("/chat", { state: { query } });
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative min-h-screen">
			<Header />
			<motion.section
				className="text-center mb-10"
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<h2 className="text-4xl font-bold text-dark-text mb-2">
					Selamat datang, ASN
				</h2>
				<p className="text-gray-500">
					Kelola dan pantau perkembangan meritokrasi Anda
				</p>
			</motion.section>

			<motion.div
				className="max-w-2xl mx-auto mb-16"
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
			>
				<form onSubmit={handleSearch} className="relative">
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Tanyakan apa saja tentang meritokrasi..."
						className="w-full py-3 pl-5 pr-12 text-gray-700 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
					/>
					<button
						type="submit"
						className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-primary"
					>
						<Search className="h-5 w-5" />
					</button>
				</form>
			</motion.div>

			<motion.div
				className="mb-12"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.h3
					variants={itemVariants}
					className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1"
				>
					Sumber Data
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{dummyData.sumberData.map((item) => (
						<motion.div variants={itemVariants} key={item.id}>
							<Link to={`/sumber-data/${item.id}`}>
								<InfoCard
									icon={item.icon}
									title={item.title}
									description={item.description}
								/>
							</Link>
						</motion.div>
					))}
				</div>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.h3
					variants={itemVariants}
					className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1"
				>
					Fitur Utama
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{dummyData.fiturUtama.map((item) => (
						<motion.div variants={itemVariants} key={item.id}>
							<InfoCard
								icon={item.icon}
								title={item.title}
								description={item.description}
							/>
						</motion.div>
					))}
				</div>
			</motion.div>

			<Link to="/personalization">
				<motion.button
					className="fixed bottom-6 left-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 flex items-center space-x-2"
					initial={{ scale: 0, y: 100 }}
					animate={{ scale: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1, type: "spring" }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					title="Personalisasi Data Anda"
				>
					<UserCog size={24} />
				</motion.button>
			</Link>
		</div>
	);
};

export default HomePage;
