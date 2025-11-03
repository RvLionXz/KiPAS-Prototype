import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const OtpPage = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/home");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
				className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100"
			>
				<div className="text-center">
					<div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
						<ShieldCheck className="h-8 w-8 text-primary" />
					</div>
					<h2 className="text-2xl font-bold text-dark-text">
						Verifikasi Kode OTP
					</h2>
					<p className="text-gray-500 mt-2">
						Kami telah mengirimkan kode 6 digit ke nomor terdaftar Anda.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div>
						<label htmlFor="otp" className="sr-only">
							Kode OTP
						</label>
						<input
							id="otp"
							type="text"
							inputMode="numeric"
							maxLength="6"
							required
							className="w-full py-3 text-center text-2xl tracking-[1em] font-semibold text-dark-text bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
							placeholder="••••••"
						/>
					</div>

					<motion.button
						type="submit"
						className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						Verifikasi & Masuk
					</motion.button>
				</form>

				<p className="text-center text-sm text-gray-500 mt-6">
					Tidak menerima kode?{" "}
					<a href="#" className="font-medium text-primary hover:underline">
						Kirim ulang
					</a>
				</p>
			</motion.div>
		</div>
	);
};

export default OtpPage;
