(function (global) {

var dc = {};

var homeHtml = "snippets/map.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector(".map")
      .innerHTML = responseText;
  },
  false);
});


global.$dc = dc;

})(window);




const togglecard = () => {
	document.querySelector(".cards")
		.classList.toggle("hidden");
};


document.querySelector("#windshield-wipers")
	.addEventListener("click", togglecard);



const toggleavatar = () => {
	document.querySelector(".avatar")
	.classList.toggle("avatar-cards")
};

document.querySelector("#windshield-wipers")
	.addEventListener("click", toggleavatar);

const togglesettings = () => {
	document.querySelector(".main-apps")
	.classList.toggle("hidden");

};




document.querySelector("#settings")
	.addEventListener("click", togglesettings);

document.querySelector("#close-botton")
	.addEventListener("click", togglesettings)






