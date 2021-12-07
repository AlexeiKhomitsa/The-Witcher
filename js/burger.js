const burgerMenu = (option) => {
	const {
		selectorBugrer = '.burger',
		activeBurger = 'burger_active',
		selectorMenu,
		openMenuSelector
	} = option;

	const burger = document.querySelector(selectorBugrer);
	const menu = document.querySelector(selectorMenu);

	burger.addEventListener('click', () => {
		burger.classList.toggle(activeBurger);
		menu.classList.toggle(openMenuSelector);
	});
};

export default burgerMenu;