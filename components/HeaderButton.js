import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';

const CustomHeaderButton = props => {
  return (
    <TouchableOpacity>
      <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={props.iconSize * 1}
        color={props.color}
      />
    </TouchableOpacity>
  );
};

export default CustomHeaderButton;
