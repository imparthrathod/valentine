const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'zalak'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === 'Zalak' || userInput === 'zalak' || userInput === 'Rina' || userInput === 'rina' || userInput === 'Rini'userInput === 'rini') {
		resultDiv.innerHTML = 'Yes you are my Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum ? Ye sirf meri baby ke liye hi he samji !';
	}
});
