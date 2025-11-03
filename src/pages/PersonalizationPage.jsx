import React from "react";
import { Link } from "react-router-dom";
import { Upload } from "lucide-react";

const PersonalizationPage = () => {
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-md border border-gray-100">
				<div className="mb-6">
					<h2 className="text-2xl font-bold text-dark-text">
						Personalisasi Data Anda
					</h2>
					<p className="text-gray-500 mt-1">
						Berikan kami data tambahan agar respons yang diberikan menjadi lebih
						relevan.
					</p>
				</div>

				<form className="space-y-6">
					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium text-dark-text mb-1"
						>
							Deskripsi Diri & Kompetensi
						</label>
						<textarea
							id="description"
							rows="5"
							className="w-full p-3 text-dark-text border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
							placeholder="Jelaskan pengalaman kerja, keahlian utama, kekuatan, kelemahan, dan aspirasi karir Anda di sini..."
						></textarea>
					</div>

					<div>
						<label className="block text-sm font-medium text-dark-text mb-1">
							Unggah Dokumen Pendukung
						</label>
						<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
							<div className="space-y-1 text-center">
								<Upload className="mx-auto h-12 w-12 text-gray-400" />
								<div className="flex text-sm text-gray-600">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
									>
										<span>Pilih File...</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
											multiple
										/>
									</label>
								</div>
								<p className="text-xs text-gray-500">
									Sertifikat, CV, Portofolio Proyek, dll.
								</p>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-between pt-4">
						<Link to="/home" className="text-sm text-gray-600 hover:underline">
							Batal
						</Link>
						<button
							type="submit"
							className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						>
							Simpan Personalisasi
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PersonalizationPage;
