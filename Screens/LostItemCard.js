import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export default class LostItemCard extends Component {
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.itemContainer}>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onClaim(item)}  style={styles.claimButton}>
                        <Text style={styles.claimButtonText}>Claim</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      marginHorizontal: 20,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      elevation: 3,
    },
    itemContainer: {
      flexDirection: 'row',
      padding: 10,
    },
   
    descriptionContainer: {
      flex: 1,
    },
    title: {
      fontSize: RFValue(18),
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: RFValue(16),
    },
    claimButton: {
      backgroundColor: 'orange',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
  },
  claimButtonText: {
      color: 'white',
      fontWeight: 'bold',
  },
  });
  