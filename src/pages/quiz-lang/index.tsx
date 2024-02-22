import Loader from "../../shared/ui/loader";
import PageLayout from "../../shared/ui/page-layout/PageLayout";
import Progress from "../../shared/ui/progress";

const QuizLang = () => {
    return (
        <PageLayout>
            <Progress step={3} total={5} />
            <Loader />
        </PageLayout>
    );
};

export default QuizLang