import React from 'react'

const UserLogin = ({handleChange, loginUser, state}) => {
  return (
    <form>
      <h2> Log In</h2>
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
      <div className={!state.error ? 'hiddenError' : ''}>
        <p>{state.error}</p>
      </div>
      <button onClick={(e) => loginUser(e)}>Log In</button>
      {/* <button onClick={() => this.setState({ page: '' })}>Back</button> */}
    </form>
  )
}

export default UserLogin
