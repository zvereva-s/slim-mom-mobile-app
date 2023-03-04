import * as Device from "expo-device";

export default function useDevice() {
  const OS = Device.osName;

  return { OS };
}
