import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import useResults from '../hooks/useResults'

export default function SearchScreen() {
  const [searchApi, results,errorMessage] = useResults();
  const [term, setterm] = useState('')
  // console.log(results);
  const FilterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    })
  };
  return (
    <ScrollView>
      <SearchBar 
      term={term}
      onTermChange={setterm}
      onTermSubmit={()=>searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : <>
      {results.Length==0 ? (<> </>):(<><ResultList title='Ucuz Restoranlar' results={FilterResultsByPrice('₺')} />
      <ResultList title='Uygun Restoranlar' results={FilterResultsByPrice('₺₺')} />
      <ResultList title='Pahalı Restoranlar' results={FilterResultsByPrice('₺₺₺')} /></>)}
      </>}
      
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({})