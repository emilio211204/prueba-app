import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    width: '60%',
    alignSelf: 'center'
  },
  
  buttonText: {
    color: '#f5f5f5',
    fontWeight: '700',
    fontSize: 20,
    textTransform: 'uppercase',
  },

  textImg: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 30
  },

  img1: {
    width: 350,
    height: 180,
    alignSelf: 'center',
    marginTop: 150
  },

  textResultado: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  containerInput: {
    flexDirection: 'row',
    height: 45,
    borderColor: '#d1d5db',
    borderWidth: 1.5,
    margin: 12,
    borderRadius: 12,
    paddingLeft: 10,
  },
});
