import React from "react";
import { motion } from "framer-motion";
import {
	FileText,
	BarChart3,
	BookOpen,
	TrendingUp,
	Award,
	CheckSquare,
	Lightbulb,
} from "lucide-react";

const icons = {
	FileText,
	BarChart3,
	BookOpen,
	TrendingUp,
	Award,
	CheckSquare,
	Lightbulb,
};

const InfoCard = ({ icon, title, description }) => {
	const IconComponent = icons[icon] || FileText;

	return (
		<motion.div
			className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer group h-full"
			whileHover={{ y: -5, scale: 1.02 }}
			transition={{ type: "spring", stiffness: 300 }}
		>
			<div className="flex items-start space-x-4">
				<div className="text-primary p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
					<IconComponent size={24} />
				</div>
				<div>
					<h3 className="font-semibold text-dark-text">{title}</h3>
					<p className="text-sm text-gray-500">{description}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default InfoCard;
