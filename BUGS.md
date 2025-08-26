# Bug Report and Fixes

## Known Bugs in Signin Functionality

### Bug 1: Case Sensitivity Issue
**Problem**: Usernames are case-sensitive, making it difficult for users to sign in.
**Location**: `signin.js` line 20
**Fix**: Convert username to lowercase before comparison

### Bug 2: Generic Error Messages
**Problem**: Users get generic "Invalid credentials" message without specific guidance.
**Location**: `signin.js` line 25
**Fix**: Provide more specific error messages

### Bug 3: Error Messages Don't Clear
**Problem**: Error messages persist indefinitely
**Location**: `signin.js` line 35
**Fix**: Auto-clear error messages after a few seconds

### Bug 4: No Input Validation
**Problem**: Empty fields are not validated on the client side
**Location**: Form submission handler
**Fix**: Add proper input validation

### Bug 5: No Remember Me Functionality
**Problem**: Users must sign in every time
**Fix**: Add remember me checkbox and localStorage

### Bug 6: Security Issues
**Problem**: Passwords stored in plain text in code
**Fix**: Use proper authentication in production

## Test Credentials
- Username: `admin`, Password: `password123`
- Username: `user`, Password: `test123`
- Username: `demo`, Password: `demo`

## How to Reproduce Bugs
1. Try signing in with "Admin" (capital A) - should fail due to case sensitivity
2. Enter wrong password - generic error message
3. Notice error messages don't disappear automatically
4. Try submitting empty form - no client-side validation