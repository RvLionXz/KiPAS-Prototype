import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import PersonalizationPage from "./pages/PersonalizationPage";
import ResourceListPage from "./pages/ResourceListPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";

const pageVariants = {
	initial: { opacity: 0 },
	in: { opacity: 1 },
	out: { opacity: 0 },
};

const pageTransition = {
	type: "tween",
	ease: "easeInOut",
	duration: 0.3,
};

const AnimatedPage = ({ children }) => {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	);
};

function App() {
	const location = useLocation();

	return (
		<div className="bg-[#F8FAFC] min-h-screen font-sans">
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/otp" element={<OtpPage />} />
					<Route
						path="/home"
						element={
							<AnimatedPage>
								<HomePage />
							</AnimatedPage>
						}
					/>
					<Route
						path="/chat"
						element={
							<AnimatedPage>
								<ChatPage />
							</AnimatedPage>
						}
					/>
					<Route
						path="/personalization"
						element={
							<AnimatedPage>
								<PersonalizationPage />
							</AnimatedPage>
						}
					/>
					<Route
						path="/sumber-data/:categoryId"
						element={
							<AnimatedPage>
								<ResourceListPage />
							</AnimatedPage>
						}
					/>
					<Route path="/" element={<Navigate to="/login" />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
