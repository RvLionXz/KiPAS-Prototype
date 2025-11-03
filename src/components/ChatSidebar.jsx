import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, FileText, BarChart } from "lucide-react";
import logoKiPAS from "../assets/logo.png";

const ChatSidebar = ({ isOpen, onClose, context }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/30 z-40"
					/>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
					>
						<header className="p-4 border-b flex items-center justify-between shrink-0">
							<img src={logoKiPAS} alt="KIPAS Logo" className="h-7 w-auto" />
							<button
								onClick={onClose}
								className="p-1 rounded-full hover:bg-gray-100"
							>
								<X size={20} className="text-gray-600" />
							</button>
						</header>

						<main className="flex-1 overflow-y-auto p-6 space-y-6">
							{context && (
								<div className="bg-primary/10 p-3 rounded-lg text-sm">
									<p className="font-semibold text-primary">
										Konteks Pertanyaan:
									</p>
									<p className="text-dark-text">{context.title}</p>
								</div>
							)}

							<div className="flex justify-start">
								<div className="bg-gray-100 p-3 rounded-r-xl rounded-t-xl max-w-xl">
									<p className="text-dark-text">
										Berdasarkan dokumen ini, jelaskan syarat utama untuk posisi
										terkait.
									</p>
								</div>
							</div>
						</main>

						<footer className="p-4 bg-gray-50 border-t shrink-0">
							<div className="relative">
								<input
									type="text"
									placeholder="Tanyakan sesuatu..."
									className="w-full py-2 pl-4 pr-12 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
								/>
								<button className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-primary">
									<Send className="h-5 w-5" />
								</button>
							</div>
						</footer>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default ChatSidebar;
