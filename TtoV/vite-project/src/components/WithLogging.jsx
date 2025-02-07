const WithLogging = (WrappedComponent) => {
    return (props) => {
      console.log('Component rendered');
      return <WrappedComponent {...props} />;
    };
  };
  
  export default WithLogging;
  