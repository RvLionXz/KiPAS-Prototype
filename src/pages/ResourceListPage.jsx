import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, MessageSquare } from "lucide-react";
import dummyData from "../data/db.json";
import ChatSidebar from "../components/ChatSidebar";

const ResourceListPage = () => {
	const { categoryId } = useParams();
	const categoryInfo = dummyData.sumberData.find((c) => c.id === categoryId);
	const resources = dummyData.resources[categoryId] || [];

	const [isChatOpen, setChatOpen] = useState(false);
	const [chatContext, setChatContext] = useState(null);

	const handleTanyaAI = (resource) => {
		setChatContext(resource);
		setChatOpen(true);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<>
			<div className="min-h-screen bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<header className="mb-8">
						<Link
							to="/"
							className="flex items-center text-sm text-gray-500 hover:text-primary mb-4"
						>
							<ArrowLeft size={16} className="mr-2" />
							Kembali ke Home
						</Link>
						<h1 className="text-3xl font-bold text-dark-text">
							{categoryInfo?.title}
						</h1>
						<p className="text-gray-500 mt-1">{categoryInfo?.description}</p>
					</header>

					<motion.div
						className="space-y-4"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{resources.map((resource) => (
							<motion.div key={resource.id} variants={itemVariants}>
								<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between space-x-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:-translate-y-1">
									<a
										href={resource.fileUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-4 flex-grow min-w-0"
									>
										<FileText className="text-red-500 shrink-0" size={24} />
										<div className="min-w-0">
											<p className="text-dark-text font-semibold truncate group-hover:text-primary">
												{resource.title}
											</p>
											<p className="text-sm text-gray-500">
												{resource.category}
											</p>
										</div>
									</a>
									<button
										onClick={() => handleTanyaAI(resource)}
										className="flex items-center space-x-2 shrink-0 px-3 py-1.5 text-sm font-semibold bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors z-10"
									>
										<MessageSquare size={16} />
										<span>Tanya AI</span>
									</button>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
			<ChatSidebar
				isOpen={isChatOpen}
				onClose={() => setChatOpen(false)}
				context={chatContext}
			/>
		</>
	);
};

export default ResourceListPage;
