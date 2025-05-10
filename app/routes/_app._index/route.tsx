import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LeftArrowIcon, RightArrowIcon } from '~/Svgs';
import TrackSection from './_components/TrackSection';

type Podcast = {
  id: number;
  title: string;
  color: string;
};



export default function PodcastHomepage() {
  const [isLoading, setIsLoading] = useState(true);



  return (
    <div className="text-white px-4 py-4 md:px-10 md:py-8">
      <TrackSection isLoading={isLoading} setIsLoading={setIsLoading}/>
      <TrackSection isLoading={isLoading} setIsLoading={setIsLoading}/>
      <TrackSection isLoading={isLoading} setIsLoading={setIsLoading}/>
      <TrackSection isLoading={isLoading} setIsLoading={setIsLoading}/>

    </div>
  );
}