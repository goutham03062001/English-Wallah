import React from 'react';
import { View, Button, Linking } from 'react-native';

const App = () => {
  const sendWhatsAppMessage = () => {
    // Predefined message
    const message = "Hello, this is a predefined message.";

    // Predefined numbers
    const numbers = ["+917660943343", "+916300809076"];

    // Function to send message to each number sequentially
    const sendMessageToNumber = (index) => {
      if (index >= numbers.length) return; // Stop if all numbers are processed
      const number = numbers[index];
      const url = `whatsapp://send?phone=${number}&text=${message}`;
      Linking.canOpenURL(url)
        .then(supported => {
          if (supported) {
            Linking.openURL(url).then(() => {
              // After opening, send message to the next number
              sendMessageToNumber(index + 1);
            });
          } else {
            console.log("WhatsApp is not installed.");
          }
        })
        .catch(error => console.error("An error occurred", error));
    };

    // Start sending messages to numbers
    sendMessageToNumber(0);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Send WhatsApp Message" onPress={sendWhatsAppMessage} />
    </View>
  );
};

export default App;
