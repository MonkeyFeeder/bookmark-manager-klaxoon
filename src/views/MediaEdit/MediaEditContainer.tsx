import React, { Dispatch, FC, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MediaInterface from '../../constants/interfaces/Media';
import MediaEditView from './MediaEditView';

interface IProps {
  mediaList: MediaInterface[];
  setMediaList: Dispatch<SetStateAction<MediaInterface[]>>;
}

const MediaEditContainer: FC<IProps> = ({ mediaList, setMediaList }) => {
  let { id } = useParams<{id: string}>();
  const [newTag, setNewTag] = useState<string>('');
  const [currentMedia, setCurrentMedia] = useState<MediaInterface>({
    id: '',
    url: '',
    title: '',
    author: '',
    date: '',
    width: 0,
    height: 0,
    duration: 0,
    tags: [],
  });

  useEffect(() => {
    const media = mediaList.filter((media: MediaInterface) => {
      return media.id == id as string;
    })

    setCurrentMedia(media[0]);
  }, [])

  const handleAddTag = () => {
    setCurrentMedia({
      ...currentMedia,
      tags: [...currentMedia.tags, newTag]
    })

    const mediaIndex = mediaList.findIndex(media => {
      return media.id == id;
    });

    let changedMediaList = mediaList;

    changedMediaList[mediaIndex].tags = [...changedMediaList[mediaIndex].tags, newTag];

    setMediaList(changedMediaList)
  }

  const handleSetNewTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
  }

  return <MediaEditView handleAddTag={handleAddTag} handleSetNewTag={handleSetNewTag} currentMedia={currentMedia as MediaInterface} />
};

export default MediaEditContainer;