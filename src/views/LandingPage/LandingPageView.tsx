import React, { ChangeEvent, FC } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { MediaInterface } from "../../constants/interfaces/Media";

interface IProps {
  mediaList: MediaInterface[];
  handleAddMedia: () => Promise<void>;
  handleSetMedia: (event: ChangeEvent<HTMLInputElement>) => void;
  renderMedias: JSX.Element[];
  renderPageNumbers: JSX.Element[];
}

const LandingPageView: FC<IProps> = ({
  mediaList,
  handleAddMedia,
  handleSetMedia,
  renderMedias,
  renderPageNumbers,
}) => {
  return (
    <div className="landing-page-view">
      <div className="add-url">
        <Button onClick={handleAddMedia}>Ajouter Media</Button>
        <input onChange={(event) => handleSetMedia(event)} />
      </div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>URL</th>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Date</th>
              <th>Largeur</th>
              <th>Hauteur</th>
              <th>Durée</th>
              <th>Tags</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mediaList.length > 0 ? (
              renderMedias
            ) : (
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            )}
          </tbody>
        </Table>
        <div className="page-list">
          <ul>{renderPageNumbers}</ul>
        </div>
      </Container>
    </div>
  );
};

export default LandingPageView;
