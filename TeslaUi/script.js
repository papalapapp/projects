
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
	if (true) {
		document.querySelector("iframe").style.display = "none"
	}

};




document.querySelector("#settings")
	.addEventListener("click", togglesettings);








