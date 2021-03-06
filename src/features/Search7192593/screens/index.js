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
      <View style={styles.View_163_484}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I163_484_144_381}
        />
        <View style={styles.View_I163_484_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I163_484_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I163_484_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I163_484_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I163_484_144_400}
        />
      </View>
      <View style={styles.View_163_485}>
        <View style={styles.View_I163_485_144_2324}>
          <Text style={styles.Text_I163_485_144_2324}>Filter</Text>
        </View>
        <View style={styles.View_I163_485_144_2323}>
          <Text style={styles.Text_I163_485_144_2323}>Content</Text>
        </View>
        <View style={styles.View_I163_485_144_2329}>
          <Text style={styles.Text_I163_485_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_163_486}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_I163_486_144_2659}
        />
        <View style={styles.View_I163_486_144_2660}>
          <Text style={styles.Text_I163_486_144_2660}>Search</Text>
        </View>
      </View>
      <View style={styles.View_163_604}>
        <View style={styles.View_I163_604_163_585}>
          <Text style={styles.Text_I163_604_163_585}>Search result</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50be/a4a8/aa006299680cbfb218946adf52d6ec4b"
          }}
          style={styles.ImageBackground_I163_604_163_586}
        />
      </View>
      <View style={styles.View_163_607}>
        <View style={styles.View_I163_607_163_585}>
          <Text style={styles.Text_I163_607_163_585}>Search result</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50be/a4a8/aa006299680cbfb218946adf52d6ec4b"
          }}
          style={styles.ImageBackground_I163_607_163_586}
        />
      </View>
      <View style={styles.View_163_610}>
        <View style={styles.View_I163_610_163_585}>
          <Text style={styles.Text_I163_610_163_585}>Search result</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50be/a4a8/aa006299680cbfb218946adf52d6ec4b"
          }}
          style={styles.ImageBackground_I163_610_163_586}
        />
      </View>
      <View style={styles.View_163_613}>
        <View style={styles.View_I163_613_163_585}>
          <Text style={styles.Text_I163_613_163_585}>Search result</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50be/a4a8/aa006299680cbfb218946adf52d6ec4b"
          }}
          style={styles.ImageBackground_I163_613_163_586}
        />
      </View>
      <View style={styles.View_163_616}>
        <View style={styles.View_I163_616_163_585}>
          <Text style={styles.Text_I163_616_163_585}>Search result</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50be/a4a8/aa006299680cbfb218946adf52d6ec4b"
          }}
          style={styles.ImageBackground_I163_616_163_586}
        />
      </View>
      <View style={styles.View_163_619}>
        <View style={styles.View_I163_619_163_585}>
          <Text style={styles.Text_I163_619_163_585}>Search result</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50be/a4a8/aa006299680cbfb218946adf52d6ec4b"
          }}
          style={styles.ImageBackground_I163_619_163_586}
        />
      </View>
      <View style={styles.View_163_490}>
        <View style={styles.View_I163_490_150_580}>
          <View style={styles.View_I163_490_150_581} />
          <View style={styles.View_I163_490_150_582}>
            <View style={styles.View_I163_490_150_583} />
          </View>
        </View>
        <View style={styles.View_I163_490_150_584}>
          <View style={styles.View_I163_490_150_618} />
          <View style={styles.View_I163_490_150_619} />
          <View style={styles.View_I163_490_150_620} />
          <View style={styles.View_I163_490_150_621} />
          <View style={styles.View_I163_490_150_622} />
        </View>
        <View style={styles.View_I163_490_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_163_484: {
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
  ImageBackground_I163_484_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I163_484_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I163_484_144_387: {
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
  ImageBackground_I163_484_144_391: {
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
  ImageBackground_I163_484_144_395: {
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
  ImageBackground_I163_484_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_163_485: {
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
  View_I163_485_144_2324: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    top: 8
  },
  Text_I163_485_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I163_485_144_2323: {
    flexGrow: 1,
    width: 118,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114,
    top: 0
  },
  Text_I163_485_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I163_485_144_2329: {
    flexGrow: 1,
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I163_485_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_486: {
    flexGrow: 1,
    width: 343,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I163_486_144_2659: {
    flexGrow: 1,
    width: 343,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I163_486_144_2660: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  Text_I163_486_144_2660: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_604: {
    width: 326,
    minWidth: 326,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 210,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_604_163_585: {
    flexGrow: 1,
    width: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I163_604_163_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I163_604_163_586: {
    flexGrow: 1,
    width: 326,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  View_163_607: {
    width: 326,
    minWidth: 326,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 259,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_607_163_585: {
    flexGrow: 1,
    width: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I163_607_163_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I163_607_163_586: {
    flexGrow: 1,
    width: 326,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  View_163_610: {
    width: 326,
    minWidth: 326,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 308,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_610_163_585: {
    flexGrow: 1,
    width: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I163_610_163_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I163_610_163_586: {
    flexGrow: 1,
    width: 326,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  View_163_613: {
    width: 326,
    minWidth: 326,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 357,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_613_163_585: {
    flexGrow: 1,
    width: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I163_613_163_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I163_613_163_586: {
    flexGrow: 1,
    width: 326,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  View_163_616: {
    width: 326,
    minWidth: 326,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 406,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_616_163_585: {
    flexGrow: 1,
    width: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I163_616_163_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I163_616_163_586: {
    flexGrow: 1,
    width: 326,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  View_163_619: {
    width: 326,
    minWidth: 326,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 455,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_619_163_585: {
    flexGrow: 1,
    width: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_I163_619_163_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I163_619_163_586: {
    flexGrow: 1,
    width: 326,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  View_163_490: {
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
  View_I163_490_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I163_490_150_581: {
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
  View_I163_490_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I163_490_150_583: {
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
  View_I163_490_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I163_490_150_618: {
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
  View_I163_490_150_619: {
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
  View_I163_490_150_620: {
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
  View_I163_490_150_621: {
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
  View_I163_490_150_622: {
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
  View_I163_490_150_614: {
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
