import {StyleSheet, PixelRatio, Dimensions} from 'react-native';

const scale = (size: number) => {
  const ratio = PixelRatio.get();
  return size * ratio;
};
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  scrollContainer: {
    marginTop: 40,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    padding: 20,
    color: '#76ABAE',
  },
  settingsInfo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#76ABAE',
  },
  textContainer: {
    color: '#76ABAE',
    padding: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#EEEEEE',
    borderRadius: 11,
  },
  saveButton: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#76ABAE',
    borderRadius: 11,
  },
  buttonText: {
    fontSize: 16,
    color: '#31363F',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#EEEEEE',
  },
  deadpoolImg: {
    width: scale(100),
    height: scale(100),
    alignSelf: 'center',
  },
  headerContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  headerButton: {
    marginRight: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '50%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    color: '#31363F',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    gap: height > width ? 30 : 100,
    marginTop: 35,
  },
  textInput: {
    backgroundColor: '#EEEEEEC4',
    color: '#31363F',
    marginTop: 20,
    padding: 20,
    width: '75%',
  },
});
