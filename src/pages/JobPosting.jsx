import styled from "styled-components";
import JobPostingPageTagSelect from "../componentes/JobPostingPageTagSelect";
import JobPostingPage from "../componentes/JobPostingPage";

//채용공고 페이지
const JobPosting = () => {
  return (
    <Wrap>
      <div className="inner">
        <JobPostingPageTagSelect />
        <JobPostingPage />
      </div>
    </Wrap>
  );
};

export default JobPosting;

const Wrap = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin: 0 auto;
  padding-top: 110px;

  .inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
`;
