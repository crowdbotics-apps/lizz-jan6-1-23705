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
      <View style={styles.View_151_365}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I151_365_144_381}
        />
        <View style={styles.View_I151_365_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I151_365_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I151_365_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I151_365_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I151_365_144_400}
        />
      </View>
      <View style={styles.View_144_2665}>
        <View style={styles.View_I144_2665_144_2324}>
          <Text style={styles.Text_I144_2665_144_2324}>Filter</Text>
        </View>
        <View style={styles.View_I144_2665_144_2323}>
          <Text style={styles.Text_I144_2665_144_2323}>Feed</Text>
        </View>
        <View style={styles.View_I144_2665_144_2329}>
          <Text style={styles.Text_I144_2665_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_144_2666}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/52eb/57549a6c34a2f9d5c44b0bc3442e36e5"
          }}
          style={styles.ImageBackground_I144_2666_144_2659}
        />
        <View style={styles.View_I144_2666_144_2660}>
          <Text style={styles.Text_I144_2666_144_2660}>Search</Text>
        </View>
      </View>
      <View style={styles.View_150_991}>
        <View style={styles.View_150_493}>
          <View style={styles.View_I150_493_147_490} />
          <View style={styles.View_I150_493_147_491}>
            <Text style={styles.Text_I150_493_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_493_147_493}>
            <Text style={styles.Text_I150_493_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_493_147_492}>
            <Text style={styles.Text_I150_493_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_493_147_494}
          />
        </View>
        <View style={styles.View_150_534}>
          <View style={styles.View_I150_534_147_490} />
          <View style={styles.View_I150_534_147_491}>
            <Text style={styles.Text_I150_534_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_534_147_493}>
            <Text style={styles.Text_I150_534_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_534_147_492}>
            <Text style={styles.Text_I150_534_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_534_147_494}
          />
        </View>
        <View style={styles.View_150_540}>
          <View style={styles.View_I150_540_147_490} />
          <View style={styles.View_I150_540_147_491}>
            <Text style={styles.Text_I150_540_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_540_147_493}>
            <Text style={styles.Text_I150_540_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_540_147_492}>
            <Text style={styles.Text_I150_540_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_540_147_494}
          />
        </View>
        <View style={styles.View_150_546}>
          <View style={styles.View_I150_546_147_490} />
          <View style={styles.View_I150_546_147_491}>
            <Text style={styles.Text_I150_546_147_491}>Header</Text>
          </View>
          <View style={styles.View_I150_546_147_493}>
            <Text style={styles.Text_I150_546_147_493}>8m ago</Text>
          </View>
          <View style={styles.View_I150_546_147_492}>
            <Text style={styles.Text_I150_546_147_492}>
              He&#39;ll want to use your yacht, and I don&#39;t want this thing
              smelling like fish.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02c2/45e8/5178e9b1433ff11bdf4885b8fb87cf51"
            }}
            style={styles.ImageBackground_I150_546_147_494}
          />
        </View>
      </View>
      <View style={styles.View_150_552} />
      <View style={styles.View_150_668}>
        <View style={styles.View_I150_668_150_580}>
          <View style={styles.View_I150_668_150_581} />
          <View style={styles.View_I150_668_150_582}>
            <View style={styles.View_I150_668_150_583} />
          </View>
        </View>
        <View style={styles.View_I150_668_150_584}>
          <View style={styles.View_I150_668_150_618} />
          <View style={styles.View_I150_668_150_619} />
          <View style={styles.View_I150_668_150_620} />
          <View style={styles.View_I150_668_150_621} />
          <View style={styles.View_I150_668_150_622} />
        </View>
        <View style={styles.View_I150_668_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_151_365: {
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
  ImageBackground_I151_365_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I151_365_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I151_365_144_387: {
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
  ImageBackground_I151_365_144_391: {
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
  ImageBackground_I151_365_144_395: {
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
  ImageBackground_I151_365_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_144_2665: {
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
  View_I144_2665_144_2324: {
    flexGrow: 1,
    width: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304,
    top: 8
  },
  Text_I144_2665_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I144_2665_144_2323: {
    flexGrow: 1,
    width: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 0
  },
  Text_I144_2665_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I144_2665_144_2329: {
    flexGrow: 1,
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I144_2665_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_2666: {
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
  ImageBackground_I144_2666_144_2659: {
    flexGrow: 1,
    width: 343,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I144_2666_144_2660: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 16
  },
  Text_I144_2666_144_2660: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_150_991: {
    width: 343,
    minWidth: 343,
    height: 356.0000305175781,
    minHeight: 356.0000305175781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 194
  },
  View_150_493: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_493_147_490: {
    flexGrow: 1,
    width: 50,
    height: 50,
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
  View_I150_493_147_491: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_I150_493_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_493_147_493: {
    flexGrow: 1,
    width: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_I150_493_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_493_147_492: {
    flexGrow: 1,
    width: 269,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_I150_493_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_493_147_494: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_150_534: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 93,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_534_147_490: {
    flexGrow: 1,
    width: 50,
    height: 50,
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
  View_I150_534_147_491: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_I150_534_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_534_147_493: {
    flexGrow: 1,
    width: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_I150_534_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_534_147_492: {
    flexGrow: 1,
    width: 269,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_I150_534_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_534_147_494: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_150_540: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 186,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_540_147_490: {
    flexGrow: 1,
    width: 50,
    height: 50,
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
  View_I150_540_147_491: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_I150_540_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_540_147_493: {
    flexGrow: 1,
    width: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_I150_540_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_540_147_492: {
    flexGrow: 1,
    width: 269,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_I150_540_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_540_147_494: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_150_546: {
    flexGrow: 1,
    width: 343,
    height: 77.0000228881836,
    minHeight: 77.0000228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 279,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I150_546_147_490: {
    flexGrow: 1,
    width: 50,
    height: 50,
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
  View_I150_546_147_491: {
    flexGrow: 1,
    width: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 0
  },
  Text_I150_546_147_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_546_147_493: {
    flexGrow: 1,
    width: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 2
  },
  Text_I150_546_147_493: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I150_546_147_492: {
    flexGrow: 1,
    width: 269,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 27
  },
  Text_I150_546_147_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I150_546_147_494: {
    flexGrow: 1,
    width: 277,
    height: 0.000024216111341957003,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 77
  },
  View_150_552: {
    flexGrow: 1,
    width: 343,
    height: 227.98204040527344,
    minHeight: 227.98204040527344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 566,
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_150_668: {
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
  View_I150_668_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I150_668_150_581: {
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
  View_I150_668_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I150_668_150_583: {
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
  View_I150_668_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I150_668_150_618: {
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
  View_I150_668_150_619: {
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
  View_I150_668_150_620: {
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
  View_I150_668_150_621: {
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
  View_I150_668_150_622: {
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
  View_I150_668_150_614: {
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
