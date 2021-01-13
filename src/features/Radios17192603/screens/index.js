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
      <View style={styles.View_155_164}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I155_164_144_381}
        />
        <View style={styles.View_I155_164_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I155_164_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I155_164_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I155_164_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I155_164_144_400}
        />
      </View>
      <View style={styles.View_155_165}>
        <View style={styles.View_I155_165_144_2324}>
          <Text style={styles.Text_I155_165_144_2324}>Next</Text>
        </View>
        <View style={styles.View_I155_165_144_2323}>
          <Text style={styles.Text_I155_165_144_2323}>User Options</Text>
        </View>
        <View style={styles.View_I155_165_144_2329}>
          <Text style={styles.Text_I155_165_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_155_173}>
        <View style={styles.View_I155_173_150_580}>
          <View style={styles.View_I155_173_150_581} />
          <View style={styles.View_I155_173_150_582}>
            <View style={styles.View_I155_173_150_583} />
          </View>
        </View>
        <View style={styles.View_I155_173_150_584}>
          <View style={styles.View_I155_173_150_618} />
          <View style={styles.View_I155_173_150_619} />
          <View style={styles.View_I155_173_150_620} />
          <View style={styles.View_I155_173_150_621} />
          <View style={styles.View_I155_173_150_622} />
        </View>
        <View style={styles.View_I155_173_150_614} />
      </View>
      <View style={styles.View_155_237}>
        <View style={styles.View_I155_237_155_97}>
          <Text style={styles.Text_I155_237_155_97}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I155_237_155_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a27/a63c/0cdb6320bf54552d28ee48384458d514"
          }}
          style={styles.ImageBackground_I155_237_155_247}
        />
      </View>
      <View style={styles.View_155_242}>
        <View style={styles.View_I155_242_155_8}>
          <Text style={styles.Text_I155_242_155_8}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I155_242_155_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09b5/2039/9b153a9423118f8549184506029f56bc"
          }}
          style={styles.ImageBackground_I155_242_155_82}
        />
      </View>
      <View style={styles.View_156_0}>
        <View style={styles.View_I156_0_155_97}>
          <Text style={styles.Text_I156_0_155_97}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_0_155_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a27/a63c/0cdb6320bf54552d28ee48384458d514"
          }}
          style={styles.ImageBackground_I156_0_155_247}
        />
      </View>
      <View style={styles.View_156_6}>
        <View style={styles.View_I156_6_155_8}>
          <Text style={styles.Text_I156_6_155_8}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_6_155_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09b5/2039/9b153a9423118f8549184506029f56bc"
          }}
          style={styles.ImageBackground_I156_6_155_82}
        />
      </View>
      <View style={styles.View_156_12}>
        <View style={styles.View_I156_12_155_8}>
          <Text style={styles.Text_I156_12_155_8}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_12_155_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09b5/2039/9b153a9423118f8549184506029f56bc"
          }}
          style={styles.ImageBackground_I156_12_155_82}
        />
      </View>
      <View style={styles.View_156_18}>
        <View style={styles.View_I156_18_155_97}>
          <Text style={styles.Text_I156_18_155_97}>Radio option here...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
          }}
          style={styles.ImageBackground_I156_18_155_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a27/a63c/0cdb6320bf54552d28ee48384458d514"
          }}
          style={styles.ImageBackground_I156_18_155_247}
        />
      </View>
      <View style={styles.View_159_0}>
        <View style={styles.View_I159_0_144_2127}>
          <Text style={styles.Text_I159_0_144_2127}>I love it!</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_155_164: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I155_164_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I155_164_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I155_164_144_387: {
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
  ImageBackground_I155_164_144_391: {
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
  ImageBackground_I155_164_144_395: {
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
  ImageBackground_I155_164_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_155_165: {
    flexGrow: 1,
    width: 343,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_165_144_2324: {
    flexGrow: 1,
    width: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307,
    top: 8
  },
  Text_I155_165_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I155_165_144_2323: {
    flexGrow: 1,
    width: 190,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78,
    top: 0
  },
  Text_I155_165_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I155_165_144_2329: {
    flexGrow: 1,
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I155_165_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_173: {
    flexGrow: 1,
    width: 375,
    height: 83.5,
    minHeight: 83.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 729,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_173_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I155_173_150_581: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_I155_173_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I155_173_150_583: {
    width: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I155_173_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I155_173_150_618: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(93, 176, 117, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I155_173_150_619: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I155_173_150_620: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I155_173_150_621: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 216,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I155_173_150_622: {
    width: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 288,
    top: 0,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I155_173_150_614: {
    flexGrow: 1,
    width: 375,
    height: 0.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(189, 197, 205, 1)"
  },
  View_155_237: {
    width: 343,
    minWidth: 343,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_237_155_97: {
    flexGrow: 1,
    width: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 15
  },
  Text_I155_237_155_97: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I155_237_155_98: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49
  },
  ImageBackground_I155_237_155_247: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 16
  },
  View_155_242: {
    width: 343,
    minWidth: 343,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 176,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_242_155_8: {
    flexGrow: 1,
    width: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 16
  },
  Text_I155_242_155_8: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I155_242_155_11: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49
  },
  ImageBackground_I155_242_155_82: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 16
  },
  View_156_0: {
    width: 343,
    minWidth: 343,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 224,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_0_155_97: {
    flexGrow: 1,
    width: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 15
  },
  Text_I156_0_155_97: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_0_155_98: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49
  },
  ImageBackground_I156_0_155_247: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 16
  },
  View_156_6: {
    width: 343,
    minWidth: 343,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 272,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_6_155_8: {
    flexGrow: 1,
    width: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 16
  },
  Text_I156_6_155_8: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_6_155_11: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49
  },
  ImageBackground_I156_6_155_82: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 16
  },
  View_156_12: {
    width: 343,
    minWidth: 343,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 320,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_12_155_8: {
    flexGrow: 1,
    width: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 16
  },
  Text_I156_12_155_8: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_12_155_11: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49
  },
  ImageBackground_I156_12_155_82: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 16
  },
  View_156_18: {
    width: 343,
    minWidth: 343,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 368,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I156_18_155_97: {
    flexGrow: 1,
    width: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 15
  },
  Text_I156_18_155_97: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I156_18_155_98: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49
  },
  ImageBackground_I156_18_155_247: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 16
  },
  View_159_0: {
    flexGrow: 1,
    width: 343,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 662,
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I159_0_144_2127: {
    flexGrow: 1,
    width: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 141.5,
    top: 16
  },
  Text_I159_0_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
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
