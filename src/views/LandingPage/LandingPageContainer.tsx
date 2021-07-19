import React, { useState, ChangeEvent, FC, Dispatch, SetStateAction } from 'react';
import { MOCK_DATA } from '../../assets/MOCK_DATA';
import MediaInterface from '../../constants/interfaces/Media';
import LandingPageView from './LandingPageView';
import { dateConverter, secondConverter } from '../../utilities/date';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
  mediaList: MediaInterface[];
  setMediaList: Dispatch<SetStateAction<MediaInterface[]>>;
}

const LandingPageContainer: FC<IProps> = ({ mediaList, setMediaList }) => {
  let xhr = new XMLHttpRequest();
  const [currentPage, setCurrentPage] = useState(1);
  const [todoPerPage, setTodoPerPage] = useState(3);
  const [mediaUrl, setMediaUrl] = useState('');

  // Code pour la pagination
  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const currentTodos = mediaList.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(mediaList.length / todoPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderMedias = currentTodos.map((media: MediaInterface) => {
    const {id, url, title, date, author, width, height, duration, tags} = media;

    return (
      <tr key={id}>
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
        {console.log(tags)}
        {tags ? 
          <th>{tags.join(', ')}</th>
          : <th></th>
        }
        <th>
          <Button><Link to={`/edit/${id}`}>Edit</Link></Button>
          <Button variant="danger" onClick={() => handleDelete(id as number)}>Delete</Button>
        </th>
      </tr>
    );
  });

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number as unknown as string}
        onClick={() => handleClickPagination(number)}
      >
        {number}
      </li>
    );
  });
  // Fin du code pour la pagination

  const handleAddMedia = async () => {
    const urlToFetch = 'https://noembed.com/embed?url=' + mediaUrl;

    fetch(urlToFetch)
    .then(resp => resp.json())
    .then(mediaData => {
      if(mediaData.provider_name === 'Vimeo') {
        const {author_name, height, width, title, duration} = mediaData;
        mediaList.push()
        setMediaList([...mediaList, {
          height,
          width,
          title,
          duration,
          // Génère un ID entre 1 et 10000, pour un petit projet, ça devrait être suffisant pour ne pas avoir 2 id identiques
          id: Math.floor(Math.random() * 10000),
          author: author_name,
          date: new Date().getTime()/1000,
          url: mediaUrl,
          tags: [],
        }])
      } else {
        const {author_name, height, width, title} = mediaData;
        setMediaList([...mediaList, {
          height,
          width,
          title,
          id: Math.floor(Math.random() * 10000),
          author: author_name,
          date: new Date().getTime()/1000,
          url: mediaUrl,
          tags: [],
        }])
      }
    })
  }
  
  const handleDelete = (id: number) => {
    const newMediaList = mediaList.filter((media: MediaInterface) => {
      return media.id !== id;
    });

    setMediaList(newMediaList);
  }

  const handleSetMedia = (event: ChangeEvent<HTMLInputElement>) => {
    setMediaUrl(event.target.value);
  }

  const handleClickPagination = (pageToSet: number) => {
    setCurrentPage(pageToSet);
  }

  return <LandingPageView mediaList={mediaList} handleAddMedia={handleAddMedia} handleSetMedia={handleSetMedia} renderMedias={renderMedias} renderPageNumbers={renderPageNumbers} />
};

export default LandingPageContainer;