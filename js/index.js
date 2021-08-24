import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import { Navigation } from 'react-native-navigation';

class ARView extends React.Component{
    render(){
        const screen    = this.props.screen;
        return(
            <ViroARSceneNavigator
                autofocus={true}
                initialScene={{
                    scene: screen,
                }}
                style={styles.container}
            />
        )
    }
}

export default ARView;

var styles = StyleSheet.create({
  container: {
      flex: 1
  }
});