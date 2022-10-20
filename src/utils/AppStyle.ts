import { StyleSheet } from "react-native"
import Colors from "./Colors";

const AppStyles = StyleSheet.create({
    textInputTheme:{
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 10,
        height: 68,
        width: '100%',
        margin: 12,
        
    },
    
      buttonTheme: {
        height: 58,
        width: 58,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        margin: 16,
        position: 'absolute',
        bottom: 0,
        right:0,
        
      },
      buttonTextTheme: {
        fontSize: 18,
        color: Colors.buttonTextColor,
      },
      descr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
      },
    
      descrText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
      },
      header: {
        flexDirection: 'column',
       
        marginBottom: 12,
      },
    
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textColor
    
    
      },
      centeredView: {
        flex: 1,
        height: '100%',
        
      },

      mapStyle:{
        flex: 1,
        alignItems: 'center',
      },

      centerItem:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      listItem: {
        flexDirection: 'column',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        margin: 12,
      }


});

export default AppStyles;