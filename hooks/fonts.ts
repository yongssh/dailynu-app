import { Platform } from 'react-native';
// https://medium.com/@rafiulansari/building-a-react-native-app-part-ii-project-setup-782917168e01
export const fonts = {
  bold: Platform.select({
    ios: 'Playfair Display Bold',
    android: 'PlayfairDisplay-Bold',
  }),
  medium: Platform.select({
    ios: 'Playfair Display Medium',
    android: 'PlayfairDisplay-Medium',
  }),
  regular: Platform.select({
    ios: 'Playfair Display Regular',
    android: 'PlayfairDisplay-Regular',
  }),
};