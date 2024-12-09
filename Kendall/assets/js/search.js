// Get DOM elements
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const projectsContent = document.getElementById('projectsContent');

// Function to filter projects based on name
function filterProjects() {
    const searchQuery = searchInput.value.toLowerCase();
    const projectRows = document.querySelectorAll('.projects__row');

    projectRows.forEach(row => {
        const projectName = row.getAttribute('data-name').toLowerCase();
        if (projectName.includes(searchQuery)) {
            row.style.display = '';  // Show the project row
        } else {
            row.style.display = 'none';  // Hide the project row
        }
    });
}

// Function to sort projects based on selected criteria
function sortProjects() {
    const sortValue = sortSelect.value;
    const projectRows = Array.from(document.querySelectorAll('.projects__row'));

    if (sortValue === 'dateAsc') {
        projectRows.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateA - dateB;
        });
    } else if (sortValue === 'dateDesc') {
        projectRows.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        });
    } else if (sortValue === 'alphaAsc') {
        projectRows.sort((a, b) => {
            const nameA = a.getAttribute('data-name').toLowerCase();
            const nameB = b.getAttribute('data-name').toLowerCase();
            return nameA.localeCompare(nameB);
        });
    } else if (sortValue === 'alphaDesc') {
        projectRows.sort((a, b) => {
            const nameA = a.getAttribute('data-name').toLowerCase();
            const nameB = b.getAttribute('data-name').toLowerCase();
            return nameB.localeCompare(nameA);
        });
    }

    // Reorder the project rows in the DOM
    projectRows.forEach(row => projectsContent.appendChild(row));
}

// Event listeners
searchInput.addEventListener('input', filterProjects);
sortSelect.addEventListener('change', sortProjects);

// Initial call to populate the project display correctly
filterProjects();
sortProjects();
