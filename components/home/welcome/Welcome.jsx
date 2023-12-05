
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';


export default function Welcome() {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Dani</Text>
        <Text style={styles.welcomeMessage}>Get your dream job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  )
}
