const fetchUsersBtn = document.getElementById('fetch-users-btn');
const userContainer = document.getElementById('user-container');

fetchUsersBtn.addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

function displayUsers(users) {
    userContainer.innerHTML = ''; // Clear previous content
    users.forEach(user => {
        const userCard = createUserCard(user);
        userContainer.appendChild(userCard);
    });
}

function createUserCard(user) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
        <img src="${user.avatar}" alt="User Avatar">
        <div class="user-details">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>Email: ${user.email}</p>
        </div>
    `;
    return userCard;
}
