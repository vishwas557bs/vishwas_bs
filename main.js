// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Project data
const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with cutting-edge technologies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    github: '#',
    demo: '#'
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with seamless user experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    github: '#',
    demo: '#'
  },
  {
    title: 'Project 3',
    description: 'A real-time dashboard for data visualization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    github: '#',
    demo: '#'
  },
  {
    title: 'Project 4',
    description: 'A mobile-first responsive web application.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    github: '#',
    demo: '#'
  }
];

// Render projects
const projectsGrid = document.getElementById('projectsGrid');

projects.forEach(project => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  
  projectCard.innerHTML = `
    <div class="project-image" style="background-image: url('${project.image}')"></div>
    <div class="project-overlay">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a href="${project.github}" class="project-link">
          <div class="icon github-icon"></div>
          View Code
        </a>
        <a href="${project.demo}" class="project-link">
          <div class="icon external-link-icon"></div>
          Live Demo
        </a>
      </div>
    </div>
  `;
  
  projectsGrid.appendChild(projectCard);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});