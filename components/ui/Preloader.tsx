import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { styles, COLORS } from '../styles'
import { LOADER_POSITION } from '../../constants'

interface IProps {
  loaderPosition?: string
}

export const Preloader = ({ loaderPosition }: IProps ) => (
    <View style={loaderPosition === LOADER_POSITION.Bottom ? styles.preloader : styles.flex}>
      <ActivityIndicator size="large" color={COLORS.darkPurple} />
    </View>
)
