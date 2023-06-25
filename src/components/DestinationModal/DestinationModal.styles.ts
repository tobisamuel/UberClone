import styled from "@emotion/native";
import { Dimensions, FlatList } from "react-native";
import { scale } from "react-native-size-matters";

export const StyledFlatlist = styled.FlatList({}) as unknown as typeof FlatList;

export const Container = styled.View({
  width: Dimensions.get("window").width - scale(50),
  alignSelf: "center",
});

export const HContainer = styled.View({
  flexDirection: "row",
  width: Dimensions.get("window").width - scale(50),
});

export const DisabledInput = styled.TextInput(({ theme }) => ({
  minHeight: scale(30),
  width: "100%",
  paddingHorizontal: scale(5),
  backgroundColor: theme.colors.disabled,
}));

export const InputsContainer = styled.View({
  flex: 1,
});

export const Input = styled.TextInput(({ theme }) => ({
  minHeight: scale(30),
  width: "100%",
  paddingHorizontal: scale(5),
  backgroundColor: theme.colors.active,
}));

export const DecoratorCircle = styled.View(({ theme }) => ({
  width: scale(7),
  height: scale(7),
  borderRadius: scale(7 / 2),
  backgroundColor: theme.colors.disabled,
}));

export const DecoratorLine = styled.View(({ theme }) => ({
  width: scale(1),
  flex: 1,
  marginVertical: scale(10),
  backgroundColor: theme.colors.active,
}));

export const DecoratorSquare = styled.View(({ theme }) => ({
  width: scale(7),
  height: scale(7),
  backgroundColor: theme.colors.active,
}));

export const DecoratorContainer = styled.View({
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: scale(8),
});
