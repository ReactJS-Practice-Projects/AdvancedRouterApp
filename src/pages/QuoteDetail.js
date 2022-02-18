import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  //here we use useRouteMatch hook to get router URL as an object consisting of multiple properties - path, urls, and params
  //path "/quotes/:quoteId" - gives us the path that we defined but not the actual path with parameter
  //url "/quotes/q2" - gives us the actual url with parameter 
  //with this properties we replace the path {'/quotes/${params.quoteId}/comments'} with {`${match.path}/comments`}
  //in order to inject parameter dynamically we use this syntax ${}
  //we also user ${match.url} to replace it in the link - '/quotes/${params.quoteId}/'
  //with the help of `${match.path} and ${match.url} we don't have to adjust routes manually in every component where it is reused  
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  //when we use Route component it allows us to display anything inside of it if it matches its route path 
  //in our case we display Link "Load Comments" if it matches the route `/quotes/${params.quoteId}/` 
  //we also use the word exact to match the full path instead of just the begining of the path
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      
      <Route path={match.path} exact>
        <div className='centered'>
          
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>

        </div>
      </Route>
      
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>

    </Fragment>
  );
};

export default QuoteDetail;
