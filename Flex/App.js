import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('0');

  const handlePressButton = (digit) => {
    if(value == '0' && digit != '.'){
      setValue(digit)
    }else{
      let newValue = `${value}${digit}`;
      setValue(newValue)
    }
  }

  const handleCalculate = () => {  
    setValue(eval(value))
  }

  const handleClear = () => {
    setValue('0')
  }
  return (
    <View style={styles.body}>
      <View  style={styles.display}>
        <Text style={styles.displayText}>{value}</Text>
      </View>
      <View style={styles.calcView}>
            <View style={styles.buttonRow}>
              <View  style={styles.calcClear} onTouchEnd={ handleClear }><Text style={{fontSize: 40}}>AC</Text></View>
              <View  style={styles.calcKeysOrange}  onTouchEnd={ () => handlePressButton('/')}><Text style={{fontSize: 40, color: '#fafafa'}}>/</Text></View>
            </View>
            <View style={styles.buttonRow}>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('7')}><Text style={{fontSize: 40}}>7</Text></View>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('8')}><Text style={{fontSize: 40}}>8</Text></View>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('9')}><Text style={{fontSize: 40}}>9</Text></View>
              <View  style={styles.calcKeysOrange}  onTouchEnd={ () => handlePressButton('*')}><Text style={{fontSize: 40, color: '#fafafa'}}>*</Text></View>
            </View>
            <View style={styles.buttonRow}>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('4')}><Text style={{fontSize: 40}}>4</Text></View>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('5')}><Text style={{fontSize: 40}}>5</Text></View>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('6')}><Text style={{fontSize: 40}}>6</Text></View>
              <View  style={styles.calcKeysOrange} onTouchEnd={ () => handlePressButton('-')}><Text style={{fontSize: 40, color: '#fafafa'}}>-</Text></View>
            </View>
            <View style={styles.buttonRow}>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('1')}><Text style={{fontSize: 40}}>1</Text></View>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('2')}><Text style={{fontSize: 40}}>2</Text></View>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('3')}><Text style={{fontSize: 40}}>3</Text></View>
              <View  style={styles.calcKeysOrange} onTouchEnd={ () => handlePressButton('+')}><Text style={{fontSize: 40, color: '#fafafa'}}>+</Text></View> 
            </View>
            <View style={styles.buttonRow}>
              <View  style={styles.calcBigKeys} onTouchEnd={ () => handlePressButton('0')}><Text style={{fontSize: 40}}>0</Text></View>
              <View  style={styles.calcKeys} onTouchEnd={ () => handlePressButton('.')}><Text style={{fontSize: 40}}>.</Text></View>
              <View  style={styles.calcKeysOrange} onTouchEnd={ handleCalculate}><Text style={{fontSize: 40, color: '#fafafa'}}>=</Text></View>
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  display: { 
    backgroundColor: '#333', 
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    flex: 1
  },
  displayText: {
    width: '100%',
    textAlign: 'right', 
    color: "#fafafa",
    fontSize: 70,
    padding: 10,  
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  calcKeys: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 1,
    backgroundColor: '#fafafa',
    flex: 1,
  },
  calcKeysOrange: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor: '#e95420',
    margin: 1,
    flex: 1
  },
  calcBigKeys:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    backgroundColor: '#fafafa',
    flex: 2 
  },
  calcView: {
    backgroundColor: '#333',
    display: 'flex',
    flex: 2,
    width: '100%', 
  },
  calcClear:{
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor: '#fafafa',
    margin: 1,
    flex: 3
  }

})
