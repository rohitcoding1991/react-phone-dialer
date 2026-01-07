import React from "react";
import { Box, List, ListItem, ListItemText, ListSubheader, Typography, Avatar, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

interface Contact {
  id: string;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

interface ContactListProps {
  contacts?: Contact[];
  letters?: string[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts = [], letters }) => {
  const filteredLetters = letters?.filter((letter) =>
    contacts.some((contact) => contact.id === letter)
  );

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 345,
        "& ul": { padding: 0 },
        "&::-webkit-scrollbar": {
          width: "12px",
          backgroundColor: "#f5f5f5",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "6px",
          "&:hover": {
            backgroundColor: "#555",
          },
        },
      }}
      subheader={<li />}
    >
      {filteredLetters &&
        filteredLetters.map((letter) => (
          <li key={`section-${letter}`}>
            <ul>
              <ListSubheader className="bg-[--stone-500] !font-semibold !text-[--gray-700] !text-md">
                {`${letter}`}
              </ListSubheader>
              {contacts.filter((contact) => contact.id === letter).map((contact) => (
                <ListItem key={contact.id} className="!border-b !gap-3">
                  <Avatar>{contact.icon}</Avatar>
                  <ListItemText primary={contact.title} secondary={contact.subTitle} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      {contacts.length === 0 && (
        <Box className="!bg-[--gray-350] !flex !flex-col !py-5 !gap-3 !items-center">
          <PersonIcon className="!text-[--gray-100]"/>
          <Typography className="!text-[--gray-100] !text-lg !font-extrabold">Opss!</Typography>
          <Typography className="!text-[--gray-100] !text-base !font-extrabold" >Data is not found</Typography>
          <Button className="!text-black !text-xs">TRY AGAIN!</Button>
        </Box>
      )}
    </List>
  );
};

export default ContactList;
