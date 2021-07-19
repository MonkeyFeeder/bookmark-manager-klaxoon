import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { MediaInterface, Tag } from "../../constants/interfaces/Media";
import MediaEditView from "./MediaEditView";

interface IProps {
  mediaList: MediaInterface[];
  setMediaList: Dispatch<SetStateAction<MediaInterface[]>>;
}

const MediaEditContainer: FC<IProps> = ({ mediaList, setMediaList }) => {
  let { id } = useParams<{ id: string }>();
  const [newTag, setNewTag] = useState<string>("");
  const [currentMedia, setCurrentMedia] = useState<MediaInterface>({
    id: "",
    url: "",
    title: "",
    author: "",
    date: "",
    width: 0,
    height: 0,
    duration: 0,
    tags: [],
  });

  useEffect(() => {
    const media = mediaList.filter((media: MediaInterface) => {
      return media.id == (id as string);
    });

    setCurrentMedia(media[0]);
  }, []);

  const handleAddTag = () => {
    const newTagId = Math.floor(Math.random() * 10000);
    setCurrentMedia({
      ...currentMedia,
      tags: [
        ...currentMedia.tags,
        {
          id: newTagId,
          name: newTag,
        },
      ],
    });

    const mediaIndex = mediaList.findIndex((media) => {
      return media.id == id;
    });

    let changedMediaList = mediaList;

    changedMediaList[mediaIndex].tags = [
      ...changedMediaList[mediaIndex].tags,
      {
        id: newTagId,
        name: newTag,
      },
    ];

    setMediaList(changedMediaList);
  };

  const handleDeleteTag = (tagToRemove: string) => {
    let modifiedMediaTags = currentMedia.tags.filter((tag) => {
      return tag.id != tagToRemove;
    });

    setCurrentMedia({
      ...currentMedia,
      tags: modifiedMediaTags,
    });

    const mediaIndex = mediaList.findIndex((media) => {
      return media.id == id;
    });

    let changedMediaList = mediaList;

    changedMediaList[mediaIndex].tags = modifiedMediaTags;

    setMediaList(changedMediaList);
  };

  const handleChangeTag = (event: ChangeEvent<HTMLInputElement>) => {
    const idToChange = event.target.dataset.id;
    let modifiedMediaTags = currentMedia.tags;

    // Solution la plus simple et rapide à mon avis, bien que d'autres alternatives existent
    modifiedMediaTags.forEach((tag: Tag) => {
      if (tag.id == idToChange) {
        tag.name = event.target.value;
      }
    });

    setCurrentMedia({
      ...currentMedia,
      tags: modifiedMediaTags,
    });

    const mediaIndex = mediaList.findIndex((media) => {
      return media.id == currentMedia.id;
    });
    let modifiedMedialist = mediaList;

    modifiedMedialist[mediaIndex] = currentMedia;

    setMediaList(modifiedMedialist);
  };

  const handleSetNewTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
  };

  return (
    <MediaEditView
      handleAddTag={handleAddTag}
      handleSetNewTag={handleSetNewTag}
      currentMedia={currentMedia as MediaInterface}
      handleDeleteTag={handleDeleteTag}
      handleChangeTag={handleChangeTag}
    />
  );
};

export default MediaEditContainer;
