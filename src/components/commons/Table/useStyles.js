import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
  createStyles({
    // Headers
    text: {
      fontSize: 15,
      margin: '5%',
      maxWidth: '157px',
      minxWidth: '157px',
    },
    row: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    // Rows
    products: {
      paddingBottom: '0.5rem',
      marginTop: '0.5rem',
    },
    sendButton: {
      maxHeight: '20px',
      minHeight: '20px',
      minWidth: '20px',
      maxWidth: '20px',
      margin: '4%',
    },
    rowItem: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
