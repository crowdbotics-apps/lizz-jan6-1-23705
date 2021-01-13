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
      <View style={styles.View_197_112} />
      <View style={styles.View_197_113}>
        <View style={styles.View_197_114}>
          <Text style={styles.Text_197_114}>Secondary Action</Text>
        </View>
        <View style={styles.View_197_115}>
          <View style={styles.View_I197_115_144_2127}>
            <Text style={styles.Text_I197_115_144_2127}>Click Me</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_197_116}>
        <View style={styles.View_197_117}>
          <Text style={styles.Text_197_117}>Drawer Header</Text>
        </View>
        <View style={styles.View_197_118}>
          <Text style={styles.Text_197_118}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation.
          </Text>
        </View>
      </View>
      <View style={styles.View_197_119}>
        <View style={styles.View_197_120} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_197_112: {
    width: 375,
    minWidth: 375,
    height: 295,
    minHeight: 295,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_197_113: {
    width: 327,
    minWidth: 327,
    height: 86,
    minHeight: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 170
  },
  View_197_114: {
    width: 311,
    minWidth: 311,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 67
  },
  Text_197_114: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_115: {
    width: 327,
    minWidth: 327,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I197_115_144_2127: {
    flexGrow: 1,
    width: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 16
  },
  Text_I197_115_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_116: {
    width: 311,
    minWidth: 311,
    height: 102,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 52
  },
  View_197_117: {
    width: 174,
    minWidth: 174,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 0
  },
  Text_197_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_118: {
    width: 311,
    minWidth: 311,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45
  },
  Text_197_118: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_119: {
    width: 32,
    minWidth: 32,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 16
  },
  View_197_120: {
    width: 32,
    minWidth: 32,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_2: { height: 295 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
