import { FC } from 'react';
import './ButtonAddToFavorites.scss';
import classNames from 'classnames';
import favouriteIcon from '../../assets-ui/favourites.svg';
import favouriteIconFilled from '../../assets-ui/favourites-filled.svg';

interface Props {
  addedToFavourites: boolean;
}

export const ButtonAddToFavorites: FC<Props> = ({ addedToFavourites }) => {
  return (
    <button
      type="button"
      className={classNames('icon', {
        'icon--added-to-fav': addedToFavourites,
      })}
    >
      <img
        className={classNames('icon__favourite', {
          'icon__favourite--hide': addedToFavourites,
        })}
        src={favouriteIcon}
        alt="icon heart"
      />
      <img
        className={classNames('icon__favourite-filled', {
          'icon__favourite-filled--show': addedToFavourites,
        })}
        src={favouriteIconFilled}
        alt="icon heart"
      />
    </button>
  );
};
