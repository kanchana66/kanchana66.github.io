let projectData = [
    {
        image: 'img/bash.jpg',
        name: 'project 1',
        detail: 'This is a simple Linux file management system that allows you to create, delete directories, create files, and navigate the file system using the command line.',
        github: 'https://github.com/kanchana66/Linux-file-management-system-shell-script',
        live: '#',
        tags: '#bash, #shell'
    },
    {
        image: 'img/bash.jpg',
        name: 'project 2',
        detail: 'A simple Bash script for connecting to a Wi-Fi network using the command line. This script is designed to work on Linux systems with NetworkManager and nmcli.',
        github: 'https://github.com/kanchana66/connet-to-wifi',
        live: '#',
        tags: '#bash, #shell'
    },
    {
        image: 'img/java.jpg',
        name: 'project 3',
        detail: 'A simple Java program for managing employee records using Java"s Object Serialization.',
        github: 'https://github.com/kanchana66/employee-management-system',
        live: '#',
        tags: '#java'
    },
    {
        image: 'img/html.css.jpg',
        name: 'project 4',
        detail: 'This is a simple portfolio website created using HTML, CSS, and JavaScript. The website provides an overview of my educational background, skills, and projects.',
        github: 'https://github.com/kanchana66/portfolio.',
        live: '#',
        tags: '#javascript, #html, #css'
    },
    {
        image: 'img/bash.jpg',
        name: 'project 5',
        detail: 'This Bash script checks the internet connection and displays an animation based on the status.',
        github: 'https://github.com/kanchana66/Linux-internet-checker',
        live: '#',
        tags: '#bash, #shell'
    },
    {
        image: '/img/python%20(2).png',
        name: 'project 6',
        detail: 'This Bash script checks the internet connection and displays an animation based on the status.',
        github: 'https://github.com/kanchana66/system_checker',
        live: '#',
        tags: '#python'
    },
    {
        image: '/img/python%20(2).png',
        name: 'project 7',
        detail: 'CustomTkinter is a Python library that extends the functionality of the standard Tkinter library by providing additional features and improvements for building graphical user interfaces (GUIs). It is designed to be user-friendly while offering customization options for developers.',
        github: 'https://github.com/kanchana66/interface',
        live: '#',
        tags: '#python'
    },
    {
        image: 'img/nmap.jpg',
        name: 'project 8',
        detail: 'The Nmap GUI is a user-friendly interface that makes it easy to run network scans using the Nmap tool. With just a few clicks, users can specify target hosts, choose scanning options, and initiate scans.',
        github: 'https://github.com/kanchana66/Nmap-GUI',
        live: '#',
        tags: '#python, #nmap'
    },
    
]

// creating project cards in frontend

// project.js
const createProjectcards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML +=  `
        <div class="project-card" data-tags="${data.tags}">
            <div class="project-wrapper">
                <div class="project-thumbnail">
                    <img src="img/close.png" class="close-btn">
                    <img src="${data.image}" class="project-img">
                    <span class="tags">${data.tags}</span>
                </div>

                <div class="project-body">
                    <h1 class="project-name">${data.name}</h1>
                    <p class="project-detail">${data.detail}</p>
                    <a href="${data.github}" class="btn">github</a>
                    <a href="${data.live}" class="btn">see live</a>
                </div>
            </div>
        </div>
    `;
}

projectData.forEach(data => createProjectcards(data));

// app.js
document.addEventListener('DOMContentLoaded', function () {
    let projects = document.querySelectorAll('.project-card');

    projects.forEach((card, index) => {
        let closeBtn = card.querySelector('.close-btn');
        
        closeBtn.addEventListener('click', () => {
            closeProject(card);
        });

        card.addEventListener('click', (e) => {
            if (e.target.closest('.close-btn')) {
                closeProject(card);
            } else if (card.classList.contains('active')) {
                // Check if the clicked area is outside the project details
                if (!e.target.closest('.project-body')) {
                    closeProject(card);
                }
            } else {
                card.classList.add('active');
            }
        });
    });

    function closeProject(card) {
        card.classList.remove('active');
    }
});
