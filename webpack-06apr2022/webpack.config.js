const path =require("path");
//import path from "path"


module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","dist"),
        filename:"main.js",

    },
    mode:'development',
    module:{
        rules:[
           
             {test:/\.css$/,use:["style-loader","css-loader"]},
             {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                   
                  },
                ],
              }
            
        ],
    },
};