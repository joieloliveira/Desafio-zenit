import * as types from "../../types";

const STATE = {
  pets: [
    {like:'heartGray', image: 'image1', petName: 'Fiuk1', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image2', petName: 'King', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartGray', image: 'image3', petName: 'Lik', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image4', petName: 'Link2', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartGray', image: 'image5', petName: 'Fiuk2', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image6', petName: 'Fiuk3', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image7', petName: 'roce', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image8', petName: 'Fiuk4', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartPink', image: 'image9', petName: 'Baxter', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image10', petName: 'betv', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartGray', image: 'image11', petName: 'Caramelo', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image12', petName: 'Lili3', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartSave', image: 'image13', petName: 'Fiuk5', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartPink', image: 'image14', petName: 'Heman', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartPink', image: 'image15', petName: 'Fiuk6', petDescription: 'French Bulldoog, 5-year-old, 12kgs'}
  ],
  petsSimilar: [
    {like:'heartSave', image: 'image2', petName: 'Fiuk', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartPink', image: 'image3', petName: 'Heman', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartPink', image: 'image10', petName: 'lili', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
    {like:'heartPink', image: 'image9', petName: 'Baxter', petDescription: 'French Bulldoog, 5-year-old, 12kgs'},
  ]
}

export const userDadosReducer = (state = STATE, action:any) => {
  switch (action.type) {
    case types.SET_USER_DADOS:
      return {
        ...state,
        userDados: action.payload,
      };

    default: return state
  }
};

//heartSave heartGray heartPink image petName petDescription
