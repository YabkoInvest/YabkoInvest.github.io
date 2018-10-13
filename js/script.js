let button = document.getElementById('button-collapse');
	let sidebar = document.getElementById('sidebar');
	let navbar = document.getElementById('navbarContent');
	let icon = document.getElementById('icon');
	let social_i = document.getElementById('social-i');
	let close = document.getElementById('close');
	window.addEventListener('DOMContentLoaded', function () {
		button.addEventListener('click', () => {
				sidebar.style.display = 'block';
				button.style.display = 'none';
				navbar.style.paddingLeft = '270px';
				social_i.style.paddingLeft = '270px';
				icon.style.marginLeft = '270px';
		});

		icon.addEventListener('click', () => {
				button.style.zIndex = '0';
		});

		close.addEventListener('click', () => {
				sidebar.style.display = 'none';
				button.style.display = 'block';
				button.style.width = '45px';
				navbar.style.paddingLeft = '0px';
				social_i.style.paddingLeft = '0px';
				icon.style.marginLeft = '0px';
		});
	});