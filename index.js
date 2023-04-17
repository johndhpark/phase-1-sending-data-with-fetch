// Add your code here
function submitData(name, email) {
	const body = document.querySelector("body");

	return fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			name,
			email,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			const p = document.createElement("p");
			p.textContent = data.id;

			body.appendChild(p);
		})
		.catch((err) => {
			const p = document.createElement("p");
			p.textContent = err.message;

			body.appendChild(p);
		});
}
