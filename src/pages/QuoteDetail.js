import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();

  //instead of using dynamic route we could also use regular route 
  //path='/quotes/:quoteId/comments/'
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
