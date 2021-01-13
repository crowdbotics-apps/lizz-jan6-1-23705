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
      <View style={styles.View_179_663}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I179_663_144_381}
        />
        <View style={styles.View_I179_663_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I179_663_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I179_663_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I179_663_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I179_663_144_400}
        />
      </View>
      <View style={styles.View_179_664}>
        <View style={styles.View_I179_664_144_2323}>
          <Text style={styles.Text_I179_664_144_2323}>Insights</Text>
        </View>
        <View style={styles.View_I179_664_144_2329}>
          <Text style={styles.Text_I179_664_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_179_674}>
        <View style={styles.View_I179_674_150_580}>
          <View style={styles.View_I179_674_150_581} />
          <View style={styles.View_I179_674_150_582}>
            <View style={styles.View_I179_674_150_583} />
          </View>
        </View>
        <View style={styles.View_I179_674_150_584}>
          <View style={styles.View_I179_674_150_618} />
          <View style={styles.View_I179_674_150_619} />
          <View style={styles.View_I179_674_150_620} />
          <View style={styles.View_I179_674_150_621} />
          <View style={styles.View_I179_674_150_622} />
        </View>
        <View style={styles.View_I179_674_150_614} />
      </View>
      <View style={styles.View_179_715}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c7/1f22/a7957af9263f6620818e254869b43a86"
          }}
          style={styles.ImageBackground_179_713}
        />
        <View style={styles.View_179_716}>
          <Text style={styles.Text_179_716}>$32.01</Text>
        </View>
        <View style={styles.View_179_717}>
          <Text style={styles.Text_179_717}>70% spent</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f48f/056d/ce59b9219ce460725d13aeaa559751cf"
          }}
          style={styles.ImageBackground_179_714}
        />
      </View>
      <View style={styles.View_179_718}>
        <View style={styles.View_179_719}>
          <Text style={styles.Text_179_719}>Expenses</Text>
        </View>
        <View style={styles.View_179_720}>
          <View style={styles.View_I179_720_179_605}>
            <Text style={styles.Text_I179_720_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_720_179_617}>
            <Text style={styles.Text_I179_720_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_720_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_720_179_608}
          />
        </View>
        <View style={styles.View_179_721}>
          <View style={styles.View_I179_721_179_605}>
            <Text style={styles.Text_I179_721_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_721_179_617}>
            <Text style={styles.Text_I179_721_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_721_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_721_179_608}
          />
        </View>
        <View style={styles.View_179_722}>
          <View style={styles.View_I179_722_179_605}>
            <Text style={styles.Text_I179_722_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_722_179_617}>
            <Text style={styles.Text_I179_722_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_722_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_722_179_608}
          />
        </View>
        <View style={styles.View_179_723}>
          <View style={styles.View_I179_723_179_605}>
            <Text style={styles.Text_I179_723_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_723_179_617}>
            <Text style={styles.Text_I179_723_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_723_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_723_179_608}
          />
        </View>
        <View style={styles.View_179_724}>
          <View style={styles.View_I179_724_179_605}>
            <Text style={styles.Text_I179_724_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_724_179_617}>
            <Text style={styles.Text_I179_724_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_724_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_724_179_608}
          />
        </View>
        <View style={styles.View_179_725}>
          <View style={styles.View_I179_725_179_605}>
            <Text style={styles.Text_I179_725_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_725_179_617}>
            <Text style={styles.Text_I179_725_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_725_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_725_179_608}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_179_663: {
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
  ImageBackground_I179_663_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I179_663_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I179_663_144_387: {
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
  ImageBackground_I179_663_144_391: {
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
  ImageBackground_I179_663_144_395: {
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
  ImageBackground_I179_663_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_179_664: {
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
  View_I179_664_144_2323: {
    flexGrow: 1,
    width: 116,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 0
  },
  Text_I179_664_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_664_144_2329: {
    flexGrow: 1,
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I179_664_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_674: {
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
  View_I179_674_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I179_674_150_581: {
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
  View_I179_674_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I179_674_150_583: {
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
  View_I179_674_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I179_674_150_618: {
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
  View_I179_674_150_619: {
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
  View_I179_674_150_620: {
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
  View_I179_674_150_621: {
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
  View_I179_674_150_622: {
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
  View_I179_674_150_614: {
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
  View_179_715: {
    width: 196,
    minWidth: 196,
    height: 196,
    minHeight: 196,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 128
  },
  ImageBackground_179_713: {
    width: 196,
    minWidth: 196,
    height: 196,
    minHeight: 196,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_179_716: {
    width: 79,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58,
    top: 80
  },
  Text_179_716: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_717: {
    width: 50,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 117
  },
  Text_179_717: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_179_714: {
    width: 196,
    minWidth: 196,
    height: 196,
    minHeight: 196,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_179_718: {
    width: 343,
    minWidth: 343,
    height: 351,
    minHeight: 351,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 356
  },
  View_179_719: {
    flexGrow: 1,
    width: 343,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_179_719: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_720: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 61,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_720_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_720_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_720_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_720_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_720_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_720_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_721: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 112,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_721_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_721_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_721_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_721_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_721_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_721_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_722: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 163,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_722_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_722_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_722_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_722_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_722_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_722_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_723: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 214,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_723_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_723_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_723_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_723_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_723_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_723_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_724: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 265,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_724_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_724_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_724_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_724_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_724_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_724_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_725: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 316,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_725_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_725_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_725_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_725_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_725_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_725_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
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
