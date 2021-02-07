import React, {useEffect} from 'react';
import {RootState} from "../../store/rootReducer";
import {fetchWorks} from "../../store/worksReducer/actions";
import {connect} from "react-redux";
import './works-page.scss';
import WorkList from "../../components/work-list";
import {ListItem} from '@material-ui/core';
import Loader from "../../components/loader";
import { Link } from 'react-router-dom';
import WorkDetails from "../../components/work-details";
import {RouteComponentProps, withRouter} from "react-router-dom";
import NoItemsBox from "../../components/no-items-box";

type PathParamsType = {
  id: string
};

type Props = RouteComponentProps<PathParamsType> & {
  works: IWork[],
  loading: boolean
  fetchWorks: () => void
}

const WorksPage: React.FC<Props> = ({
                                      works,
                                      match,
                                      loading,
                                      fetchWorks
                                    }) => {

  useEffect(() => {
    fetchWorks();
  }, []);

  const work = works.find(item => item.id === parseInt(match.params.id));

  return (
    <div className='jumbotron works-page row'>
      {loading && <div className='col-12'><Loader/></div>}
      {!loading && (
        <>
          <h3 className='text-center col-12'>My works</h3>
          <WorkDetails work={work}/>
          <WorkList className='works-page__list' list={works}>
            {({id, description}) => (
              <Link to={`/works/${id}`}>
                <ListItem
                  button={true}
                  key={id}
                >
                  {description}
                </ListItem>
              </Link>
            )}
          </WorkList>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  works: state.works.works,
  loading: state.works.loading
});

const mapDispatchToProps = {
  fetchWorks
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorksPage));