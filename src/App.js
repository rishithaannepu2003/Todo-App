import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TodosContainer from './containers/todos';  // Adjust the path according to your project structure
import TodosContextProvider from './contexts/TodosContext';  // Adjust the path according to your project structure

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  // Loading state, we can show a loader or a message while Auth0 is loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      {!isAuthenticated ? (
        <div className="auth-container">
          <button onClick={() => loginWithRedirect()} className="login-button">Log In</button>
        </div>
      ) : (
        <div className="welcome-container">
          
          <button onClick={() => logout({ returnTo: window.location.origin })} className="logout-button">
            Log Out
          </button>

          {/* Display the Todo App after successful login */}
          <TodosContextProvider>
            <div className="todo-container">
              <h2 className="todo-title text-center">Your To-Do List</h2>
              <TodosContainer />  {/* Display your To-Do app here */}
            </div>
          </TodosContextProvider>
        </div>
      )}

      {/* Footer */}
      <div className="footer text-center text-xs">
        <p>
          Created with ❤️ by{' '}
          <a
            className="text-blue-600"
            href="https://hossein-i.ir"
            target="_blank"
            rel="noreferrer"
          >
            Annepu Rishitha
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

