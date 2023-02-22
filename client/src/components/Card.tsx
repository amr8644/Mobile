import {
   Avatar,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   ListSubheader,
} from "@mui/material";
import React from "react";

const Card = ({ messages }: any) => {
   return (
      <>
         <List sx={{ mb: 2 }}>
            {messages?.map((e: any) => {
               return (
                  <>
                     <ListItem button>
                        <ListItemAvatar>
                           <Avatar alt="Profile Picture" />
                        </ListItemAvatar>
                        <ListItemText
                           primary={e}
                           // secondary={secondary}
                        />
                     </ListItem>
                  </>
               );
            })}
         </List>
      </>
   );
};

export default Card;
