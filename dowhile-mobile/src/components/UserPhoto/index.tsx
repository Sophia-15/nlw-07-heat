import React from 'react';

import { Image, LinearGradientBorder } from './styles';
import avatar from '../../assets/avatar.png';

const SIZES = {
  small: {
    containerSize: 32,
    avatarSize: 28,
  },
  normal: {
    containerSize: 49,
    avatarSize: 42,
  },
};

interface UserPhotoProps {
  imageUri: string | undefined
  sizes?: 'small' | 'normal'
}

const defaultAvatar = Image.resolveAssetSource(avatar).uri;

export function UserPhoto({ imageUri, sizes = 'normal' }: UserPhotoProps) {
  const { containerSize, avatarSize } = SIZES[sizes];

  return (
    <LinearGradientBorder
      style={{
        width: containerSize,
        height: containerSize,
        borderRadius: containerSize / 2,
      }}
    >

      <Image
        source={{ uri: imageUri || defaultAvatar }}
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        }}
      />

    </LinearGradientBorder>
  );
}
