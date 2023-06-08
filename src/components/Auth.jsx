// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import './LoginForm.css'; // Import the CSS file for styling
// import './Auth.css';
// // Initialize Firebase with your Firebase project configuration
// firebase.initializeApp({
//   // Your Firebase project configuration
// });

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       history.push('/dashboard'); // Redirect to dashboard after successful login
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// const SignupForm = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       // Create user with email and password
//       const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

//       // Store additional user data in Firestore
//       await firebase.firestore().collection('users').doc(user.uid).set({
//         name,
//         address,
//       });

//       history.push('/dashboard'); // Redirect to dashboard after successful signup
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSignup}>
//       <h2>Signup</h2>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="address">Address:</label>
//         <input
//           type="text"
//           id="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default function App() {
//   return (
//     <div className="app-container">
//       <LoginForm />
//       <SignupForm />
//     </div>
//   );
// }
