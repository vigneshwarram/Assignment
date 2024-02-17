import React from "react";
import { View } from "react-native";
import ProductStyles from "../Styles/ProductStyles";
import SkeletonLoader from "expo-skeleton-loader";
import { Screens } from "../Styles/themes";
const LoaderScreen = () => {
  const AvatarLayout = ({ style }) => (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={[ProductStyles.containerRows, style]}
      >
        <SkeletonLoader.Container style={ProductStyles.pv10}>
          <SkeletonLoader.Item style={ProductStyles.w300} />
        </SkeletonLoader.Container>
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
  const numberOfPosts = new Array(3).fill(null);
  const PostLayout = () => (
    <SkeletonLoader
      duration={1000}
      boneColor={Screens.pureWhite}
      highlightColor={Screens.dull}
      style={{ marginVertical: 10 }}
    >
      <AvatarLayout style={{ marginBottom: 10 }} />

      <SkeletonLoader.Item
        style={ProductStyles.skeletonLoadderitem}
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
