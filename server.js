const express= require("express");
const path= require("path");
const livereload= require("livereload");
const connectLivereload = require("connect-livereload");

const app= express();


const liverReloadServer= livereload.createServer();
liverReloadServer.watch(path.join(__dirname, "public"));
liverReloadServer.server.once("connection", ()=>{
  setTimeout(()=>{
    liverReloadServer.refresh("/");

  },100)
});

app.use(connectLivereload());
app.use(express.static(path.join(__dirname, "public")));


app.get("/" ,(req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});



app.listen(process.env.port || 3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server Started on port ${process.env.port || 3000}`);

});