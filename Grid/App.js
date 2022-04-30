import { Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
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
    <Grid>
      <Row size={1} style={styles.display}>
        <Text style={styles.displayText}>{value}</Text>
      </Row>
      <Row size={ 2 }>
        <Grid style={styles.calcGrid}>
          <Row>
            <Col size={ 3 } style={styles.calcBigKeys} onPress={ handleClear }><Text style={{fontSize: 40}}>AC</Text></Col>
            <Col size={ 1 } style={styles.calcKeysOrange}  onPress={ () => handlePressButton('/')}><Text style={{fontSize: 40, color: '#fafafa'}}>/</Text></Col>
          </Row>
          <Row>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('7')}><Text style={{fontSize: 40}}>7</Text></Col>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('8')}><Text style={{fontSize: 40}}>8</Text></Col>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('9')}><Text style={{fontSize: 40}}>9</Text></Col>
            <Col size={ 1 } style={styles.calcKeysOrange}  onPress={ () => handlePressButton('*')}><Text style={{fontSize: 40, color: '#fafafa'}}>*</Text></Col>
          </Row>
          <Row>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('4')}><Text style={{fontSize: 40}}>4</Text></Col>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('5')}><Text style={{fontSize: 40}}>5</Text></Col>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('6')}><Text style={{fontSize: 40}}>6</Text></Col>
            <Col size={ 1 } style={styles.calcKeysOrange} onPress={ () => handlePressButton('-')}><Text style={{fontSize: 40, color: '#fafafa'}}>-</Text></Col>
          </Row>
          <Row>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('1')}><Text style={{fontSize: 40}}>1</Text></Col>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('2')}><Text style={{fontSize: 40}}>2</Text></Col>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('3')}><Text style={{fontSize: 40}}>3</Text></Col>
            <Col size={ 1 } style={styles.calcKeysOrange} onPress={ () => handlePressButton('+')}><Text style={{fontSize: 40, color: '#fafafa'}}>+</Text></Col>
          </Row>
          <Row>
            <Col size={ 2 } style={styles.calcBigKeys} onPress={ () => handlePressButton('0')}><Text style={{fontSize: 40}}>0</Text></Col>
            <Col size={ 1 } style={styles.calcKeys} onPress={ () => handlePressButton('.')}><Text style={{fontSize: 40}}>.</Text></Col>
            <Col size={ 1 } style={styles.calcKeysOrange} onPress={ handleCalculate}><Text style={{fontSize: 40, color: '#fafafa'}}>=</Text></Col>
          </Row>
        </Grid>
      </Row>
    </Grid>
  );
}

const styles = StyleSheet.create({
  display: { 
    backgroundColor: '#333', 
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center'  
  },
  displayText: {
    width: '100%',
    textAlign: 'right', 
    color: "#fafafa",
    fontSize: 70,
    padding: 10,  
  },
  calcKeys: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 1,
    backgroundColor: '#fafafa'
  },
  calcKeysOrange: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor:'#e95420',
    margin: 1,
  },
  calcBigKeys:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    backgroundColor: '#fafafa'
  },
  calcGrid: {
    backgroundColor: '#333'
  }

})
