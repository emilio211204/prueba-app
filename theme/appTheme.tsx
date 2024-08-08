import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
   },
   button: {
    backgroundColor: '#09a9a6',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '50%',
    alignSelf: 'center'
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
},

textImg: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 18,
  textTransform: 'uppercase',
  textAlign: 'center',
},

img1: {
  width: 400,
  height: 200,
  alignSelf: 'center',
  marginTop: 200
},

textResultado: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 18,
  textTransform: 'uppercase',
  textAlign: 'center',
},

containerInput: {
  flexDirection: 'row',
  height: 40, 
  borderColor: 'gray', 
  borderWidth: 1,
  margin: 10,
  borderRadius: 10
},


})