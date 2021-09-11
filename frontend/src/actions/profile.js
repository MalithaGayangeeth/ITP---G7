import axios from 'axios'
import { setAlert } from './alert'

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PASSWORD,
  GET_PROFILES,
  CLEAR_PROFILE,
  UPDATE_USERROLE,
  USER_ADD,
  USER_ADDFAIL,
} from './types'

// Get user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile')

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// update profile
export const createProfile =
  (formData, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const res = await axios.post('/api/profile', formData, config)

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })

      dispatch(setAlert(edit && 'Profile Updated', 'success'))
    } catch (error) {
      const errors = error.response.data.errors

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      })
    }
  }

//  update password
export const changePassword =
  (currentpassword, newpassword) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const body = JSON.stringify({ currentpassword, newpassword })

      const res = await axios.put('/api/profile/change-password', body, config)
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data,
      })

      dispatch(setAlert('Password Updated', 'success'))
    } catch (error) {
      const errors = error.response.data.errors
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      })
    }
  }

// get all user profiles
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE })
  try {
    const res = await axios.get('/api/admin/users')

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    })
  }
}

//  update user role
export const updateUserRole = (id, userRole) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = JSON.stringify({ id, userRole })

    const res = await axios.put('/api/admin/users', body, config)
    dispatch({
      type: UPDATE_USERROLE,
      payload: res.data,
    })
  } catch (error) {
    const errors = error.response.data.errors
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    })
  }
}

// add new user
export const addNewUsers =
  ({ name, email, user_type, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = JSON.stringify({ name, email, user_type, password })

    try {
      const res = await axios.post('/api/admin/users', body, config)

      dispatch({
        type: USER_ADD,
        payload: res.data,
      })
    } catch (err) {
      const errors = err.response.data.errors

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')))
      }

      dispatch({
        type: USER_ADDFAIL,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      })
    }
  }
