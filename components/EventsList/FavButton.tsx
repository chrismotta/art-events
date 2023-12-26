import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import HeartRegular from '../svg/HeartRegular';
import HeartSolid from '../svg/HeartSolid';

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
