/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.taskpen.app",
  appName: "TaskPen",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {}
  }

  // remove when building for production
  // ,server: {
  //   url: "http://192.168.121.233:3000",
  //   cleartext: true
  // }
};

export default config;
