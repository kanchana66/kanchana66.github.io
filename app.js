//nav toggle
let links = document.querySelectorAll('.links')

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove(('active')))
        link.classList.add('active');
    })
})

//toggle navbar in mobile view
const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
})

// project cards open and close functions

let projects = document.querySelectorAll('.project-card');

projects.forEach((card, index) => {

    let closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        card.classList.remove('active');
    }) 

    card.addEventListener('click', (e) => {
        if(e.path[0] != closeBtn){
            projects.forEach((item, i) => {
                if(i != index){
                    item.classList.add('blur')
                }
            })
            card.classList.add('active')
        }
    })

})

// project filter function
const tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn => {
    btn.addEventListener('click', () => {
        projects.forEach(card => {
            if (btn.innerHTML.toLowerCase() === 'all') {
                card.style.display = 'block';
            } else {
                if (card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });

        tags.forEach(item => item.classList.remove('active'));
        btn.classList.add('active');
    });
});
