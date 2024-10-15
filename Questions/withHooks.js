const withHooks=(Component)=>{

    const data={};
    const WrappeedComponet = <Component {...data}/>
    return(
        <WrappeedComponet/>
    )
}

//usage

const withDataFetching = (url) => (WrappedComponent) => {
    
  return (<WrappedComponent data={this.state.data} {...this.props} />);
    
  
};