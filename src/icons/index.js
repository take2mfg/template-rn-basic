import * as Font from 'expo-font';
import { Octicons } from '@expo/vector-icons';

export async function loadIcons() {
  return Promise.all([Octicons.font].map(font => Font.loadAsync(font)));
}
