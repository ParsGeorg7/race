import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Navigation } from './navigation/Navigation'

function App(): JSX.Element {
  return (   
    <SafeAreaView style={styles.body}>
      <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff"
  },
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 5
  },
  row: {
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 13,
    paddingHorizontal: 2,
    paddingVertical: 50
  }
});

export default App;
