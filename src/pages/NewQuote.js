import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    
    //we use useHistory hook to navigate to the page we want
    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
