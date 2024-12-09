// Get DOM elements
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const projectsContent = document.getElementById('projectsContent');

// Function to filter projects based on name
function filterProjects() {
    const searchQuery = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;

    const projects = Array.from(projectsContent.getElementsByClassName('projects__row'));

    let filteredProjects = projects.filter(project => {
        const projectName = project.querySelector('.projects__row-content-title').textContent.toLowerCase();
        return projectName.includes(searchQuery);
    });

    // Sorting logic
    if (sortValue === 'dateAsc') {
        filteredProjects.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateA - dateB;
        });
    } else if (sortValue === 'dateDesc') {
        filteredProjects.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        });
    } else if (sortValue === 'alphaAsc') {
        filteredProjects.sort((a, b) => {
            const nameA = a.querySelector('.projects__row-content-title').textContent.toLowerCase();
            const nameB = b.querySelector('.projects__row-content-title').textContent.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    } else if (sortValue === 'alphaDesc') {
        filteredProjects.sort((a, b) => {
            const nameA = a.querySelector('.projects__row-content-title').textContent.toLowerCase();
            const nameB = b.querySelector('.projects__row-content-title').textContent.toLowerCase();
            return nameB.localeCompare(nameA);
        });
    }

    // Clear existing content and append filtered projects
    projectsContent.innerHTML = '';
    filteredProjects.forEach(project => {
        projectsContent.appendChild(project);
    });
}

// Event listeners for search input and sort selection
searchInput.addEventListener('input', filterProjects);
sortSelect.addEventListener('change', filterProjects);
