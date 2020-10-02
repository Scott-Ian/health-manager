import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('display reducer actions', () => {

  it('welcomeScreen should create WELCOME_SCREEN action', () => {
    expect(actions.welcomeScreen()).toEqual({
      type: c.WELCOME_SCREEN 
    })
  });

  it('homeScreen should create HOME_SCREEN action', () => {
    expect(actions.homeScreen()).toEqual({
      type: c.HOME_SCREEN 
    })
  });

  it('calendarScreen should create CALENDAR_SCREEN action', () => {
    expect(actions.calendarcreen()).toEqual({
      type: c.CALENDAR_SCREEN 
    })
  });

  it('medicationList should create MEDICATION_LIST action', () => {
    expect(actions.medicationList()).toEqual({
      type: c.MEDICATION_LIST
    })
  });

  it('medicationCreate should create MEDICATION_CREATE action', () => {
    expect(actions.medicationCreate()).toEqual({
      type: c.MEDICATION_CREATE
    })
  });

  it('medicationDetail should create MEDICATION_Detail action', () => {
    expect(actions.medicationDetail(22)).toEqual({
      type: c.MEDICATION_DETAIL,
      medicationId: 22
    })
  });

  it('medicationEdit should create MEDICATION_EDIT action', () => {
    expect(actions.medicationDetail(28)).toEqual({
      type: c.MEDICATION_EDIT,
      medicationId: 28
    })
  });

  it('appointmentList should create APPOINTMENT_LIST action', () => {
    expect(actions.appointmentList()).toEqual({
      type: c.APPOINTMENT_LIST
    })
  });

  it('appointmentCreate should create APPOINTMENT_CREATE action', () => {
    expect(actions.appointmentCreate()).toEqual({
      type: c.APPOINTMENT_CREATE
    })
  });

  it('appointmentDetail should create APPOINTMENT_Detail action', () => {
    expect(actions.appointmentDetail('stringKey')).toEqual({
      type: c.APPOINTMENT_DETAIL,
      medicationId: 'stringKey'
    })
  });

  it('appointmentEdit should create APPOINTMENT_EDIT action', () => {
    expect(actions.appointmentDetail('12/21/2020')).toEqual({
      type: c.APPOINTMENT_EDIT,
      medicationId: '12/21/2020'
    })
  });

  it('qolList should create QOL_LIST action', () => {
    expect(actions.qolList()).toEqual({
      type: c.QOL_LIST
    })
  });

  it('qolCreate should create QOL_CREATE action', () => {
    expect(actions.qolCreate()).toEqual({
      type: c.QOL_CREATE
    })
  });

  it('qolDetail should create QOL_Detail action', () => {
    expect(actions.qolDetail('The Witches Switch Swatches')).toEqual({
      type: c.QOL_DETAIL,
      medicationId: 'The Witches Switch Swatches'
    })
  });

  it('qolEdit should create QOL_EDIT action', () => {
    expect(actions.qolDetail('Never Better')).toEqual({
      type: c.QOL_EDIT,
      medicationId: 'Never Better'
    })
  });

})