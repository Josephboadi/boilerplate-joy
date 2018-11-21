import React from 'react';


//import history from './../src/history';

//import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';


export default () => {
  return(
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard Page Content
      </div>
    </div>
  );
};

/*export default class Link extends React.Component{

  render(){
    return (
      <div>
        <PrivateHeader title="Your Links"/>
        <LinksList/>
        <AddLink/>
      </div>
    );
  }
}*/
