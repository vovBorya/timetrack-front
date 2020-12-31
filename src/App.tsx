import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RootState} from "./store/rootReducer";
import {fetchWorks} from "./store/worksReducer/actions";

type Props = {
  works: IWork[],
  fetchWorks: () => void
};

const App: React.FC<Props> = ({works, fetchWorks}) => {

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <h1>Hello TS</h1>
  );
}

const mapStateToProps = (state: RootState) => ({
  works: state.works.works
});

const mapDispatchToProps = {
  fetchWorks
};

export default connect(mapStateToProps, mapDispatchToProps)(App);