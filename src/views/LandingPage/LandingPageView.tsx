import React, { FC } from 'react';
import { Container, Table } from 'react-bootstrap';
import MediaInterface from '../../constants/interfaces/Media';
import { dateConverter, secondConverter } from '../../utilities/date';

import './LandingPage.css';

interface IProps {
  mediaList: MediaInterface[];
}

const LandingPageView: FC<IProps> = ({ mediaList }) => {
  return (
    <div className="landing-page-view">
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
            </tr>
          </thead>
          <tbody>
            {mediaList.map((media: MediaInterface) => {
              console.log(media);
              const {id, url, title, date, author, width, height, duration, tags} = media;

              return (
                <tr>
                  <th>{url}</th>
                  <th>{title}</th>
                  <th>{author}</th>
                  <th>{dateConverter(date as number)}</th>
                  {width ? 
                    <th>{width}</th>
                    : <th></th>
                  }
                  {height ? 
                    <th>{height}</th>
                    : <th></th>
                  }
                  {
                    duration ?
                    <th>{secondConverter(duration)}s</th>
                    : <th></th>
                  }
                  {tags ? 
                    <th>{tags.join(', ')}</th>
                    : <th></th>
                  }
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  )
};

export default LandingPageView;