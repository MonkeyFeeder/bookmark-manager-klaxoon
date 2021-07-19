import React, { ChangeEvent, FC } from "react";
import { Button } from "react-bootstrap";
import { MediaInterface } from "../../constants/interfaces/Media";
import { dateConverter } from "../../utilities/date";

interface IProps {
  currentMedia: MediaInterface;
  handleAddTag: () => void;
  handleSetNewTag: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteTag: (tagId: string) => void;
  handleChangeTag: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MediaEditView: FC<IProps> = ({
  currentMedia,
  handleAddTag,
  handleSetNewTag,
  handleDeleteTag,
  handleChangeTag,
}) => {
  const { title, date, tags } = currentMedia;

  return (
    <div className="media-edit-view">
      <h1>{title}</h1>
      <p>{dateConverter(date as number)}</p>
      <p>
        <b>Mots-clefs</b>
      </p>
      <p>
        <em>
          Pour modifier un mot-clef, modifier le champ de texte directement, il
          est modifié automatiquement
        </em>
      </p>
      <div className="add-url">
        <Button onClick={handleAddTag}>Ajouter un Mot Clef</Button>
        <input onChange={(event) => handleSetNewTag(event)} />
      </div>
      {
        <div className="taglist-wrapper">
          {tags.map((tag) => (
            <div className="item" key={tag.id}>
              {/* L'ID du tag se trouve dans le data-id pour pouvoir identifier le mot clef à modifier dans MediaEditContainer */}
              <input
                type="text"
                data-id={tag.id}
                defaultValue={tag.name}
                onChange={(event) => handleChangeTag(event)}
              />
              <Button
                variant="danger"
                onClick={() => handleDeleteTag(tag.id as string)}
              >
                Supprimer
              </Button>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default MediaEditView;
