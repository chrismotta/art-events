import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import HeartRegular from '../icons/HeartRegular';
import HeartSolid from '../icons/HeartSolid';

const FavButton: FC<{isFav?: boolean; onPress: () => void}> = ({
  isFav = false,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isFav ? <HeartSolid /> : <HeartRegular />}
    </TouchableOpacity>
  );
};

export default FavButton;
