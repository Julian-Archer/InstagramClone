import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { container, text, utils } from '../../styles';

/**
 * UserProfile Component
 * 
 * A reusable component that displays a user's profile information including
 * their avatar and name.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.name - The user's display name
 * @param {string} props.avatar - The user's avatar image URI (or 'default' for default icon)
 * @returns {React.ReactElement} The rendered UserProfile component
 */
function UserProfile({ name, avatar }) {
  return (
    <View style={[container.container, utils.padding10Sides]}>
      <View style={[container.row, utils.justifyCenter]}>
        {/* Avatar Section */}
        <View style={[utils.justifyCenter, utils.marginBottomSmall]}>
          {avatar === 'default' ? (
            <FontAwesome5
              style={[utils.profileImageBig]}
              name="user-circle"
              size={80}
              color="black"
            />
          ) : (
            <Image
              style={[utils.profileImageBig]}
              source={{
                uri: avatar,
              }}
            />
          )}
        </View>
      </View>

      {/* Name Section */}
      <View style={[text.center, utils.justifyCenter]}>
        <Text style={[text.bold, text.large, text.center]}>
          {name || 'User'}
        </Text>
      </View>
    </View>
  );
}

export default UserProfile;
