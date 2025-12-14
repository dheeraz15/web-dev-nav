document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    const actionBtn = document.getElementById('actionBtn');
    if (actionBtn) {
        actionBtn.addEventListener('click', () => {
            console.log('Contacted');
            alert('Oho bhai anthanabbe bayalis chaubis satra athara!');
        });
    }

    const dropdownParents = document.querySelectorAll('.dropdown-parent');

    dropdownParents.forEach(parent => {
        const link = parent.querySelector('.nav-link');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            dropdownParents.forEach(otherParent => {
                if (otherParent !== parent) {
                    otherParent.classList.remove('active');
                }
            });

            parent.classList.toggle('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-parent')) {
            dropdownParents.forEach(parent => {
                parent.classList.remove('active');
            });
        }
    });

    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});
