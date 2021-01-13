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
      <View style={styles.View_187_248}>
        <View style={styles.View_179_829} />
        <View style={styles.View_186_1548}>
          <View style={styles.View_186_1490}>
            <Text style={styles.Text_186_1490}>Mo</Text>
          </View>
          <View style={styles.View_186_1491}>
            <Text style={styles.Text_186_1491}>Tu</Text>
          </View>
          <View style={styles.View_186_1492}>
            <Text style={styles.Text_186_1492}>We</Text>
          </View>
          <View style={styles.View_186_1493}>
            <Text style={styles.Text_186_1493}>Th</Text>
          </View>
          <View style={styles.View_186_1494}>
            <Text style={styles.Text_186_1494}>Fr</Text>
          </View>
          <View style={styles.View_186_1495}>
            <Text style={styles.Text_186_1495}>Sa</Text>
          </View>
          <View style={styles.View_186_1496}>
            <Text style={styles.Text_186_1496}>Su</Text>
          </View>
        </View>
        <View style={styles.View_187_38}>
          <View style={styles.View_187_40}>
            <Text style={styles.Text_187_40}>29</Text>
          </View>
          <View style={styles.View_187_42}>
            <Text style={styles.Text_187_42}>30</Text>
          </View>
          <View style={styles.View_187_44}>
            <Text style={styles.Text_187_44}>31</Text>
          </View>
          <View style={styles.View_187_46}>
            <Text style={styles.Text_187_46}>1</Text>
          </View>
          <View style={styles.View_187_48}>
            <Text style={styles.Text_187_48}>2</Text>
          </View>
          <View style={styles.View_187_50}>
            <Text style={styles.Text_187_50}>3</Text>
          </View>
          <View style={styles.View_187_51}>
            <Text style={styles.Text_187_51}>4</Text>
          </View>
        </View>
        <View style={styles.View_187_83}>
          <View style={styles.View_187_84}>
            <Text style={styles.Text_187_84}>5</Text>
          </View>
          <View style={styles.View_187_85}>
            <Text style={styles.Text_187_85}>6</Text>
          </View>
          <View style={styles.View_187_86}>
            <Text style={styles.Text_187_86}>7</Text>
          </View>
          <View style={styles.View_187_87}>
            <Text style={styles.Text_187_87}>8</Text>
          </View>
          <View style={styles.View_187_88}>
            <Text style={styles.Text_187_88}>9</Text>
          </View>
          <View style={styles.View_187_89}>
            <Text style={styles.Text_187_89}>10</Text>
          </View>
          <View style={styles.View_187_90}>
            <Text style={styles.Text_187_90}>11</Text>
          </View>
        </View>
        <View style={styles.View_187_91}>
          <View style={styles.View_187_92}>
            <Text style={styles.Text_187_92}>12</Text>
          </View>
          <View style={styles.View_187_93}>
            <Text style={styles.Text_187_93}>13</Text>
          </View>
          <View style={styles.View_187_94}>
            <Text style={styles.Text_187_94}>14</Text>
          </View>
          <View style={styles.View_187_95}>
            <Text style={styles.Text_187_95}>15</Text>
          </View>
          <View style={styles.View_187_96}>
            <Text style={styles.Text_187_96}>16</Text>
          </View>
          <View style={styles.View_187_97}>
            <Text style={styles.Text_187_97}>17</Text>
          </View>
          <View style={styles.View_187_98}>
            <Text style={styles.Text_187_98}>18</Text>
          </View>
        </View>
        <View style={styles.View_187_99}>
          <View style={styles.View_187_100}>
            <Text style={styles.Text_187_100}>19</Text>
          </View>
          <View style={styles.View_187_101}>
            <Text style={styles.Text_187_101}>20</Text>
          </View>
          <View style={styles.View_187_102}>
            <Text style={styles.Text_187_102}>21</Text>
          </View>
          <View style={styles.View_187_103}>
            <Text style={styles.Text_187_103}>22</Text>
          </View>
          <View style={styles.View_187_104}>
            <Text style={styles.Text_187_104}>23</Text>
          </View>
          <View style={styles.View_187_105}>
            <Text style={styles.Text_187_105}>24</Text>
          </View>
          <View style={styles.View_187_106}>
            <Text style={styles.Text_187_106}>25</Text>
          </View>
        </View>
        <View style={styles.View_187_107}>
          <View style={styles.View_187_108}>
            <Text style={styles.Text_187_108}>26</Text>
          </View>
          <View style={styles.View_187_109}>
            <Text style={styles.Text_187_109}>27</Text>
          </View>
          <View style={styles.View_187_110}>
            <Text style={styles.Text_187_110}>28</Text>
          </View>
          <View style={styles.View_187_111}>
            <Text style={styles.Text_187_111}>29</Text>
          </View>
          <View style={styles.View_187_112}>
            <Text style={styles.Text_187_112}>30</Text>
          </View>
          <View style={styles.View_187_113}>
            <Text style={styles.Text_187_113}>31</Text>
          </View>
          <View style={styles.View_187_115}>
            <Text style={styles.Text_187_115}>1</Text>
          </View>
        </View>
        <View style={styles.View_187_249}>
          <View style={styles.View_187_116}>
            <View style={styles.View_I187_116_179_605}>
              <Text style={styles.Text_I187_116_179_605}>Item</Text>
            </View>
            <View style={styles.View_I187_116_179_617}>
              <Text style={styles.Text_I187_116_179_617}>30min.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
              }}
              style={styles.ImageBackground_I187_116_179_606}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
              }}
              style={styles.ImageBackground_I187_116_179_608}
            />
          </View>
          <View style={styles.View_187_121}>
            <View style={styles.View_I187_121_179_605}>
              <Text style={styles.Text_I187_121_179_605}>Item</Text>
            </View>
            <View style={styles.View_I187_121_179_617}>
              <Text style={styles.Text_I187_121_179_617}>60min.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
              }}
              style={styles.ImageBackground_I187_121_179_606}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
              }}
              style={styles.ImageBackground_I187_121_179_608}
            />
          </View>
          <View style={styles.View_187_126}>
            <View style={styles.View_I187_126_179_605}>
              <Text style={styles.Text_I187_126_179_605}>Item</Text>
            </View>
            <View style={styles.View_I187_126_179_617}>
              <Text style={styles.Text_I187_126_179_617}>30min.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
              }}
              style={styles.ImageBackground_I187_126_179_606}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
              }}
              style={styles.ImageBackground_I187_126_179_608}
            />
          </View>
          <View style={styles.View_187_131}>
            <View style={styles.View_I187_131_179_605}>
              <Text style={styles.Text_I187_131_179_605}>Item</Text>
            </View>
            <View style={styles.View_I187_131_179_617}>
              <Text style={styles.Text_I187_131_179_617}>15min.</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce09/e15a/c87bdd97b603c7bc3a78873229bf522c"
              }}
              style={styles.ImageBackground_I187_131_179_606}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e59/e7b6/3b245812081dfbd3cc9fce71e79abfb7"
              }}
              style={styles.ImageBackground_I187_131_179_608}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_179_751}>
        <View style={styles.View_I179_751_144_356}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
            }}
            style={styles.ImageBackground_I179_751_144_356_144_381}
          />
          <View style={styles.View_I179_751_144_356_144_386}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
              }}
              style={styles.ImageBackground_I179_751_144_356_144_387}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
              }}
              style={styles.ImageBackground_I179_751_144_356_144_391}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
              }}
              style={styles.ImageBackground_I179_751_144_356_144_395}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1824/9aa5/06f6b9995237174c8b3aedbe446c444a"
            }}
            style={styles.ImageBackground_I179_751_144_356_144_400}
          />
        </View>
      </View>
      <View style={styles.View_179_752}>
        <View style={styles.View_I179_752_144_2323}>
          <Text style={styles.Text_I179_752_144_2323}>March</Text>
        </View>
      </View>
      <View style={styles.View_179_753}>
        <View style={styles.View_I179_753_150_580}>
          <View style={styles.View_I179_753_150_581} />
          <View style={styles.View_I179_753_150_582}>
            <View style={styles.View_I179_753_150_583} />
          </View>
        </View>
        <View style={styles.View_I179_753_150_584}>
          <View style={styles.View_I179_753_150_618} />
          <View style={styles.View_I179_753_150_619} />
          <View style={styles.View_I179_753_150_620} />
          <View style={styles.View_I179_753_150_621} />
          <View style={styles.View_I179_753_150_622} />
        </View>
        <View style={styles.View_I179_753_150_614} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_187_248: {
    width: 375,
    minWidth: 375,
    height: 650,
    minHeight: 650,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_179_829: {
    flexGrow: 1,
    width: 375,
    height: 161,
    minHeight: 161,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_186_1548: {
    width: 342,
    minWidth: 342,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 128
  },
  View_186_1490: {
    width: 21,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_186_1490: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_1491: {
    width: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 0
  },
  Text_186_1491: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_1492: {
    width: 21,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 0
  },
  Text_186_1492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_1493: {
    width: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 167,
    top: 0
  },
  Text_186_1493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_1494: {
    width: 14,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 221,
    top: 0
  },
  Text_186_1494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_1495: {
    width: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    top: 0
  },
  Text_186_1495: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_1496: {
    width: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 0
  },
  Text_186_1496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_38: {
    width: 338,
    minWidth: 338,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 193
  },
  View_187_40: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_187_40: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_42: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 0
  },
  Text_187_42: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_44: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 0
  },
  Text_187_44: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_46: {
    width: 7,
    minWidth: 7,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 0
  },
  Text_187_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_48: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227,
    top: 0
  },
  Text_187_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_50: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 0
  },
  Text_187_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_51: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 329,
    top: 0
  },
  Text_187_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_83: {
    width: 335,
    minWidth: 335,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 250
  },
  View_187_84: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_187_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_85: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 0
  },
  Text_187_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_86: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_187_86: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_87: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 0
  },
  Text_187_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_88: {
    width: 9,
    minWidth: 9,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 0
  },
  Text_187_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_89: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 0
  },
  Text_187_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_90: {
    width: 14,
    minWidth: 14,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 321,
    top: 0
  },
  Text_187_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_91: {
    width: 339,
    minWidth: 339,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 307
  },
  View_187_92: {
    width: 15,
    minWidth: 15,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_187_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_93: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 0
  },
  Text_187_93: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_94: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118,
    top: 0
  },
  Text_187_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_95: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 0
  },
  Text_187_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_96: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 221,
    top: 0
  },
  Text_187_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_97: {
    width: 15,
    minWidth: 15,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 0
  },
  Text_187_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_98: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 0
  },
  Text_187_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_99: {
    width: 341,
    minWidth: 341,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 364
  },
  View_187_100: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_187_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_101: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 0
  },
  Text_187_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_102: {
    width: 15,
    minWidth: 15,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 0
  },
  Text_187_102: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_103: {
    width: 17,
    minWidth: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 0
  },
  Text_187_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_104: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 221,
    top: 0
  },
  Text_187_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_105: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 272,
    top: 0
  },
  Text_187_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_106: {
    width: 17,
    minWidth: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 0
  },
  Text_187_106: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_107: {
    width: 337,
    minWidth: 337,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 413
  },
  View_187_108: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_187_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_109: {
    width: 17,
    minWidth: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 0
  },
  Text_187_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_110: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_187_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_111: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 0
  },
  Text_187_111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_112: {
    width: 18,
    minWidth: 18,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 0
  },
  Text_187_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_113: {
    width: 16,
    minWidth: 16,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 274,
    top: 0
  },
  Text_187_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_115: {
    width: 7,
    minWidth: 7,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 330,
    top: 0
  },
  Text_187_115: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_187_249: {
    width: 343,
    minWidth: 343,
    height: 188,
    minHeight: 188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 462
  },
  View_187_116: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I187_116_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I187_116_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_116_179_617: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 0
  },
  Text_I187_116_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I187_116_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I187_116_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_187_121: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 51,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I187_121_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I187_121_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_121_179_617: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 0
  },
  Text_I187_121_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I187_121_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I187_121_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_187_126: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 102,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I187_126_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I187_126_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_126_179_617: {
    flexGrow: 1,
    width: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297,
    top: 0
  },
  Text_I187_126_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I187_126_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I187_126_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_187_131: {
    width: 343,
    minWidth: 343,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 153,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I187_131_179_605: {
    flexGrow: 1,
    width: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0
  },
  Text_I187_131_179_605: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I187_131_179_617: {
    flexGrow: 1,
    width: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 0
  },
  Text_I187_131_179_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I187_131_179_606: {
    flexGrow: 1,
    width: 343,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 35
  },
  ImageBackground_I187_131_179_608: {
    flexGrow: 1,
    width: 16,
    height: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  View_179_751: {
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
  View_I179_751_144_356: {
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
  ImageBackground_I179_751_144_356_144_381: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I179_751_144_356_144_386: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 11.336018562316895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 17.3306884765625
  },
  ImageBackground_I179_751_144_356_144_387: {
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
  ImageBackground_I179_751_144_356_144_391: {
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
  ImageBackground_I179_751_144_356_144_395: {
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
  ImageBackground_I179_751_144_356_144_400: {
    flexGrow: 1,
    width: 28.42616844177246,
    height: 11.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.45361328125,
    top: 17.16748046875
  },
  View_179_752: {
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
  View_I179_752_144_2323: {
    flexGrow: 1,
    width: 92,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 0
  },
  Text_I179_752_144_2323: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_753: {
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
  View_I179_753_150_580: {
    flexGrow: 1,
    width: 375,
    height: 83,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.5
  },
  View_I179_753_150_581: {
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
  View_I179_753_150_582: {
    width: 134,
    height: 5,
    top: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120
  },
  View_I179_753_150_583: {
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
  View_I179_753_150_584: {
    flexGrow: 1,
    width: 320,
    height: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 15
  },
  View_I179_753_150_618: {
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
  View_I179_753_150_619: {
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
  View_I179_753_150_620: {
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
  View_I179_753_150_621: {
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
  View_I179_753_150_622: {
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
  View_I179_753_150_614: {
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
