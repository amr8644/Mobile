import React from "react";

const Card = ({ messages }: any) => {
   return (
      <>
         {messages?.map((e: any) => {
            const { messages, channel_id } = e;
            return (
               <>
                  <a
                     href="#"
                     className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                     <p className="font-normal text-gray-700 dark:text-gray-400">
                        {messages["String"]}
                     </p>
                  </a>
               </>
            );
         })}
      </>
   );
};

export default Card;
