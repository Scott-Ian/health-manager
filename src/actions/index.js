import * as c from './ActionTypes';

export const welcomeScreen = () => ({
  type: c.WELCOME_SCREEN
})

export const homeScreen = () => ({
  type: c.HOME_SCREEN
})

export const calendarScreen = () => ({
  type: c.CALENDAR_SCREEN
})

// Medication Action Creators
export const medicationList = () => ({
  type: c.MEDICATION_LIST
})

export const medicationDetail = (medicationId) => ({
  type: c.MEDICATION_DETAIL,
  medicationId
})

export const medicationEdit = (medicationId) => ({
  type: c.MEDICATION_EDIT,
  medicationId
})

export const medicationCreate = () => ({
  type: c.MEDICATION_CREATE
})

// Appointment Action Creators
export const appointmentList = () => ({
  type: c.APPOINTMENT_LIST
})

export const appointmentDetail = (appointmentId) => ({
  type: c.APPOINTMENT_DETAIL,
  appointmentId
})

export const appointmentEdit = (appointmentId) => ({
  type: c.APPOINTMENT_EDIT,
  appointmentId
})

export const appointmentCreate = () => ({
  type: c.APPOINTMENT_CREATE
})

// QOL Action creators
export const qolList = () => ({
  type: c.QOL_LIST
})

export const qolDetail = (qolId) => ({
  type: c.QOL_DETAIL,
  qolId
})

export const qolEdit = (qolId) => ({
  type: c.QOL_EDIT,
  qolId
})

export const qolCreate = () => ({
  type: c.QOL_CREATE
})