import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../view";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
    </JournalLayout>
  );
};
