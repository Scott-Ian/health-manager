import * as c from './../actions/ActionTypes';

const defaultState = {
  display : null,
  medicationId: null,
  appointmentId: null,
  qolId: null,
}

// Strings in these switch cases correspond to names of components to be rendered
export default (state = defaultState, action) => {
  const {medicationId, appointmentId, qolId} = action;
  switch(action.type) {
    case c.WELCOME_SCREEN:
      return ({
        display: c.WELCOME_SCREEN,
      });
    case c.HOME_SCREEN:
      return ({
        display: c.HOME_SCREEN,
      });
    case c.CALENDAR_SCREEN:
      return ({
        display: c.CALENDAR_SCREEN,
      });
    case c.MEDICATION_LIST:
      return ({
        display: c.MEDICATION_LIST,
      });
    case c.MEDICATION_DETAIL:
      return ({
        display: c.MEDICATION_DETAIL,
        medicationId
      });
    case c.MEDICATION_EDIT:
      return ({
        display: c.MEDICATION_EDIT,
        medicationId
      });
    case c.MEDICATION_CREATE:
      return ({
        display: c.MEDICATION_CREATE,
      });
    case c.APPOINTMENT_LIST:
      return ({
        display: c.APPOINTMENT_LIST,
      });
    case c.APPOINTMENT_DETAIL:
      return ({
        display: c.APPOINTMENT_DETAIL,
        appointmentId
      });
    case c.APPOINTMENT_EDIT:
      return ({
        display: c.APPOINTMENT_EDIT,
        appointmentId
      });
    case c.APPOINTMENT_CREATE:
      return ({
        display: c.APPOINTMENT_CREATE,
      });
    case c.QOL_LIST:
      return ({
        display: c.QOL_LIST,
      });
    case c.QOL_DETAIL:
      return ({
        display: c.QOL_DETAIL,
        qolId
      });
    case c.QOL_EDIT:
      return ({
        display: c.QOL_EDIT,
        qolId
      });
    case c.QOL_CREATE:
      return ({
        display: c.QOL_CREATE,
      });
    default:
      return state;
  }
}