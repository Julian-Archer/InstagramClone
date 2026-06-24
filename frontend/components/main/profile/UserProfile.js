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
 * @param {string} props.avatar - The URI of the user's avatar image. 
 *                                If 'default', displays a default user icon
 * @returns {React.ReactElement} The rendered UserProfile component
 * 
 * @example
 * // With custom avatar
 * <UserProfile 
 *   name="John Doe" 
 *   avatar="https://example.com/avatar.jpg" 
 * />
 * 
 * @example
 * // With default avatar
 * <UserProfile 
 *   name="Jane Smith" 
 *   avatar="default" 
 * />
 */
function UserProfile({ name, avatar }) {
  return (
    <View style={[container.container, container.horizontal, utils.padding10Sides]}>
      {/* Avatar Section */}
      <View style={[utils.marginRight15]}>
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

      {/* Name Section */}
      <View style={[utils.justifyCenter]}>
        <Text style={[text.bold, text.large]}>{name}</Text>
      </View>
    </View>
  );
}

export default UserProfile;
