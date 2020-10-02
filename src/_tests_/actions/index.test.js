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



})