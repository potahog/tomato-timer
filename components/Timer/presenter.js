import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

export default class Timer extends Component {
  componentDidUpdate(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      // Start the interval]
      clearInterval(this.state.timeInterval);
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      const timeInterval = setInterval(() => {
        currentProps.addSeconds();
      }, 1000);
      this.setState({
        timeInterval
      });
    }
  }
  render() {
    console.log(this.props);
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSeconds
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && (
            <Button
              iconName="play-circle"
              onPress={() => {
                startTimer();
              }}
            />
          )}
          {isPlaying && (
            <Button
              iconName="stop-circle"
              onPress={() => {
                restartTimer();
              }}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});
