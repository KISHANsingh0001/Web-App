import { GoogleLogin } from '@react-oauth/google'; // Import Google login

const Auth = () => {
  // existing state and functions

  const handleGoogleLogin = async (response) => {
    try {
      const { credential } = response;
      const res = await fetch('https://leeza.app/api/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credential }), // send token to backend for verification
      });

      const data = await res.json();
      if (res.ok && data.success) {
        console.log('Google login successful:', data.message);
        localStorage.setItem('token', data.token);
        navigate('/home'); // or any other page after success
      } else {
        console.error('Google login failed:', data.message);
        alert('Google login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div>
      {/* Other form elements */}
      {isLogin ? (
        <form onSubmit={handleLogin}>
          {/* Your existing login form fields */}
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSignUp}>
          {/* Your existing sign-up form fields */}
          <button type="submit">Sign Up</button>
        </form>
      )}

      {/* Google Login Button */}
      <div className="mt-4">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log('Google login failed')}
        />
      </div>
    </div>
  );
};

export default Auth;
