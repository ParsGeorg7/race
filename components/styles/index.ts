import { StyleSheet } from 'react-native'
import COLORS from './colors'

const styles = StyleSheet.create({
    flex: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: "center" 
    },
    body: {
        flex: 1,
        backgroundColor: COLORS.body
    },
    listWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      borderBottomWidth: 3,
      borderBottomColor: COLORS.listWrapperBorderBottom
    },
    row: {
      backgroundColor: COLORS.rowBackground,
      flex: 1,
      fontSize: 14,
      paddingHorizontal: 10,
      paddingVertical: 25,
    },
    tableHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.tableHeader,
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
      color: COLORS.colsHeader,
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginVertical: 10
    },
    preloader: {
      flex: 1, 
      justifyContent: 'flex-end'
    },
})

export { styles, COLORS }
  