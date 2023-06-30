// Get the search button element
const searchBtn = document.getElementById('searchBtn');

// Add event listener for search button click
searchBtn.addEventListener('click', () => {
  // Get user input values
  const location = document.getElementById('location').value;
  const jobRole = document.getElementById('jobRole').value;

  // Perform search based on location and job role
  const candidates = searchCandidates(location, jobRole);

  // Display the fetched candidates
  displayCandidates(candidates);
});

// Function to perform candidate search (mock implementation)
function searchCandidates(location, jobRole) {
  // Mock implementation: Return a list of candidates based on location and job role
  const candidates = [
    { name: 'John Doe', location: 'New York', jobRole: 'Software Developer' },
    { name: 'Jane Smith', location: 'Los Angeles', jobRole: 'Front-end Developer' },
    { name: 'Mike Johnson', location: 'Chicago', jobRole: 'UI/UX Designer' },
    // Add more candidates as needed
  ];

  // Filter candidates based on location and job role
  const filteredCandidates = candidates.filter(candidate => {
    return candidate.location.toLowerCase().includes(location.toLowerCase()) && candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
  });

  return filteredCandidates;
}

// Function to display the fetched candidates
function displayCandidates(candidates) {
  const candidateList = document.getElementById('candidateList');

  // Clear the candidate list
  candidateList.innerHTML = '';

  if (candidates.length > 0) {
    // Create a card for each candidate and append it to the candidate list
    candidates.forEach(candidate => {
      const card = document.createElement('div');
      card.classList.add('card', 'mb-3');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const name = document.createElement('h5');
      name.classList.add('card-title');
      name.textContent = candidate.name;

      const location = document.createElement('p');
      location.classList.add('card-text');
      location.textContent = `Location: ${candidate.location}`;

      const jobRole = document.createElement('p');
      jobRole.classList.add('card-text');
      jobRole.textContent = `Job Role: ${candidate.jobRole}`;

      cardBody.appendChild(name);
      cardBody.appendChild(location);
      cardBody.appendChild(jobRole);

      card.appendChild(cardBody);
      candidateList.appendChild(card);
    });
  } else {
    // No candidates found
    const noCandidatesMessage = document.createElement('p');
    noCandidatesMessage.textContent = 'No candidates found.';
    candidateList.appendChild(noCandidatesMessage);
  }
}
