/*$(document).ready(function() {
	$(".hidebox p").hide();
	$(".hidebox h3").css("background-color", "#29c5e6");
});*/

$(".hideBox h3").click(function () {
	$(this).next("p").hide("slow");
});
$(".hideBox h3").dblclick(function () {
	$(this).next("p").show("slow");
});

$(".colomn")
	.click(function () {
		$(this).find(".lorem").slideToggle(300);
	})
	.find(".lorem")
	.hide();

/*function setHeaderText(elem) {
	var newheadtext = elem.innerHTML;
	var headtext = document.getElementById("headname");
	headtext.innerHTML = newheadtext;
	elem.parentNode.classList.add("active");
}*/

// Выделение пунктов меню при наведении
$(".top-menu li:not(.active)")
	.mouseenter(function () {
		$(this).addClass("active");
	})
	.mouseleave(function () {
		$(this).removeClass("active");
	});
// Анимация изображений при наведении
$("figure img").hover(
	function () {
		$(this).animate(
			{
				width: "350px",
				height: "200px",
				borderRadius: "2%",
			},
			"slow"
		);
	},
	function () {
		$(this).animate(
			{
				width: "320px",
				height: "180px",
				borderRadius: "10%",
			},
			"slow"
		);
	}
);
