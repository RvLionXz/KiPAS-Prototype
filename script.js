document.addEventListener("DOMContentLoaded", () => {
	const chatFormMain = document.getElementById("chat-form-main");
	const chatInputMain = document.getElementById("chat-input-main");

	const chatFormFooter = document.getElementById("chat-form-footer");
	const chatInputFooter = document.getElementById("chat-input-footer");

	const dashboardView = document.getElementById("dashboard-view");
	const chatView = document.getElementById("chat-view");
	const chatMessages = document.getElementById("chat-messages");
	const chatFooter = document.getElementById("chat-footer");

	const handleChatSubmit = (userInput) => {
		if (userInput === "") return;

		if (!dashboardView.classList.contains("hidden")) {
			dashboardView.classList.add("hidden");
			chatView.classList.remove("hidden");
			chatFooter.classList.remove("hidden");
		}

		addMessageToChat("user", userInput);

		showTypingIndicator();

		setTimeout(() => {
			removeTypingIndicator();
			const botResponse = getDummyResponse(userInput);
			addBotMessageToChat(botResponse);
		}, 1500);
	};

	chatFormMain.addEventListener("submit", (e) => {
		e.preventDefault();
		const userInput = chatInputMain.value.trim();
		handleChatSubmit(userInput);
		chatInputMain.value = "";
		chatInputFooter.value = userInput;
		chatInputFooter.focus();
	});

	chatFormFooter.addEventListener("submit", (e) => {
		e.preventDefault();
		const userInput = chatInputFooter.value.trim();
		handleChatSubmit(userInput);
		chatInputFooter.value = "";
		chatInputFooter.focus();
	});

	function addMessageToChat(sender, message) {
		const messageElement = document.createElement("div");
		messageElement.classList.add("chat-bubble", "user-message");
		messageElement.textContent = message;
		chatMessages.appendChild(messageElement);
		scrollToBottom();
	}

	function addBotMessageToChat(response) {
		const messageElement = document.createElement("div");
		messageElement.classList.add("chat-bubble", "bot-message");

		const textElement = document.createElement("p");
		textElement.textContent = response.text;
		messageElement.appendChild(textElement);

		if (response.references && response.references.length > 0) {
			const referencesContainer = document.createElement("div");
			referencesContainer.className = "references-container";

			response.references.forEach((ref) => {
				const cardLink = document.createElement("a");
				cardLink.className = "reference-card";
				cardLink.href = ref.link;
				cardLink.target = "_blank";
				cardLink.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    </svg>
                    <span>${ref.title}</span>
                `;
				referencesContainer.appendChild(cardLink);
			});
			messageElement.appendChild(referencesContainer);
		}
		chatMessages.appendChild(messageElement);
		scrollToBottom();
	}

	function showTypingIndicator() {
		const indicatorElement = document.createElement("div");
		indicatorElement.classList.add(
			"chat-bubble",
			"bot-message",
			"typing-indicator"
		);
		indicatorElement.id = "typing-indicator";
		indicatorElement.innerHTML = `<span></span><span></span><span></span>`;
		chatMessages.appendChild(indicatorElement);
		scrollToBottom();
	}

	function removeTypingIndicator() {
		const indicator = document.getElementById("typing-indicator");
		if (indicator) indicator.remove();
	}

	function scrollToBottom() {
		window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
	}

	function getDummyResponse(input) {
		const lowerInput = input.toLowerCase();
		if (lowerInput.includes("Apa itu meritokrasi?")) {
			return {
				text: "Sistem meritokrasi adalah sebuah kerangka kerja komprehensif yang dirancang untuk memastikan bahwa manajemen ASN didasarkan pada kualifikasi, kompetensi, dan kinerja secara adil dan wajar tanpa membedakan latar belakang. Tujuannya adalah untuk menciptakan birokrasi yang profesional, netral, dan berintegritas tinggi.",
				references: [
					{ title: "UU No. 5 Tahun 2014 tentang ASN", link: "#" },
					{ title: "Panduan Sistem Merit KemenPAN-RB", link: "#" },
				],
			};
		} else if (
			lowerInput.includes("skor") ||
			lowerInput.includes("meningkatkan")
		) {
			return {
				text: "Untuk meningkatkan skor meritokrasi, Anda dapat fokus pada beberapa area kunci. Pertama, pastikan kinerja Anda selalu memenuhi atau melebihi target Key Performance Indicator (KPI) yang telah ditetapkan. Kedua, aktiflah dalam mengikuti pelatihan dan sertifikasi yang relevan dengan jabatan Anda. Ketiga, selalu perbarui data kompetensi Anda pada sistem agar pencapaian Anda tercatat dengan baik.",
				references: [
					{ title: "Pedoman Penilaian Kinerja PNS", link: "#" },
					{ title: "Katalog Program Pelatihan ASN", link: "#" },
				],
			};
		} else if (lowerInput.includes("anjab") || lowerInput.includes("abk")) {
			return {
				text: "Analisis Jabatan (Anjab) adalah proses untuk mengumpulkan dan menganalisis informasi tentang tugas, tanggung jawab, dan persyaratan suatu jabatan. Sementara itu, Analisis Beban Kerja (ABK) adalah teknik untuk menentukan jumlah waktu yang dibutuhkan untuk menyelesaikan suatu pekerjaan. Kedua analisis ini menjadi dasar dalam penataan kepegawaian dan pengembangan karir.",
				references: [{ title: "Permenpan RB No. 1 Tahun 2020", link: "#" }],
			};
		} else {
			return {
				text: 'Maaf, saya belum dapat memahami pertanyaan Anda secara spesifik. Sistem ini dirancang untuk menjawab pertanyaan seputar manajemen karir ASN, penilaian kinerja, kompetensi, dan regulasi terkait. Anda bisa mencoba bertanya dengan kata kunci seperti "penilaian kinerja" atau "pengembangan karir".',
				references: [],
			};
		}
	}
});
