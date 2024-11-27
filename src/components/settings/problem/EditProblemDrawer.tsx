import { ProblemModel } from "@/lib/models/problem.model";
import { useDisclosure } from "@mantine/hooks";
import ProblemDrawer from "./ProblemDrawer";
import { IconEdit } from "@tabler/icons-react";
import IproButton from "@/components/core/IproButton";

const EditProblemDrawer = ({ selectedProblem }: { selectedProblem: ProblemModel }) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <ProblemDrawer
        title="Edit Issue Info"
        selectedProblem={selectedProblem}
        opened={opened}
        close={close}
      />
      <IproButton variant="subtle" isIconOnly onClick={open}>
        <IconEdit />
      </IproButton>
    </>
  );
};

export default EditProblemDrawer;
