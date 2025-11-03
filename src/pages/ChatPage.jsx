import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, FileText, BarChart } from "lucide-react";
import logoKiPAS from "../assets/logo.png";

const ChatPage = () => {
	const location = useLocation();
	const initialQuery = location.state?.query || "Tidak ada pertanyaan.";

	return (
		<div className="flex flex-col h-screen bg-white">
			<header className="p-4 border-b flex items-center justify-between shrink-0 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
				<Link to="/home">
					<img src={logoKiPAS} alt="KIPAS Logo" className="h-20 w-auto" />
				</Link>
				<Link
					to="/home"
					className="text-sm font-medium text-gray-600 hover:text-primary"
				>
					Tutup
				</Link>
			</header>

			<main className="flex-1 overflow-y-auto w-full max-w-4xl mx-auto px-6 py-8">
				<div className="space-y-8">
					<motion.div
						className="flex justify-end"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="bg-primary text-white p-3 rounded-l-xl rounded-t-xl max-w-md">
							<p>{initialQuery}</p>
						</div>
					</motion.div>

					<motion.div
						className="flex justify-start"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.5 }}
					>
						<div className="bg-gray-100 p-3 rounded-r-xl rounded-t-xl max-w-xl">
							<p className="text-dark-text">
								Untuk meningkatkan skor meritokrasi, Anda dapat fokus pada
								beberapa area kunci. Pertama, pastikan kinerja Anda selalu
								memenuhi atau melebihi target Key Performance Indicator (KPI)
								yang telah ditetapkan. Kedua, aktiflah dalam mengikuti pelatihan
								dan sertifikasi yang relevan dengan jabatan Anda. Ketiga, selalu
								perbarui data kompetensi Anda pada sistem agar pencapaian Anda
								tercatat dengan baik.
							</p>
							<motion.div
								className="mt-3 pt-3 border-t space-y-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1 }}
							>
								<a
									href="#"
									className="flex items-center space-x-2 text-primary hover:underline text-sm p-2 rounded-md hover:bg-primary/10"
								>
									<FileText size={16} />
									<span>Pedoman Penilaian Kinerja PNS.pdf</span>
								</a>
								<a
									href="#"
									className="flex items-center space-x-2 text-primary hover:underline text-sm p-2 rounded-md hover:bg-primary/10"
								>
									<BarChart size={16} />
									<span>Katalog Program Pelatihan ASN.xlsx</span>
								</a>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</main>

			<footer className="p-4 bg-white border-t shrink-0 sticky bottom-0">
				<div className="relative w-full max-w-4xl mx-auto">
					<input
						type="text"
						placeholder="Tanyakan pertanyaan lanjutan..."
						className="w-full py-3 pl-4 pr-12 text-gray-700 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					<button className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-primary">
						<Send className="h-5 w-5" />
					</button>
				</div>
			</footer>
		</div>
	);
};

export default ChatPage;
