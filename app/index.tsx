import { useState } from 'react';
import { Image, StyleSheet, Platform, Text, View, Button, TextInput } from 'react-native';

export default function Index() {


  const [counter, setCounter] = useState(0);
  const [mynumber, setMynumber] = useState("");
  const [errormessages, setErrormessage] = useState("");

  function dosomeplus() {
    
    const innumb = Number(mynumber);

    if(isNaN(innumb)) {
      // Inte siffra   
      setErrormessage("Du skrev fel!!!");
    }  else {
      setErrormessage("");
      setCounter(counter + Number(mynumber));


    if (counter >= 10) {
      setCounter(0);
    }
  }
  }
  function dosomeminus() {
    setCounter(counter - 1);

    if (counter <= 0) {
      setCounter(0);
    }
  }



  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >


      <Text>{counter}</Text>
      { errormessages != "" &&
      <Text style= {{borderWidth : 3, width: 200, height: 80}}> { errormessages }</Text>
        }


      <TextInput onChangeText={ setMynumber }
       value= {mynumber } 
       style={{ borderWidth : 1, width: 100 }}
       />

      <Button
        onPress={dosomeplus}
        title="Plus"
      />



      <Button
        onPress={dosomeminus}
        title="Minus"
      />

      <Button
        onPress={() => {setCounter(0), setErrormessage(""), setMynumber("")}}
        title="Reset"
      />


    </View>
  );
}
