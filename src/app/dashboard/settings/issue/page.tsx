import IssueList from "@/components/settings/problem/ProblemList";
import { getProblemListApi } from "@/lib/services/api/problem.service";

const IssuePage = async () => {
  const result = await getProblemListApi();
  return <IssueList issues={result} />;
};

export default IssuePage;
