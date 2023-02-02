import { Platform } from "react-native";
export const API_URL =
   Platform.OS === "ios"
      ? "http:// 192.168.1.106:8000"
      : "http://192.168.1.106:8000";
