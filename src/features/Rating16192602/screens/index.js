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
      <View style={styles.View_154_1}>
        <View style={styles.View_I154_1_144_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_I154_1_144_356_144_381}
          />
          <View style={styles.View_I154_1_144_356_144_386}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I154_1_144_356_144_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I154_1_144_356_144_391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I154_1_144_356_144_395}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_I154_1_144_356_144_400}
          />
        </View>
      </View>
      <View style={styles.View_154_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd1d/6cf5/e2e11cd77fefcde9fea3b632a3c8dba1"
          }}
          style={styles.ImageBackground_154_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b1/b307/a12ca895726ed816d211fce8250aa40f"
          }}
          style={styles.ImageBackground_154_32}
        />
        <View style={styles.View_154_4}>
          <View style={styles.View_I154_4_144_2127}>
            <Text style={styles.Text_I154_4_144_2127}>I love it!</Text>
          </View>
        </View>
        <View style={styles.View_154_5}>
          <Text style={styles.Text_154_5}>
            Don’t like the app? Let us know.
          </Text>
        </View>
        <View style={styles.View_154_6}>
          <View style={styles.View_154_7}>
            <Text style={styles.Text_154_7}>Rate our app</Text>
          </View>
          <View style={styles.View_154_8}>
            <Text style={styles.Text_154_8}>
              Consequat velit qui adipisicing sunt do reprehenderit ad laborum
              tempor ullamco exercitation. Ullamco tempor adipisicing et
              voluptate duis sit esse aliqua esse ex dolore esse. Consequat
              velit qui adipisicing sunt.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_154_1: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I154_1_144_356: {
    flexGrow: 1,
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I154_1_144_356_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I154_1_144_356_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I154_1_144_356_144_387: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.33349609375,
    top: 0.002685546875
  },
  ImageBackground_I154_1_144_356_144_391: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.02685546875,
    top: 0
  },
  ImageBackground_I154_1_144_356_144_395: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.3359375
  },
  ImageBackground_I154_1_144_356_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_154_2: {
    width: 343,
    minWidth: 343,
    height: 427,
    minHeight: 427,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 193
  },
  ImageBackground_154_3: {
    width: 343,
    minWidth: 343,
    height: 427,
    minHeight: 427,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_154_32: {
    width: 192,
    minWidth: 192,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 32
  },
  View_154_4: {
    width: 311,
    minWidth: 311,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 307,
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I154_4_144_2127: {
    flexGrow: 1,
    width: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125.5,
    top: 16
  },
  Text_I154_4_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_154_5: {
    width: 311,
    minWidth: 311,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 376
  },
  Text_154_5: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_154_6: {
    width: 311,
    minWidth: 311,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 96
  },
  View_154_7: {
    width: 184,
    minWidth: 184,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 0
  },
  Text_154_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_154_8: {
    width: 311,
    minWidth: 311,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 52
  },
  Text_154_8: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
