
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';


export default async function Popularjobs() {
  const router = useRouter();

  const { data, isLoading, error } = await useFetch('search', {
    query: 'React developer',
    num_pages: '1'
  })

  const fakeData = {
    "job_benefits": null, 
    "job_city": null, 
    "job_country": "US", 
    "job_description": "Title: Sr. REACT/ NextJS Front-end Developer",
  }
  console.log('this is data in PopularJobs: ', fakeData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <FlatList
            data = {fakeData}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item} 
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle = {{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}
