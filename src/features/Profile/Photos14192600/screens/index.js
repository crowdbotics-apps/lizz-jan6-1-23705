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
      <View style={styles.View_151_922} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/241e/3884/6ca7988b7a199f886a271d24f482c687"
        }}
        style={styles.ImageBackground_151_923}
      />
      <View style={styles.View_151_924}>
        <View style={styles.View_I151_924_144_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_I151_924_144_356_144_381}
          />
          <View style={styles.View_I151_924_144_356_144_386}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I151_924_144_356_144_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I151_924_144_356_144_391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I151_924_144_356_144_395}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_I151_924_144_356_144_400}
          />
        </View>
      </View>
      <View style={styles.View_151_925}>
        <View style={styles.View_I151_925_144_2324}>
          <Text style={styles.Text_I151_925_144_2324}>Logout</Text>
        </View>
        <View style={styles.View_I151_925_144_2323}>
          <Text style={styles.Text_I151_925_144_2323}>Profile</Text>
        </View>
        <View style={styles.View_I151_925_144_2329}>
          <Text style={styles.Text_I151_925_144_2329}>Settings</Text>
        </View>
      </View>
      <View style={styles.View_151_926}>
        <View style={styles.View_151_927}>
          <Text style={styles.Text_151_927}>Victoria Robertson</Text>
        </View>
        <View style={styles.View_151_928}>
          <Text style={styles.Text_151_928}>A mantra goes here</Text>
        </View>
      </View>
      <View style={styles.View_151_929}>
        <View style={styles.View_I151_929_151_758}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
            }}
            style={styles.ImageBackground_I151_929_151_758_151_696}
          />
          <View style={styles.View_I151_929_151_758_151_700}>
            <Text style={styles.Text_I151_929_151_758_151_700}>Search</Text>
          </View>
          <View style={styles.View_I151_929_151_758_151_768}>
            <Text style={styles.Text_I151_929_151_758_151_768}>Posts</Text>
          </View>
          <View style={styles.View_I151_929_151_758_151_727}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de28/df3c/29dd49642fec21b5baaf0ba4e6d193d7"
              }}
              style={styles.ImageBackground_I151_929_151_758_151_728}
            />
            <View style={styles.View_I151_929_151_758_151_729}>
              <Text style={styles.Text_I151_929_151_758_151_729}>Photos</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_151_1013}>
        <View style={styles.View_I151_1013_150_1080} />
        <View style={styles.View_I151_1013_150_1081}>
          <Text style={styles.Text_I151_1013_150_1081}>Header</Text>
        </View>
        <View style={styles.View_I151_1013_150_1086}>
          <View style={styles.View_I151_1013_150_1083}>
            <Text style={styles.Text_I151_1013_150_1083}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <View style={styles.View_I151_1013_150_1082}>
            <Text style={styles.Text_I151_1013_150_1082}>8m ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ba/7856/65e644d1729bb6ec46c424a395156d52"
            }}
            style={styles.ImageBackground_I151_1013_150_1136}
          />
        </View>
      </View>
      <View style={styles.View_151_1023}>
        <View style={styles.View_I151_1023_150_1080} />
        <View style={styles.View_I151_1023_150_1081}>
          <Text style={styles.Text_I151_1023_150_1081}>Header</Text>
        </View>
        <View style={styles.View_I151_1023_150_1086}>
          <View style={styles.View_I151_1023_150_1083}>
            <Text style={styles.Text_I151_1023_150_1083}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <View style={styles.View_I151_1023_150_1082}>
            <Text style={styles.Text_I151_1023_150_1082}>8m ago</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ba/7856/65e644d1729bb6ec46c424a395156d52"
            }}
            style={styles.ImageBackground_I151_1023_150_1136}
          />
        </View>
      </View>
      <View style={styles.View_151_934}>
        <View style={styles.View_I151_934_150_580}>
          <View style={styles.View_I151_934_150_581} />
          <View style={styles.View_I151_934_150_582}>
            <View style={styles.View_I151_934_150_583} />
          </View>
        </View>
        <View style={styles.View_I151_934_150_584}>
          <View style={styles.View_I151_934_150_618} />
          <View style={styles.View_I151_934_150_619} />
          <View style={styles.View_I151_934_150_620} />
          <View style={styles.View_I151_934_150_621} />
          <View style={styles.View_I151_934_150_622} />
        </View>
        <View style={styles.View_I151_934_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_151_922: {
    flexGrow: 1,
    width: 376,
    height: 245,
    minHeight: 245,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 0,
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  ImageBackground_151_923: {
    width: 158,
    height: 158,
    minHeight: 158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 128
  },
  View_151_924: {
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
  View_I151_924_144_356: {
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
  ImageBackground_I151_924_144_356_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I151_924_144_356_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875,
    top: 17.3306884765625
  },
  ImageBackground_I151_924_144_356_144_387: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.333251953125,
    top: 0.002685546875
  },
  ImageBackground_I151_924_144_356_144_391: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027099609375,
    top: 0
  },
  ImageBackground_I151_924_144_356_144_395: {
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
  ImageBackground_I151_924_144_356_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_151_925: {
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
  View_I151_925_144_2324: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 8
  },
  Text_I151_925_144_2324: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_925_144_2323: {
    flexGrow: 1,
    width: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 0
  },
  Text_I151_925_144_2323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_925_144_2329: {
    flexGrow: 1,
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I151_925_144_2329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_926: {
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
  View_151_927: {
    width: 272,
    minWidth: 272,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_151_927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_928: {
    width: 151,
    minWidth: 151,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 44
  },
  Text_151_928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_929: {
    flexGrow: 1,
    width: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 389,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I151_929_151_758: {
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
  ImageBackground_I151_929_151_758_151_696: {
    flexGrow: 1,
    width: 343,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I151_929_151_758_151_700: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 16
  },
  Text_I151_929_151_758_151_700: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_929_151_758_151_768: {
    flexGrow: 1,
    width: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 16
  },
  Text_I151_929_151_758_151_768: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_929_151_758_151_727: {
    flexGrow: 1,
    width: 171.5,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    top: 2
  },
  ImageBackground_I151_929_151_758_151_728: {
    flexGrow: 1,
    width: 171.5,
    height: 46,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I151_929_151_758_151_729: {
    width: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 14
  },
  Text_I151_929_151_758_151_729: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1013: {
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
  View_I151_1013_150_1080: {
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
  View_I151_1013_150_1081: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 248
  },
  Text_I151_1013_150_1081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1013_150_1086: {
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
  View_I151_1013_150_1083: {
    flexGrow: 1,
    width: 343,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I151_1013_150_1083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1013_150_1082: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 42
  },
  Text_I151_1013_150_1082: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_1013_150_1136: {
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
  View_151_1023: {
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
  View_I151_1023_150_1080: {
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
  View_I151_1023_150_1081: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 248
  },
  Text_I151_1023_150_1081: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1023_150_1086: {
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
  View_I151_1023_150_1083: {
    flexGrow: 1,
    width: 343,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I151_1023_150_1083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I151_1023_150_1082: {
    width: 50,
    minWidth: 50,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 42
  },
  Text_I151_1023_150_1082: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I151_1023_150_1136: {
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
  View_151_934: {
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
  View_I151_934_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I151_934_150_581: {
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
  View_I151_934_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I151_934_150_583: {
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
  View_I151_934_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I151_934_150_618: {
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
  View_I151_934_150_619: {
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
  View_I151_934_150_620: {
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
  View_I151_934_150_621: {
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
  View_I151_934_150_622: {
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
  View_I151_934_150_614: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
