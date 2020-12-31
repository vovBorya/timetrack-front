import React, {useEffect} from 'react';
import {RootState} from "../../store/rootReducer";
import {fetchWorks} from "../../store/worksReducer/actions";
import {connect} from "react-redux";
import './works-page.scss';

type Props = {
  works: IWork[],
  fetchWorks: () => void
}

const WorksPage: React.FC<Props> = ({works, fetchWorks}) => {

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <div className='jumbotron'>
      <h3 className='text-center'>My works</h3>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  works: state.works.works
});

const mapDispatchToProps = {
  fetchWorks
};

export default connect(mapStateToProps, mapDispatchToProps)(WorksPage);