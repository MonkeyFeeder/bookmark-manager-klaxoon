import React from 'react';
import { MOCK_DATA } from '../../assets/MOCK_DATA';
import MediaInterface from '../../constants/interfaces/Media';
import LandingPageView from './LandingPageView';

const LandingPageContainer = () => {
  const MediaList: MediaInterface[] = MOCK_DATA;

  return <LandingPageView mediaList={MediaList} />
};

export default LandingPageContainer;