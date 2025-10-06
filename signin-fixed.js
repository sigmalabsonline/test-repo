// Fixed version of signin logic
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signinForm');
    const messageDiv = document.getElementById('message');
    const userInfo = document.getElementById('userInfo');
    const signoutBtn = document.getElementById('signoutBtn');

    // Test users for demonstration (in production, use proper authentication)
    const validUsers = {
        'admin': 'password123',
        'user': 'test123',
        'demo': 'demo'
    };

    // Check if user is already signed in
    if (localStorage.getItem('isSignedIn') === 'true') {
        showSuccess();
        hideForm();
        showUserInfo();
    }

    signinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // FIX 4: Input validation
        if (!username || !password) {
            showError('Please enter both username and password');
            return;
        }

        // FIX 1: Case insensitive username comparison
        const normalizedUsername = username.toLowerCase();
        
        if (validUsers[normalizedUsername] === password) {
            // FIX 5: Remember user session
            localStorage.setItem('isSignedIn', 'true');
            localStorage.setItem('username', normalizedUsername);
            
            showSuccess();
            hideForm();
            showUserInfo();
        } else {
            // FIX 2: More specific error messages
            if (!validUsers[normalizedUsername]) {
                showError('Username not found. Please check your username.');
            } else {
                showError('Incorrect password. Please try again.');
            }
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
        
        // FIX 3: Auto-clear error messages after 5 seconds
        setTimeout(() => {
            if (messageDiv.classList.contains('error')) {
                messageDiv.className = 'message';
                messageDiv.textContent = '';
            }
        }, 5000);
    }

    function hideForm() {
        signinForm.style.display = 'none';
        messageDiv.style.display = 'none';
    }

    function showUserInfo() {
        userInfo.classList.remove('hidden');
        const welcomeMessage = userInfo.querySelector('p');
        const savedUsername = localStorage.getItem('username') || 'User';
        welcomeMessage.textContent = `Welcome back, ${savedUsername}!`;
    }

    function signOut() {
        // Clear saved session
        localStorage.removeItem('isSignedIn');
        localStorage.removeItem('username');
        
        // Reset the form
        signinForm.style.display = 'block';
        messageDiv.style.display = 'block';
        userInfo.classList.add('hidden');
        messageDiv.className = 'message';
        messageDiv.textContent = '';
        signinForm.reset();
    }

    // Additional enhancement: Show caps lock warning
    document.getElementById('password').addEventListener('keydown', function(e) {
        if (e.getModifierState && e.getModifierState('CapsLock')) {
            showError('Warning: Caps Lock is on');
        }
    });
});