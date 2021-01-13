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
      <View style={styles.View_163_622}>
        <View style={styles.View_157_1} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241e/3884/6ca7988b7a199f886a271d24f482c687"
          }}
          style={styles.ImageBackground_157_2}
        />
      </View>
      <View style={styles.View_157_4}>
        <View style={styles.View_I157_4_144_2324}>
          <Text style={styles.Text_I157_4_144_2324}>Logout</Text>
        </View>
        <View style={styles.View_I157_4_144_2323}>
          <Text style={styles.Text_I157_4_144_2323}>Profile</Text>
        </View>
        <View style={styles.View_I157_4_144_2329}>
          <Text style={styles.Text_I157_4_144_2329}>Settings</Text>
        </View>
      </View>
      <View style={styles.View_157_5}>
        <View style={styles.View_157_6}>
          <Text style={styles.Text_157_6}>Victoria Robertson</Text>
        </View>
        <View style={styles.View_157_7}>
          <Text style={styles.Text_157_7}>A mantra goes here</Text>
        </View>
      </View>
      <View style={styles.View_157_8}>
        <View style={styles.View_I157_8_151_758}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
            }}
            style={styles.ImageBackground_I157_8_151_758_151_696}
          />
          <View style={styles.View_I157_8_151_758_151_700}>
            <Text style={styles.Text_I157_8_151_758_151_700}>Search</Text>
          </View>
          <View style={styles.View_I157_8_151_758_151_768}>
            <Text style={styles.Text_I157_8_151_758_151_768}>Photos</Text>
          </View>
          <View style={styles.View_I157_8_151_758_151_727}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de28/df3c/29dd49642fec21b5baaf0ba4e6d193d7"
              }}
              style={styles.ImageBackground_I157_8_151_758_151_728}
            />
            <View style={styles.View_I157_8_151_758_151_729}>
              <Text style={styles.Text_I157_8_151_758_151_729}>Posts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_157_9}>
        <View style={styles.View_I157_9_150_1080} />
        <View style={styles.View_I157_9_150_1081}>
          <Text style={styles.Text_I157_9_150_1081}>Header</Text>
        </View>
        <View style={styles.View_I157_9_150_1086}>
          <View style={styles.View_I157_9_150_1083}>
            <Text style={styles.Text_I157_9_150_1083}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <View style={styles.View_I157_9_150_1082}>
            <Text style={styles.Text_I157_9_150_1082}>8m ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ba/7856/65e644d1729bb6ec46c424a395156d52"
            }}
            style={styles.ImageBackground_I157_9_150_1136}
          />
        </View>
      </View>
      <View style={styles.View_157_10}>
        <View style={styles.View_I157_10_150_1080} />
        <View style={styles.View_I157_10_150_1081}>
          <Text style={styles.Text_I157_10_150_1081}>Header</Text>
        </View>
        <View style={styles.View_I157_10_150_1086}>
          <View style={styles.View_I157_10_150_1083}>
            <Text style={styles.Text_I157_10_150_1083}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <View style={styles.View_I157_10_150_1082}>
            <Text style={styles.Text_I157_10_150_1082}>8m ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ba/7856/65e644d1729bb6ec46c424a395156d52"
            }}
            style={styles.ImageBackground_I157_10_150_1136}
          />
        </View>
      </View>
      <View style={styles.View_157_3}>
        <View style={styles.View_I157_3_144_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_I157_3_144_356_144_381}
          />
          <View style={styles.View_I157_3_144_356_144_386}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I157_3_144_356_144_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I157_3_144_356_144_391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I157_3_144_356_144_395}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_I157_3_144_356_144_400}
          />
        </View>
      </View>
      <View style={styles.View_157_79} />
      <View style={styles.View_157_94}>
        <View style={styles.View_157_80} />
        <View style={styles.View_157_93}>
          <View style={styles.View_157_92}>
            <Text style={styles.Text_157_92}>Secondary Action</Text>
          </View>
          <View style={styles.View_157_88}>
            <View style={styles.View_I157_88_144_2127}>
              <Text style={styles.Text_I157_88_144_2127}>Click Me</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_157_90}>
          <View style={styles.View_157_85}>
            <Text style={styles.Text_157_85}>Drawer Header</Text>
          </View>
          <View style={styles.View_157_86}>
            <Text style={styles.Text_157_86}>
              Consequat velit qui adipisicing sunt do reprehenderit ad laborum
              tempor ullamco exercitation.
            </Text>
          </View>
        </View>
        <View style={styles.View_157_87}>
          <View style={styles.View_157_81} />
        </View>
      </View>
      <View style={styles.View_157_11}>
        <View style={styles.View_I157_11_150_580}>
          <View style={styles.View_I157_11_150_582}>
            <View style={styles.View_I157_11_150_583} />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_163_622: {
    width: 376,
    minWidth: 376,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 0
  },
  View_157_1: {
    width: 376,
    minWidth: 376,
    height: 245,
    minHeight: 245,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  ImageBackground_157_2: {
    width: 158,
    height: 158,
    top: 128,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109
  },
  View_157_4: {
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
  View_I157_4_144_2324: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 8
  },
  Text_I157_4_144_2324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_4_144_2323: {
    flexGrow: 1,
    width: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 0
  },
  Text_I157_4_144_2323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_4_144_2329: {
    flexGrow: 1,
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I157_4_144_2329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_5: {
    width: 272,
    minWidth: 272,
    height: 63,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 302
  },
  View_157_6: {
    width: 272,
    minWidth: 272,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_157_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_7: {
    width: 151,
    minWidth: 151,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 44
  },
  Text_157_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_8: {
    width: 343,
    minWidth: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 389,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_8_151_758: {
    flexGrow: 1,
    width: 343,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I157_8_151_758_151_696: {
    flexGrow: 1,
    width: 343,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I157_8_151_758_151_700: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 16
  },
  Text_I157_8_151_758_151_700: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_8_151_758_151_768: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 16
  },
  Text_I157_8_151_758_151_768: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_8_151_758_151_727: {
    flexGrow: 1,
    width: 171.5,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    top: 2
  },
  ImageBackground_I157_8_151_758_151_728: {
    flexGrow: 1,
    width: 171.5,
    height: 46,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I157_8_151_758_151_729: {
    width: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 14
  },
  Text_I157_8_151_758_151_729: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_9: {
    flexGrow: 1,
    width: 343,
    height: 350,
    minHeight: 350,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 455,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_9_150_1080: {
    flexGrow: 1,
    width: 343,
    height: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I157_9_150_1081: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 248
  },
  Text_I157_9_150_1081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_9_150_1086: {
    flexGrow: 1,
    width: 343,
    height: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 275,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I157_9_150_1083: {
    flexGrow: 1,
    width: 343,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I157_9_150_1083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_9_150_1082: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 42
  },
  Text_I157_9_150_1082: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I157_9_150_1136: {
    width: 40,
    minWidth: 40,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 67
  },
  View_157_10: {
    flexGrow: 1,
    width: 343,
    height: 350,
    minHeight: 350,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 821,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_10_150_1080: {
    flexGrow: 1,
    width: 343,
    height: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I157_10_150_1081: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 248
  },
  Text_I157_10_150_1081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_10_150_1086: {
    flexGrow: 1,
    width: 343,
    height: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 275,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I157_10_150_1083: {
    flexGrow: 1,
    width: 343,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I157_10_150_1083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I157_10_150_1082: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 42
  },
  Text_I157_10_150_1082: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I157_10_150_1136: {
    width: 40,
    minWidth: 40,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 67
  },
  View_157_3: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_3_144_356: {
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
  ImageBackground_I157_3_144_356_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I157_3_144_356_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I157_3_144_356_144_387: {
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
  ImageBackground_I157_3_144_356_144_391: {
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
  ImageBackground_I157_3_144_356_144_395: {
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
  ImageBackground_I157_3_144_356_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_157_79: {
    width: 375,
    minWidth: 375,
    height: 813,
    minHeight: 813,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_157_94: {
    width: 375,
    minWidth: 375,
    height: 295,
    minHeight: 295,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 517
  },
  View_157_80: {
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
  View_157_93: {
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
  View_157_92: {
    width: 311,
    minWidth: 311,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 67
  },
  Text_157_92: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_88: {
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
  View_I157_88_144_2127: {
    flexGrow: 1,
    width: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 16
  },
  Text_I157_88_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_90: {
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
  View_157_85: {
    width: 174,
    minWidth: 174,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 69,
    top: 0
  },
  Text_157_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_86: {
    width: 311,
    minWidth: 311,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45
  },
  Text_157_86: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_87: {
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
  View_157_81: {
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
  View_157_11: {
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
  View_I157_11_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I157_11_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I157_11_150_583: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
