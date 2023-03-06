var pages = document.getElementById("previous_requests");

document.addEventListener("DOMContentLoaded", () => {
	fetch("/api/previous-requests", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((request) => {
			request.json().then(function (data) {
				const { items } = data;

				for (const item of items) {
					pages.innerHTML +=
						`
                    <div class="previous_requests_obj">
                    <p>` +
						item["createdAt"] +
						`</p>
                    <p>` +
						item["message"] +
						`</p>
                    <br>
                    </div>
                `;
				}
			});
		})
		.catch((error) => {
			alert(error);
			console.error("error:", error);
		});
});
