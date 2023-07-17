import * as Application from 'expo-application';
import { Dimensions, Platform } from 'react-native';

export const isIphone = Platform.OS === 'ios';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const getApplicationId = () => Application.applicationId;
