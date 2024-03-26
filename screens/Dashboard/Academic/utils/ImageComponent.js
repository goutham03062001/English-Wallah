import { StyleSheet, Text, View,TouchableOpacity ,Image, Dimensions} from 'react-native'
import React,{useState} from 'react'
import ImageView from 'react-native-image-viewing';
const ImageComponent = ({inputImage}) => {
    const [visible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        inputImage
    //   require(""),
    //   require("../../../../assets/premodifiers2.png"),
    //   {uri: "../../../../assets/premodifiers3.png"},
    //   {uri: "../../../../assets/premodifiers4.png"},
    //   {uri: "../../../../assets/premodifiers5.png"},
    //   {uri: "../../../../assets/premodifiers6.png"},
    //   {uri: "../../../../assets/premodifiers7.png"},
    //   {uri: "../../../../assets/premodifiers8.png"},
    //   {uri: "../../../../assets/premodifiers9.png"},
    ]
    function handleImagesFunction(index){
      setCurrentIndex(index);
      setIsVisible(true)
    }
  return (
    <View>
    {images.map((image, index) => (
      <TouchableOpacity key={index} onPress={() => handleImagesFunction(index)}>
        <Image source={image} style={{ width: Dimensions.get("screen").width-10, height: 200,objectFit:"contain"}} />
      </TouchableOpacity>
    ))}
    <ImageView
      images={images}
      imageIndex={currentIndex}
      visible={visible}
      onRequestClose={() => setIsVisible(false)}
    />
  </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({})