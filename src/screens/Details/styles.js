import { Dimensions } from "react-native";
import { scale, ScaledSheet, verticalScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import sizeHelper from "../../assets/helpers/sizeHelper";
import { SFCompact } from "../../utils/Fonts";
const { height, width } = Dimensions.get("window");
export const styles = ScaledSheet.create({
  flex: {
    height: 300,
    width: 400,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },

  iconContainer: {
    backgroundColor: "#D9D9D9",
    marginHorizontal: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },

  textContainer: {
    backgroundColor: "transparent",
    padding: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  sBox: {
    height: 30,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: { height: 35, width: 35 },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 5,
  },
  tagBody: {
    marginHorizontal: 10,
    height: 30,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  tagName: {
    fontSize: 12,
    color: colors.black,
    fontFamily: SFCompact.regular,
  },
});
