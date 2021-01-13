import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_197_669}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_197_681}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de28/df3c/29dd49642fec21b5baaf0ba4e6d193d7"
          }}
          style={styles.ImageBackground_197_685}
        />
        <View style={styles.View_197_682}>
          <Text style={styles.Text_197_682}>Photos</Text>
        </View>
        <View style={styles.View_197_686}>
          <Text style={styles.Text_197_686}>Posts</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_197_669: {
    flexGrow: 1,
    width: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 29,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_197_681: {
    width: 343,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_197_685: {
    flexGrow: 1,
    width: 171.5,
    height: 46,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_197_682: {
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 16
  },
  Text_197_682: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_686: {
    width: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 16
  },
  Text_197_686: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 108 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
