import React, { Component } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Linking, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import ARBusinessCard from './js/ARBusinessCard';
import ARCarDemo from './js/ARCarDemo';
import ARDrivingCarDemo from './js/ARDrivingCarDemo';
import ARPhysicsSample from './js/ARPhysicsSample';
import ARPosterDemo from './js/ARPosterDemo';
//import ViroARSampleApp from './js/ViroARSampleApp';

const Views = [
  {index: 0, name: 'Business Card',   component: ARBusinessCard,    media: require('./assets/business_card.gif')},
  {index: 1, name: 'Car Demo',        component: ARCarDemo,         media: require('./assets/viro_car_marker_demo.gif')},
  {index: 2, name: 'Driving Car',     component: ARDrivingCarDemo,  media: require('./assets/ARDrivingCarDemo.gif')},
  {index: 3, name: 'Physics Sample',  component: ARPhysicsSample,   media: require('./assets/ar_sample.gif')},
  {index: 4, name: 'Poster Demo',     component: ARPosterDemo,      media: require('./assets/viro_black_panther_marker_demo.gif')},
  //{index: 5, name: 'Sample App', component: ViroARSampleApp}
];

class NavigationView extends Component{
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.navigate   = this.navigate.bind(this);
    this.footer     = this.footer.bind(this);
  }

  navigate = (screen, index, name) => {
    if(index == 2){
      Navigation.push(this.props.componentId, {
        component: {
          name: 'com.virocommunity.demo.ar.driving'
        }
      });
    }
    else{
      Navigation.push(this.props.componentId, {
        component: {
          name: 'com.virocommunity.demo.ar',
          passProps: {
            screen: screen
          },
          options: {
            topBar: {
              title: {
                text: name
              }
            }
          }
        }
      });
    }
  }

  renderItem = ({item}) => {
    return(
      <TouchableOpacity style={styles.renderItem} key={item.index} onPress={() => this.navigate(item.component, item.index, item.name)}>
        <Image source={item.media} style={styles.media}/>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  footer = () => {
    return(
      <View style={styles.discord}>
        <Button title="Join us at Discord" onPress={() => Linking.openURL('https://discord.gg/WWFwSQdCyF')}/>
      </View>
    );
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          data={Views}
          renderItem={this.renderItem}
          ListFooterComponent={this.footer}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  renderItem: {
    width: '50%',
    height: 200,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center'
  },
  media:{
    width: '100%',
    height: 150,
    resizeMode: 'contain'
  },
  discord: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});

export default NavigationView;