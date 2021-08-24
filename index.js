/**
 * @format
 */
 import { Navigation } from "react-native-navigation";
 import App from './App';
 import AR from './js';
 import ARDrivingCarDemo from './js/ARDrivingCarDemo';
 Navigation.registerComponent('com.virocommunity.demo.main', () => App);
 Navigation.registerComponent('com.virocommunity.demo.ar', () => AR);
 Navigation.registerComponent('com.virocommunity.demo.ar.driving', () => ARDrivingCarDemo);
 
 Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'com.virocommunity.demo.main',
                options: {
                  topBar: {
                    title: {
                      text: 'AR Demos'
                    }
                  }
                }
              }
            }
          ]
        }
      }
   });
 });