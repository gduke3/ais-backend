/*
Реализация AJAX с помощью асинхронного метода fetch. Современный вариант реализации AJAX.
*/

var sendbtn = document.getElementById("sendbtn"); // выбираем DOM-елемент (кнопку)

// Привязываем к элементу обработчик события "click"
sendbtn.addEventListener("click", function (e) {
	/* Инструкция preventDefault позволяет переопределить стандартное поведение браузера,
    если ее убрать, то браузер по-умолчанию обновит страницу после отправки данных формы */
	e.preventDefault();
	// Получаем данные полей формы
	let fname = document.getElementsByName("fname")[0].value;
	let lname = document.getElementsByName("lname")[0].value;
	let email = document.getElementsByName("email")[0].value;
	let reqtext = document.getElementsByName("reqtext")[0].value;

	// Валидация формы
	if (![fname, lname, email, reqtext].every(Boolean)) return;

	const sendConfirmed = confirm(`Уважаемый ${lname} ${fname}, Вы подтверждаете отправку формы?`);

	if (!sendConfirmed) return;

	// Преобразуем полученные данные в JSON
	var formdata = JSON.stringify({
		firstname: fname,
		lastname: lname,
		email: email,
		message: reqtext,
	});

	// Отправляем запрос через fetch (необходимо выставить соответствующий заголовок (headers)!)
	fetch("/api/contact-request", {
		method: "PUT",
		body: formdata,
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			// fetch в случае успешной отправки возвращает Promise, содержащий response объект (ответ на запрос)
			// Возвращаем json-объект из response и получаем данные из поля message
			response.json().then(function (data) {
				alert(`Обращение "${data.message}" успешно отправлено!`);
			});
		})
		.catch((error) => {
			alert(error);
			console.error("error:", error);
		});
});
