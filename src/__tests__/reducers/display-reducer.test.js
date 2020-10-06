// import displayReducer from './../../reducers/display-reducer';
// import * as a from './../../actions/index';
// import * as c from './../../actions/ActionTypes';
// import CreateKombuchaForm from '../../components/CreateKombuchaForm';

// describe('displayReducer', () => {

//   const displayState = {
//     display: "WelcomeScreen",
//   }


//   test('Should return current display state string when no action type is called', () => {
//     expect(displayReducer(displayState, { type: null})).toEqual(displayState);
//   })

//   test('Should update display state to KombuchaDetail when detailDisplay action is dispatched', () => {
//     const action = a.detailDisplay(2);
//     const expectedDisplay = {
//       display: 'KombuchaDetail',
//       kombuchaId: 2
//     }
//     expect(displayReducer(displayState, action)).toEqual(expectedDisplay);
//   })

//   test('Should update display state to EditKombuchaForm when editKombucha action is dispatched', () => {
//     const action = a.editKombucha(7);
//     const expectedDisplay = {
//       display: 'EditKombuchaForm',
//       kombuchaId: 7
//     }
//     expect(displayReducer(displayState, action)).toEqual(expectedDisplay);
//   })

//   test('Should update display state to CreateKombuchaForm when createKombucha action is dispatched', () => {
//     const action = a.createDisplay();
//     const expectedDisplay = {
//       display: 'CreateKombuchaForm',
//     }
//     expect(displayReducer(displayState, action)).toEqual(expectedDisplay);
//   })

// });