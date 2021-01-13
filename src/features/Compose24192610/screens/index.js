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
      <View style={styles.View_163_92}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I163_92_144_381}
        />
        <View style={styles.View_I163_92_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I163_92_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I163_92_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I163_92_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I163_92_144_400}
        />
      </View>
      <View style={styles.View_163_93}>
        <View style={styles.View_I163_93_144_2323}>
          <Text style={styles.Text_I163_93_144_2323}>Compose</Text>
        </View>
        <View style={styles.View_I163_93_144_2329}>
          <Text style={styles.Text_I163_93_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_163_166}>
        <Text style={styles.Text_163_166}>Compose your message here...</Text>
      </View>
      <View style={styles.View_163_101}>
        <View style={styles.View_I163_101_144_2127}>
          <Text style={styles.Text_I163_101_144_2127}>Send</Text>
        </View>
      </View>
      <View style={styles.View_163_171}>
        <View style={styles.View_I163_171_144_926}>
          <View style={styles.View_I163_171_144_927} />
        </View>
        <View style={styles.View_I163_171_144_928}>
          <View style={styles.View_I163_171_144_929} />
        </View>
        <View style={styles.View_I163_171_144_930}>
          <View style={styles.View_I163_171_144_931}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
              }}
              style={styles.ImageBackground_I163_171_144_932}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
              }}
              style={styles.ImageBackground_I163_171_144_938}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf2/ae37/5fa6fd4ff8d0a4c08a929adc1044ab21"
              }}
              style={styles.ImageBackground_I163_171_144_939}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
            }}
            style={styles.ImageBackground_I163_171_144_940}
          />
          <View style={styles.View_I163_171_144_947}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/bf8d/925017302edca47807f877089a17458f"
              }}
              style={styles.ImageBackground_I163_171_144_948}
            />
            <View style={styles.View_I163_171_144_949}>
              <Text style={styles.Text_I163_171_144_949}>Go</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb1e/fafc/38bd3f8bc8fcd8744e55cb82fb70b08c"
              }}
              style={styles.ImageBackground_I163_171_144_951}
            />
            <View style={styles.View_I163_171_144_952}>
              <Text style={styles.Text_I163_171_144_952}>space</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_953}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acdd/463d/0100a1c79169024aefd5598942a33048"
              }}
              style={styles.ImageBackground_I163_171_144_954}
            />
            <View style={styles.View_I163_171_144_955}>
              <Text style={styles.Text_I163_171_144_955}>123</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_956}>
            <View style={styles.View_I163_171_144_957}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb20/c976/95b76f9efb93520a356a6e2c5c3a165f"
                }}
                style={styles.ImageBackground_I163_171_144_958}
              />
              <View style={styles.View_I163_171_144_959}>
                <Text style={styles.Text_I163_171_144_959}> </Text>
              </View>
            </View>
            <View style={styles.View_I163_171_144_960}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c39/64fb/b73a8085ea4531d8f63951d655fd1d31"
                }}
                style={styles.ImageBackground_I163_171_144_961}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5e/469c/ab3e38f9d7e0700ffd7f6a210831a60a"
                }}
                style={styles.ImageBackground_I163_171_144_964}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I163_171_144_965}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I163_171_144_966}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I163_171_144_967}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I163_171_144_968}
              />
            </View>
          </View>
          <View style={styles.View_I163_171_144_969}>
            <View style={styles.View_I163_171_144_970}>
              <View style={styles.View_I163_171_144_971} />
              <View style={styles.View_I163_171_144_972}>
                <Text style={styles.Text_I163_171_144_972}> </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38db/3040/83282692e8b1d666d7858bbe0d4e3edc"
              }}
              style={styles.ImageBackground_I163_171_144_973}
            />
          </View>
          <View style={styles.View_I163_171_144_974}>
            <View style={styles.View_I163_171_144_975} />
            <View style={styles.View_I163_171_144_976}>
              <Text style={styles.Text_I163_171_144_976}>M</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_977}>
            <View style={styles.View_I163_171_144_978} />
            <View style={styles.View_I163_171_144_979}>
              <Text style={styles.Text_I163_171_144_979}>N</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_980}>
            <View style={styles.View_I163_171_144_981} />
            <View style={styles.View_I163_171_144_982}>
              <Text style={styles.Text_I163_171_144_982}>B</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_983}>
            <View style={styles.View_I163_171_144_984} />
            <View style={styles.View_I163_171_144_985}>
              <Text style={styles.Text_I163_171_144_985}>V</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_986}>
            <View style={styles.View_I163_171_144_987} />
            <View style={styles.View_I163_171_144_988}>
              <Text style={styles.Text_I163_171_144_988}>C</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_989}>
            <View style={styles.View_I163_171_144_990} />
            <View style={styles.View_I163_171_144_991}>
              <Text style={styles.Text_I163_171_144_991}>X</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_992}>
            <View style={styles.View_I163_171_144_993} />
            <View style={styles.View_I163_171_144_994}>
              <Text style={styles.Text_I163_171_144_994}>Z</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_995}>
            <View style={styles.View_I163_171_144_996} />
            <View style={styles.View_I163_171_144_997}>
              <Text style={styles.Text_I163_171_144_997}>L</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_998}>
            <View style={styles.View_I163_171_144_999} />
            <View style={styles.View_I163_171_144_1000}>
              <Text style={styles.Text_I163_171_144_1000}>K</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1001}>
            <View style={styles.View_I163_171_144_1002} />
            <View style={styles.View_I163_171_144_1003}>
              <Text style={styles.Text_I163_171_144_1003}>J</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1004}>
            <View style={styles.View_I163_171_144_1005} />
            <View style={styles.View_I163_171_144_1006}>
              <Text style={styles.Text_I163_171_144_1006}>H</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1007}>
            <View style={styles.View_I163_171_144_1008} />
            <View style={styles.View_I163_171_144_1009}>
              <Text style={styles.Text_I163_171_144_1009}>G</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1010}>
            <View style={styles.View_I163_171_144_1011} />
            <View style={styles.View_I163_171_144_1012}>
              <Text style={styles.Text_I163_171_144_1012}>F</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1013}>
            <View style={styles.View_I163_171_144_1014} />
            <View style={styles.View_I163_171_144_1015}>
              <Text style={styles.Text_I163_171_144_1015}>D</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1016}>
            <View style={styles.View_I163_171_144_1017} />
            <View style={styles.View_I163_171_144_1018}>
              <Text style={styles.Text_I163_171_144_1018}>S</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1019}>
            <View style={styles.View_I163_171_144_1020} />
            <View style={styles.View_I163_171_144_1021}>
              <Text style={styles.Text_I163_171_144_1021}>A</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1022}>
            <View style={styles.View_I163_171_144_1023} />
            <View style={styles.View_I163_171_144_1024}>
              <Text style={styles.Text_I163_171_144_1024}>P</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1025}>
            <View style={styles.View_I163_171_144_1026} />
            <View style={styles.View_I163_171_144_1027}>
              <Text style={styles.Text_I163_171_144_1027}>O</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1028}>
            <View style={styles.View_I163_171_144_1029} />
            <View style={styles.View_I163_171_144_1030}>
              <Text style={styles.Text_I163_171_144_1030}>I</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1031}>
            <View style={styles.View_I163_171_144_1032} />
            <View style={styles.View_I163_171_144_1033}>
              <Text style={styles.Text_I163_171_144_1033}>U</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1034}>
            <View style={styles.View_I163_171_144_1035} />
            <View style={styles.View_I163_171_144_1036}>
              <Text style={styles.Text_I163_171_144_1036}>Y</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1037}>
            <View style={styles.View_I163_171_144_1038} />
            <View style={styles.View_I163_171_144_1039}>
              <Text style={styles.Text_I163_171_144_1039}>T</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1040}>
            <View style={styles.View_I163_171_144_1041} />
            <View style={styles.View_I163_171_144_1042}>
              <Text style={styles.Text_I163_171_144_1042}>R</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1043}>
            <View style={styles.View_I163_171_144_1044} />
            <View style={styles.View_I163_171_144_1045}>
              <Text style={styles.Text_I163_171_144_1045}>E</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1046}>
            <View style={styles.View_I163_171_144_1047} />
            <View style={styles.View_I163_171_144_1048}>
              <Text style={styles.Text_I163_171_144_1048}>W</Text>
            </View>
          </View>
          <View style={styles.View_I163_171_144_1049}>
            <View style={styles.View_I163_171_144_1050} />
            <View style={styles.View_I163_171_144_1051}>
              <Text style={styles.Text_I163_171_144_1051}>Q</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_163_92: {
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
  ImageBackground_I163_92_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I163_92_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I163_92_144_387: {
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
  ImageBackground_I163_92_144_391: {
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
  ImageBackground_I163_92_144_395: {
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
  ImageBackground_I163_92_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_163_93: {
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
  View_I163_93_144_2323: {
    flexGrow: 1,
    width: 139,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 0
  },
  Text_I163_93_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I163_93_144_2329: {
    flexGrow: 1,
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I163_93_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_166: {
    width: 237,
    minWidth: 237,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 143
  },
  Text_163_166: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_101: {
    flexGrow: 1,
    width: 343,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 454,
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I163_101_144_2127: {
    flexGrow: 1,
    width: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 151.5,
    top: 16
  },
  Text_I163_101_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_171: {
    width: 375,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 521,
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I163_171_144_926: {
    flexGrow: 1,
    width: 375,
    height: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_927: {
    width: 375,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I163_171_144_928: {
    flexGrow: 1,
    width: 375,
    height: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 257,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_929: {
    width: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_930: {
    flexGrow: 1,
    width: 369,
    height: 259,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 8
  },
  View_I163_171_144_931: {
    width: 15,
    height: 25,
    top: 233,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327
  },
  ImageBackground_I163_171_144_932: {
    width: 15,
    height: 14.668194770812988,
    top: 10.331787109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I163_171_144_938: {
    width: 9.007393836975098,
    height: 17.995893478393555,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3
  },
  ImageBackground_I163_171_144_939: {
    width: 5.673436164855957,
    height: 14.668208122253418,
    top: 1.66754150390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.666015625
  },
  ImageBackground_I163_171_144_940: {
    width: 27,
    height: 27,
    top: 232,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22
  },
  View_I163_171_144_947: {
    width: 88,
    height: 42,
    top: 162,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I163_171_144_948: {
    flexGrow: 1,
    width: 88,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I163_171_144_949: {
    flexGrow: 1,
    width: 88,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I163_171_144_949: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I163_171_144_950: {
    width: 182,
    height: 42,
    top: 162,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I163_171_144_951: {
    flexGrow: 1,
    width: 182,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I163_171_144_952: {
    flexGrow: 1,
    width: 182,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I163_171_144_952: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I163_171_144_953: {
    width: 87,
    height: 42,
    top: 162,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I163_171_144_954: {
    flexGrow: 1,
    width: 87,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I163_171_144_955: {
    flexGrow: 1,
    width: 87,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I163_171_144_955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I163_171_144_956: {
    width: 42,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327
  },
  View_I163_171_144_957: {
    width: 42,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I163_171_144_958: {
    flexGrow: 1,
    width: 42,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I163_171_144_959: {
    flexGrow: 1,
    width: 42,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_I163_171_144_959: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I163_171_144_960: {
    width: 22.65999984741211,
    height: 16.994192123413086,
    top: 12.6600341796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.66015625
  },
  ImageBackground_I163_171_144_961: {
    width: 22.65999984741211,
    height: 16.994192123413086,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I163_171_144_964: {
    width: 6.690676212310791,
    height: 6.684382438659668,
    top: 5.14862060546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.35498046875
  },
  ImageBackground_I163_171_144_965: {
    width: 1.127640724182129,
    height: 1.1285737752914429,
    top: 4.97613525390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.07666015625
  },
  ImageBackground_I163_171_144_966: {
    width: 1.1329461336135864,
    height: 1.1329798698425293,
    top: 10.85736083984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.18994140625
  },
  ImageBackground_I163_171_144_967: {
    width: 1.1285737752914429,
    height: 1.127640724182129,
    top: 10.8638916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.08642578125
  },
  ImageBackground_I163_171_144_968: {
    width: 1.1329798698425293,
    height: 1.1329461336135864,
    top: 4.977294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.20068359375
  },
  View_I163_171_144_969: {
    width: 42,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I163_171_144_970: {
    width: 42,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_971: {
    flexGrow: 1,
    width: 42,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_972: {
    width: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.1875,
    top: 8
  },
  Text_I163_171_144_972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  ImageBackground_I163_171_144_973: {
    width: 18.8799991607666,
    height: 16.456270217895508,
    top: 12.20001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.66015625
  },
  View_I163_171_144_974: {
    width: 32,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_975: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_976: {
    width: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 8
  },
  Text_I163_171_144_976: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_977: {
    width: 32,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_978: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_979: {
    width: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_979: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_980: {
    width: 32,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_981: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_982: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_983: {
    width: 32,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_984: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_985: {
    width: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_985: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_986: {
    width: 32,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_987: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_988: {
    width: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_988: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_989: {
    width: 32,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_990: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_991: {
    width: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_991: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_992: {
    width: 32,
    height: 42,
    top: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_993: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_994: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_994: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_995: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_996: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_997: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 8
  },
  Text_I163_171_144_997: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_998: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_999: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1000: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_1000: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1001: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1002: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1003: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 8
  },
  Text_I163_171_144_1003: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1004: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1005: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1006: {
    width: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_1006: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1007: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1008: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1009: {
    width: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_1009: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1010: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1011: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1012: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 8
  },
  Text_I163_171_144_1012: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1013: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1014: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1015: {
    width: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_1015: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1016: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1017: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1018: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_1018: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1019: {
    width: 32,
    height: 42,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1020: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1021: {
    width: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_1021: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1022: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1023: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1024: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_1024: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1025: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1026: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1027: {
    width: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 8
  },
  Text_I163_171_144_1027: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1028: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1029: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1030: {
    width: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 8
  },
  Text_I163_171_144_1030: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1031: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1032: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1033: {
    width: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 8
  },
  Text_I163_171_144_1033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1034: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1035: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1036: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_1036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1037: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1038: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1039: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_1039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1040: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1041: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1042: {
    width: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_1042: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1043: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1044: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1045: {
    width: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  Text_I163_171_144_1045: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1046: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1047: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1048: {
    width: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 8
  },
  Text_I163_171_144_1048: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
    textTransform: "none"
  },
  View_I163_171_144_1049: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I163_171_144_1050: {
    flexGrow: 1,
    width: 32,
    height: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 252, 254, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I163_171_144_1051: {
    width: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 8
  },
  Text_I163_171_144_1051: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5547059178352356,
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
