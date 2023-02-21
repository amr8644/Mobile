import { useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Card from "@/components/Card";

function Home({ messages }: any) {
   const [message, setMessage] = useState("");
   const handleSubmit = (e: any) => {
      e.preventDefault();
      let socket = new WebSocket("ws://localhost:8000/ws");
      socket.onopen = () => {
         console.log("Success");
         socket.send(message);
      };
      socket.onmessage = (msg) => {
         console.log(msg);
      };
      socket.onerror = (error) => {
         console.log("Error: ", error);
      };
   };

   return (
      <>
         <Card messages={messages} />
         <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
               <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                     <div>
                        <label htmlFor="Message" className="sr-only">
                           Message
                        </label>
                        <input
                           onChange={(e: any) => setMessage(e.target.value)}
                           id="Message"
                           name="Message"
                           type="Message"
                           autoComplete="current-Message"
                           required
                           className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                           placeholder="Message"
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                     >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                        Send
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
   const response = await axios.get("http://localhost:8000/get-msg", {
      headers: {
         "Access-Control-Allow-Origin": "*",
      },
   });

   return {
      props: {
         messages: response.data,
      },
   };
};
export default Home;
