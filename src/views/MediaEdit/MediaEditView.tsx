import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import MediaInterface from '../../constants/interfaces/Media';
import { dateConverter } from '../../utilities/date';

interface IProps {
  currentMedia: MediaInterface;
  handleAddTag: () => void;
  handleSetNewTag: (event: any) => void;
}

const MediaEditView: FC<IProps> = ({ currentMedia, handleAddTag, handleSetNewTag }) => {
  const {title, date, tags} = currentMedia;
  return (
    <div className="media-edit-view">
      <h1>{title}</h1>
      <p>{dateConverter(date as number)}</p>
      <p><b>Mots-clefs</b></p>
      <div className="add-url">
        <Button onClick={handleAddTag}>Ajouter Media</Button>
        <input onChange={(event) => handleSetNewTag(event)}  />
      </div>
      {
        tags ?
        <ul>
          {
            tags.map(tag => (
                <li>{tag}</li>
            ))
          }
        </ul>
        : 'Aucun mot clef à afficher'
      }
      
    </div>
  )
};

export default MediaEditView;