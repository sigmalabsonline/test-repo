// Bug: This signin logic has intentional issues for demonstration
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signinForm');
    const messageDiv = document.getElementById('message');
    const userInfo = document.getElementById('userInfo');
    const signoutBtn = document.getElementById('signoutBtn');

    // Test users for demonstration
    const validUsers = {
        'admin': 'password123',
        'user': 'test123',
        'demo': 'demo'
    };

    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // BUG 1: Case sensitivity issue - usernames should be case-insensitive
        if (validUsers[username] === password) {
            showSuccess();
            hideForm();
            showUserInfo();
        } else {
            // BUG 2: Generic error message - should be more specific
            showError('Invalid credentials');
        }
    });

    signoutBtn.addEventListener('click', function() {
        signOut();
    });

    function showSuccess() {
        messageDiv.className = 'message success';
        messageDiv.textContent = 'Signin successful!';
    }

    function showError(message) {
        messageDiv.className = 'message error';
        messageDiv.textContent = message;
        // BUG 3: Error message doesn't clear after time
    }

    function hideForm() {
        signinForm.style.display = 'none';
        messageDiv.style.display = 'none';
    }

    function showUserInfo() {
        userInfo.classList.remove('hidden');
    }

    function signOut() {
        // Reset the form
        signinForm.style.display = 'block';
        messageDiv.style.display = 'block';
        userInfo.classList.add('hidden');
        messageDiv.className = 'message';
        messageDiv.textContent = '';
        signinForm.reset();
    }

    // BUG 4: No input validation - empty fields should be checked
    // BUG 5: No remember me functionality
    // BUG 6: Passwords are stored in plain text (security issue)
});