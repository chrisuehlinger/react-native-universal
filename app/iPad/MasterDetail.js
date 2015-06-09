'use strict';

var React = require('react-native');
var ContactList = require('../ContactList');
var ContactDetail = require('../ContactDetail');
var Viewport = require('react-native-viewport');
var {
  StyleSheet,
  View
} = React;

var MasterDetail = React.createClass({
  getInitialState: function() {
    return {
      list: this.props.list,
      selected: this.props.list[0],
      styles: styles
    };
  },

  setSelected: function(contact) {
    this.setState({ selected: contact });
  },
  
//  componentWillMount: function(){
//    Viewport.addEventListener(Viewport.events.DEVICE_DIMENSIONS_EVENT, this.changeDimensions);
//  },
//  
//  componentWillUnmount: function(){
//    Viewport.removeEventListener(Viewport.events.DEVICE_DIMENSIONS_EVENT, this.changeDimensions);
//  },
//  
//  changeDimensions: function(dimensions){
//    styles.screen.height = dimensions.height;
//    styles.screen.width = dimensions.width;
//    this.setState({
//      styles:styles
//    });
//  },

  render: function() {
    return (
      <View style={this.state.styles.screen}>
        <View style={this.state.styles.master}>
          <ContactList contacts={this.state.list} setContact={this.setSelected}/>
        </View>
        <View style={this.state.styles.detail}>
          <ContactDetail contact={this.state.selected}/>
        </View>
      </View>
    );
  }
});

var MASTER_WIDTH = 320;
var styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    position:'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  master: {
    width: MASTER_WIDTH,
    paddingTop: 30,
    top: 0,
    bottom: 0
  },
  detail: {
    flex: 1,
    padding: 20
  }
});

//Viewport.getDimensions(function(dimensions){
//  styles.screen.height = dimensions.height;
//  styles.screen.width = dimensions.width;
//});

module.exports = MasterDetail;
