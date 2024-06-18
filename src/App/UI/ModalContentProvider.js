export default class ModalContentProvider {
    constructor() {
        this.modalContents = {
            aboutMe: {
                title: '',
            },
            projects: {
                title: 'Projects',
            },
            contactMe: {
                title: 'Contact Me',
            },
        }
        this.projects = [
            {
                title: "Smart Brain",
                desc: "A website which detects faces from a URL images input of the user. Handled face detection API calls by utilizing Clarifai Face Detection Model",
                live: "https://smart-brain-huuho.netlify.app/",
                code: "https://github.com/johnnyho197/smart-brain",
            },
            {
                title: "Crown Clothing",
                desc: "A robust and user-friendly e-commerce website developed using React and Node.js. Utilized Firebase's real-time database capabilities to efficiently manage and store user data, product information, including inventory, pricing, and descriptions",
                live: "https://crown-clothing-huuho.netlify.app/",
                code: "https://github.com/johnnyho197/crown-clothing",
            },
            {
                title: "Blog-Site",
                desc: "A user-friendly blogging website using modern front-end technologies, including React and React Router for Front-end and Node.js, Express.js, and MySQL for Back-end ",
                live: "",
                code: "https://github.com/johnnyho197/Blog-site",
            },
        ];
    }

    getModalInfo(portalName) {
        const content = this.modalContents[portalName];
        if (portalName === 'aboutMe') {
            content.description = `<div class="avatar-container"><img src="/images/my-avatar.jpg" alt="Avatar" class="avatar"></div>`;
            content.description += `<span class="highlight">Hi! I'm Huu Thien Ho,</span>`;
            content.description += `<span class="text"> a dedicated and innovative software engineer with a strong foundation in front-end and back-end development, passionate about creating exceptional user experiences.</span>`
            content.description += `<div class="social-icons">
                                    <a href="https://www.linkedin.com/in/huu-ho/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/johnnyho197" target="_blank"><i class="fab fa-github"></i></a>
                                    <button 
                                        class="resume-button" 
                                        onclick="window.open('https://docs.google.com/document/d/1zy266DxQ0KGPWsZPyFZfzReFvoTTSkMB28teyhi_xeI/edit?usp=sharing', '_blank');">
                                        
                                        Resume
                                        </button>
                                </div>`;
        } else if (portalName === 'projects') {
            content.description = this.projects.map(project => {
                return `<div class="project">
                            <h3>${project.title}</h3>
                            <p>${project.desc}</p>
                            <div class="project-links">
                                ${project.live ? `<a href="${project.live}" target="_blank">Live</a>` : ''}
                                <a href="${project.code}" target="_blank">Code</a>
                            </div>
                        </div>`;
            }).join('');
        } else if (portalName === 'contactMe') {
            content.description = `<span class="contact-text">Email: johnnyho197@gmail.com</span>`
            content.description += `<span class="contact-text">Phone: (408) 609-9700</span>`
        }
        return content;
    }
}