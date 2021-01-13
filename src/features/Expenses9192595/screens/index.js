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
      <View style={styles.View_177_1431}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I177_1431_144_381}
        />
        <View style={styles.View_I177_1431_144_386}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I177_1431_144_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I177_1431_144_391}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I177_1431_144_395}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/665c/8610/b99729a49033a1a93a78f519fb447096"
          }}
          style={styles.ImageBackground_I177_1431_144_400}
        />
      </View>
      <View style={styles.View_177_1432}>
        <View style={styles.View_I177_1432_144_2324}>
          <Text style={styles.Text_I177_1432_144_2324}>New</Text>
        </View>
        <View style={styles.View_I177_1432_144_2323}>
          <Text style={styles.Text_I177_1432_144_2323}>Expenses</Text>
        </View>
        <View style={styles.View_I177_1432_144_2329}>
          <Text style={styles.Text_I177_1432_144_2329}>Back</Text>
        </View>
      </View>
      <View style={styles.View_179_547}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbde/523c/77eaf514e18af32c7d9775d639fa3ae1"
          }}
          style={styles.ImageBackground_I179_547_179_54}
        />
        <View style={styles.View_I179_547_179_496}>
          <View style={styles.View_I179_547_179_397}>
            <View style={styles.View_I179_547_179_307}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_307_179_63}
              />
              <View style={styles.View_I179_547_179_307_179_348}>
                <Text style={styles.Text_I179_547_179_307_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_393}>
              <View style={styles.View_I179_547_179_393_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_398}>
            <View style={styles.View_I179_547_179_399}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_399_179_63}
              />
              <View style={styles.View_I179_547_179_399_179_348}>
                <Text style={styles.Text_I179_547_179_399_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_400}>
              <View style={styles.View_I179_547_179_400_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_404}>
            <View style={styles.View_I179_547_179_405}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_405_179_63}
              />
              <View style={styles.View_I179_547_179_405_179_348}>
                <Text style={styles.Text_I179_547_179_405_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_406}>
              <View style={styles.View_I179_547_179_406_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_410}>
            <View style={styles.View_I179_547_179_411}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_411_179_63}
              />
              <View style={styles.View_I179_547_179_411_179_348}>
                <Text style={styles.Text_I179_547_179_411_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_412}>
              <View style={styles.View_I179_547_179_412_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_416}>
            <View style={styles.View_I179_547_179_417}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_417_179_63}
              />
              <View style={styles.View_I179_547_179_417_179_348}>
                <Text style={styles.Text_I179_547_179_417_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_418}>
              <View style={styles.View_I179_547_179_418_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_422}>
            <View style={styles.View_I179_547_179_423}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_423_179_63}
              />
              <View style={styles.View_I179_547_179_423_179_348}>
                <Text style={styles.Text_I179_547_179_423_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_424}>
              <View style={styles.View_I179_547_179_424_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_428}>
            <View style={styles.View_I179_547_179_429}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_429_179_63}
              />
              <View style={styles.View_I179_547_179_429_179_348}>
                <Text style={styles.Text_I179_547_179_429_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_430}>
              <View style={styles.View_I179_547_179_430_179_58} />
            </View>
          </View>
          <View style={styles.View_I179_547_179_440}>
            <View style={styles.View_I179_547_179_441}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2f7/0d02/8e3a5adca6230c54c6a3f20b1408208c"
                }}
                style={styles.ImageBackground_I179_547_179_441_179_63}
              />
              <View style={styles.View_I179_547_179_441_179_348}>
                <Text style={styles.Text_I179_547_179_441_179_348}>Item</Text>
              </View>
            </View>
            <View style={styles.View_I179_547_179_442}>
              <View style={styles.View_I179_547_179_442_179_58} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_179_661}>
        <View style={styles.View_179_598}>
          <Text style={styles.Text_179_598}>Expenses</Text>
        </View>
        <View style={styles.View_179_631}>
          <View style={styles.View_I179_631_179_605}>
            <Text style={styles.Text_I179_631_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_631_179_617}>
            <Text style={styles.Text_I179_631_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_631_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_631_179_608}
          />
        </View>
        <View style={styles.View_179_636}>
          <View style={styles.View_I179_636_179_605}>
            <Text style={styles.Text_I179_636_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_636_179_617}>
            <Text style={styles.Text_I179_636_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_636_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_636_179_608}
          />
        </View>
        <View style={styles.View_179_641}>
          <View style={styles.View_I179_641_179_605}>
            <Text style={styles.Text_I179_641_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_641_179_617}>
            <Text style={styles.Text_I179_641_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_641_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_641_179_608}
          />
        </View>
        <View style={styles.View_179_646}>
          <View style={styles.View_I179_646_179_605}>
            <Text style={styles.Text_I179_646_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_646_179_617}>
            <Text style={styles.Text_I179_646_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_646_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_646_179_608}
          />
        </View>
        <View style={styles.View_179_651}>
          <View style={styles.View_I179_651_179_605}>
            <Text style={styles.Text_I179_651_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_651_179_617}>
            <Text style={styles.Text_I179_651_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_651_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
            }}
            style={styles.ImageBackground_I179_651_179_608}
          />
        </View>
        <View style={styles.View_179_656}>
          <View style={styles.View_I179_656_179_605}>
            <Text style={styles.Text_I179_656_179_605}>Item</Text>
          </View>
          <View style={styles.View_I179_656_179_617}>
            <Text style={styles.Text_I179_656_179_617}>Statistic</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
            }}
            style={styles.ImageBackground_I179_656_179_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d45/2a8f/bf4e0883d719004a9c58e5b230a7ad30"
            }}
            style={styles.ImageBackground_I179_656_179_608}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_177_1431: {
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
  ImageBackground_I177_1431_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I177_1431_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I177_1431_144_387: {
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
  ImageBackground_I177_1431_144_391: {
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
  ImageBackground_I177_1431_144_395: {
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
  ImageBackground_I177_1431_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_177_1432: {
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
  View_I177_1432_144_2324: {
    flexGrow: 1,
    width: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 308,
    top: 8
  },
  Text_I177_1432_144_2324: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I177_1432_144_2323: {
    flexGrow: 1,
    width: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 0
  },
  Text_I177_1432_144_2323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I177_1432_144_2329: {
    flexGrow: 1,
    width: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8
  },
  Text_I177_1432_144_2329: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_547: {
    width: 343,
    minWidth: 343,
    height: 231,
    minHeight: 231,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_54: {
    flexGrow: 1,
    width: 343,
    height: 232,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I179_547_179_496: {
    flexGrow: 1,
    width: 310,
    height: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 16
  },
  View_I179_547_179_397: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I179_547_179_307: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_307_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_307_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_307_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_393: {
    width: 16,
    minWidth: 16,
    height: 117,
    minHeight: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 49,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_393_179_58: {
    flexGrow: 1,
    width: 16,
    height: 117,
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
  View_I179_547_179_398: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 0
  },
  View_I179_547_179_399: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_399_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_399_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_399_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_400: {
    width: 16,
    minWidth: 16,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 89,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_400_179_58: {
    flexGrow: 1,
    width: 16,
    height: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I179_547_179_404: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 0
  },
  View_I179_547_179_405: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_405_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_405_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_405_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_406: {
    width: 16,
    minWidth: 16,
    height: 117,
    minHeight: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 49,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_406_179_58: {
    flexGrow: 1,
    width: 16,
    height: 117,
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
  View_I179_547_179_410: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 0
  },
  View_I179_547_179_411: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_411_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_411_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_411_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_412: {
    width: 16,
    minWidth: 16,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 89,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_412_179_58: {
    flexGrow: 1,
    width: 16,
    height: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I179_547_179_416: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 0
  },
  View_I179_547_179_417: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_417_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_417_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_417_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_418: {
    width: 16,
    minWidth: 16,
    height: 117,
    minHeight: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 49,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_418_179_58: {
    flexGrow: 1,
    width: 16,
    height: 117,
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
  View_I179_547_179_422: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 200,
    top: 0
  },
  View_I179_547_179_423: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_423_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_423_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_423_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_424: {
    width: 16,
    minWidth: 16,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 89,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_424_179_58: {
    flexGrow: 1,
    width: 16,
    height: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I179_547_179_428: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 240,
    top: 0
  },
  View_I179_547_179_429: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_429_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_429_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_429_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_430: {
    width: 16,
    minWidth: 16,
    height: 117,
    minHeight: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 49,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_430_179_58: {
    flexGrow: 1,
    width: 16,
    height: 117,
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
  View_I179_547_179_440: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 0
  },
  View_I179_547_179_441: {
    width: 30,
    minWidth: 30,
    height: 202,
    minHeight: 202,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_547_179_441_179_63: {
    flexGrow: 1,
    width: 16,
    height: 159,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0
  },
  View_I179_547_179_441_179_348: {
    flexGrow: 1,
    width: 23.33452796936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.212890625,
    top: 167
  },
  Text_I179_547_179_441_179_348: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_547_179_442: {
    width: 16,
    minWidth: 16,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 89,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_547_179_442_179_58: {
    flexGrow: 1,
    width: 16,
    height: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(75, 148, 96, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_179_661: {
    width: 343,
    minWidth: 343,
    height: 351,
    minHeight: 351,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 391
  },
  View_179_598: {
    flexGrow: 1,
    width: 343,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_179_598: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_631: {
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
  View_I179_631_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_631_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_631_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_631_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_631_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_631_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_636: {
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
  View_I179_636_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_636_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_636_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_636_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_636_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_636_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_641: {
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
  View_I179_641_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_641_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_641_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_641_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_641_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_641_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_646: {
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
  View_I179_646_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_646_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_646_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_646_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_646_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_646_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_651: {
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
  View_I179_651_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_651_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_651_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_651_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_651_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_651_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_656: {
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
  View_I179_656_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I179_656_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_656_179_617: {
    flexGrow: 1,
    width: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 0
  },
  Text_I179_656_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I179_656_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I179_656_179_608: {
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
