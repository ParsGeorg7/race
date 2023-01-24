import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    flex: {
      flex: 1,
      alignSelf: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: "#ccc"
    },
    listWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      borderBottomWidth: 3,
      borderBottomColor: '#c6c6c6'
    },
    row: {
      backgroundColor: '#fff',
      flex: 1,
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 25,
    },
    tableHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff0000',
        alignSelf: 'center',
        marginVertical: 25,
        //ios    
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1
    },
    colsHeader: {
      color: '#FF8000',
      fontSize: 16	
    }
})

export { styles }
  