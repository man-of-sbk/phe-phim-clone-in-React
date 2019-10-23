/**
 *
 * LgMovieList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import LazyPercentageCircle from 'components/LazyPercentageCircle/index';
import { subStr } from 'utils/subStr';
import { slideSettings } from './config';

import Wrapper from './styledComponents/Wrapper';

function LgMovieList({ movies, title }) {
  return (
    <Wrapper title={title}>
      {/* put 'movies &&' here, not in .map() below to initiate <Slider> whenever 'movies' is changed,
      just as when we need to refresh slickjs in application running with pure js when we want to
      update items inside that slickjs slider. */}
      {movies && (
        <Slider {...slideSettings}>
          {movies.map(movie => (
            <div className="list-item-container" key={movie.id}>
              <div className="movie-item">
                <LazyPercentageCircle value={movie.vote_average * 10} />
                <img
                  className="movie-banner"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{subStr(movie.title, 6)}</h3>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </Wrapper>
  );
}

LgMovieList.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default LgMovieList;
