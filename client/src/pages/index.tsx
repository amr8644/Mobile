import * as React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Card from "@/components/Card";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";

function Home({ messages }: any) {
   const router = useRouter();
   const [message, setMessage] = React.useState("");
   const [history, setHistory] = React.useState<any>([]);

   const handleSubmit = (e: any) => {
      try {
         e.preventDefault();
         let socket = new WebSocket("ws://localhost:8000/ws");
         socket.onopen = () => {
            console.log("Success");
            socket.send(message);
            setHistory((history: any) => [...history, message]);
         };
         socket.onmessage = (msg) => {
            console.log(msg);
         };
         socket.onerror = (error) => {
            console.log("Error: ", error);
         };
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <Navigation />
         <Container>
            <Box>
               <Card messages={history} />
               {/* <h1>{message}</h1> */}
            </Box>
            <Box
               component={"div"}
               style={{ display: "flex", flexDirection: "row" }}
            >
               <form onSubmit={handleSubmit}>
                  <TextField
                     label={"Message"}
                     id="outlined-required"
                     onChange={(e: any) => setMessage(e.target.value)}
                  />
                  <Button type="submit">Send Message</Button>
               </form>
            </Box>
         </Container>
      </>
   );
}

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//    const response = await axios.get("http://localhost:8000/get-msg", {
//       headers: {
//          "Access-Control-Allow-Origin": "*",
//       },
//    });

//    return {
//       props: {
//          messages: response.data,
//       },
//    };
// };
export default Home;
