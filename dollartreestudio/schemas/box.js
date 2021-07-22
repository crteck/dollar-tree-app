export default {

name: "box",

title: "Box",

type: "document",

fields: [
    {
     name: "name",

     title: "BoxName",

     type: "string" 
    },
    {
     name: "BoxEndpoint",
   
     title: "BoxEndpoint",
   
     type: "image", 

     options: {
         hotspot: true,
     }
    },
    {
    name: "BoxTag",
      
    title: "BoxTag",
      
    type: "image",

    options: {
        hotspot: true,
    }
    },
    {
    name: "bio",
   
    title: "BoxBio",
   
    type: "array",

    of: [
        {
         title: "Block",

         type: "block",

         styles: [{title: "Normal", value: "normal"}],
        }

      ],

    },

  ],

};
