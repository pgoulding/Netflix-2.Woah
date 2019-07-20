import React from 'react'

const UserSignup = ({state, handleChange, createNewAccount}) => {

  return (
    <form>
      <h2>Create a new Account!</h2>
      <label>
        Name:
            <input
          className={state.error ? 'error' : ''}
          name="name"
          value={state.name}
          placeholder="Name"
          onChange={handleChange} />
      </label>
      <label>
        Log in (email):
            <input
          className={state.error ? 'error' : ''}
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={handleChange} />
      </label>
      <label>
        Password:
            <input
          className={state.error ? 'error' : ''}
          name="password"
          type="password"
          value={state.password}
          placeholder="P@$$w0rD"
          onChange={handleChange} />
      </label>
      <button onClick={createNewAccount}>Create Account</button>
      {/* <button onClick={() => this.setState({ page: '' })}>Back</button> */}
      <div className={!state.error ? 'hiddenError' : ''}>
        <p>{state.error}</p>
      </div>
    </form >
  )
}

export default UserSignup
