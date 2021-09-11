import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PASSWORD,
  CLEAR_PROFILE,
  GET_PROFILES,
  UPDATE_USERROLE,
  USER_ADD,
  USER_ADDFAIL,
} from '../actions/types'

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PASSWORD:
      return {
        ...state,
        profile: payload,
        loading: false,
      }
    case PROFILE_ERROR:
    case USER_ADDFAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case GET_PROFILES:
    case UPDATE_USERROLE:
    case USER_ADD:
      return {
        ...state,
        profiles: payload,
        loading: false,
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      }
    default:
      return state
  }
}
