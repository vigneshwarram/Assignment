import React from "react";
import { View } from "react-native";
import ProductStyles from "../Styles/ProductStyles";
import SkeletonLoader from "expo-skeleton-loader";
const LoaderScreen = () => {
  const AvatarLayout = ({ style }) => (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={[{ flex: 1, flexDirection: "row" }, style]}
      >
        <SkeletonLoader.Container style={{ paddingVertical: 10 }}>
          <SkeletonLoader.Item style={{ width: 300, height: 20 }} />
        </SkeletonLoader.Container>
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
  const numberOfPosts = new Array(3).fill(null);
  const PostLayout = () => (
    <SkeletonLoader
      duration={1000}
      boneColor={"#ffffff"}
      highlightColor={"#f0f0f0"}
      style={{ marginVertical: 10 }}
    >
      <AvatarLayout style={{ marginBottom: 10 }} />

      <SkeletonLoader.Item
        style={{
          width: 350,
          height: 150,
          marginVertical: 10,
          marginHorizontal: 30,
        }}
      />
    </SkeletonLoader>
  );
  return (
    <View style={ProductStyles.container}>
      <View style={{ marginTop: 100 }}></View>
      {numberOfPosts.map((_, i) => (
        <PostLayout key={i} />
      ))}
    </View>
  );
};
export default LoaderScreen;
