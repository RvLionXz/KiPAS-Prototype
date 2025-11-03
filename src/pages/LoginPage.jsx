import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";
import logoKiPAS from "../assets/logo.png";

const LoginPage = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/otp");
	};

	return (
		<div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
			<div className="hidden md:flex flex-col items-center justify-center bg-primary p-12 text-white">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<img
						src={logoKiPAS}
						alt="KIPAS Logo"
						className="h-40 w-30 mb-6 invert brightness-0"
					/>
				</motion.div>
			</div>

			<div className="flex items-center justify-center bg-gray-50 p-6">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="w-full max-w-sm"
				>
					<div className="text-center md:hidden mb-8">
						<img
							src={logoKiPAS}
							alt="KIPAS Logo"
							className="h-12 w-auto mx-auto"
						/>
					</div>
					<h2 className="text-3xl font-bold text-dark-text mb-2 text-center">
						Selamat Datang
					</h2>
					<p className="text-gray-500 mb-8 text-center">
						Silakan masuk untuk melanjutkan.
					</p>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="nip"
								className="block text-sm font-medium text-dark-text mb-1"
							>
								NIP (Nomor Induk Pegawai)
							</label>
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<User className="h-5 w-5 text-gray-400" />
								</span>
								<input
									id="nip"
									type="text"
									required
									className="w-full py-2 pl-10 pr-3 text-dark-text border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Masukkan NIP Anda"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-dark-text mb-1"
							>
								Password
							</label>
							<div className="relative">
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock className="h-5 w-5 text-gray-400" />
								</span>
								<input
									id="password"
									type="password"
									required
									className="w-full py-2 pl-10 pr-3 text-dark-text border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="••••••••"
								/>
							</div>
						</div>

						<motion.button
							type="submit"
							className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Login
						</motion.button>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default LoginPage;
