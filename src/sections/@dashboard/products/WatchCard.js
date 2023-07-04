import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@mui/material';

const WatchCard = ({ item }) => 
{
  const a = 1;

  return (
    <div style={styles.Container}>
      <img src={item.image} alt="Watch" style={styles.AddImage} />
      <div
        className="linear-gradient"
        style={{
          height: '18%',
          width: '45%',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <div style={styles.cardContent}>
          <p style={styles.watchName}>{item.watchName}</p>
          <p style={styles.price}>${item.price}</p>
          <div style={styles.dateContainer}>
            <p style={styles.date}>{item.date}, {item.time}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

WatchCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    watchName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default WatchCard;

const styles = {
  Container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(31, 28, 28, 0.2)',
    borderRadius: 8,
    marginBottom: '3%',
    margin: '2%',
  },
  AddImage: {
    height: '60%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: 8,
  },
  cardContent: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    padding: '10px',
  },
  watchName: {
    fontSize: '1.6rem',
    marginBottom: '1%',
  },
  price: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '1% 0',
  },
  date: {
    color: '#989898',
    fontSize: '1.4rem',
    fontFamily: 'Poppins-Light',
    marginLeft: '2px',
  },
};
