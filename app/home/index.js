import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        {/* header */}
        <View styles={styles.header}>
            <Pressable>
                <Text styles={styles.title}>
                    Pixel Perfect
                </Text>
            </Pressable>
            <Pressable>
                <FontAwesome6 name="bars-staggered" size={22} color= {theme.colors.neutral(0.7)} />
            </Pressable>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        paddingTop: 30,

    },  
    header: {
        marginHorizontal: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: hp(4), 
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.black,
    },  
});
export default HomeScreen