import {ViewStyle, TextStyle} from 'react-native';


export interface CountryCodeProps {
    /**
    * Selected Country Dial Code
    */
    selected: string,
     /**
    * Function to set the country
    */
     setSelected: React.Dispatch<React.SetStateAction<undefined>>,
      /**
    * Function to set the country
    */
      setCountryDetails?: React.Dispatch<React.SetStateAction<undefined>>,
     /**
    * State variable for storing the phone number
    */
     phone?: string,
     /**
    * Function to set the phone number state variable
    */
     setPhone?: React.Dispatch<React.SetStateAction<undefined>>,
     /**
    * Style the Country Code Container 
    */
     countryCodeContainerStyles?: ViewStyle,
     /**
    * Style the text inside Country Code 
    */
     countryCodeTextStyles?: TextStyle,
     /**
    * Phone Text Input Styles
    */
     phoneStyles?: ViewStyle,
    /**
    * URL for the search Icon
    */
    searchIcon?: string,
    /**
    * URL for the close Icon
    */
    closeIcon?: string,
    /**
    * Search Input Container Styles
    */
    searchStyles?: ViewStyle,
    /**
    * Search Input Text Styles
    */
    searchTextStyles?: TextStyle,
     /**
    * Search Dropdown Container Styles
    */
     dropdownStyles?: ViewStyle,
     /**
    * Search Dropdown Text Styles
    */
     dropdownTextStyles?: TextStyle

}